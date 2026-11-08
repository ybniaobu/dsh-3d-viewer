import assert from 'node:assert/strict';
import {
  decodeBase64,
  decodeLocalPath,
  decodeText,
  isLocalPath,
  mimeOf,
  toArrayBuffer,
  toBytes,
} from '../src/bytes.js';

assert.equal(decodeLocalPath('textures/a%20b.png?x=1#frag'), 'textures/a b.png');
assert.equal(decodeLocalPath('C:\\models\\wood.png'), 'C:/models/wood.png');
assert.equal(decodeLocalPath('bad%E0%A4%A'), 'bad%E0%A4%A', 'invalid escapes should be kept as-is');

assert.equal(mimeOf('a/b/c.PNG'), 'image/png');
assert.equal(mimeOf('model.bin'), 'application/octet-stream');
assert.equal(mimeOf('no-extension'), 'application/octet-stream');

assert.equal(isLocalPath('textures/x.png'), true);
assert.equal(isLocalPath('C:\\x.png'), true);
assert.equal(isLocalPath('data:image/png;base64,AA'), false);
assert.equal(isLocalPath('blob:https://example.com/x'), false);
assert.equal(isLocalPath('https://example.com/a.png'), false);
assert.equal(isLocalPath('//cdn.example.com/a.png'), false);
assert.equal(isLocalPath('file:///a.png'), false);
assert.equal(isLocalPath(''), false);
assert.equal(isLocalPath(undefined), false);

const view = new Uint8Array([1, 2, 3, 4]).subarray(1, 3);
const copied = toArrayBuffer(view);
assert.deepEqual([...new Uint8Array(copied)], [2, 3]);
view[0] = 9;
assert.deepEqual([...new Uint8Array(copied)], [2, 3], 'toArrayBuffer must copy subviews');

const full = new Uint8Array([7, 8]);
assert.equal(toArrayBuffer(full), full.buffer, 'full-buffer views must not be copied');

assert.deepEqual([...toBytes('hi')], [104, 105]);
assert.deepEqual([...new Uint8Array(toArrayBuffer('hi'))], [104, 105], 'text should encode as UTF-8');
assert.equal(decodeText(new Uint8Array([0x68, 0x69])), 'hi');
assert.equal(decodeText('plain'), 'plain');
assert.deepEqual([...decodeBase64('AAECAw==')], [0, 1, 2, 3]);

assert.throws(() => toArrayBuffer(42), TypeError);
assert.throws(() => decodeText(42), TypeError);

console.log('Byte/text helpers verified:', {
  mime: mimeOf('texture.png'),
  localPath: decodeLocalPath('textures/a%20b.png'),
  base64Bytes: [...decodeBase64('AAECAw==')],
});
