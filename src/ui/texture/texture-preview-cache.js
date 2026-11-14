const HIGH_MEMORY_BUDGET = 160 * 1024 * 1024;
const LOW_MEMORY_BUDGET = 64 * 1024 * 1024;
const MAX_ENTRIES = 4;

const entries = new Map();
let cachedBytes = 0;

/**
 * Keep preview results out of RAM on devices reporting 4 GB or less.
 *
 * @param {{ deviceMemory?: number }} [navigatorLike] Navigator-like capability source.
 * @returns {number} Byte budget.
 */
export function previewCacheBudget(navigatorLike = globalThis.navigator) {
  const memory = Number(navigatorLike?.deviceMemory);
  return Number.isFinite(memory) && memory > 0 && memory <= 4
    ? LOW_MEMORY_BUDGET
    : HIGH_MEMORY_BUDGET;
}

/**
 * @param {string} address Resource address.
 * @param {unknown} version File version returned by the workspace reader.
 * @param {string} format Texture format.
 * @returns {string} Cache key.
 */
export function previewCacheKey(address, version, format) {
  return `${format}\u0000${String(version)}\u0000${address}`;
}

/**
 * Read the most recently used cached preview.
 *
 * @param {string} key Cache key.
 * @returns {{ image: ImageData, width: number, height: number, bits: number } | null} Cached preview.
 */
export function getCachedPreview(key) {
  const entry = entries.get(key);
  if (entry === undefined) return null;
  // Refresh the LRU order.
  entries.delete(key);
  entries.set(key, entry);
  return entry;
}

/**
 * Cache one RGBA preview. Large images are skipped rather than evicting
 * everything only to exceed the same budget again.
 *
 * @param {string} key Cache key.
 * @param {{ image: ImageData, width: number, height: number, bits: number }} preview Preview result.
 * @returns {boolean} Whether the preview was retained.
 */
export function setCachedPreview(key, preview) {
  const image = preview?.image;
  const size = image?.data?.byteLength;
  if (!Number.isFinite(size) || size <= 0 || size > previewCacheBudget()) return false;

  const previous = entries.get(key);
  if (previous !== undefined) {
    entries.delete(key);
    cachedBytes -= previous.image.data.byteLength;
  }

  while (entries.size > 0 && (entries.size >= MAX_ENTRIES || cachedBytes + size > previewCacheBudget())) {
    const oldestKey = entries.keys().next().value;
    const oldest = entries.get(oldestKey);
    entries.delete(oldestKey);
    cachedBytes -= oldest.image.data.byteLength;
  }

  entries.set(key, preview);
  cachedBytes += size;
  return true;
}
