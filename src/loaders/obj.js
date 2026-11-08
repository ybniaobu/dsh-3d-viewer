import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { abortError, decodeText, warn } from '../bytes.js';
import { disposeObject } from '../model.js';
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
 * Load the first readable MTL library.
 *
 * The material creator is returned before creating any materials. OBJLoader
 * creates only the materials referenced by `usemtl` while parsing geometry,
 * which starts just those textures.
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
 * Parse one complete OBJ file with Three.js.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes or decoded text.
 * @returns {import('three').Group} The parsed OBJ scene graph.
 */
export function parseObjBytes(data) {
  const loader = new OBJLoader();
  loader.manager.onError = (url) => {
    warn(`[dsh-3d-viewer] Could not load a referenced OBJ resource: ${url}`);
  };
  return loader.parse(decodeText(data));
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
    // OBJLoader creates only the materials referenced by the geometry; their
    // texture work is pending now. Wait for both before returning so the first
    // displayed frame has geometry and materials ready.
    await assets?.settle();
    if (options.signal?.aborted === true) {
      disposeObject(object);
      throw abortError();
    }
    return { object, assets };
  } catch (error) {
    assets?.dispose();
    throw error;
  }
}
