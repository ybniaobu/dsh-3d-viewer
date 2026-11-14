import * as THREE_BRIDGE from './loaders/three-bridge.js';
import { collectModelStats, disposeObject } from './core/model.js';
import { decodeTextureInWorker } from './loaders/texture-worker-client.js';
import { decodeRasterPreview, decodeWorkspaceTexture, readWorkspaceFile } from './loaders/workspace.js';
import { loadModelBytes, preloadModelFormat } from './loaders/model-loader.js';
import { createSceneView } from './scene/create-scene-view.js';
import { prefetchEnvironment } from './scene/environment.js';
import { createWebGlPreview } from './ui/texture/texture-webgl.js';

// The runtime chunk owns Three for every lazy format chunk. The format chunks
// externalize `three` and resolve it through this bridge.
globalThis.__DSH3DV_THREE__ = { ...THREE_BRIDGE, __esModule: true };
globalThis.__DSH3DV_TEXTURE_WORKER__ = { decodeTextureInWorker };

export {
  collectModelStats,
  createSceneView,
  createWebGlPreview,
  decodeRasterPreview,
  decodeTextureInWorker,
  decodeWorkspaceTexture,
  disposeObject,
  loadModelBytes,
  prefetchEnvironment,
  preloadModelFormat,
  readWorkspaceFile,
};
