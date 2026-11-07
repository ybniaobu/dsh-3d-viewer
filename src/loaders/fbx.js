import { abortError, toArrayBuffer, warn } from '../bytes.js';
import { disposeObject } from '../model.js';
import { FBXLoader } from '../vendor/FBXLoaderPbr.js';
import { createWorkspaceAssetLoader } from './workspace.js';

/**
 * Parse one complete FBX file with Three.js.
 *
 * Texture loads are asynchronous and optional. A missing sidecar texture
 * must not reject a model whose geometry is perfectly readable, so the
 * loading manager only logs those failures and the scene is returned as
 * soon as its graph exists.
 *
 * @param {Uint8Array | ArrayBuffer} data Complete file bytes.
 * @returns {import('three').Object3D} The parsed FBX scene graph.
 */
export function parseFbxBytes(data) {
  const loader = new FBXLoader();
  loader.manager.onError = (url) => {
    // Deliberately non-fatal: embedded materials and geometry still render.
    warn(`[dsh-3d-viewer] Could not load a referenced FBX texture: ${url}`);
  };
  return loader.parse(toArrayBuffer(data), '');
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
