import assert from 'node:assert/strict';
import { decodeTextureInWorker } from '../src/loaders/texture-worker-client.js';

const originalWorker = globalThis.Worker;
const originalCreateObjectURL = URL.createObjectURL;
const originalRevokeObjectURL = URL.revokeObjectURL;
const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
Object.defineProperty(globalThis, 'navigator', {
  value: { hardwareConcurrency: 8, deviceMemory: 8 },
  configurable: true,
});

const workers = [];
class HoldWorker {
  constructor() {
    this.terminated = false;
    workers.push(this);
    queueMicrotask(() => {
      this.onmessage?.({ data: { ready: true } });
    });
  }

  postMessage() {}

  terminate() {
    this.terminated = true;
  }
}

globalThis.Worker = HoldWorker;
URL.createObjectURL = () => 'blob:cancel-worker';
URL.revokeObjectURL = () => {};
globalThis.__DSH3DV_REQUIRE__ = {
  async: async () => ({ workerSource: 'cancel-worker-source' }),
};

const controller = new AbortController();
let fallbackCalled = false;
const task = decodeTextureInWorker('exr', new Uint8Array([1]), async () => {
  fallbackCalled = true;
  throw new Error('fallback should not run after cancellation');
}, { signal: controller.signal });

await new Promise((resolve) => setTimeout(resolve, 0));
controller.abort();

await assert.rejects(task, (error) => error.name === 'AbortError');
assert.equal(workers.length, 2);
assert.equal(workers[0].terminated, true, 'the idle/active worker is terminated');
assert.equal(fallbackCalled, false);

globalThis.Worker = originalWorker;
URL.createObjectURL = originalCreateObjectURL;
URL.revokeObjectURL = originalRevokeObjectURL;
if (originalNavigator === undefined) delete globalThis.navigator;
else Object.defineProperty(globalThis, 'navigator', originalNavigator);
delete globalThis.__DSH3DV_REQUIRE__;

console.log('Texture worker cancellation verified:', { terminated: workers[0].terminated });
