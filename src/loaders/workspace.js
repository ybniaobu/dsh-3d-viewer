import {
  Cache,
  DataTexture,
  ImageLoader,
  Loader,
  LoadingManager,
  RGBAFormat,
  Texture,
  UnsignedByteType,
  SRGBColorSpace,
} from 'three';
import {
  ABSOLUTE_PATH,
  abortError,
  decodeLocalPath,
  isLocalPath,
  mimeOf,
  toArrayBuffer,
  warn,
} from '../core/bytes.js';
import { asyncChunk } from './chunk-require.js';
import { parseFileAddress } from './address.js';

export { parseFileAddress } from './address.js';

// Any relative/absolute local path can be an MTL/FBX texture. Schemes are
// excluded so data/blob/http URLs keep using Three's normal loaders.
const WORKSPACE_TEXTURE_PATH = /^(?!data:|blob:|https?:|file:|\/\/).+$/i;
const TEXTURE_TIMEOUT_MS = 5000;

// 1x1 opaque white PNG, used when a texture exists in the MTL/OBJ but its
// bytes cannot be read. White keeps the material color visible instead of
// turning the whole surface black.
export const WHITE_PIXEL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4////fwAJ+wP9KobjigAAAABJRU5ErkJggg==';

/** Shared image decoder; a LoadingManager per texture would be wasteful. */
const IMAGE_LOADER = new ImageLoader(new LoadingManager());

/** Lazily fetched TGA/EXR decoder chunks. */
const textureChunkPromises = new Map();

/**
 * @param {string} path Texture path.
 * @returns {'tga' | 'exr' | 'hdr' | null} Specialized decoder, if any.
 */
function textureFormatOf(path) {
  const clean = String(path).split(/[?#]/, 1)[0].toLowerCase();
  if (clean.endsWith('.tga')) return 'tga';
  if (clean.endsWith('.exr')) return 'exr';
  if (clean.endsWith('.hdr')) return 'hdr';
  return null;
}

/**
 * @param {string} format Texture format id.
 * @returns {Promise<Record<string, unknown>>} Decoder chunk exports.
 */
function loadTextureChunk(format) {
  const file = `./client.tex-${format}.js`;
  let promise = textureChunkPromises.get(file);
  if (promise === undefined) {
    promise = asyncChunk(file);
    textureChunkPromises.set(file, promise);
    promise.catch(() => textureChunkPromises.delete(file));
  }
  return promise;
}

/**
 * Decode a specialized texture through its lazy chunk on the main thread.
 *
 * @param {'tga' | 'exr' | 'hdr'} format Texture format.
 * @param {Uint8Array | ArrayBuffer} data Complete bytes.
 * @returns {Promise<Texture>} Decoded texture.
 */
async function decodeWorkspaceTextureOnMainThread(format, data) {
  const module = await loadTextureChunk(format);
  const decoders = { tga: 'decodeTga', exr: 'decodeExr', hdr: 'decodeHdr' };
  const decode = module[decoders[format]];
  if (typeof decode !== 'function') {
    throw new Error(`The ${format.toUpperCase()} decoder chunk is unavailable.`);
  }
  return decode(toArrayBuffer(data));
}

/**
 * Decode a browser-supported raster image to an ImageBitmap.
 *
 * Keeping the bitmap avoids a full `getImageData()` readback for standalone
 * PNG/JPEG previews; `drawImage()` can display it directly on the 2D canvas.
 *
 * @param {'png' | 'jpeg'} format Raster format.
 * @param {Uint8Array | ArrayBuffer} data Complete image bytes.
 * @param {{ signal?: AbortSignal }} [options] Cancellation.
 * @returns {Promise<{ image: ImageBitmap, width: number, height: number }>} Decoded bitmap.
 */
export async function decodeRasterPreview(format, data, options = {}) {
  if (options.signal?.aborted === true) throw abortError();
  if (typeof createImageBitmap !== 'function') {
    throw new Error('This browser cannot decode PNG or JPEG textures.');
  }

  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const blob = new Blob(
    [bytes],
    { type: format === 'png' ? 'image/png' : 'image/jpeg' },
  );
  const image = await createImageBitmap(blob);
  if (options.signal?.aborted === true) {
    image.close?.();
    throw abortError();
  }
  return { image, width: image.width, height: image.height };
}

/**
 * Decode a browser-supported raster image into a top-down RGBA DataTexture.
 * PNG and JPEG already have native decoders, so they do not need a format chunk.
 *
 * @param {'png' | 'jpeg'} format Raster format.
 * @param {Uint8Array | ArrayBuffer} data Complete image bytes.
 * @param {{ signal?: AbortSignal }} [options] Cancellation.
 * @returns {Promise<Texture>} Decoded texture.
 */
async function decodeRasterTexture(format, data, options = {}) {
  const preview = await decodeRasterPreview(format, data, options);
  const bitmap = preview.image;
  try {
    const canvas = typeof OffscreenCanvas === 'function'
      ? new OffscreenCanvas(bitmap.width, bitmap.height)
      : document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (context === null) throw new Error('The image preview canvas is unavailable.');
    context.drawImage(bitmap, 0, 0);

    const image = context.getImageData(0, 0, bitmap.width, bitmap.height);
    const texture = new DataTexture(
      image.data,
      bitmap.width,
      bitmap.height,
      RGBAFormat,
      UnsignedByteType,
    );
    texture.colorSpace = SRGBColorSpace;
    texture.flipY = false;
    texture.generateMipmaps = false;
    texture.userData.dsh3dHdr = false;
    texture.userData.dsh3dSourceBottomUp = false;
    texture.needsUpdate = true;
    return texture;
  } finally {
    bitmap.close?.();
  }
}

/**
 * Decode a specialized texture. EXR/HDR use the shared worker so large
 * sidecars do not block the model view; TGA and worker fallbacks stay local.
 *
 * @param {'tga' | 'exr' | 'hdr' | 'png' | 'jpeg'} format Texture format.
 * @param {Uint8Array | ArrayBuffer} data Complete bytes.
 * @param {{ signal?: AbortSignal, transfer?: boolean }} [options] Cancellation and buffer ownership.
 * @returns {Promise<Texture>} Decoded texture.
 */
export async function decodeWorkspaceTexture(format, data, options = {}) {
  if (format === 'png' || format === 'jpeg') {
    return decodeRasterTexture(format, data, options);
  }

  // The runtime chunk owns the worker client; format chunks and standalone
  // tests can still decode on the main thread when that service is absent.
  const decodeInWorker = globalThis.__DSH3DV_TEXTURE_WORKER__?.decodeTextureInWorker;
  if (typeof decodeInWorker === 'function') {
    return decodeInWorker(format, data, decodeWorkspaceTextureOnMainThread, options);
  }
  return decodeWorkspaceTextureOnMainThread(format, data, options);
}

/**
 * Copy a decoded DataTexture's uploadable fields into the placeholder that is
 * already attached to a material.
 *
 * @param {Texture} target Placeholder texture.
 * @param {Texture} source Decoded texture.
 * @returns {void}
 */
function adoptTexture(target, source, disposeSource = true) {
  const hdr = source.userData?.dsh3dHdr === true;
  const placeholderColorSpace = target.colorSpace;
  target.image = source.image;
  target.mipmaps = source.mipmaps;
  target.mapping = source.mapping;
  target.channel = source.channel;
  target.format = source.format;
  target.internalFormat = source.internalFormat;
  target.type = source.type;
  // A late TGA load must not overwrite the sRGB color space the material
  // assigned to the placeholder. HDR/EXR, on the other hand, are linear.
  target.colorSpace = hdr ? source.colorSpace : placeholderColorSpace;
  target.flipY = source.flipY;
  target.unpackAlignment = source.unpackAlignment;
  target.minFilter = source.minFilter;
  target.magFilter = source.magFilter;
  target.generateMipmaps = source.generateMipmaps;
  target.anisotropy = source.anisotropy;
  target.userData = { ...source.userData };
  target.needsUpdate = true;
  if (disposeSource) source.dispose();
}

/**
 * Parse a `dsh-resource://file/...` address into its session and path.
 *
 * Mirrors the DSH workspace-path grammar. Query and fragment suffixes are
 * ignored and each path segment is decoded.
 *
 * @param {unknown} address Candidate resource address.
 * @returns {{ scope: 'session', sessionId: string, path: string } | undefined} Parsed session file address.
 */
/**
 * Read a sibling workspace file through the DSH workspace-files Remote.
 *
 * @param {object | undefined} remote Client Remote face.
 * @param {string} address Original document resource address.
 * @param {string} path Workspace-relative or absolute target path.
 * @param {{ baseFile?: string, signal?: AbortSignal }} [options] Base file for relative resolution and cancellation.
 * @returns {Promise<{ ok: true, value: object } | { ok: false, error: { message: string } }>} Remote result.
 */
export async function readWorkspaceFile(remote, address, path, options = {}) {
  const parsed = parseFileAddress(address);
  if (parsed === undefined) {
    return { ok: false, error: { message: `Not a session file address: ${String(address)}` } };
  }

  const workspaceFiles = remote?.workspaceFiles;
  if (workspaceFiles === undefined || typeof workspaceFiles.readBytes !== 'function') {
    return { ok: false, error: { message: 'The workspaceFiles Remote is unavailable.' } };
  }

  const request = {};
  const baseFile = typeof options.baseFile === 'string' && options.baseFile !== ''
    ? options.baseFile
    : parsed.path;
  if (baseFile !== '') request.baseFile = baseFile;

  try {
    return await workspaceFiles.readBytes(parsed.sessionId, path.replaceAll('\\', '/'), request, options.signal);
  } catch (error) {
    return {
      ok: false,
      error: { message: error instanceof Error ? error.message : String(error) },
    };
  }
}

/**
 * Read a workspace asset, retrying the basename of an unreadable absolute path.
 *
 * FBX/OBJ/MTL exporters commonly bake in the authoring machine's absolute
 * path. When that path does not exist in the session, the file usually sits
 * next to the model, so the basename is tried before giving up.
 *
 * @param {(path: string) => Promise<object | undefined>} readFile Reads one workspace path.
 * @param {string} path Raw or normalized asset path.
 * @returns {Promise<object | undefined>} The first successful read result.
 */
export async function readWithBasenameFallback(readFile, path) {
  const result = await readFile(path);
  if (result !== undefined && result.ok === true) return result;

  const normalized = String(path).replaceAll('\\', '/');
  if (!ABSOLUTE_PATH.test(normalized)) return result;

  const basename = normalized.slice(normalized.lastIndexOf('/') + 1);
  if (basename === '' || basename === normalized) return result;
  return readFile(basename);
}

/**
 * Load one image URL into an HTML image element.
 *
 * @param {string} url Image URL.
 * @param {AbortSignal | undefined} signal Cancellation signal.
 * @returns {Promise<HTMLImageElement>} Decoded image.
 */
function loadImageElement(url, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted === true) {
      reject(abortError('Texture loading was cancelled.'));
      return;
    }
    IMAGE_LOADER.load(url, resolve, undefined, reject);
  });
}

/**
 * Load one image URL into a Texture placeholder.
 *
 * @param {Texture} texture Placeholder returned synchronously to Three.js.
 * @param {string} url Image URL.
 * @param {AbortSignal | undefined} signal Cancellation signal.
 * @returns {Promise<void>} Resolves when the image is assigned.
 */
async function loadImage(texture, url, signal) {
  texture.image = await loadImageElement(url, signal);
  texture.needsUpdate = true;
}

/**
 * A Three.js loader that resolves MTL/OBJ/FBX texture paths through the DSH
 * workspace instead of HTTP.
 *
 * It returns a Texture immediately, like TextureLoader, and assigns the image
 * when the workspace read and browser decode finish. Missing files fall back
 * to a white pixel so the material color remains visible.
 */
class WorkspaceTextureLoader extends Loader {
  constructor(manager, options) {
    super(manager);
    this.readFile = options.readFile;
    this.signal = options.signal;
    this.onWarn = options.onWarn;
    this.pending = options.pending;
    this.blobUrls = options.blobUrls;
    this.listeners = options.listeners;
    this.disposed = options.isDisposed;
    this.cache = new Map();
    this.warned = new Set();
  }

  /**
   * Load a shared image source once per workspace path. Every material gets
   * its own Texture sampler state, but the file read and pixel decode happen
   * only once for repeated references to the same path.
   *
   * @param {string} url Texture URL.
   * @param {string | null} localPath Normalized workspace path, if local.
   * @param {'tga' | 'exr' | 'hdr' | null} localFormat Specialized decoder.
   * @returns {Promise<{ kind: 'data', texture: Texture } | { kind: 'image', image: HTMLImageElement }>} Shared image source.
   */
  async prepare(url, localPath, localFormat) {
    let blobUrl = null;
    try {
      if (this.signal?.aborted === true || this.disposed?.() === true) {
        throw abortError('Texture loading was cancelled.');
      }

      let imageUrl = url;
      if (localPath !== null) {
        const result = await readWithBasenameFallback(this.readFile, localPath);
        if (result === undefined || result.ok !== true) {
          throw new Error(result?.error?.message ?? `Could not read texture ${url}`);
        }
        if (this.signal?.aborted === true || this.disposed?.() === true) {
          throw abortError('Texture loading was cancelled.');
        }

        if (localFormat !== null) {
          const decoded = await decodeWorkspaceTexture(localFormat, result.value.data, {
            signal: this.signal,
            transfer: true,
          });
          if (this.signal?.aborted === true || this.disposed?.() === true) {
            decoded.dispose();
            throw abortError('Texture loading was cancelled.');
          }
          return { kind: 'data', texture: decoded };
        }

        blobUrl = URL.createObjectURL(new Blob([result.value.data], { type: mimeOf(localPath) }));
        this.blobUrls.add(blobUrl);
        imageUrl = blobUrl;
      }

      const image = await loadImageElement(imageUrl, this.signal);
      if (this.signal?.aborted === true || this.disposed?.() === true) {
        throw abortError('Texture loading was cancelled.');
      }
      return { kind: 'image', image };
    } catch (error) {
      if (blobUrl !== null && this.blobUrls.has(blobUrl)) {
        URL.revokeObjectURL(blobUrl);
        this.blobUrls.delete(blobUrl);
      }
      throw error;
    }
  }

  load(url, onLoad, onProgress, onError) {
    const localPath = isLocalPath(url) ? decodeLocalPath(url) : null;
    const localFormat = localPath === null ? null : textureFormatOf(localPath);
    // TGA/EXR/HDR decode to raw pixel data; the uploader only takes the
    // DataTexture path for those, so the placeholder must be one from the start.
    const texture = localFormat === null
      ? new Texture()
      : new DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RGBAFormat, UnsignedByteType);
    texture.name = url;

    const key = localPath ?? url;
    let entry = this.cache.get(key);
    if (entry === undefined) {
      entry = this.prepare(url, localPath, localFormat);
      this.cache.set(key, entry);
      entry.catch(() => {
        if (this.cache.get(key) === entry) this.cache.delete(key);
      });
    }

    const task = (async () => {
      try {
        const descriptor = await entry;
        if (this.signal?.aborted === true || this.disposed?.() === true) return;

        if (descriptor.kind === 'data') {
          adoptTexture(texture, descriptor.texture, false);
        } else {
          texture.image = descriptor.image;
          texture.needsUpdate = true;
        }
        onLoad?.(texture);
      } catch (error) {
        if (this.signal?.aborted !== true && this.disposed?.() !== true) {
          if (!this.warned.has(key)) {
            this.warned.add(key);
            this.onWarn?.(`[dsh-3d-viewer] Could not load texture "${url}": ${String(error)}`);
          }
          if (localFormat !== null) {
            texture.image = { data: new Uint8Array([255, 255, 255, 255]), width: 1, height: 1 };
            texture.needsUpdate = true;
          } else {
            try {
              await loadImage(texture, WHITE_PIXEL, this.signal);
            } catch {
              // Keep the empty placeholder when even the fallback cannot decode.
            }
          }
          onLoad?.(texture);
          onError?.(error);
        }
      } finally {
        for (const listener of this.listeners) {
          try {
            listener(texture);
          } catch {
            // A render request must never break texture loading.
          }
        }
      }
    })();

    this.pending.add(task);
    task.then(
      () => this.pending.delete(task),
      () => this.pending.delete(task),
    );
    return texture;
  }

  disposeCache() {
    for (const entry of this.cache.values()) {
      entry.then((descriptor) => {
        if (descriptor?.kind === 'data') descriptor.texture.dispose();
      }, () => {});
    }
    this.cache.clear();
    this.warned.clear();
  }
}

/**
 * Create a workspace-backed asset loader and its Three.js LoadingManager.
 *
 * @param {{
 *   readFile: (path: string) => Promise<object | undefined>,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} options Workspace reader, cancellation, and diagnostics.
 * @returns {{
 *   manager: LoadingManager,
 *   settle: (timeout?: number) => Promise<void>,
 *   onTextureLoad: (listener: (texture: Texture) => void) => () => void,
 *   dispose: () => void,
 * }} Asset loader controls.
 */
export function createWorkspaceAssetLoader({ readFile, signal, onWarn = warn }) {
  const pending = new Set();
  const blobUrls = new Set();
  const listeners = new Set();
  let disposed = false;

  const manager = new LoadingManager();
  const textureLoader = new WorkspaceTextureLoader(manager, {
    readFile,
    signal,
    onWarn,
    pending,
    blobUrls,
    listeners,
    isDisposed: () => disposed,
  });
  manager.addHandler(WORKSPACE_TEXTURE_PATH, textureLoader);

  async function settle(timeout = TEXTURE_TIMEOUT_MS) {
    if (pending.size === 0) return;
    if (signal?.aborted === true) return;

    let timer;
    let stopWaiting;
    const timeoutPromise = new Promise((resolve) => {
      timer = setTimeout(resolve, timeout);
    });
    const abortPromise = new Promise((resolve) => {
      stopWaiting = resolve;
      signal?.addEventListener('abort', resolve, { once: true });
    });
    try {
      await Promise.race([Promise.allSettled([...pending]), timeoutPromise, abortPromise]);
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener('abort', stopWaiting);
    }
  }

  function onTextureLoad(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    textureLoader.disposeCache();
    for (const url of blobUrls) {
      Cache.remove(`image:${url}`);
      URL.revokeObjectURL(url);
    }
    blobUrls.clear();
    listeners.clear();
  }

  return {
    manager,
    settle,
    onTextureLoad,
    dispose,
  };
}
