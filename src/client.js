import * as THREE_BRIDGE from './loaders/three-bridge.js';
import { FORMAT_ENTRIES } from './formats.js';
import { parseFileAddress, readWorkspaceFile } from './loaders/workspace.js';
import { VIEWER_COMPONENTS } from './ui/ModelViewer.js';
import { en, zh } from './ui/dictionaries.js';

const NS = 'dsh3dViewer';
const BODY_SLOT = 'sidebar.right.tab.document';

// Format chunks are self-contained CJS scripts; they receive the chunk-sized
// Three bridge through the wrapper installed by build.mjs.
globalThis.__DSH3DV_THREE__ = { ...THREE_BRIDGE, __esModule: true };
// workspace-files caps a single byte window at 2 MiB; files above the 32 MiB
// full-file cap are assembled from these windows.
const READ_CHUNK_BYTES = 2 * 1024 * 1024;

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
 * Assemble a file larger than the Remote's 32 MiB full-file cap from 2 MiB
 * byte windows.
 *
 * @param {{ readBytes: Function }} workspaceFiles Workspace Remote face.
 * @param {string} sessionId Session identity.
 * @param {string} path Workspace-relative path.
 * @param {AbortSignal} signal Cancellation signal.
 * @returns {Promise<object>} A complete-byte result shaped like `readBytes`.
 */
async function readChunked(workspaceFiles, sessionId, path, signal) {
  const chunks = [];
  let offset = 0;
  let version;

  for (;;) {
    const result = await workspaceFiles.readBytes(
      sessionId,
      path,
      { range: { offset, length: READ_CHUNK_BYTES } },
      signal,
    );
    if (result?.ok !== true) return result;

    const value = result.value;
    const chunk = value?.data;
    if (!(chunk instanceof Uint8Array)) {
      return { ok: false, error: { message: 'The workspace returned no byte window.' } };
    }
    if (version === undefined) version = value.version;
    else if (value.version !== undefined && value.version !== version) {
      return {
        ok: false,
        error: { code: 'workspace-file/changed', message: 'The file changed while it was being read.' },
      };
    }

    chunks.push(chunk);
    if (value.eof) break;
    if (chunk.byteLength === 0) {
      return { ok: false, error: { message: 'The workspace returned an empty byte window.' } };
    }
    offset += chunk.byteLength;
  }

  const length = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
  const data = new Uint8Array(length);
  let position = 0;
  for (const chunk of chunks) {
    data.set(chunk, position);
    position += chunk.byteLength;
  }
  return { ok: true, value: { data, version, bytes: length } };
}

/**
 * Read the root document bytes through the workspace Remote.
 *
 * Renderer-mode previews mount before the Host reads anything, so the body owns
 * the initial read (and the loading state that goes with it).
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

  const readLarge = async () => {
    try {
      return await readChunked(workspaceFiles, parsed.sessionId, parsed.path, signal);
    } catch (error) {
      return failure(error);
    }
  };

  try {
    const result = await workspaceFiles.readBytes(parsed.sessionId, parsed.path, {}, signal);
    if (result?.ok === false && result.error?.code === 'workspace-file/too-large') {
      return readLarge();
    }
    return result;
  } catch (error) {
    if (error !== null && typeof error === 'object' && 'code' in error
      && error.code === 'workspace-file/too-large') {
      return readLarge();
    }
    return failure(error);
  }
}

/**
 * Register one document format and its right-Sidebar view body.
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx Owning Client context.
 * @param {(key: string) => string} t Namespace-bound translator.
 * @param {import('./formats.js').FormatDefinition} entry Format definition.
 */
function registerPreview(ctx, t, entry) {
  const component = VIEWER_COMPONENTS[entry.format];

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
      readWorkspaceFile: (address, path, options) => readWorkspaceFile(ctx.remote, address, path, options),
      loadBytes: (address, signal) => readDocumentBytes(ctx, address, signal),
    }),
  }, component)), `dsh-3d-viewer: ${entry.label} viewer body`);
}

/**
 * Register the FBX, OBJ, glTF/GLB, and STL document renderers and their view
 * bodies in the right Sidebar.
 *
 * Formats come from the shared registry, so registration, badges, and viewer
 * components cannot drift apart.
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx Owning Client context.
 */
export function apply(ctx) {
  const t = ctx.locale.bind(NS);

  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-3d-viewer: dictionaries');

  for (const entry of FORMAT_ENTRIES) registerPreview(ctx, t, entry);
}
