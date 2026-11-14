import assert from 'node:assert/strict';
import { PerspectiveCamera, Vector3 } from 'three';
import { frameModel, updateClipPlanes } from '../../src/scene/camera.js';

const camera = new PerspectiveCamera(38, 2, 0.1, 1000);
const controls = {
  target: new Vector3(),
  minDistance: 0,
  maxDistance: 0,
  minPolarAngle: 0,
  maxPolarAngle: Math.PI,
  update() {},
};
const stats = {
  center: new Vector3(1, 0, 1),
  size: new Vector3(2, 2, 2),
};

const distance = frameModel(camera, controls, stats, 2);
assert.ok(distance > 0);
assert.equal(camera.position.distanceTo(controls.target), distance);
assert.equal(controls.target.x, 1);
assert.equal(controls.target.z, 1);

updateClipPlanes(camera, 10, 2);
assert.equal(camera.near, 0.02);
assert.equal(camera.far, 400);

updateClipPlanes(camera, 10, 2);
assert.equal(camera.near, 0.02);
assert.equal(camera.far, 400);

console.log('Perspective camera helpers verified:', { distance, near: camera.near, far: camera.far });
