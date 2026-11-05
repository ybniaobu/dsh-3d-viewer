/**
 * Byte, text, and path helpers shared by the model loaders.
 *
 * The loaders previously carried their own copies of these conversions
 * (`toArrayBuffer`, `decodeText`, `localPath`, `mimeOf`, `abortError`), which
 * drifted apart over time. One module keeps their edge cases consistent.
 */

/** URLs Three.js resolves itself instead of the DSH workspace. */
export const REMOTE_URL = /^(?:data:|blob:|https?:|file:|\/\/)/iu;

/** Local paths anchored at a drive letter or a POSIX root. */
export const ABSOLUTE_PATH = /^(?:[A-Za-z]:[\\/]|\/)/u;

const MIME_TYPES = new Map([
  ['bin', 'application/octet-stream'],
  ['png', 'image/png'],
  ['jpg', 'image/jpeg'],
  ['jpeg', 'image/jpeg'],
  ['webp', 'image/webp'],
  ['gif', 'image/gif'],
  ['bmp', 'image/bmp'],
  ['tga', 'image/x-tga'],
  ['dds', 'image/vnd-ms.dds'],
  ['exr', 'image/x-exr'],
  ['hdr', 'image/vnd.radiance'],
]);

const UTF8 = new TextDecoder('utf-8');

/**
 * Copy preview bytes into a standalone ArrayBuffer.
 *
 * A view into a larger buffer is copied, so the returned payload never keeps
 * the document-preview store's memory alive. Text is encoded as UTF-8 for the
 * loaders that also accept a decoded document.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes or text.
 * @returns {ArrayBuffer} A standalone payload.
 */
export function toArrayBuffer(data) {
  if (data instanceof ArrayBuffer) return data;
  if (ArrayBuffer.isView(data)) {
    return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
  }
  if (typeof data === 'string') return new TextEncoder().encode(data).buffer;
  throw new TypeError('The 3D preview was not given binary data');
}

/**
 * View preview bytes as a Uint8Array without copying, encoding text inputs.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes or text.
 * @returns {Uint8Array} Byte view of the payload.
 */
export function toBytes(data) {
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  if (typeof data === 'string') return new TextEncoder().encode(data);
  throw new TypeError('The 3D preview was not given model data');
}

/**
 * Decode text-format model data, decoding bytes as UTF-8.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete file bytes or text.
 * @returns {string} Decoded text.
 */
export function decodeText(data) {
  if (typeof data === 'string') return data;
  if (data instanceof ArrayBuffer) return UTF8.decode(data);
  if (ArrayBuffer.isView(data)) return UTF8.decode(data);
  throw new TypeError('The 3D preview was not given model data');
}

/**
 * Turn a loader URL into a workspace-relative path.
 *
 * Query and fragment suffixes are dropped and percent escapes are decoded;
 * backslashes are normalized so Windows-authored MTL/FBX/glTF references
 * resolve on every platform.
 *
 * @param {string} value Loader URL or asset path.
 * @returns {string} Normalized forward-slash path.
 */
export function decodeLocalPath(value) {
  const withoutSuffix = String(value).split(/[?#]/u, 1)[0];
  try {
    return decodeURIComponent(withoutSuffix).replaceAll('\\', '/');
  } catch {
    return withoutSuffix.replaceAll('\\', '/');
  }
}

/**
 * Whether a loader URL must be read from the session workspace.
 *
 * @param {unknown} value Loader URL or asset path.
 * @returns {boolean} True for relative or absolute local paths.
 */
export function isLocalPath(value) {
  return typeof value === 'string' && value !== '' && REMOTE_URL.test(value) === false;
}

/**
 * Guess a blob MIME type from a file name.
 *
 * @param {unknown} value File name, path, or loader URL.
 * @returns {string} A MIME type, defaulting to application/octet-stream.
 */
export function mimeOf(value) {
  const path = decodeLocalPath(value);
  const extension = path.slice(path.lastIndexOf('.') + 1).toLowerCase();
  return MIME_TYPES.get(extension) ?? 'application/octet-stream';
}

/**
 * Decode a base64 payload into bytes.
 *
 * `Uint8Array.fromBase64` is used when the runtime provides it; the manual
 * fallback keeps older browsers working.
 *
 * @param {string} value Base64 payload without a data-URL prefix.
 * @returns {Uint8Array} Decoded bytes.
 */
export function decodeBase64(value) {
  if (typeof Uint8Array.fromBase64 === 'function') return Uint8Array.fromBase64(value);

  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

/**
 * Create the error a cancelled load rejects with.
 *
 * @param {string} [message] Human-readable reason.
 * @returns {Error} Error named `AbortError`.
 */
export function abortError(message = 'Model loading was cancelled.') {
  const error = new Error(message);
  error.name = 'AbortError';
  return error;
}

/**
 * Log a recoverable loading problem without failing the whole preview.
 *
 * @param {string} message Diagnostic message.
 */
export function warn(message) {
  if (typeof console !== 'undefined') console.warn(message);
}
