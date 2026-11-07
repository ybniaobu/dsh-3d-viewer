import {
  DataTexture,
  EquirectangularReflectionMapping,
  PMREMGenerator,
  RGBAFormat,
} from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

/** Environment used when an unknown id is requested. */
export const DEFAULT_ENVIRONMENT = 'nature';

/** Environment ids in rail order; the packaged files are named `<id>.hdr`. */
export const ENVIRONMENT_IDS = Object.freeze(['nature', 'city', 'indoor', 'studio']);

/** Per-environment IBL strength. */
export const ENVIRONMENT_INTENSITIES = Object.freeze({
  nature: 1.2,
  city: 1.25,
  indoor: 0.95,
  studio: 1.1,
});

/**
 * Per-environment yaw, in radians, applied to the environment map sampling.
 *
 * `Scene.environmentRotation` rotates only the IBL contribution; the model,
 * grid, and key light keep their own orientation.
 */
export const ENVIRONMENT_ROTATIONS = Object.freeze({
  nature: 0,
  city: 0,
  indoor: Math.PI / 2,
  studio: 0,
});

/** Host route that serves the packaged `.hdr` files. Mirrors `index.js`. */
const HDRI_ROUTE = '/dsh-3d-viewer/hdri/';

/**
 * Package version, injected by `build.mjs` so an upgrade changes the URL.
 * The `typeof` guard keeps an unbuilt Node import (tests) from throwing.
 */
const VERSION = typeof __DSH3D_VIEWER_VERSION__ === 'string' ? __DSH3D_VIEWER_VERSION__ : 'dev';

/**
 * Resolve an environment id against the known environment list.
 *
 * @param {unknown} id Requested environment id.
 * @returns {string} A known environment id.
 */
export function normalizeEnvironmentId(id) {
  return typeof id === 'string' && Object.hasOwn(ENVIRONMENT_INTENSITIES, id)
    ? id
    : DEFAULT_ENVIRONMENT;
}

/**
 * Build the URL the host route serves one HDRI from.
 *
 * The route is registered on the same origin as the page, so an absolute path
 * is enough; the version query keeps a packaged upgrade from reusing a stale
 * immutable response.
 *
 * @param {string} id Environment id.
 * @returns {string} Absolute or same-origin URL.
 */
export function hdriUrl(id) {
  const origin = globalThis.location?.origin ?? 'http://localhost';
  const url = new URL(`${HDRI_ROUTE}${id}.hdr`, origin);
  url.searchParams.set('v', VERSION);
  return url.href;
}

/**
 * Fetch one packaged HDRI.
 *
 * The bytes come from the Host's read-only route, not from the client bundle:
 * this is what keeps the four 1024x512 HDRIs out of `client.js`.
 *
 * @param {string} id Environment id.
 * @returns {Promise<ArrayBuffer>} Raw `.hdr` bytes.
 */
async function fetchHdriBytes(id) {
  if (typeof fetch !== 'function') throw new Error('fetch is unavailable');

  const response = await fetch(hdriUrl(id), { credentials: 'same-origin' });
  if (!response.ok) {
    throw new Error(`The HDRI route answered HTTP ${response.status} for "${id}".`);
  }
  return response.arrayBuffer();
}

/** One shared byte promise per environment, so a viewer can start early. */
const bytePromises = new Map();

/**
 * Start fetching one HDRI before a renderer exists.
 *
 * The model read and parse run in parallel with this fetch; the eventual PMREM
 * build then starts with bytes already in memory. A failed fetch is evicted so
 * a later viewer can retry.
 *
 * @param {unknown} id Environment id.
 * @returns {Promise<ArrayBuffer>} Raw `.hdr` bytes.
 */
export function prefetchEnvironment(id) {
  const normalized = normalizeEnvironmentId(id);
  const cached = bytePromises.get(normalized);
  if (cached !== undefined) return cached;

  const task = fetchHdriBytes(normalized).catch((error) => {
    bytePromises.delete(normalized);
    throw error;
  });
  // The viewer may not attach its own handler until after parsing; keep an
  // early rejection from surfacing as an unhandled rejection.
  task.catch(() => {});

  bytePromises.set(normalized, task);
  return task;
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
 * Lazily fetch, decode, and prefilter the packaged HDRIs.
 *
 * Only the environments the user selects are built, and each finished PMREM is
 * cached by id. The first selection fetches its file over the Host route; a
 * failure logs a warning and leaves the scene without that environment instead
 * of failing the whole preview.
 *
 * @param {{
 *   renderer: import('three').WebGLRenderer,
 *   scene: import('three').Scene,
 *   intensities?: Record<string, number>,
 *   rotations?: Record<string, number>,
 *   onReady?: () => void,
 *   onError?: (error: unknown) => void,
 *   cache?: {
 *     targets: Map<string, import('three').WebGLRenderTarget>,
 *     pending: Map<string, Promise<import('three').WebGLRenderTarget | null>>,
 *     disposed: boolean,
 *   },
 *   fetchBytes?: (id: string) => Promise<ArrayBuffer>,
 *   createTarget?: (id: string, buffer: ArrayBuffer) => import('three').WebGLRenderTarget | null | Promise<import('three').WebGLRenderTarget | null>,
 * }} options Renderer, target scene, per-environment IBL strengths and yaw,
 * a notification for when a requested environment is applied or fails, an
 * optional cache shared with the renderer's other views, and optional
 * byte/target providers used by the lifecycle tests.
 * @returns {{
 *   set: (id: unknown) => boolean,
 *   dispose: () => void,
 *   readonly activeId: string | null,
 * }} Environment controls.
 */
export function createEnvironment({
  renderer,
  scene,
  intensities = ENVIRONMENT_INTENSITIES,
  rotations = ENVIRONMENT_ROTATIONS,
  onReady,
  onError,
  cache,
  fetchBytes = prefetchEnvironment,
  createTarget,
}) {
  const shared = cache;
  const targets = shared?.targets ?? new Map();
  const pending = shared?.pending ?? new Map();
  const ownsTargets = shared === undefined;
  const loader = new HDRLoader();
  let pmremGenerator = null;
  let activeId = null;
  let requestedId = null;
  let disposed = false;

  function getPmremGenerator() {
    if (pmremGenerator === null) pmremGenerator = new PMREMGenerator(renderer);
    return pmremGenerator;
  }

  function createPmremTarget(buffer) {
    const texture = createEquirectangularTexture(buffer, loader);
    try {
      return getPmremGenerator().fromEquirectangular(texture);
    } finally {
      texture.dispose();
    }
  }

  const buildFromBytes = createTarget ?? ((_id, buffer) => createPmremTarget(buffer));

  /**
   * Fetch and prefilter one environment. Resolves to null on disposal.
   *
   * @param {string} id Environment id.
   * @returns {Promise<import('three').WebGLRenderTarget | null>} PMREM target.
   */
  async function buildTarget(id) {
    const buffer = await fetchBytes(id);
    if (shared !== undefined ? shared.disposed : disposed) return null;

    return buildFromBytes(id, buffer);
  }

  /**
   * Return a cached target or start building one. Concurrent selections of the
   * same id share one fetch and one PMREM build.
   *
   * @param {string} id Environment id.
   * @returns {Promise<import('three').WebGLRenderTarget | null>} PMREM target.
   */
  function requestTarget(id) {
    if (shared !== undefined && shared.disposed) return Promise.resolve(null);

    const cached = targets.get(id);
    if (cached !== undefined) return Promise.resolve(cached);

    const inflight = pending.get(id);
    if (inflight !== undefined) return inflight;

    const task = buildTarget(id).then((target) => {
      pending.delete(id);
      if (target === null) return null;

      if (shared !== undefined) {
        if (shared.disposed) {
          target.dispose();
          return null;
        }
        const existing = targets.get(id);
        if (existing !== undefined) {
          target.dispose();
          return existing;
        }
        targets.set(id, target);
        return target;
      }

      if (disposed) {
        target.dispose();
        return null;
      }
      targets.set(id, target);
      return target;
    }, (error) => {
      pending.delete(id);
      if (shared !== undefined && shared.disposed) return null;
      console.warn(`[dsh-3d-viewer] Could not build the "${id}" environment.`, error);
      return null;
    });

    pending.set(id, task);
    return task;
  }

  /**
   * Apply one finished target to the scene.
   *
   * @param {string} id Environment id.
   * @param {import('three').WebGLRenderTarget} target PMREM target.
   */
  function applyTarget(id, target) {
    scene.environment = target.texture;
    scene.environmentIntensity = intensities[id] ?? intensities[DEFAULT_ENVIRONMENT] ?? 1.0;
    scene.environmentRotation?.set(0, rotations[id] ?? 0, 0);
    activeId = id;
  }

  function set(id) {
    if (disposed) return false;
    if (shared !== undefined && shared.disposed) return false;

    const next = normalizeEnvironmentId(id);
    if (next === requestedId) return false;
    requestedId = next;

    const cached = targets.get(next);
    if (cached !== undefined) {
      applyTarget(next, cached);
      onReady?.();
      return true;
    }

    void requestTarget(next).then((target) => {
      if (disposed) return;

      if (target === null) {
        // Allow a later retry instead of treating the failed id as current.
        const current = requestedId === next;
        if (current) requestedId = activeId;
        if (current) {
          try {
            onError?.(new Error(`Could not apply the "${next}" environment.`));
          } catch (callbackError) {
            console.error('[dsh-3d-viewer] Environment error listener failed.', callbackError);
          }
        }
        return;
      }
      if (requestedId !== next) return;

      applyTarget(next, target);
      onReady?.();
    });
    return true;
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    activeId = null;
    requestedId = null;
    scene.environment = null;

    if (ownsTargets) {
      for (const target of new Set(targets.values())) target.dispose();
      targets.clear();
      pending.clear();
    }
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
