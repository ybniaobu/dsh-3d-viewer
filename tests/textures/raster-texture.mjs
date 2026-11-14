import assert from 'node:assert/strict';
import { decodeWorkspaceTexture } from '../../src/loaders/workspace.js';

const originalCreateImageBitmap = globalThis.createImageBitmap;
const originalOffscreenCanvas = globalThis.OffscreenCanvas;
const originalWorker = globalThis.__DSH3DV_TEXTURE_WORKER__;
const bitmapTypes = [];
let closed = 0;

globalThis.createImageBitmap = async (blob) => {
  bitmapTypes.push(blob.type);
  return {
    width: 2,
    height: 1,
    close() {
      closed += 1;
    },
  };
};

globalThis.OffscreenCanvas = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getContext() {
    return {
      drawImage() {},
      getImageData() {
        return {
          data: new Uint8ClampedArray([
            255, 0, 0, 255,
            0, 255, 0, 128,
          ]),
          width: 2,
          height: 1,
        };
      },
    };
  }
};

delete globalThis.__DSH3DV_TEXTURE_WORKER__;

try {
  const png = await decodeWorkspaceTexture('png', new Uint8Array([1, 2, 3]));
  assert.equal(png.image.width, 2);
  assert.equal(png.image.height, 1);
  assert.equal(png.image.data.length, 8);
  assert.equal(png.image.data[0], 255);
  assert.equal(png.image.data[3], 255);
  assert.equal(png.image.data[7], 128);
  assert.equal(png.flipY, false);
  assert.equal(png.userData.dsh3dHdr, false);
  png.dispose();

  const jpeg = await decodeWorkspaceTexture('jpeg', new Uint8Array([4, 5, 6]));
  assert.equal(jpeg.image.width, 2);
  jpeg.dispose();

  assert.deepEqual(bitmapTypes, ['image/png', 'image/jpeg']);
  assert.equal(closed, 2, 'decoded bitmaps must be closed');
} finally {
  if (originalCreateImageBitmap === undefined) delete globalThis.createImageBitmap;
  else globalThis.createImageBitmap = originalCreateImageBitmap;
  if (originalOffscreenCanvas === undefined) delete globalThis.OffscreenCanvas;
  else globalThis.OffscreenCanvas = originalOffscreenCanvas;
  if (originalWorker !== undefined) globalThis.__DSH3DV_TEXTURE_WORKER__ = originalWorker;
}

console.log('PNG/JPEG texture decode verified:', { bitmapTypes, closed });
