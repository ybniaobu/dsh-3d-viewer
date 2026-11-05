import assert from 'node:assert/strict';
import {
  FORMATS,
  FORMAT_ENTRIES,
  FORMAT_IDS,
  badgeKeyFor,
  isGlbAddress,
  normalizeFormat,
} from '../src/formats.js';

assert.deepEqual(FORMAT_IDS, ['fbx', 'obj', 'gltf', 'stl']);
assert.deepEqual(FORMAT_ENTRIES.map((entry) => entry.format), FORMAT_IDS);
assert.equal(new Set(FORMAT_ENTRIES.map((entry) => entry.id)).size, 4, 'format ids must be unique');

for (const entry of FORMAT_ENTRIES) {
  assert.ok(entry.extensions.length > 0, `${entry.format} needs at least one extension`);
  assert.deepEqual(entry.extensions, entry.extensions.map((extension) => extension.toLowerCase()));
  assert.equal(typeof entry.titleKey, 'string');
  assert.equal(typeof entry.badgeKey, 'string');
  assert.equal(typeof entry.label, 'string');
  assert.ok(Object.isFrozen(entry), `${entry.format} definition should be immutable`);
}

assert.deepEqual(FORMATS.gltf.extensions, ['gltf', 'glb']);

assert.equal(normalizeFormat('obj'), 'obj');
assert.equal(normalizeFormat('glb'), 'gltf', 'GLB should use the glTF viewer');
assert.equal(normalizeFormat('stl'), 'stl');
assert.equal(normalizeFormat('unknown'), 'fbx');
assert.equal(normalizeFormat('toString'), 'fbx', 'prototype keys must not resolve');
assert.equal(normalizeFormat(undefined), 'fbx');

assert.equal(badgeKeyFor('gltf', true), 'glbBadge');
assert.equal(badgeKeyFor('gltf', false), 'gltfBadge');
assert.equal(badgeKeyFor('obj', true), 'objBadge');
assert.equal(badgeKeyFor('fbx'), 'badge');

assert.equal(isGlbAddress('/models/car.glb'), true);
assert.equal(isGlbAddress('/models/car.glb?download=1'), true);
assert.equal(isGlbAddress('/models/car.gltf'), false);
assert.equal(isGlbAddress(undefined), false);

console.log('Format registry verified:', {
  ids: FORMAT_IDS,
  badges: FORMAT_ENTRIES.map((entry) => badgeKeyFor(entry.format)),
  glbAlias: normalizeFormat('glb'),
});
