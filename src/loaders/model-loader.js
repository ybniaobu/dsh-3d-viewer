import { stripEmbeddedSceneNodes } from '../core/model.js';
import { asyncChunk } from './chunk-require.js';

/**
 * Package-local chunks and the export each one provides.
 *
 * The chunk files are emitted by `build.mjs` beside `client.js`; DSH's module
 * system fetches one only when that format is first opened.
 */
const CHUNKS = Object.freeze({
  fbx: { file: './client.fbx.js', loader: 'loadFbxModel' },
  obj: { file: './client.obj.js', loader: 'loadObjModel' },
  gltf: { file: './client.gltf.js', loader: 'loadGltfModel' },
  glb: { file: './client.gltf.js', loader: 'loadGltfModel' },
  stl: { file: './client.stl.js', loader: 'loadStlModel' },
  dae: { file: './client.dae.js', loader: 'loadDaeModel' },
});

/** One in-flight chunk promise per file, so concurrent opens share it. */
const chunkPromises = new Map();

/**
 * Load and cache one format chunk.
 *
 * @param {string} file Relative chunk spec.
 * @returns {Promise<Record<string, unknown>>} Chunk exports.
 */
function loadChunk(file) {
  let promise = chunkPromises.get(file);
  if (promise === undefined) {
    promise = asyncChunk(file);
    chunkPromises.set(file, promise);
    promise.catch(() => chunkPromises.delete(file));
  }
  return promise;
}

/**
 * Start fetching a format chunk while the root file is still being read.
 *
 * @param {string} format Document format.
 * @returns {void}
 */
export function preloadModelFormat(format) {
  const chunk = CHUNKS[format];
  if (chunk === undefined) return;
  try {
    // The actual load reports failures; preloading is best-effort.
    void loadChunk(chunk.file).catch(() => {});
  } catch {
    // A synchronously unavailable module loader is reported by loadModelBytes.
  }
}

/**
 * Load one registered model format through its package-local chunk.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes.
 * @param {'fbx' | 'gltf' | 'glb' | 'obj' | 'stl' | 'dae'} format Document format.
 * @param {{
 *   readWorkspaceFile?: Function,
 *   resourceAddress?: string,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} [options] Workspace reader, address, and cancellation.
 * @returns {Promise<{ object: import('three').Object3D, assets: object | null }>} Scene and asset controls.
 */
export async function loadModelBytes(data, format, options = {}) {
  const chunk = CHUNKS[format];
  if (chunk === undefined) {
    throw new TypeError(`Unsupported 3D model format: ${String(format)}`);
  }

  const module = await loadChunk(chunk.file);
  const load = module[chunk.loader];
  if (typeof load !== 'function') {
    throw new Error(`The "${format}" loader chunk did not export ${chunk.loader}.`);
  }

  const loaded = await load(data, options);
  // The preview provides its own lighting and camera; never render the ones
  // baked into the source file (FBX and glTF can both carry them).
  stripEmbeddedSceneNodes(loaded.object);
  return loaded;
}
