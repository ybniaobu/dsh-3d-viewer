import assert from 'node:assert/strict';
import { Box3, BufferAttribute, BufferGeometry, Group, Mesh, Scene, Vector3 } from 'three';
import { collectModelStats } from '../src/model.js';
import { createGround, niceGridStep } from '../src/scene/ground.js';

const group = new Group();
group.add(new Mesh(new BufferGeometry().setAttribute('position', new BufferAttribute(
  new Float32Array([
    0, 0, 0,
    1, 0, 0,
    0, 0, 0,
    0, 0, 0,
    2, 0, 0,
    1, 0, 0,
  ]),
  3,
))));

const stats = collectModelStats(group);
assert.equal(stats.meshes, 1);
assert.equal(stats.renderables, 1);
assert.equal(stats.vertices, 3, 'duplicate positions should collapse to one vertex');
assert.equal(stats.triangles, 2);
assert.equal(stats.maxDimension, 2);
assert.deepEqual([stats.box.min.x, stats.box.max.x], [0, 2]);
assert.deepEqual([stats.size.x, stats.size.y, stats.size.z], [2, 0, 0]);

const signedZero = new Group();
signedZero.add(new Mesh(new BufferGeometry().setAttribute('position', new BufferAttribute(
  new Float32Array([0, 0, 0, -0, -0, -0, 1, 1, 1]),
  3,
))));
assert.equal(collectModelStats(signedZero).vertices, 2, '-0 and +0 are the same position');

const indexed = new Group();
const indexedGeometry = new BufferGeometry()
  .setAttribute('position', new BufferAttribute(new Float32Array([
    0, 0, 0,
    1, 0, 0,
    0, 1, 0,
    2, 2, 2,
  ]), 3))
  .setIndex([0, 1, 2]);
indexed.add(new Mesh(indexedGeometry));
const indexedStats = collectModelStats(indexed);
assert.equal(indexedStats.renderables, 1);
assert.equal(indexedStats.vertices, 4);
assert.equal(indexedStats.triangles, 1);

assert.equal(niceGridStep(0), 1);
assert.equal(niceGridStep(12), 1);
assert.equal(niceGridStep(24), 2);
assert.equal(niceGridStep(60), 5);
assert.equal(niceGridStep(120), 10);
assert.equal(niceGridStep(Number.NaN), 1);

const groundScene = new Scene();
const ground = createGround({
  scene: groundScene,
  stats: {
    center: new Vector3(1, 0, 1),
    box: new Box3(new Vector3(0, 0, 0), new Vector3(2, 2, 2)),
    maxDimension: 2,
  },
  maxDimension: 2,
});
assert.equal(ground.setFogColor(0x000000), true);
assert.equal(ground.setFogColor(0x000000), false);
const grid = groundScene.children.find((child) => child.material?.uniforms?.uFogColor);
assert.equal(grid.material.uniforms.uFogColor.value.getHex(), 0x000000);
const shadowPlane = groundScene.children.find((child) => child.receiveShadow);
assert.ok(shadowPlane, 'ground should create a shadow receiver');

ground.update(new Vector3(10, 0, 10), 2);
assert.equal(grid.material.uniforms.uCameraDistance.value, 2);
assert.equal(grid.material.uniforms.uMaxDimension.value, 2);
assert.equal(grid.position.x, 10);
assert.equal(grid.position.z, 10);
assert.equal(shadowPlane.position.x, 1, 'shadow receiver must stay under the model');
assert.equal(shadowPlane.position.z, 1);
ground.dispose();

// An invisible branch contributes nothing, including to the world bounds.
const invisibleGroup = new Group();
invisibleGroup.visible = false;
invisibleGroup.add(new Mesh(new BufferGeometry().setAttribute('position', new BufferAttribute(
  new Float32Array([0, 0, 0, 100, 0, 0, 0, 100, 0]),
  3,
))));
const mixed = new Group();
mixed.add(invisibleGroup);
mixed.add(new Mesh(new BufferGeometry().setAttribute('position', new BufferAttribute(
  new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]),
  3,
))));
const mixedStats = collectModelStats(mixed);
assert.equal(mixedStats.meshes, 1);
assert.equal(mixedStats.renderables, 1);
assert.equal(mixedStats.vertices, 3);
assert.equal(mixedStats.maxDimension, 1, 'invisible geometry must not expand the bounds');

console.log('Model statistics verified:', {
  vertices: stats.vertices,
  triangles: stats.triangles,
  indexedTriangles: indexedStats.triangles,
  hiddenBranchMeshes: mixedStats.meshes,
  gridSteps: [12, 24, 60, 120].map(niceGridStep),
});
