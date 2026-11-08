import assert from 'node:assert/strict';
import { decodeTextureInWorker, textureWorkerCount } from '../src/loaders/texture-worker-client.js';

assert.equal(textureWorkerCount({ hardwareConcurrency: 8, deviceMemory: 8 }), 2);
assert.equal(textureWorkerCount({ hardwareConcurrency: 8, deviceMemory: 4 }), 1);
assert.equal(textureWorkerCount({ hardwareConcurrency: 4 }), 1);
assert.equal(textureWorkerCount({}), 2);

const originalWorker = globalThis.Worker;
const originalCreateObjectURL = URL.createObjectURL;
const originalRevokeObjectURL = URL.revokeObjectURL;
const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
Object.defineProperty(globalThis, 'navigator', {
  value: { hardwareConcurrency: 8, deviceMemory: 8 },
  configurable: true,
});
const workers = [];

class MockWorker {
  constructor(url) {
    this.url = url;
    this.onmessage = null;
    this.onerror = null;
    this.onmessageerror = null;
    this.posted = 0;
    this.lastTransfer = null;
    workers.push(this);
    queueMicrotask(() => {
      this.onmessage?.({ data: { ready: true } });
    });
  }

  postMessage(message, transfer) {
    this.posted += 1;
    this.lastTransfer = transfer;
    queueMicrotask(() => {
      this.onmessage?.({
        data: {
          id: message.id,
          ok: true,
          width: 1,
          height: 1,
          data: new ArrayBuffer(8),
          format: 1023,
          type: 1016,
          colorSpace: '',
          flipY: false,
          generateMipmaps: false,
          minFilter: 1006,
          magFilter: 1006,
          unpackAlignment: 1,
        },
      });
    });
  }

  terminate() {}
}

globalThis.Worker = MockWorker;
URL.createObjectURL = () => 'blob:mock-worker';
URL.revokeObjectURL = () => {};
globalThis.__DSH3DV_REQUIRE__ = {
  async: async () => ({ workerSource: 'mock-worker-source' }),
};

const fallback = async () => {
  throw new Error('fallback must not run when workers are available');
};

const [first, second] = await Promise.all([
  decodeTextureInWorker('exr', new Uint8Array([1]), fallback),
  decodeTextureInWorker('hdr', new Uint8Array([2]), fallback),
]);

assert.equal(workers.length, 2, 'a small worker pair is created');
assert.equal(workers[0].posted, 1);
assert.equal(workers[1].posted, 1);
assert.equal(first.image.width, 1);
assert.equal(second.image.width, 1);
first.dispose();
second.dispose();

const transferredBytes = new Uint8Array([3]);
const transferred = await decodeTextureInWorker('exr', transferredBytes, fallback, { transfer: true });
assert.equal(workers[0].lastTransfer[0], transferredBytes.buffer, 'owned material buffers are transferred, not copied');
transferred.dispose();

globalThis.Worker = originalWorker;
URL.createObjectURL = originalCreateObjectURL;
URL.revokeObjectURL = originalRevokeObjectURL;
if (originalNavigator === undefined) delete globalThis.navigator;
else Object.defineProperty(globalThis, 'navigator', originalNavigator);
delete globalThis.__DSH3DV_REQUIRE__;

console.log('Texture worker pool verified:', { workers: workers.length });
