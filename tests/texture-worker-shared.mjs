import assert from 'node:assert/strict';

const firstModule = await import('../src/loaders/texture-worker-client.js?shared=a');
const secondModule = await import('../src/loaders/texture-worker-client.js?shared=b');

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
  constructor() {
    this.onmessage = null;
    this.onerror = null;
    this.onmessageerror = null;
    this.terminated = false;
    workers.push(this);
    queueMicrotask(() => this.onmessage?.({ data: { ready: true } }));
  }

  postMessage(message) {
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

  terminate() {
    this.terminated = true;
  }
}

globalThis.Worker = MockWorker;
URL.createObjectURL = () => 'blob:shared-worker';
URL.revokeObjectURL = () => {};
globalThis.__DSH3DV_REQUIRE__ = {
  async: async () => ({ workerSource: 'shared-worker-source' }),
};

const fallback = async () => {
  throw new Error('fallback must not run when workers are available');
};

const [first, second] = await Promise.all([
  firstModule.decodeTextureInWorker('exr', new Uint8Array([1]), fallback),
  secondModule.decodeTextureInWorker('hdr', new Uint8Array([2]), fallback),
]);

assert.equal(workers.length, 2, 'separate bundle copies must share one worker pool');
assert.equal(first.image.width, 1);
assert.equal(second.image.width, 1);
first.dispose();
second.dispose();

globalThis.Worker = originalWorker;
URL.createObjectURL = originalCreateObjectURL;
URL.revokeObjectURL = originalRevokeObjectURL;
if (originalNavigator === undefined) delete globalThis.navigator;
else Object.defineProperty(globalThis, 'navigator', originalNavigator);
delete globalThis.__DSH3DV_REQUIRE__;

console.log('Shared texture worker pool verified:', { workers: workers.length });
