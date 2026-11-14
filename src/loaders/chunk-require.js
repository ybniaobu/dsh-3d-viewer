/**
 * Fetch one package-local loader chunk through DSH's module system.
 *
 * The entry wrapper installs the factory's `require` on `globalThis` so this
 * module can reach `require.async` without importing a browser global into the
 * source. A missing loader means the plugin is being exercised outside DSH
 * (e.g. a unit test that should import the format module directly).
 *
 * @param {string} spec Relative chunk spec, e.g. `./client.formats.fbx.js`.
 * @returns {Promise<Record<string, unknown>>} Chunk exports.
 */
export function asyncChunk(spec) {
  const loader = globalThis.__DSH3DV_REQUIRE__;
  if (loader === undefined || typeof loader.async !== 'function') {
    return Promise.reject(new Error('The DSH module loader is unavailable for lazy chunks.'));
  }
  return loader.async(spec);
}
