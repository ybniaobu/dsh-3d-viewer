import { asyncChunk } from '../loaders/chunk-require.js';

let runtimePromise = null;

/**
 * Load the shared Three/scene/texture runtime chunk once.
 *
 * @returns {Promise<Record<string, any>>} Runtime exports.
 */
export function loadViewerRuntime() {
  if (runtimePromise === null) {
    runtimePromise = asyncChunk('./client.runtime.js');
    runtimePromise.catch(() => {
      runtimePromise = null;
    });
  }
  return runtimePromise;
}
