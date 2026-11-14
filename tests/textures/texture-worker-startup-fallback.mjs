import assert from 'node:assert/strict';
import { decodeTextureInWorker } from '../../src/loaders/texture-worker-client.js';

const originalWorker = globalThis.Worker;
const originalCreateObjectURL = URL.createObjectURL;
const originalRevokeObjectURL = URL.revokeObjectURL;
const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
Object.defineProperty(globalThis, 'navigator', {
  value: { hardwareConcurrency: 8, deviceMemory: 8 },
  configurable: true,
});

class FailingWorker {
  constructor() {
    this.onmessage = null;
    this.onerror = null;
    this.onmessageerror = null;
    this.terminated = false;
    queueMicrotask(() => this.onerror?.({ message: 'worker startup failed' }));
  }

  postMessage() {
    throw new Error('input must not be transferred before the worker is ready');
  }

  terminate() {
    this.terminated = true;
  }
}

globalThis.Worker = FailingWorker;
URL.createObjectURL = () => 'blob:failing-worker';
URL.revokeObjectURL = () => {};
globalThis.__DSH3DV_REQUIRE__ = {
  async: async () => ({ workerSource: 'failing-worker-source' }),
};

const bytes = new Uint8Array([7, 8, 9]);
let fallbackInput = null;
const result = await decodeTextureInWorker('exr', bytes, async (_format, data) => {
  fallbackInput = data;
  return { fallback: true };
}, { transfer: true });

assert.equal(result.fallback, true);
assert.equal(fallbackInput, bytes);
assert.deepEqual([...bytes], [7, 8, 9], 'startup failure must not detach the caller buffer');

globalThis.Worker = originalWorker;
URL.createObjectURL = originalCreateObjectURL;
URL.revokeObjectURL = originalRevokeObjectURL;
if (originalNavigator === undefined) delete globalThis.navigator;
else Object.defineProperty(globalThis, 'navigator', originalNavigator);
delete globalThis.__DSH3DV_REQUIRE__;

console.log('Worker startup fallback verified:', { fallbackInput: fallbackInput.length });
