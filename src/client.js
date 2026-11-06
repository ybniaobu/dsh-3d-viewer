import { FORMAT_ENTRIES } from './formats.js';
import { parseFileAddress, readWorkspaceFile } from './loaders/workspace.js';
import { VIEWER_COMPONENTS } from './ui/ModelViewer.js';
import { en, zh } from './ui/dictionaries.js';

const NS = 'dsh3dViewer';
const BODY_SLOT = 'sidebar.right.tab.document';

export const inject = ['documentPreviews', 'slots', 'locale', 'remote', 'remote.workspaceFiles'];

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
function readDocumentBytes(ctx, address, signal) {
  const parsed = parseFileAddress(address);
  if (parsed === undefined) {
    return Promise.resolve({
      ok: false,
      error: { message: `Not a session file address: ${String(address)}` },
    });
  }
  return readWorkspaceFile(ctx.remote, address, parsed.path, { signal });
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
