import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import {
  abortError,
  decodeLocalPath,
  decodeText,
  mimeOf,
  warn,
} from '../../core/bytes.js';
import { disposeObject } from '../../core/model.js';
import {
  createWorkspaceAssetLoader,
  readWithBasenameFallback,
  WHITE_PIXEL,
} from '../workspace.js';
import { parseFileAddress } from '../address.js';

const REMOTE_IMAGE = /^(?:data:|blob:|https?:|file:|\/\/)/iu;

/**
 * Normalize a COLLADA image reference and resolve it against the document path.
 *
 * @param {string} reference Raw image reference.
 * @param {string | undefined} resourceAddress Document resource address.
 * @returns {string | null} Workspace path, or null for non-workspace URLs.
 */
function resolveDaeImagePath(reference, resourceAddress) {
  const value = String(reference).trim();
  if (value === '' || REMOTE_IMAGE.test(value) || value.startsWith('#')) return null;

  const normalized = decodeLocalPath(value);
  if (/^(?:[A-Za-z]:\/|\/)/u.test(normalized)) return normalized;

  const parsed = parseFileAddress(resourceAddress);
  if (parsed === undefined) return normalized;
  const directory = parsed.path.slice(0, parsed.path.lastIndexOf('/') + 1);
  const parts = [];
  for (const part of `${directory}${normalized}`.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') parts.pop();
    else parts.push(part);
  }
  return parts.join('/');
}

/**
 * Read every local image referenced by a COLLADA document into blob URLs.
 *
 * ColladaLoader's internal TextureLoader bypasses LoadingManager handlers, so
 * routing the references through a URL modifier is the only way to keep
 * workspace textures out of page-relative HTTP requests.
 *
 * @param {string} text COLLADA document text.
 * @param {object} assets Workspace asset loader.
 * @param {{ readWorkspaceFile: Function, resourceAddress: string, signal?: AbortSignal }} options Loader options.
 * @param {(message: string) => void} onWarn Diagnostics.
 * @returns {Promise<Map<string, string>>} Reference-to-URL mapping.
 */
async function collectDaeImageUrls(text, assets, options, onWarn) {
  // Most DAE files have no external image library. Avoid parsing the complete
  // XML document twice just to discover an empty reference set.
  if (!/<init_from\b/iu.test(text)) return new Map();

  const references = new Set();
  if (typeof DOMParser === 'function') {
    const document = new DOMParser().parseFromString(text, 'text/xml');
    for (const node of document.getElementsByTagName('init_from')) {
      const value = node.textContent?.trim();
      if (value) references.add(value);
    }
  } else {
    for (const match of text.matchAll(/<init_from\b[^>]*>([\s\S]*?)<\/init_from>/giu)) {
      const value = match[1].trim();
      if (value) references.add(value);
    }
  }

  const urls = new Map();
  await Promise.all([...references].map(async (reference) => {
    if (REMOTE_IMAGE.test(reference)) return;
    const path = resolveDaeImagePath(reference, options.resourceAddress);
    if (path === null) return;
    try {
      if (options.signal?.aborted === true) throw abortError();
      const result = await readWithBasenameFallback(
        (candidate) => options.readWorkspaceFile(options.resourceAddress, candidate, {
          signal: options.signal,
        }),
        path,
      );
      if (result === undefined || result.ok !== true) {
        throw new Error(result?.error?.message ?? 'The image is unavailable.');
      }
      if (options.signal?.aborted === true) throw abortError();
      const url = URL.createObjectURL(new Blob([result.value.data], { type: mimeOf(path) }));
      assets.trackBlobUrl(url);
      urls.set(reference, url);
    } catch (error) {
      onWarn(`[dsh-3d-viewer] Could not load DAE texture "${reference}": ${String(error)}`);
      urls.set(reference, WHITE_PIXEL);
    }
  }));
  return urls;
}

/**
 * Track ColladaLoader's own TextureLoader/TGALoader items.
 *
 * LoadingManager keeps its item counters private, so observe onStart/onLoad
 * around parse instead of consulting a non-existent `itemsTotal` field.
 *
 * @param {import('three').LoadingManager} manager Collada loading manager.
 * @returns {{
 *   wait: (timeout?: number) => Promise<void>,
 *   restore: () => void,
 * }} Start-gated waiter and handler restore.
 */
function trackColladaTextures(manager) {
  const previousOnStart = manager.onStart;
  const previousOnLoad = manager.onLoad;
  let started = false;
  let resolveDone;
  const done = new Promise((resolve) => {
    resolveDone = resolve;
  });

  manager.onStart = (...args) => {
    started = true;
    previousOnStart?.(...args);
  };
  manager.onLoad = (...args) => {
    previousOnLoad?.(...args);
    resolveDone();
  };

  return {
    async wait(timeout = 5000) {
      if (!started) return;
      let timer;
      try {
        await Promise.race([
          done,
          new Promise((resolve) => {
            timer = setTimeout(resolve, timeout);
          }),
        ]);
      } finally {
        clearTimeout(timer);
      }
    },
    restore() {
      manager.onStart = previousOnStart;
      manager.onLoad = previousOnLoad;
    },
  };
}

/**
 * Parse one complete COLLADA document.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes or text.
 * @returns {import('three').Object3D} The parsed COLLADA scene graph.
 */
export function parseDaeBytes(data) {
  const loader = new ColladaLoader();
  loader.manager.onError = (url) => {
    warn(`[dsh-3d-viewer] Could not load a referenced DAE resource: ${url}`);
  };
  const result = loader.parse(decodeText(data), '');
  if (result === null || result.scene === undefined) {
    throw new Error('The COLLADA document contains no scene.');
  }
  return result.scene;
}

/**
 * Load a COLLADA scene, resolving external images through the workspace.
 *
 * @param {Uint8Array | ArrayBuffer | string} data COLLADA bytes or text.
 * @param {{
 *   readWorkspaceFile?: Function,
 *   resourceAddress?: string,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} [options] Workspace reader, address, and cancellation.
 * @returns {Promise<{ object: import('three').Object3D, assets: object | null }>} Scene and asset controls.
 */
export async function loadDaeModel(data, options = {}) {
  const onWarn = options.onWarn ?? warn;
  const assets = typeof options.readWorkspaceFile === 'function'
    && typeof options.resourceAddress === 'string'
    ? createWorkspaceAssetLoader({
      readFile: (path) => options.readWorkspaceFile(options.resourceAddress, path, {
        signal: options.signal,
      }),
      signal: options.signal,
      onWarn,
    })
    : null;
  const loader = new ColladaLoader(assets?.manager);
  loader.manager.onError = (url) => {
    onWarn(`[dsh-3d-viewer] Could not load a referenced DAE resource: ${url}`);
  };

  const textureTracker = assets === null ? null : trackColladaTextures(assets.manager);
  try {
    const text = decodeText(data);
    if (assets !== null) {
      const imageUrls = await collectDaeImageUrls(text, assets, {
        readWorkspaceFile: options.readWorkspaceFile,
        resourceAddress: options.resourceAddress,
        signal: options.signal,
      }, onWarn);
      if (options.signal?.aborted === true) throw abortError();
      assets.manager.setURLModifier((url) => imageUrls.get(url) ?? url);
    }

    const result = loader.parse(text, '');
    if (result === null || result.scene === undefined) {
      throw new Error('The COLLADA document contains no scene.');
    }
    await Promise.all([
      assets?.settle(),
      textureTracker === null ? Promise.resolve() : textureTracker.wait(),
    ]);
    if (options.signal?.aborted === true) {
      assets?.dispose();
      disposeObject(result.scene);
      throw abortError();
    }
    return { object: result.scene, assets };
  } catch (error) {
    assets?.dispose();
    throw error;
  } finally {
    textureTracker?.restore();
  }
}
