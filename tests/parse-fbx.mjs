import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// FBXLoader reads these globals only while resolving a file's camera. The
// sample carries an orthographic camera, so Node needs the browser values.
globalThis.window = { innerWidth: 1024, innerHeight: 768 };

const { collectModelStats, disposeObject, parseFbxBytes } = await import('../src/model.js');

const sampleUrl = new URL('../samples/PreviewSphere.fbx', import.meta.url);
if (!existsSync(fileURLToPath(sampleUrl))) {
  console.log('samples/PreviewSphere.fbx is missing; skipping the FBX parsing test.');
  process.exit(0);
}

const bytes = await readFile(sampleUrl);
const object = parseFbxBytes(bytes);
const stats = collectModelStats(object);

assert.ok(stats.meshes > 0, 'expected at least one mesh');
assert.ok(stats.vertices > 0, 'expected a non-empty vertex count');
assert.ok(stats.triangles > 0, 'expected a non-empty triangle count');
assert.ok(stats.maxDimension > 0, 'expected a positive bounding-box dimension');
assert.equal(Number.isFinite(stats.box.min.y), true, 'expected finite bounds');

console.log(JSON.stringify({
  meshes: stats.meshes,
  vertices: stats.vertices,
  triangles: stats.triangles,
  materials: stats.materials,
  dimensions: [stats.size.x, stats.size.y, stats.size.z].map((value) => Number(value.toFixed(3))),
  bounds: [stats.box.min.y, stats.box.max.y].map((value) => Number(value.toFixed(3))),
}, null, 2));

disposeObject(object);
