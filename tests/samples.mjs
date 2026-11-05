import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const objUrl = new URL('../samples/TexturedCube.obj', import.meta.url);
if (!existsSync(fileURLToPath(objUrl))) {
  console.log('samples/TexturedCube.obj is missing; skipping the sample-model test.');
  process.exit(0);
}

const obj = await readFile(objUrl, 'utf8');
const vertices = [];
const triangles = [];

for (const rawLine of obj.split(/\r?\n/u)) {
  const parts = rawLine.trim().split(/\s+/u);
  if (parts[0] === 'v') vertices.push(parts.slice(1, 4).map(Number));
  if (parts[0] === 'f') triangles.push(parts.slice(1).map((token) => Number(token.split('/')[0]) - 1));
}

assert.equal(triangles.length, 12, 'TexturedCube should have 12 triangles');

let inward = 0;
for (const [a, b, c] of triangles) {
  const A = vertices[a];
  const B = vertices[b];
  const C = vertices[c];
  const ab = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
  const ac = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];
  const normal = [
    ab[1] * ac[2] - ab[2] * ac[1],
    ab[2] * ac[0] - ab[0] * ac[2],
    ab[0] * ac[1] - ab[1] * ac[0],
  ];
  const center = [
    (A[0] + B[0] + C[0]) / 3,
    (A[1] + B[1] + C[1]) / 3,
    (A[2] + B[2] + C[2]) / 3,
  ];
  if (normal[0] * center[0] + normal[1] * center[1] + normal[2] * center[2] <= 0) inward += 1;
}

assert.equal(inward, 0, 'every cube triangle must be front-facing outward');

const mtl = await readFile(new URL('../samples/TexturedCube.mtl', import.meta.url), 'utf8');
assert.match(mtl, /^map_Kd\s+TexturedCube\.png$/mu);

const png = await readFile(new URL('../samples/TexturedCube.png', import.meta.url));
assert.deepEqual([...png.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);

console.log('TexturedCube sample verified:', {
  vertices: vertices.length,
  triangles: triangles.length,
  inwardTriangles: inward,
});
