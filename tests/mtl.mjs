import assert from 'node:assert/strict';
import { loadModelBytes } from '../src/loaders/model-loader.js';
import { loadObjModel } from '../src/loaders/obj.js';
import { parseFileAddress } from '../src/loaders/workspace.js';
import { disposeObject } from '../src/model.js';

globalThis.__DSH3DV_REQUIRE__ = {
  async: async () => ({ loadObjModel }),
};

const encoder = new TextEncoder();

assert.deepEqual(
  parseFileAddress('dsh-resource://file/session/session-1/samples/test.obj'),
  { scope: 'session', sessionId: 'session-1', path: 'samples/test.obj' },
);
assert.equal(parseFileAddress('dsh-resource://file/absolute/F:/samples/test.obj'), undefined);
assert.equal(parseFileAddress('not an address'), undefined);

const obj = `# material test
mtllib test.mtl
o triangle
v 0 0 0
v 1 0 0
v 0 1 0
usemtl red
f 1 2 3
`;
const mtl = `newmtl red
Kd 1 0 0
Ks 0.2 0.2 0.2
Ns 100
d 0.5
`;

const reads = [];
const readWorkspaceFile = async (address, path, options) => {
  reads.push({ address, path, baseFile: options?.baseFile });
  if (path === 'test.mtl') {
    return {
      ok: true,
      value: {
        data: encoder.encode(mtl),
        absolutePath: 'F:/workspace/samples/test.mtl',
        bytes: mtl.length,
      },
    };
  }
  return { ok: false, error: { message: `missing ${path}` } };
};

const loaded = await loadModelBytes(encoder.encode(obj), 'obj', {
  resourceAddress: 'dsh-resource://file/session/session-1/samples/test.obj',
  readWorkspaceFile,
});
assert.ok(loaded.assets, 'MTL assets should be created');
assert.equal(reads[0].path, 'test.mtl');
assert.equal(reads[0].address, 'dsh-resource://file/session/session-1/samples/test.obj');

const mesh = loaded.object.children.find((child) => child.isMesh);
assert.ok(mesh, 'expected a mesh');
const material = mesh.material;
assert.equal(material.name, 'red');
assert.equal(material.isMeshPhongMaterial, true);
assert.equal(material.color.r, 1);
assert.equal(material.color.g, 0);
assert.equal(material.opacity, 0.5);
assert.equal(material.transparent, true);
assert.equal(material.shininess, 100);

loaded.assets.dispose();
disposeObject(loaded.object);

const fallback = await loadModelBytes(encoder.encode(obj), 'obj', {
  resourceAddress: 'dsh-resource://file/session/session-1/samples/test.obj',
  readWorkspaceFile: async () => ({ ok: false, error: { message: 'no mtl' } }),
});
assert.equal(fallback.assets, null);
assert.ok(fallback.object.children.some((child) => child.isMesh));
disposeObject(fallback.object);

// An MTL exported with the authoring machine's absolute path should fall back
// to the basename before the material library is abandoned.
const absoluteReads = [];
const absoluteObj = obj.replace('mtllib test.mtl', 'mtllib C:\\models\\test.mtl');
const absoluteLoaded = await loadModelBytes(encoder.encode(absoluteObj), 'obj', {
  resourceAddress: 'dsh-resource://file/session/session-1/samples/test.obj',
  readWorkspaceFile: async (_address, path) => {
    absoluteReads.push(path);
    if (path === 'test.mtl') {
      return {
        ok: true,
        value: { data: encoder.encode(mtl), absolutePath: 'F:/workspace/samples/test.mtl' },
      };
    }
    return { ok: false, error: { message: `missing ${path}` } };
  },
});
assert.deepEqual(absoluteReads, ['C:\\models\\test.mtl', 'test.mtl']);
assert.ok(absoluteLoaded.assets, 'the basename fallback should load the material library');
assert.equal(absoluteLoaded.object.children.find((child) => child.isMesh).material.name, 'red');
absoluteLoaded.assets.dispose();
disposeObject(absoluteLoaded.object);

console.log('OBJ MTL loading verified:', {
  reads: reads.map((read) => read.path),
  absoluteFallbackReads: absoluteReads,
  material: material.name,
  opacity: material.opacity,
  shininess: material.shininess,
});
