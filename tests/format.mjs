import assert from 'node:assert/strict';
import { formatBytes } from '../src/ui/primitives.js';

assert.equal(formatBytes(0), '0 B');
assert.equal(formatBytes(1024), '1.00 KB');
assert.equal(formatBytes(1536), '1.50 KB');
assert.equal(formatBytes(1024 * 1024 * 2.5), '2.50 MB');
assert.equal(formatBytes(-1), '—');
assert.equal(formatBytes(Number.NaN), '—');

console.log('Byte-size formatting verified:', {
  small: formatBytes(1536),
  large: formatBytes(2_637_083),
});
