import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { disposeObject } from '../src/model.js';
import * as THREE_BRIDGE from '../src/loaders/three-bridge.js';
import { createWorkspaceAssetLoader } from '../src/loaders/workspace.js';
import { textureImageData } from '../src/ui/texture-viewer.js';

globalThis.__DSH3DV_THREE__ = { ...THREE_BRIDGE, __esModule: true };
globalThis.window = { innerWidth: 1024, innerHeight: 768 };
globalThis.ImageData = class ImageData {
  constructor(data, width, height) {
    this.data = data;
    this.width = width;
    this.height = height;
  }
};

const loaders = {
  fbx: 'loadFbxModel',
  obj: 'loadObjModel',
  gltf: 'loadGltfModel',
  stl: 'loadStlModel',
};
const textureLoaders = {
  'tex-tga': 'decodeTga',
  'tex-exr': 'decodeExr',
  'tex-hdr': 'decodeHdr',
};
const loaded = {};
const textures = {};

async function loadChunk(name, exportName) {
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
  return exports;
}

for (const [name, exportName] of Object.entries(loaders)) {
  loaded[name] = await loadChunk(name, exportName);
}
for (const [name, exportName] of Object.entries(textureLoaders)) {
  textures[name] = await loadChunk(name, exportName);
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

// 2x2 uncompressed 24-bit TGA, enough to exercise the real TGALoader parse.
const tga = new Uint8Array(18 + 2 * 2 * 3);
tga[2] = 2;
tga[12] = 2;
tga[14] = 2;
tga[16] = 24;
const pixels = [[0, 0, 255], [0, 255, 0], [255, 0, 0], [255, 255, 255]];
pixels.forEach(([b, g, r], index) => {
  const offset = 18 + index * 3;
  tga[offset] = b;
  tga[offset + 1] = g;
  tga[offset + 2] = r;
});
const tgaTexture = textures['tex-tga'].decodeTga(tga.buffer);
assert.equal(tgaTexture.image.width, 2);
assert.equal(tgaTexture.image.height, 2);
assert.equal(tgaTexture.image.data.length, 16);
const tgaPreview = textureImageData(tgaTexture);
assert.equal(tgaPreview.width, 2);
assert.equal(tgaPreview.height, 2);
assert.equal(tgaPreview.data.length, 16);
const tgaFlipped = textureImageData(tgaTexture, true);
assert.notDeepEqual(
  Array.from(tgaPreview.data.slice(0, 4)),
  Array.from(tgaFlipped.data.slice(0, 4)),
);
tgaTexture.dispose();

// The workspace loader must return a DataTexture for raw formats; a plain
// Texture with a data image is uploaded as an image element and renders gray.
globalThis.__DSH3DV_REQUIRE__ = {
  async: async (spec) => {
    const match = /tex-(tga|exr|hdr)\.js$/u.exec(spec);
    if (match === null) throw new Error(`unexpected texture chunk: ${spec}`);
    return textures[`tex-${match[1]}`];
  },
};
const assets = createWorkspaceAssetLoader({
  readFile: async () => ({ ok: true, value: { data: tga } }),
  onWarn: () => {},
});
const workspaceTga = assets.manager.getHandler('test.tga').load('test.tga');
await assets.settle();
assert.equal(workspaceTga.isDataTexture, true);
assert.equal(workspaceTga.image.width, 2);
workspaceTga.dispose();
assets.dispose();

// 4x4 flat Radiance RGBE (width < 8 uses the old non-RLE scanline format).
const hdrWidth = 4;
const hdrHeight = 4;
const hdrHeader = Buffer.from(
  `#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y ${hdrHeight} +X ${hdrWidth}\n`,
  'ascii',
);
const hdrPixels = new Uint8Array(hdrWidth * hdrHeight * 4);
for (let y = 0; y < hdrHeight; y += 1) {
  for (let x = 0; x < hdrWidth; x += 1) {
    const index = (y * hdrWidth + x) * 4;
    const red = x / hdrWidth;
    const green = y / hdrHeight;
    const max = Math.max(red, green, 0.5);
    const exponent = Math.floor(Math.log2(max)) + 1;
    const scale = 256 / 2 ** exponent;
    hdrPixels[index] = Math.floor(red * scale);
    hdrPixels[index + 1] = Math.floor(green * scale);
    hdrPixels[index + 2] = Math.floor(0.5 * scale);
    hdrPixels[index + 3] = exponent + 128;
  }
}
const hdr = new Uint8Array(hdrHeader.length + hdrPixels.length);
hdr.set(hdrHeader);
hdr.set(hdrPixels, hdrHeader.length);
const hdrTexture = textures['tex-hdr'].decodeHdr(hdr.buffer);
assert.equal(hdrTexture.image.width, hdrWidth);
assert.equal(hdrTexture.image.height, hdrHeight);
assert.equal(hdrTexture.userData.dsh3dHdr, true);
const hdrPreview = textureImageData(hdrTexture);
assert.equal(hdrPreview.width, hdrWidth);
assert.equal(hdrPreview.height, hdrHeight);
assert.equal(hdrPreview.data.length, hdrWidth * hdrHeight * 4);
hdrTexture.dispose();

console.log('Lazy loader chunks verified:', {
  formats: Object.keys(loaders),
  textures: Object.keys(textureLoaders),
});
