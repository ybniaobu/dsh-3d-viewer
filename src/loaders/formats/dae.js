import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import { abortError, decodeText, warn } from '../../core/bytes.js';
import { disposeObject } from '../../core/model.js';
import { createWorkspaceAssetLoader } from '../workspace.js';

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

  try {
    const result = loader.parse(decodeText(data), '');
    if (result === null || result.scene === undefined) {
      throw new Error('The COLLADA document contains no scene.');
    }
    await assets?.settle();
    if (options.signal?.aborted === true) {
      assets?.dispose();
      disposeObject(result.scene);
      throw abortError();
    }
    return { object: result.scene, assets };
  } catch (error) {
    assets?.dispose();
    throw error;
  }
}
