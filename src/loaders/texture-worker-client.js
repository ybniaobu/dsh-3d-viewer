import {
  DataTexture,
  FloatType,
  HalfFloatType,
  LinearFilter,
  NoColorSpace,
  RGBAFormat,
  UnsignedByteType,
} from 'three';
import { asyncChunk } from './chunk-require.js';

const WORKER_CHUNK = './client.textures.worker.js';
const MAX_WORKER_COUNT = 2;
const SHARED_STATE_KEY = Symbol.for('dsh3d.texture-worker-pool.v1');

/**
 * The host and each lazy format bundle contain their own copy of this module.
 * Keep the pool on a symbol so all copies still share the same workers.
 *
 * @returns {{ workerPoolPromise: Promise<any[]> | null, workerPool: any[], workerIndex: number, nextRequestId: number, pendingRequests: Map<number, any> }} Shared pool state.
 */
function getSharedState() {
  let state = globalThis[SHARED_STATE_KEY];
  if (state === undefined) {
    state = {
      workerPoolPromise: null,
      workerPool: [],
      workerIndex: 0,
      nextRequestId: 0,
      pendingRequests: new Map(),
    };
    Object.defineProperty(globalThis, SHARED_STATE_KEY, {
      value: state,
      configurable: true,
    });
  }
  return state;
}

const state = getSharedState();

/**
 * Keep one worker on low-memory or low-core devices; two workers otherwise.
 * deviceMemory is only available in some Chromium browsers, so hardware
 * concurrency is the fallback signal.
 *
 * @param {{ hardwareConcurrency?: number, deviceMemory?: number }} [navigatorLike] Navigator-like capability source.
 * @returns {1 | 2} Worker count.
 */
export function textureWorkerCount(navigatorLike = globalThis.navigator) {
  const cores = Number(navigatorLike?.hardwareConcurrency);
  const memory = Number(navigatorLike?.deviceMemory);
  if (Number.isFinite(memory) && memory > 0 && memory <= 4) return 1;
  if (Number.isFinite(cores) && cores > 0 && cores <= 4) return 1;
  return MAX_WORKER_COUNT;
}

/**
 * @param {unknown} cause Worker startup failure.
 * @returns {Error} Error tagged so the caller can fall back to main-thread decode.
 */
function workerUnavailable(cause) {
  const error = new Error('The texture worker is unavailable.');
  error.code = 'worker-unavailable';
  error.cause = cause;
  return error;
}

/**
 * @returns {Error} Cancellation error.
 */
function abortError() {
  const error = new Error('Texture decoding was cancelled.');
  error.name = 'AbortError';
  error.code = 'abort';
  return error;
}

/**
 * @param {Uint8Array | ArrayBuffer} data Complete image bytes.
 * @returns {ArrayBuffer} Transferable copy.
 */
function copyBuffer(data) {
  if (data instanceof ArrayBuffer) return data.slice(0);
  if (ArrayBuffer.isView(data)) {
    return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
  }
  throw new Error('The texture bytes are not an ArrayBuffer or typed array.');
}

/**
 * @param {Uint8Array | ArrayBuffer} data Complete image bytes.
 * @returns {ArrayBuffer} Buffer that can be transferred without copying.
 */
function ownedBuffer(data) {
  if (data instanceof ArrayBuffer) return data;
  if (ArrayBuffer.isView(data)
    && data.byteOffset === 0
    && data.byteLength === data.buffer.byteLength) {
    return data.buffer;
  }
  return copyBuffer(data);
}

/**
 * @param {{ entry: object, onAbort: () => void } | undefined} request Pending request.
 * @returns {void}
 */
function cleanupRequest(request) {
  if (request === undefined) return;
  request.signal?.removeEventListener('abort', request.onAbort);
}

/**
 * @param {{ worker: Worker, url: string, pending: Set<number> }} entry Worker entry.
 * @returns {void}
 */
function releaseWorker(entry) {
  entry.worker.terminate();
  if (entry.url !== '') {
    URL.revokeObjectURL(entry.url);
    entry.url = '';
  }
  const index = state.workerPool.indexOf(entry);
  if (index !== -1) state.workerPool.splice(index, 1);
  state.workerIndex = 0;
  if (state.workerPool.length === 0) state.workerPoolPromise = null;
}

/**
 * @param {{ worker: Worker, url: string, pending: Set<number> }} entry Worker entry.
 * @param {Error} error Failure to deliver to its pending requests.
 * @returns {void}
 */
function rejectEntryRequests(entry, error) {
  for (const id of entry.pending) {
    const request = state.pendingRequests.get(id);
    state.pendingRequests.delete(id);
    cleanupRequest(request);
    request?.reject(error);
  }
  entry.pending.clear();
}

/**
 * @param {{ worker: Worker, url: string, pending: Set<number> }} entry Worker entry.
 * @param {MessageEvent} event Worker response.
 * @returns {void}
 */
function settleRequest(entry, event) {
  if (entry.url !== '') {
    URL.revokeObjectURL(entry.url);
    entry.url = '';
  }
  const id = event.data?.id;
  const request = state.pendingRequests.get(id);
  if (request === undefined) return;
  state.pendingRequests.delete(id);
  entry.pending.delete(id);
  cleanupRequest(request);
  if (event.data.ok === true) {
    request.resolve(event.data);
  } else {
    request.reject(new Error(event.data.error ?? 'The texture worker failed.'));
  }
}

/**
 * Drop one broken worker and fail only the requests assigned to it. The other
 * worker can continue; when the last worker is gone the next decode starts a
 * fresh pool.
 *
 * @param {{ worker: Worker, url: string, pending: Set<number> }} entry Worker entry.
 * @param {ErrorEvent} event Worker failure.
 * @returns {void}
 */
function failWorker(entry, event) {
  const error = workerUnavailable(new Error(event.message || 'The texture worker failed.'));
  entry.rejectReady?.(error);
  rejectEntryRequests(entry, error);
  releaseWorker(entry);
}

/**
 * @param {number} id Request id.
 * @returns {void}
 */
function cancelRequest(id) {
  const request = state.pendingRequests.get(id);
  if (request === undefined) return;
  state.pendingRequests.delete(id);
  request.entry.pending.delete(id);
  cleanupRequest(request);
  request.reject(abortError());
  if (request.entry.pending.size === 0) releaseWorker(request.entry);
}

/**
 * Start one Blob worker from a source string.
 *
 * @param {string} source Compiled worker source.
 * @returns {{ worker: Worker, url: string, pending: Set<number> }} Worker entry.
 */
function createWorker(source) {
  const url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
  let worker;
  try {
    worker = new Worker(url);
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  }
  let resolveReady;
  let rejectReady;
  const readyPromise = new Promise((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
  });
  const entry = {
    worker,
    url,
    pending: new Set(),
    ready: false,
    readyPromise,
    rejectReady,
  };
  worker.onmessage = (event) => {
    if (event.data?.ready === true) {
      if (!entry.ready) {
        entry.ready = true;
        resolveReady();
      }
      return;
    }
    settleRequest(entry, event);
  };
  worker.onerror = (event) => failWorker(entry, event);
  worker.onmessageerror = (event) => failWorker(entry, event);
  return entry;
}

/**
 * Load the worker-source chunk once and start a small pair of workers. Two
 * copies keep independent EXR/HDR sidecars parallel without retaining a large
 * pool for the common single-texture case.
 *
 * @returns {Promise<Array<{ worker: Worker, url: string, pending: Set<number> }>>} Worker pool.
 */
function ensureWorkerPool() {
  if (state.workerPoolPromise !== null) return state.workerPoolPromise;
  state.workerPoolPromise = (async () => {
    if (typeof Worker !== 'function') throw new Error('Workers are unavailable.');
    const module = await asyncChunk(WORKER_CHUNK);
    if (typeof module.workerSource !== 'string') {
      throw new Error('The texture worker chunk is unavailable.');
    }
    const created = [];
    try {
      const count = textureWorkerCount();
      for (let index = 0; index < count; index += 1) {
        created.push(createWorker(module.workerSource));
      }
      await Promise.all(created.map((entry) => entry.readyPromise));
    } catch (error) {
      for (const entry of created) {
        entry.worker.terminate();
        URL.revokeObjectURL(entry.url);
      }
      throw error;
    }
    state.workerPool = created;
    state.workerIndex = 0;
    return state.workerPool;
  })().catch((error) => {
    state.workerPoolPromise = null;
    state.workerPool = [];
    throw workerUnavailable(error);
  });
  return state.workerPoolPromise;
}

/**
 * @param {'exr' | 'hdr'} format Source format.
 * @param {object} payload Worker response.
 * @returns {DataTexture} Decoded texture.
 */
function textureFromPayload(format, payload) {
  const ArrayType = payload.type === FloatType
    ? Float32Array
    : payload.type === UnsignedByteType
      ? Uint8Array
      : Uint16Array;
  const texture = new DataTexture(
    new ArrayType(payload.data),
    payload.width,
    payload.height,
    payload.format ?? RGBAFormat,
    payload.type ?? HalfFloatType,
  );
  texture.colorSpace = payload.colorSpace ?? NoColorSpace;
  texture.flipY = payload.flipY ?? (format === 'hdr');
  texture.generateMipmaps = payload.generateMipmaps ?? false;
  texture.minFilter = payload.minFilter ?? LinearFilter;
  texture.magFilter = payload.magFilter ?? LinearFilter;
  texture.unpackAlignment = payload.unpackAlignment ?? 1;
  texture.userData.dsh3dHdr = true;
  if (format === 'exr') texture.userData.dsh3dSourceBottomUp = true;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Decode EXR/HDR through the shared worker pair. Requests are distributed
 * round-robin; each worker serializes its own queue. The fallback is called only
 * when workers are unavailable, not for a decoder error or cancellation.
 *
 * @param {'tga' | 'exr' | 'hdr'} format Texture format.
 * @param {Uint8Array | ArrayBuffer} data Complete image bytes.
 * @param {(format: 'tga' | 'exr' | 'hdr', data: Uint8Array | ArrayBuffer) => Promise<import('three').Texture>} fallback Main-thread decoder.
 * @param {{ signal?: AbortSignal, transfer?: boolean }} [options] Cancellation and ownership.
 * @returns {Promise<import('three').Texture>} Decoded texture.
 */
export async function decodeTextureInWorker(format, data, fallback, options = {}) {
  const { signal, transfer = false } = options;
  if (signal?.aborted === true) throw abortError();
  if (format !== 'exr' && format !== 'hdr') {
    return fallback(format, data);
  }

  let transferred = false;
  try {
    const pool = await ensureWorkerPool();
    if (signal?.aborted === true) throw abortError();
    if (pool.length === 0) throw workerUnavailable(new Error('No texture workers are available.'));
    const entry = pool[state.workerIndex % pool.length];
    state.workerIndex = (state.workerIndex + 1) % pool.length;
    const id = (state.nextRequestId += 1);
    const buffer = transfer ? ownedBuffer(data) : copyBuffer(data);
    const payload = await new Promise((resolve, reject) => {
      const request = { resolve, reject, entry, signal, onAbort: null };
      request.onAbort = () => cancelRequest(id);
      state.pendingRequests.set(id, request);
      entry.pending.add(id);
      signal?.addEventListener('abort', request.onAbort, { once: true });
      if (signal?.aborted === true) {
        request.onAbort();
        return;
      }
      try {
        entry.worker.postMessage({ id, format, bytes: buffer }, [buffer]);
        transferred = transfer
          && (data instanceof ArrayBuffer ? data.byteLength === 0 : data.byteLength === 0);
      } catch (error) {
        state.pendingRequests.delete(id);
        entry.pending.delete(id);
        cleanupRequest(request);
        reject(workerUnavailable(error));
      }
    });
    return textureFromPayload(format, payload);
  } catch (error) {
    if (error?.code === 'abort' || signal?.aborted === true) {
      throw error?.code === 'abort' ? error : abortError();
    }
    if (error?.code !== 'worker-unavailable') throw error;
    // A transferred buffer is detached and cannot be decoded on the main
    // thread. Only previews (which copy) take the fallback path.
    if (transferred) throw error;
    return fallback(format, data);
  }
}
