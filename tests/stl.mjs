import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { loadModelBytes } from '../src/loaders/model-loader.js';
import { collectModelStats, disposeObject } from '../src/model.js';

const cases = [
  ['TestCube.stl', 12],
  ['BinaryTriangle.stl', 1],
];

const missing = cases.some(([file]) => !existsSync(fileURLToPath(new URL(`../samples/${file}`, import.meta.url))));
if (missing) {
  console.log('STL samples are missing; skipping the STL test.');
  process.exit(0);
}

for (const [file, expectedTriangles] of cases) {
  const bytes = await readFile(new URL(`../samples/${file}`, import.meta.url));
  const loaded = await loadModelBytes(bytes, 'stl');
  const stats = collectModelStats(loaded.object);
  assert.equal(stats.meshes, 1);
  assert.equal(stats.triangles, expectedTriangles);
  assert.equal(loaded.object.isMesh, true);
  assert.equal(loaded.object.material.isMeshStandardMaterial, true);
  assert.equal(loaded.object.material.side, 2);
  assert.deepEqual(loaded.object.animations, []);
  loaded.assets?.dispose();
  disposeObject(loaded.object);
}

console.log('STL verified:', {
  asciiTriangles: 12,
  binaryTriangles: 1,
  format: 'stl',
});
