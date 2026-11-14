import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const { collectModelStats, disposeObject } = await import('../../src/core/model.js');
const { parseFbxBytes } = await import('../../src/loaders/formats/fbx.js');

const sampleUrl = new URL('../../samples/PreviewSphere.fbx', import.meta.url);
if (!existsSync(fileURLToPath(sampleUrl))) {
  console.log('samples/PreviewSphere.fbx is missing; skipping the FBX parsing test.');
  process.exit(0);
}

const bytes = await readFile(sampleUrl);
const object = parseFbxBytes(bytes);
const stats = collectModelStats(object);
let cameras = 0;
let lights = 0;
object.traverse((child) => {
  if (child.isCamera === true) cameras += 1;
  if (child.isLight === true) lights += 1;
});

assert.ok(stats.meshes > 0, 'expected at least one mesh');
assert.ok(stats.vertices > 0, 'expected a non-empty vertex count');
assert.ok(stats.triangles > 0, 'expected a non-empty triangle count');
assert.ok(stats.maxDimension > 0, 'expected a positive bounding-box dimension');
assert.equal(Number.isFinite(stats.box.min.y), true, 'expected finite bounds');
assert.equal(cameras, 0, 'embedded cameras are skipped during parse');
assert.equal(lights, 0, 'embedded lights are skipped during parse');

console.log(JSON.stringify({
  meshes: stats.meshes,
  vertices: stats.vertices,
  triangles: stats.triangles,
  materials: stats.materials,
  dimensions: [stats.size.x, stats.size.y, stats.size.z].map((value) => Number(value.toFixed(3))),
  bounds: [stats.box.min.y, stats.box.max.y].map((value) => Number(value.toFixed(3))),
}, null, 2));

disposeObject(object);
