import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { BoxGeometry, Group, Mesh, MeshStandardMaterial, PlaneGeometry } from 'three';
import { hideBakedShadowPlanes, loadGltfModel } from '../src/loaders/gltf.js';
import { collectModelStats, disposeObject } from '../src/model.js';

if (typeof globalThis.ProgressEvent === 'undefined') {
  globalThis.ProgressEvent = class ProgressEvent extends Event {
    constructor(type, init = {}) {
      super(type);
      this.lengthComputable = Boolean(init.lengthComputable);
      this.loaded = init.loaded ?? 0;
      this.total = init.total ?? 0;
    }
  };
}

const glbUrl = new URL('../samples/AnimatedTriangle.glb', import.meta.url);
let glb = null;
let glbStats = null;
if (existsSync(fileURLToPath(glbUrl))) {
  const glbBytes = await readFile(glbUrl);
  glb = await loadGltfModel(
    glbBytes.buffer.slice(glbBytes.byteOffset, glbBytes.byteOffset + glbBytes.byteLength),
  );
  glbStats = collectModelStats(glb.object);
  assert.equal(glb.object.animations.length, 1);
  assert.equal(glb.object.animations[0].name, 'Move');
  assert.equal(glb.object.animations[0].duration, 1);
  assert.equal(glbStats.triangles, 1);
  glb.assets.dispose();
  disposeObject(glb.object);
} else {
  console.log('samples/AnimatedTriangle.glb is missing; skipping the GLB sample checks.');
}

const positions = new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]);
const indices = new Uint16Array([0, 1, 2]);
const times = new Float32Array([0, 1]);
const translations = new Float32Array([0, 0, 0, 0, 0.5, 0]);
const bin = Buffer.concat([
  Buffer.from(positions.buffer),
  Buffer.from(indices.buffer),
  Buffer.alloc(2),
  Buffer.from(times.buffer),
  Buffer.from(translations.buffer),
]);

const external = {
  asset: { version: '2.0' },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [{ name: 'Triangle', mesh: 0 }],
  meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1, mode: 4 }] }],
  buffers: [{ uri: 'triangle.bin', byteLength: bin.length }],
  bufferViews: [
    { buffer: 0, byteOffset: 0, byteLength: 36, target: 34962 },
    { buffer: 0, byteOffset: 36, byteLength: 6, target: 34963 },
    { buffer: 0, byteOffset: 44, byteLength: 8 },
    { buffer: 0, byteOffset: 52, byteLength: 24 },
  ],
  accessors: [
    { bufferView: 0, componentType: 5126, count: 3, type: 'VEC3', min: [0, 0, 0], max: [1, 1, 0] },
    { bufferView: 1, componentType: 5123, count: 3, type: 'SCALAR' },
    { bufferView: 2, componentType: 5126, count: 2, type: 'SCALAR', min: [0], max: [1] },
    { bufferView: 3, componentType: 5126, count: 2, type: 'VEC3' },
  ],
  animations: [{
    name: 'ExternalMove',
    samplers: [{ input: 2, output: 3, interpolation: 'LINEAR' }],
    channels: [{ sampler: 0, target: { node: 0, path: 'translation' } }],
  }],
};

let reads = 0;
const gltfExternal = await loadGltfModel(JSON.stringify(external), {
  resourceAddress: 'dsh-resource://file/session/test/samples/AnimatedTriangle.gltf',
  readWorkspaceFile: async (_address, path) => {
    reads += 1;
    assert.equal(path, 'triangle.bin');
    return { ok: true, value: { data: new Uint8Array(bin), absolutePath: 'F:/workspace/triangle.bin' } };
  },
});
const externalStats = collectModelStats(gltfExternal.object);
assert.equal(reads, 1);
assert.equal(gltfExternal.object.animations.length, 1);
assert.equal(gltfExternal.object.animations[0].name, 'ExternalMove');
assert.equal(externalStats.triangles, 1);
gltfExternal.assets.dispose();
disposeObject(gltfExternal.object);

const shadowScene = new Group();
const car = new Mesh(new BoxGeometry(2, 1, 2), new MeshStandardMaterial());
shadowScene.add(car);
const shadowPlane = new Mesh(new PlaneGeometry(10, 10), new MeshStandardMaterial({ transparent: true }));
shadowPlane.name = 'Plane001';
shadowPlane.rotation.x = -Math.PI / 2;
shadowPlane.position.y = -0.5;
shadowScene.add(shadowPlane);
assert.equal(hideBakedShadowPlanes(shadowScene), 1);
assert.equal(shadowPlane.visible, false);
assert.equal(car.visible, true);
const shadowStats = collectModelStats(shadowScene);
assert.equal(shadowStats.meshes, 1);
assert.equal(shadowStats.maxDimension, 2);
car.geometry.dispose();
car.material.dispose();
shadowPlane.geometry.dispose();
shadowPlane.material.dispose();

console.log('glTF/GLB verified:', {
  glbAnimations: glb === null ? [] : glb.object.animations.map((clip) => clip.name),
  glbTriangles: glbStats === null ? 0 : glbStats.triangles,
  externalBufferReads: reads,
  externalAnimations: gltfExternal.object.animations.map((clip) => clip.name),
  hiddenBakedShadowPlanes: 1,
});

