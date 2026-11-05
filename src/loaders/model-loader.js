import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { abortError, decodeText, toArrayBuffer, warn } from '../bytes.js';
import { disposeObject, parseFbxBytes, parseStlBytes, stripEmbeddedSceneNodes } from '../model.js';
import { FBXLoader } from '../vendor/FBXLoaderPbr.js';
import { loadGltfModel } from './gltf.js';
import { createWorkspaceAssetLoader, readWithBasenameFallback } from './workspace.js';

/**
 * Read every `mtllib` filename in an OBJ document.
 *
 * Scanning the text directly avoids splitting a multi-megabyte OBJ into one
 * string per line just to find a handful of material-library declarations.
 *
 * @param {string} text OBJ text.
 * @returns {string[]} Referenced MTL paths in document order.
 */
function materialLibraries(text) {
  const libraries = [];
  for (const match of text.matchAll(/^[^\S\r\n]*mtllib[^\S\r\n]+(.+?)[^\S\r\n]*$/gimu)) {
    libraries.push(match[1].trim());
  }
  return libraries;
}

/**
 * Load the first readable MTL library and its textures.
 *
 * @param {string} text OBJ text.
 * @param {{
 *   readWorkspaceFile: Function,
 *   resourceAddress: string,
 *   signal?: AbortSignal,
 *   onWarn: (message: string) => void,
 * }} options Workspace reader and diagnostics.
 * @returns {Promise<{ materials: object, assets: object } | null>} Materials and their asset loader.
 */
async function loadObjMaterials(text, options) {
  const libraries = materialLibraries(text);
  if (libraries.length === 0) return null;

  const readLibrary = (path) => options.readWorkspaceFile(options.resourceAddress, path, {
    signal: options.signal,
  });

  for (const library of libraries) {
    if (options.signal?.aborted === true) throw abortError();

    let result;
    try {
      result = await readWithBasenameFallback(readLibrary, library);
    } catch (error) {
      if (options.signal?.aborted === true) throw abortError();
      options.onWarn(`[dsh-3d-viewer] Could not read MTL "${library}": ${String(error)}`);
      continue;
    }
    if (result === undefined || result.ok !== true) {
      options.onWarn(`[dsh-3d-viewer] Could not read MTL "${library}": ${result?.error?.message ?? 'unknown error'}`);
      continue;
    }

    let assets = null;
    try {
      const materialsText = decodeText(result.value.data);
      assets = createWorkspaceAssetLoader({
        readFile: (path) => options.readWorkspaceFile(options.resourceAddress, path, {
          baseFile: result.value.absolutePath,
          signal: options.signal,
        }),
        signal: options.signal,
        onWarn: options.onWarn,
      });

      const loader = new MTLLoader(assets.manager);
      const materials = loader.parse(materialsText, '');
      materials.preload();
      await assets.settle();

      if (options.signal?.aborted === true) throw abortError();
      return { materials, assets };
    } catch (error) {
      assets?.dispose();
      options.onWarn(`[dsh-3d-viewer] Could not parse MTL "${library}": ${String(error)}`);
    }
  }

  return null;
}

/**
 * Load an OBJ scene, including its MTL material library and image textures
 * when the workspace reader is available.
 *
 * @param {Uint8Array | ArrayBuffer | string} data OBJ bytes or text.
 * @param {{
 *   readWorkspaceFile?: Function,
 *   resourceAddress?: string,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} [options] Workspace reader, address, and cancellation.
 * @returns {Promise<{ object: import('three').Object3D, assets: object | null }>} Scene and asset controls.
 */
export async function loadObjModel(data, options = {}) {
  const text = decodeText(data);
  const onWarn = options.onWarn ?? warn;
  let materials = null;
  let assets = null;

  if (typeof options.readWorkspaceFile === 'function' && typeof options.resourceAddress === 'string') {
    const loaded = await loadObjMaterials(text, {
      readWorkspaceFile: options.readWorkspaceFile,
      resourceAddress: options.resourceAddress,
      signal: options.signal,
      onWarn,
    });
    materials = loaded?.materials ?? null;
    assets = loaded?.assets ?? null;
  }

  try {
    if (options.signal?.aborted === true) throw abortError();
    const loader = new OBJLoader();
    if (materials !== null) loader.setMaterials(materials);
    const object = loader.parse(text);
    return { object, assets };
  } catch (error) {
    assets?.dispose();
    throw error;
  }
}

/**
 * Load an FBX scene. Embedded textures keep using the loader's blob/data
 * paths; external texture references are resolved through the workspace.
 *
 * @param {Uint8Array | ArrayBuffer} data FBX bytes.
 * @param {{
 *   readWorkspaceFile?: Function,
 *   resourceAddress?: string,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} [options] Workspace reader, address, and cancellation.
 * @returns {Promise<{ object: import('three').Object3D, assets: object | null }>} Scene and asset controls.
 */
export async function loadFbxModel(data, options = {}) {
  const onWarn = options.onWarn ?? warn;

  if (typeof options.readWorkspaceFile !== 'function' || typeof options.resourceAddress !== 'string') {
    return { object: parseFbxBytes(data), assets: null };
  }

  const assets = createWorkspaceAssetLoader({
    readFile: (path) => options.readWorkspaceFile(options.resourceAddress, path, {
      signal: options.signal,
    }),
    signal: options.signal,
    onWarn,
  });

  try {
    const loader = new FBXLoader(assets.manager);
    loader.manager.onError = (url) => {
      onWarn(`[dsh-3d-viewer] Could not load a referenced FBX resource: ${url}`);
    };

    const object = loader.parse(toArrayBuffer(data), '');
    await assets.settle();

    if (options.signal?.aborted === true) {
      assets.dispose();
      disposeObject(object);
      throw abortError();
    }
    return { object, assets };
  } catch (error) {
    assets.dispose();
    throw error;
  }
}

/**
 * Load an STL model.
 *
 * @param {Uint8Array | ArrayBuffer | string} data STL bytes or text.
 * @param {{ signal?: AbortSignal }} [options] Cancellation.
 * @returns {Promise<{ object: import('three').Mesh, assets: null }>} Parsed mesh.
 */
async function loadStlModel(data, options = {}) {
  if (options.signal?.aborted === true) throw abortError();
  const object = parseStlBytes(data);
  if (options.signal?.aborted === true) {
    disposeObject(object);
    throw abortError();
  }
  return { object, assets: null };
}

/**
 * Per-format loaders. glTF and GLB share one implementation because GLB is
 * only a container for the same scene description.
 */
const LOADERS = Object.freeze({
  obj: loadObjModel,
  fbx: loadFbxModel,
  gltf: loadGltfModel,
  glb: loadGltfModel,
  stl: loadStlModel,
});

/**
 * Load one registered model format.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes.
 * @param {'fbx' | 'gltf' | 'glb' | 'obj' | 'stl'} format Document format.
 * @param {{
 *   readWorkspaceFile?: Function,
 *   resourceAddress?: string,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} [options] Workspace reader, address, and cancellation.
 * @returns {Promise<{ object: import('three').Object3D, assets: object | null }>} Scene and asset controls.
 */
export async function loadModelBytes(data, format, options = {}) {
  if (!Object.hasOwn(LOADERS, format)) {
    throw new TypeError(`Unsupported 3D model format: ${String(format)}`);
  }
  const loaded = await LOADERS[format](data, options);
  // The preview provides its own lighting and camera; never render the ones
  // baked into the source file (FBX and glTF can both carry them).
  stripEmbeddedSceneNodes(loaded.object);
  return loaded;
}
