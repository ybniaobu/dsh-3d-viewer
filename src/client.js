import { FORMAT_ENTRIES } from './core/formats.js';
import { TEXTURE_FORMAT_ENTRIES } from './core/texture-formats.js';
import { parseFileAddress } from './loaders/address.js';
import { VIEWER_COMPONENTS } from './ui/model/model-viewer.js';
import { TEXTURE_VIEWER_COMPONENTS } from './ui/texture/texture-viewer.js';
import { de, en, es, fr, ja, pt, ru, zh } from './ui/dictionaries.js';
import { loadViewerRuntime } from './ui/viewer-runtime.js';

const NS = 'dsh3dViewer';
const BODY_SLOT = 'sidebar.right.tab.document';

// workspace-files caps a single byte window at 2 MiB. Root files are read in
// parallel windows so a large model is not serialized into one long request.
const READ_CHUNK_BYTES = 2 * 1024 * 1024;
const READ_CONCURRENCY = 4;
const READ_CACHE_BYTES = 64 * 1024 * 1024;
const readCache = new Map();
let readCacheBytes = 0;

/**
 * @param {string} key Cache key.
 * @returns {void}
 */
function cacheDelete(key) {
  const entry = readCache.get(key);
  if (entry === undefined) return;
  readCache.delete(key);
  readCacheBytes -= entry.data.byteLength;
}

/**
 * @param {string} key Cache key.
 * @param {string} version File version.
 * @returns {Uint8Array | null} Cached bytes for this exact version.
 */
function cacheGet(key, version) {
  const entry = readCache.get(key);
  if (entry === undefined) return null;
  if (entry.version !== version) {
    cacheDelete(key);
    return null;
  }
  // Refresh the LRU order.
  readCache.delete(key);
  readCache.set(key, entry);
  return entry.data;
}

/**
 * @param {string} key Cache key.
 * @param {string} version File version.
 * @param {Uint8Array} data Complete bytes.
 * @returns {void}
 */
function cacheSet(key, version, data) {
  if (version === undefined || data.byteLength > READ_CACHE_BYTES) return;
  cacheDelete(key);
  while (readCacheBytes + data.byteLength > READ_CACHE_BYTES) {
    const oldest = readCache.keys().next().value;
    if (oldest === undefined) break;
    cacheDelete(oldest);
  }
  readCache.set(key, { version, data });
  readCacheBytes += data.byteLength;
}

export const inject = ['documentPreviews', 'slots', 'locale', 'remote', 'remote.workspaceFiles'];

/**
 * @param {unknown} error Remote failure.
 * @returns {{ ok: false, error: { code?: string, message: string } }} Normalized failure.
 */
function failure(error) {
  return {
    ok: false,
    error: {
      code: error !== null && typeof error === 'object' && 'code' in error ? error.code : undefined,
      message: error instanceof Error ? error.message : String(error),
    },
  };
}

/**
 * Read one explicit byte window.
 *
 * @param {{ readBytes: Function }} workspaceFiles Workspace Remote face.
 * @param {string} sessionId Session identity.
 * @param {string} path Workspace-relative path.
 * @param {number} offset First byte.
 * @param {number} length Window size.
 * @param {AbortSignal} signal Cancellation signal.
 * @returns {Promise<object>} Remote result.
 */
function readWindow(workspaceFiles, sessionId, path, offset, length, signal) {
  return workspaceFiles.readBytes(
    sessionId,
    path,
    { range: { offset, length } },
    signal,
  );
}

/**
 * @param {Uint8Array[]} chunks Ordered chunks.
 * @param {string | undefined} version File version.
 * @returns {{ ok: true, value: { data: Uint8Array, version: string | undefined, bytes: number } }} Complete result.
 */
function mergeWindows(chunks, version) {
  let length = 0;
  for (const chunk of chunks) length += chunk.byteLength;
  const data = new Uint8Array(length);
  let position = 0;
  for (const chunk of chunks) {
    data.set(chunk, position);
    position += chunk.byteLength;
  }
  return { ok: true, value: { data, version, bytes: length } };
}

/**
 * @returns {{ ok: false, error: { code: string, message: string } }} Change failure.
 */
function changedFailure() {
  return {
    ok: false,
    error: { code: 'workspace-file/changed', message: 'The file changed while it was being read.' },
  };
}

/**
 * Read a list of windows with bounded concurrency into one preallocated
 * buffer. Each worker copies its window as soon as it arrives, so the peak
 * memory is the output plus at most one window per worker instead of a second
 * complete copy of the file.
 *
 * @param {{ readBytes: Function }} workspaceFiles Workspace Remote face.
 * @param {string} sessionId Session identity.
 * @param {string} path Workspace-relative path.
 * @param {Array<{ offset: number, length: number }>} ranges Windows to read.
 * @param {AbortSignal} signal Cancellation signal.
 * @param {{ data: Uint8Array, version: string | undefined }} [initial] Already-read first window.
 * @param {number} totalSize Complete file size.
 * @returns {Promise<object>} A complete-byte result shaped like `readBytes`.
 */
async function readRanges(workspaceFiles, sessionId, path, ranges, signal, initial, totalSize) {
  if (!Number.isInteger(totalSize) || totalSize < 0) {
    return failure(new Error('The workspace reported an invalid file size.'));
  }
  const output = new Uint8Array(totalSize);
  let version = initial?.version;
  let error = null;

  if (initial !== undefined) {
    if (initial.data.byteLength > output.length) {
      return failure(new Error('The workspace returned an oversized first window.'));
    }
    output.set(initial.data, 0);
  }

  let cursor = 0;
  const worker = async () => {
    for (;;) {
      if (error !== null) return;
      const index = cursor;
      cursor += 1;
      if (index >= ranges.length) return;

      const range = ranges[index];
      let result;
      try {
        result = await readWindow(
          workspaceFiles,
          sessionId,
          path,
          range.offset,
          range.length,
          signal,
        );
      } catch (readError) {
        result = failure(readError);
      }
      if (error !== null) return;
      if (result?.ok !== true) {
        error = result ?? failure(new Error('The workspace returned no byte window.'));
        return;
      }

      const value = result.value;
      const chunk = value?.data;
      if (!(chunk instanceof Uint8Array)) {
        error = failure(new Error('The workspace returned no byte window.'));
        return;
      }
      if (version === undefined) version = value.version;
      else if (value.version !== undefined && value.version !== version) {
        error = changedFailure();
        return;
      }
      if (chunk.byteLength !== range.length) {
        error = failure(new Error('The workspace returned a short byte window.'));
        return;
      }
      if (range.offset < 0 || range.offset + chunk.byteLength > output.length) {
        error = failure(new Error('The workspace returned an out-of-range byte window.'));
        return;
      }
      output.set(chunk, range.offset);
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(READ_CONCURRENCY, ranges.length) }, worker),
  );

  if (error !== null) return error;
  return { ok: true, value: { data: output, version, bytes: output.length } };
}

/**
 * Read a known-size file in windows.
 *
 * @param {{ readBytes: Function }} workspaceFiles Workspace Remote face.
 * @param {string} sessionId Session identity.
 * @param {string} path Workspace-relative path.
 * @param {number} size Complete file size.
 * @param {AbortSignal} signal Cancellation signal.
 * @returns {Promise<object>} Complete-byte result.
 */
function readBySize(workspaceFiles, sessionId, path, size, signal) {
  if (!Number.isFinite(size) || size < 0) {
    return Promise.resolve(failure(new Error('The workspace reported an invalid file size.')));
  }
  const ranges = [];
  for (let offset = 0; offset < size; offset += READ_CHUNK_BYTES) {
    ranges.push({
      offset,
      length: Math.min(READ_CHUNK_BYTES, size - offset),
    });
  }
  return readRanges(workspaceFiles, sessionId, path, ranges, signal, undefined, size);
}

/**
 * Fallback for a backend without `stat`: discover the size from the first
 * window, then read the rest in parallel when the size is reported.
 *
 * @param {{ readBytes: Function }} workspaceFiles Workspace Remote face.
 * @param {string} sessionId Session identity.
 * @param {string} path Workspace-relative path.
 * @param {AbortSignal} signal Cancellation signal.
 * @returns {Promise<object>} Complete-byte result.
 */
async function readWithoutStat(workspaceFiles, sessionId, path, signal) {
  const first = await readWindow(workspaceFiles, sessionId, path, 0, READ_CHUNK_BYTES, signal);
  if (first?.ok !== true) return first;

  const value = first.value;
  const data = value?.data;
  if (!(data instanceof Uint8Array)) {
    return failure(new Error('The workspace returned no byte window.'));
  }
  if (value.eof) {
    return { ok: true, value: { data, version: value.version, bytes: data.byteLength } };
  }

  if (typeof value.bytes === 'number' && value.bytes >= data.byteLength) {
    const ranges = [];
    for (let offset = data.byteLength; offset < value.bytes; offset += READ_CHUNK_BYTES) {
      ranges.push({
        offset,
        length: Math.min(READ_CHUNK_BYTES, value.bytes - offset),
      });
    }
    return readRanges(workspaceFiles, sessionId, path, ranges, signal, {
      data,
      version: value.version,
    }, value.bytes);
  }

  const chunks = [data];
  let offset = data.byteLength;
  let version = value.version;
  for (;;) {
    const result = await readWindow(workspaceFiles, sessionId, path, offset, READ_CHUNK_BYTES, signal);
    if (result?.ok !== true) return result;
    const next = result.value?.data;
    if (!(next instanceof Uint8Array)) {
      return failure(new Error('The workspace returned no byte window.'));
    }
    if (version === undefined) version = result.value.version;
    else if (result.value.version !== undefined && result.value.version !== version) {
      return changedFailure();
    }
    chunks.push(next);
    if (result.value.eof) break;
    if (next.byteLength === 0) {
      return failure(new Error('The workspace returned an empty byte window.'));
    }
    offset += next.byteLength;
  }
  return mergeWindows(chunks, version);
}

/**
 * Read the root document bytes through the workspace Remote.
 *
 * Renderer-mode previews mount before the Host reads anything, so the body owns
 * the initial read (and the loading state that goes with it). A file is read
 * through bounded-concurrency windows; complete bytes are cached per version.
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx Owning Client context.
 * @param {string} address Document resource address.
 * @param {AbortSignal} signal Cancellation signal for the tab.
 * @returns {Promise<object>} Workspace `readBytes` result.
 */
async function readDocumentBytes(ctx, address, signal) {
  const parsed = parseFileAddress(address);
  if (parsed === undefined) {
    return failure(new Error(`Not a session file address: ${String(address)}`));
  }

  // Unlike a sibling texture, the root document is already workspace-relative:
  // passing it as `baseFile` would resolve it a second time and look for
  // `samples/samples/model.obj`. Read it without a base.
  const workspaceFiles = ctx.remote?.workspaceFiles;
  if (workspaceFiles === undefined || typeof workspaceFiles.readBytes !== 'function') {
    return failure(new Error('The workspaceFiles Remote is unavailable.'));
  }

  const key = `${parsed.sessionId}\n${parsed.path}`;
  let info;
  if (typeof workspaceFiles.stat === 'function') {
    try {
      const stat = await workspaceFiles.stat(parsed.sessionId, parsed.path, signal);
      if (stat?.ok === true) info = stat.value;
      else if (stat !== null && typeof stat === 'object' && typeof stat.bytes === 'number') info = stat;
    } catch {
      // stat is an optimization; the range reader still works without it.
    }
  }

  if (info?.version !== undefined) {
    const cached = cacheGet(key, info.version);
    if (cached !== null) {
      return { ok: true, value: { data: cached, version: info.version, bytes: cached.byteLength } };
    }
  }

  try {
    const result = info !== undefined && typeof info.bytes === 'number'
      ? await readBySize(workspaceFiles, parsed.sessionId, parsed.path, info.bytes, signal)
      : await readWithoutStat(workspaceFiles, parsed.sessionId, parsed.path, signal);

    if (result?.ok === true
      && info?.version !== undefined
      && result.value?.version !== undefined
      && result.value.version !== info.version) {
      // The size used for the range plan belongs to the stat version. If the
      // file changed in between, a growing file would otherwise cache a
      // truncated buffer under the new version.
      return changedFailure();
    }
    if (result?.ok === true && result.value?.version !== undefined) {
      cacheSet(key, result.value.version, result.value.data);
    }
    return result;
  } catch (error) {
    return failure(error);
  }
}

/**
 * Register one document format and its right-Sidebar view body.
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx Owning Client context.
 * @param {(key: string) => string} t Namespace-bound translator.
 * @param {import('./core/formats.js').FormatDefinition | import('./core/texture-formats.js').TextureFormatDefinition} entry Format definition.
 * @param {(props: object) => unknown} component Slot body component.
 */
function registerPreview(ctx, t, entry, component) {

  ctx.effect(() => ctx.documentPreviews.register({
    id: entry.id,
    extensions: [...entry.extensions],
    binaryExtensions: [...entry.extensions],
    priority: 'extension',
    title: () => t(entry.titleKey),
    loading: 'renderer',
    wrap: false,
  }), `dsh-3d-viewer: ${entry.label} document preview`);

  ctx.effect(() => ctx.slots.inject(BODY_SLOT, () => ctx.slots.register({
    name: BODY_SLOT,
    key: entry.id,
    locale: NS,
    inject: () => ({
      fallbackT: t,
      readWorkspaceFile: async (address, path, options) => {
        const runtime = await loadViewerRuntime();
        return runtime.readWorkspaceFile(ctx.remote, address, path, options);
      },
      loadBytes: (address, signal) => readDocumentBytes(ctx, address, signal),
    }),
  }, component)), `dsh-3d-viewer: ${entry.label} viewer body`);
}

/**
 * Register the model and standalone texture document renderers and their view
 * bodies in the right Sidebar.
 *
 * Formats come from the shared registries, so registration, badges, and viewer
 * components cannot drift apart.
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx Owning Client context.
 */
export function apply(ctx) {
  const t = ctx.locale.bind(NS);

  ctx.effect(() => ctx.locale.register(NS, { de, en, es, fr, ja, pt, ru, zh }), 'dsh-3d-viewer: dictionaries');

  for (const entry of FORMAT_ENTRIES) {
    registerPreview(ctx, t, entry, VIEWER_COMPONENTS[entry.format]);
  }
  for (const entry of TEXTURE_FORMAT_ENTRIES) {
    registerPreview(ctx, t, entry, TEXTURE_VIEWER_COMPONENTS[entry.format]);
  }
}
