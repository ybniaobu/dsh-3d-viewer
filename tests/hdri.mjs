import assert from 'node:assert/strict';
import { HDRI_DATA_URLS } from '../src/generated/hdri-data.js';
import { ENVIRONMENT_INTENSITIES, dataUrlToArrayBuffer, normalizeEnvironmentId } from '../src/scene/environment.js';
import { ENVIRONMENT_OPTIONS } from '../src/ui/options.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

const loader = new HDRLoader();
const ids = ['nature', 'city', 'indoor', 'studio'];

assert.deepEqual(
  ENVIRONMENT_OPTIONS.map((option) => option.id),
  ids,
  'environment rail should match the embedded HDRI ids',
);

for (const id of ids) {
  const dataUrl = HDRI_DATA_URLS[id];
  assert.equal(typeof dataUrl, 'string', `${id} HDRI data URL is missing`);
  assert.ok(dataUrl.startsWith('data:application/octet-stream;base64,'), `${id} HDRI is not base64`);

  const encoded = dataUrl.slice(dataUrl.indexOf(',') + 1);
  const bytes = Buffer.from(encoded, 'base64');
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const texture = loader.parse(buffer);

  assert.ok(texture.width > 0 && texture.height > 0, `${id} HDRI has no dimensions`);
  assert.equal(texture.height * 2, texture.width, `${id} HDRI is not 2:1 equirectangular`);
}

assert.deepEqual(ENVIRONMENT_INTENSITIES, {
  nature: 1.0,
  city: 1.0,
  indoor: 0.8,
  studio: 0.9,
});

const decoded = dataUrlToArrayBuffer('data:application/octet-stream;base64,AAECAw==');
assert.deepEqual([...new Uint8Array(decoded)], [0, 1, 2, 3]);
assert.equal(dataUrlToArrayBuffer('not a data url'), null);

assert.equal(normalizeEnvironmentId('city', { nature: '', city: '' }), 'city');
assert.equal(normalizeEnvironmentId('missing', { nature: '' }), 'nature');
assert.equal(normalizeEnvironmentId(null, { nature: '' }), 'nature');

console.log('Embedded HDRI assets verified:', ids.join(', '));
