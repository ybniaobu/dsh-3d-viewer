import assert from 'node:assert/strict';
import { collectModelStats, disposeObject } from '../src/model.js';
import { parseObjBytes } from '../src/loaders/obj.js';

const encoder = new TextEncoder();
const square = `# unit square
mtllib missing.mtl
o quad
v 0 0 0
v 1 0 0
v 0 1 0
v 1 1 0
vt 0 0
vt 1 0
vt 0 1
vt 1 1
vn 0 0 1
usemtl red
s off
f 1/1/1 2/2/1 3/3/1
f 2/2/1 4/4/1 3/3/1
`;

const object = parseObjBytes(encoder.encode(square));
const stats = collectModelStats(object);
assert.equal(stats.meshes, 1);
assert.equal(stats.renderables, 1);
assert.equal(stats.vertices, 4);
assert.equal(stats.triangles, 2);
assert.equal(stats.materials, 1);
assert.equal(stats.maxDimension, 1);
assert.deepEqual([stats.box.min.x, stats.box.max.x], [0, 1]);

const mesh = object.children[0];
assert.equal(mesh.material.name, 'red');
assert.equal(mesh.material.flatShading, true, 's off should select flat shading');
assert.equal(mesh.geometry.getAttribute('normal').count, 6);
assert.equal(mesh.geometry.getAttribute('uv').count, 6);

const dispatched = parseObjBytes(encoder.encode(square));
assert.equal(collectModelStats(dispatched).triangles, 2);
dispatched.removeFromParent();
disposeObject(dispatched);

const textObject = parseObjBytes(square);
assert.equal(collectModelStats(textObject).triangles, 2, 'decoded OBJ text should also parse');
disposeObject(textObject);

const colored = `o triangle
v 0 0 0 1 0 0
v 1 0 0 0 1 0
v 0 1 0 0 0 1
f 1 2 3
`;
const coloredObject = parseObjBytes(encoder.encode(colored));
const coloredMesh = coloredObject.children[0];
assert.ok(coloredMesh.geometry.getAttribute('color'), 'OBJ vertex colors should be parsed');
assert.equal(coloredMesh.material.vertexColors, true);
disposeObject(coloredObject);

const lineObject = parseObjBytes(encoder.encode('v 0 0 0\nv 1 0 0\nl 1 2\n'));
const lineStats = collectModelStats(lineObject);
assert.equal(lineStats.meshes, 0);
assert.equal(lineStats.renderables, 1, 'line-only OBJ files should still be renderable');
disposeObject(lineObject);

const emptyObject = parseObjBytes(encoder.encode('# no geometry\n'));
assert.equal(collectModelStats(emptyObject).renderables, 0);
disposeObject(emptyObject);

disposeObject(object);

console.log('OBJ parsing verified:', {
  vertices: stats.vertices,
  triangles: stats.triangles,
  material: mesh.material.name,
  vertexColors: coloredMesh.material.vertexColors,
  lineRenderables: lineStats.renderables,
});
