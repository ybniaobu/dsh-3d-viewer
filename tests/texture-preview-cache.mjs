import assert from 'node:assert/strict';
import {
  getCachedPreview,
  previewCacheBudget,
  previewCacheKey,
  setCachedPreview,
} from '../src/ui/texture-preview-cache.js';

const image = (bytes) => ({ data: { byteLength: bytes } });
const key = (name) => previewCacheKey(`dsh-resource://file/session/s/${name}`, 1, 'exr');

assert.equal(previewCacheBudget({ deviceMemory: 4 }), 64 * 1024 * 1024);
assert.equal(previewCacheBudget({ deviceMemory: 8 }), 160 * 1024 * 1024);

const a = { image: image(4), width: 1, height: 1, bits: 16 };
const b = { image: image(4), width: 1, height: 1, bits: 16 };
assert.equal(setCachedPreview(key('a.exr'), a), true);
assert.equal(setCachedPreview(key('b.exr'), b), true);
assert.equal(getCachedPreview(key('a.exr')), a);
assert.equal(getCachedPreview(key('b.exr')), b);

const oversized = { image: image(160 * 1024 * 1024 + 1), width: 1, height: 1, bits: 16 };
assert.equal(setCachedPreview(key('huge.exr'), oversized), false);
assert.equal(getCachedPreview(key('huge.exr')), null);

assert.equal(
  setCachedPreview(key('missing-image.exr'), { image: undefined, width: 1, height: 1, bits: 16 }),
  false,
  'a missing ImageData must not poison the cache',
);

for (let index = 0; index < 5; index += 1) {
  setCachedPreview(key(`evict-${index}.exr`), {
    image: image(4),
    width: 1,
    height: 1,
    bits: 16,
  });
}
assert.equal(getCachedPreview(key('evict-0.exr')), null, 'the oldest entry is evicted');
assert.notEqual(getCachedPreview(key('evict-4.exr')), null);

console.log('Texture preview cache verified:', {
  highBudget: previewCacheBudget({ deviceMemory: 8 }),
  lowBudget: previewCacheBudget({ deviceMemory: 4 }),
});
