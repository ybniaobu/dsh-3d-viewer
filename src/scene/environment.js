import {
  DataTexture,
  EquirectangularReflectionMapping,
  PMREMGenerator,
  RGBAFormat,
} from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { decodeBase64 } from '../bytes.js';
import { HDRI_DATA_URLS } from '../generated/hdri-data.js';

/** Environment used when an unknown id is requested. */
export const DEFAULT_ENVIRONMENT = 'nature';

/** Per-environment IBL strength. */
export const ENVIRONMENT_INTENSITIES = Object.freeze({
  nature: 1.0,
  city: 1.0,
  indoor: 0.8,
  studio: 0.9,
});

/**
 * Resolve an environment id against the embedded HDRI map.
 *
 * @param {unknown} id Requested environment id.
 * @param {Record<string, string>} dataUrls Embedded data URLs.
 * @returns {string} A known environment id.
 */
export function normalizeEnvironmentId(id, dataUrls = HDRI_DATA_URLS) {
  return typeof id === 'string' && Object.hasOwn(dataUrls, id)
    ? id
    : DEFAULT_ENVIRONMENT;
}

/**
 * Decode the base64 payload of an embedded data URL.
 *
 * @param {unknown} dataUrl Embedded data URL.
 * @returns {ArrayBuffer | null} Decoded bytes, or null when the input is not a data URL.
 */
export function dataUrlToArrayBuffer(dataUrl) {
  if (typeof dataUrl !== 'string') return null;
  const comma = dataUrl.indexOf(',');
  if (comma < 0) return null;

  try {
    const bytes = decodeBase64(dataUrl.slice(comma + 1));
    // Reuse the decoder's buffer when it covers the whole payload; copying
    // multi-megabyte HDRIs is otherwise pure waste.
    return bytes.byteOffset === 0 && bytes.byteLength === bytes.buffer.byteLength
      ? bytes.buffer
      : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  } catch {
    return null;
  }
}

/**
 * Turn raw RGBE data into an equirectangular, non-mipmapped DataTexture.
 *
 * @param {ArrayBuffer} buffer Raw HDR bytes.
 * @param {HDRLoader} loader Reusable HDR parser.
 * @returns {DataTexture} Linear RGBE texture.
 */
export function createEquirectangularTexture(buffer, loader = new HDRLoader()) {
  const texData = loader.parse(buffer);
  const texture = new DataTexture(
    texData.data,
    texData.width,
    texData.height,
    RGBAFormat,
    texData.type,
  );
  texture.colorSpace = texData.colorSpace;
  texture.minFilter = texData.minFilter;
  texture.magFilter = texData.magFilter;
  texture.generateMipmaps = texData.generateMipmaps;
  texture.flipY = texData.flipY;
  texture.unpackAlignment = 1;
  texture.mapping = EquirectangularReflectionMapping;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Lazily build and cache PMREM environment maps for the embedded HDRIs.
 *
 * Only the environments the user selects are decoded; the first environment
 * is built on first use, and repeated selections reuse the cached target.
 *
 * @param {{
 *   renderer: import('three').WebGLRenderer,
 *   scene: import('three').Scene,
 *   dataUrls?: Record<string, string>,
 *   intensities?: Record<string, number>,
 * }} options Renderer, target scene, embedded HDRIs, and per-environment IBL strengths.
 * @returns {{
 *   set: (id: unknown) => boolean,
 *   dispose: () => void,
 *   readonly activeId: string | null,
 * }} Environment controls.
 */
export function createEnvironment({
  renderer,
  scene,
  dataUrls = HDRI_DATA_URLS,
  intensities = ENVIRONMENT_INTENSITIES,
}) {
  const targets = new Map();
  const loader = new HDRLoader();
  let pmremGenerator = null;
  let activeId = null;
  let disposed = false;

  function getPmremGenerator() {
    if (pmremGenerator === null) pmremGenerator = new PMREMGenerator(renderer);
    return pmremGenerator;
  }

  function buildTarget(id) {
    const dataUrl = dataUrls[id];
    if (typeof dataUrl !== 'string') return null;

    const buffer = dataUrlToArrayBuffer(dataUrl);
    if (buffer === null) return null;

    const texture = createEquirectangularTexture(buffer, loader);
    try {
      return getPmremGenerator().fromEquirectangular(texture);
    } finally {
      texture.dispose();
    }
  }

  function getTarget(id) {
    const cached = targets.get(id);
    if (cached !== undefined) return cached;

    let target = null;
    try {
      target = buildTarget(id);
    } catch (error) {
      console.warn(`[dsh-3d-viewer] Could not build the "${id}" environment.`, error);
    }

    if (target === null && id !== DEFAULT_ENVIRONMENT) {
      target = getTarget(DEFAULT_ENVIRONMENT);
    }
    if (target !== null) targets.set(id, target);
    return target;
  }

  function set(id) {
    if (disposed) return false;

    const next = normalizeEnvironmentId(id, dataUrls);
    if (next === activeId) return false;

    const target = getTarget(next);
    if (target === null) return false;

    scene.environment = target.texture;
    scene.environmentIntensity = intensities[next] ?? intensities[DEFAULT_ENVIRONMENT] ?? 1.0;
    activeId = next;
    return true;
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    activeId = null;
    scene.environment = null;

    for (const target of new Set(targets.values())) target.dispose();
    targets.clear();
    pmremGenerator?.dispose();
    pmremGenerator = null;
  }

  return {
    set,
    dispose,
    get activeId() {
      return activeId;
    },
  };
}
