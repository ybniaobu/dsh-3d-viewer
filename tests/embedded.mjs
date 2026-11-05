import assert from 'node:assert/strict';
import {
  BoxGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
} from 'three';
import { loadModelBytes } from '../src/loaders/model-loader.js';
import { disposeObject, stripEmbeddedSceneNodes } from '../src/model.js';

const root = new Group();
const mesh = new Mesh(new BoxGeometry(), new MeshStandardMaterial());
const light = new DirectionalLight();
const camera = new PerspectiveCamera();
root.add(mesh, light, camera);

assert.equal(stripEmbeddedSceneNodes(root), 2);
assert.equal(root.children.length, 1);
assert.equal(root.children[0], mesh, 'only model geometry should remain');

// A glTF scene with KHR_lights_punctual must lose its light before preview.
const gltf = {
  asset: { version: '2.0' },
  extensionsUsed: ['KHR_lights_punctual'],
  extensions: {
    KHR_lights_punctual: {
      lights: [{ type: 'point', intensity: 3, color: [1, 0, 0] }],
    },
  },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [{ name: 'Lamp', extensions: { KHR_lights_punctual: { light: 0 } } }],
};
const loaded = await loadModelBytes(JSON.stringify(gltf), 'gltf');
const leftover = [];
loaded.object.traverse((child) => {
  if (child.isLight === true || child.isCamera === true || child.isAudio === true) {
    leftover.push(child);
  }
});
assert.deepEqual(leftover, [], 'embedded lights and cameras should be stripped');

loaded.assets.dispose();
disposeObject(loaded.object);
mesh.geometry.dispose();
mesh.material.dispose();

console.log('Embedded scene nodes verified:', {
  removedFromGraph: 2,
  gltfEmbeddedLights: leftover.length,
});
