import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { disposeObject } from '../src/model.js';
import * as THREE_BRIDGE from '../src/loaders/three-bridge.js';

globalThis.__DSH3DV_THREE__ = { ...THREE_BRIDGE, __esModule: true };
globalThis.window = { innerWidth: 1024, innerHeight: 768 };

const loaders = {
  fbx: 'loadFbxModel',
  obj: 'loadObjModel',
  gltf: 'loadGltfModel',
  stl: 'loadStlModel',
};
const loaded = {};

for (const [name, exportName] of Object.entries(loaders)) {
  const code = await readFile(new URL(`../dist/client.${name}.js`, import.meta.url), 'utf8');
  let registration;
  const window = {
    __ModuleLoader__: {
      load(value) {
        registration = value;
      },
    },
  };

  new Function('window', code)(window);
  assert.ok(registration, `${name} chunk must register a factory`);
  assert.equal(registration.id, 'dsh-3d-viewer');
  assert.equal(registration.chunk, `client.${name}.js`);

  const exports = registration.factory((id) => {
    throw new Error(`unexpected synchronous require in ${name} chunk: ${id}`);
  });
  assert.equal(typeof exports[exportName], 'function', `${name} chunk must export ${exportName}`);
  loaded[name] = exports;
}

const stlPath = fileURLToPath(new URL('../samples/TestCube.stl', import.meta.url));
if (existsSync(stlPath)) {
  const stl = await loaded.stl.loadStlModel(await readFile(stlPath), {});
  assert.equal(stl.object.isMesh, true);
  disposeObject(stl.object);
}

const obj = await loaded.obj.loadObjModel('v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n', {});
assert.equal(obj.object.children.length, 1);
disposeObject(obj.object);

const gltf = await loaded.gltf.loadGltfModel(JSON.stringify({
  asset: { version: '2.0' },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [{ name: 'Empty' }],
}), {});
assert.ok(gltf.object);
disposeObject(gltf.object);

const fbxPath = fileURLToPath(new URL('../samples/PreviewSphere.fbx', import.meta.url));
if (existsSync(fbxPath)) {
  const fbx = await loaded.fbx.loadFbxModel(await readFile(fbxPath), {});
  assert.ok(fbx.object.children.length > 0);
  disposeObject(fbx.object);
}

console.log('Lazy loader chunks verified:', Object.keys(loaders));
