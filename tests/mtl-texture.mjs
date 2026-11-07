import assert from 'node:assert/strict';
import { loadModelBytes } from '../src/loaders/model-loader.js';
import { loadObjModel } from '../src/loaders/obj.js';
import { disposeObject } from '../src/model.js';

globalThis.__DSH3DV_REQUIRE__ = {
  async: async () => ({ loadObjModel }),
};

// ImageLoader uses an HTMLImageElement. A minimal fake is enough to exercise
// the workspace texture path without a browser; bytes are never decoded.
globalThis.document = {
  createElementNS() {
    const listeners = new Map();
    const image = {
      complete: true,
      addEventListener(type, callback) {
        listeners.set(type, callback);
      },
      removeEventListener(type) {
        listeners.delete(type);
      },
      set src(value) {
        this._src = value;
        const callback = listeners.get('load');
        if (callback !== undefined) queueMicrotask(() => callback.call(this));
      },
      get src() {
        return this._src;
      },
    };
    return image;
  },
};

const encoder = new TextEncoder();
const obj = `# textured material test
mtllib textured.mtl
o triangle
v 0 0 0
v 1 0 0
v 0 1 0
usemtl red
f 1 2 3
`;
const mtl = `newmtl red
Kd 1 0 0
map_Kd texture.png
`;
const textureBytes = new Uint8Array([137, 80, 78, 71]);

const reads = [];
const readWorkspaceFile = async (_address, path) => {
  reads.push(path);
  if (path === 'textured.mtl') {
    return {
      ok: true,
      value: { data: encoder.encode(mtl), absolutePath: 'F:/workspace/samples/textured.mtl' },
    };
  }
  if (path === 'texture.png') {
    return {
      ok: true,
      value: { data: textureBytes, absolutePath: 'F:/workspace/samples/texture.png' },
    };
  }
  return { ok: false, error: { message: `missing ${path}` } };
};

const loaded = await loadModelBytes(encoder.encode(obj), 'obj', {
  resourceAddress: 'dsh-resource://file/session/session-1/samples/textured.obj',
  readWorkspaceFile,
});
const mesh = loaded.object.children.find((child) => child.isMesh);
assert.ok(mesh);
assert.ok(mesh.material.map, 'MTL diffuse map should be attached');
assert.ok(mesh.material.map.image, 'texture image should be loaded');
assert.equal(mesh.material.map.image.src.startsWith('blob:'), true);
assert.deepEqual(reads.sort(), ['texture.png', 'textured.mtl']);

loaded.assets.dispose();
disposeObject(loaded.object);

console.log('OBJ MTL texture verified:', {
  reads,
  mapImage: mesh.material.map.image.src.startsWith('blob:'),
});
