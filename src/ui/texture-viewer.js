import * as React from 'react';
import { decodeWorkspaceTexture } from '../loaders/workspace.js';
import { StatusOverlay } from './chrome.js';
import { CSS } from './styles.js';
import { en } from './dictionaries.js';

const h = React.createElement;

function fallbackTranslate(key, params) {
  const template = en[key] ?? key;
  if (params === undefined) return template;
  return template.replace(/\{(\w+)\}/g, (_match, name) => String(params[name] ?? ''));
}

/**
 * @param {number} value IEEE 754 half-float bits.
 * @returns {number} Decoded float.
 */
function halfToFloat(value) {
  const sign = (value & 0x8000) !== 0 ? -1 : 1;
  const exponent = (value >> 10) & 0x1f;
  const fraction = value & 0x3ff;
  if (exponent === 0) return sign * 2 ** -14 * (fraction / 1024);
  if (exponent === 31) return fraction === 0 ? sign * Infinity : Number.NaN;
  return sign * 2 ** (exponent - 15) * (1 + fraction / 1024);
}

/**
 * @param {number} value Linear HDR value.
 * @returns {number} SDR value in sRGB.
 */
function toneMap(value) {
  if (!Number.isFinite(value)) return value > 0 ? 1 : 0;
  const mapped = Math.max(0, value) / (1 + Math.max(0, value));
  return mapped <= 0.0031308 ? mapped * 12.92 : 1.055 * mapped ** (1 / 2.4) - 0.055;
}

/**
 * @param {unknown} value Channel value.
 * @returns {number} Value in 0..1.
 */
function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

/**
 * Turn a decoded texture into canvas-ready RGBA pixels.
 *
 * @param {import('three').Texture} texture Decoded TGA/EXR/HDR texture.
 * @returns {ImageData} RGBA image.
 */
function imageDataFor(texture) {
  const image = texture.image;
  const width = image?.width;
  const height = image?.height;
  const data = image?.data;
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0
    || data === undefined || data === null) {
    throw new Error('The decoder returned no pixel data.');
  }

  const pixels = width * height;
  const channels = Math.max(1, Math.min(4, Math.round(data.length / pixels)));
  const hdr = texture.userData?.dsh3dHdr === true;
  const byteData = data instanceof Uint8Array || data instanceof Uint8ClampedArray;

  if (byteData && !hdr && channels === 4) {
    return new ImageData(new Uint8ClampedArray(data.subarray(0, pixels * 4)), width, height);
  }

  const out = new Uint8ClampedArray(pixels * 4);
  const read = byteData
    ? (index) => data[index] / 255
    : data instanceof Uint16Array
      ? (index) => halfToFloat(data[index])
      : (index) => Number(data[index]);

  for (let pixel = 0; pixel < pixels; pixel += 1) {
    const source = pixel * channels;
    const target = pixel * 4;
    let red;
    let green;
    let blue;
    let alpha = 1;

    if (channels === 1) {
      red = read(source);
      green = red;
      blue = red;
    } else {
      red = read(source);
      green = read(source + 1);
      blue = channels >= 3 ? read(source + 2) : green;
      if (channels === 4) alpha = read(source + 3);
    }

    if (hdr) {
      red = toneMap(red);
      green = toneMap(green);
      blue = toneMap(blue);
    }

    out[target] = clamp01(red) * 255;
    out[target + 1] = clamp01(green) * 255;
    out[target + 2] = clamp01(blue) * 255;
    out[target + 3] = clamp01(alpha) * 255;
  }

  return new ImageData(out, width, height);
}

/**
 * Convert a decoded texture into RGBA pixels. Exported for the texture-preview
 * unit test, which supplies a minimal ImageData implementation.
 *
 * @param {import('three').Texture} texture Decoded texture.
 * @returns {ImageData} RGBA image.
 */
export function textureImageData(texture) {
  return imageDataFor(texture);
}

/**
 * @param {import('three').Texture} texture Decoded texture.
 * @returns {number} Bits per channel in the decoded data.
 */
function bitDepthFor(texture) {
  const data = texture.image?.data;
  if (data instanceof Uint16Array) return 16;
  if (data instanceof Float32Array || data instanceof Float64Array) return 32;
  return 8;
}

/**
 * @param {HTMLCanvasElement | null} canvas Target canvas.
 * @param {import('three').Texture} texture Decoded texture.
 * @returns {{ width: number, height: number, bits: number }} Preview metadata.
 */
function drawTexture(canvas, texture) {
  if (canvas === null) throw new Error('The texture preview canvas is unavailable.');

  const image = imageDataFor(texture);
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  if (context === null) throw new Error('The 2D canvas context is unavailable.');
  context.putImageData(image, 0, 0);
  return {
    width: image.width,
    height: image.height,
    bits: bitDepthFor(texture),
  };
}

/**
 * Standalone TGA/EXR/HDR preview body.
 *
 * @param {{
 *   format: 'tga' | 'exr' | 'hdr',
 *   content?: { kind?: string, data?: Uint8Array | ArrayBuffer | string },
 *   renderer?: { revision?: number, loaded?: (version?: unknown) => void, failed?: () => void },
 *   loadBytes?: (address: string, signal: AbortSignal) => Promise<object>,
 *   resourceAddress?: string,
 *   t?: (key: string, params?: Record<string, unknown>) => string,
 *   fallbackT?: (key: string, params?: Record<string, unknown>) => string,
 * }} props Texture format, document content, and translator.
 */
function TextureViewer(props) {
  const format = props.format;
  const content = props.content;
  const renderer = content !== undefined && content !== null && content.kind === 'renderer'
    ? content
    : null;
  const directData = content !== undefined && content !== null
    && (content.kind === 'bytes' || content.kind === 'text')
    ? content.data
    : null;
  const t = props.t ?? props.fallbackT ?? fallbackTranslate;
  const [state, setState] = React.useState({
    status: 'loading',
    failure: null,
    width: 0,
    height: 0,
    bits: 0,
  });
  const [attempt, setAttempt] = React.useState(0);
  const canvasRef = React.useRef(null);
  const loadBytesRef = React.useRef(typeof props.loadBytes === 'function' ? props.loadBytes : null);
  const addressRef = React.useRef(typeof props.resourceAddress === 'string' ? props.resourceAddress : null);
  const rendererRef = React.useRef(renderer);

  loadBytesRef.current = typeof props.loadBytes === 'function' ? props.loadBytes : null;
  addressRef.current = typeof props.resourceAddress === 'string' ? props.resourceAddress : null;
  rendererRef.current = renderer;

  React.useEffect(() => {
    const controller = new AbortController();
    let disposed = false;

    const run = async () => {
      setState({ status: 'loading', failure: null, width: 0, height: 0, bits: 0 });
      try {
        let bytes = directData;
        let version;
        const activeRenderer = rendererRef.current;
        if (activeRenderer !== null) {
          if (loadBytesRef.current === null) {
            throw new Error('The workspace reader is unavailable.');
          }
          const result = await loadBytesRef.current(addressRef.current, controller.signal);
          if (result?.ok !== true) {
            throw new Error(result?.error?.message ?? 'The texture file could not be read.');
          }
          bytes = result.value.data;
          version = result.value.version;
        }
        if (bytes === undefined || bytes === null) {
          throw new Error('The texture file has no content.');
        }

        const texture = await decodeWorkspaceTexture(format, bytes);
        if (disposed || controller.signal.aborted) {
          texture.dispose();
          return;
        }

        const info = drawTexture(canvasRef.current, texture);
        texture.dispose();
        activeRenderer?.loaded?.(version);
        setState({ status: 'ready', failure: null, ...info });
      } catch (error) {
        if (disposed || controller.signal.aborted) return;
        rendererRef.current?.failed?.(error);
        setState({
          status: 'error',
          failure: {
            code: 'texture',
            message: error instanceof Error ? error.message : String(error),
            detail: error instanceof Error ? (error.stack ?? error.message) : String(error),
          },
          width: 0,
          height: 0,
          bits: 0,
        });
      }
    };

    void run();
    return () => {
      disposed = true;
      controller.abort();
    };
  }, [attempt, directData, format, renderer?.revision]);

  return h('div', {
    className: 'dsh3dv-root',
    'data-dsh3d-texture': '',
    'data-dsh3d-format': format,
  },
  h('style', null, CSS),
  h('div', { className: 'dsh3dv-texture-stage' },
    h('canvas', {
      ref: canvasRef,
      className: 'dsh3dv-texture-image',
      role: 'img',
      'aria-label': `${format.toUpperCase()} texture`,
    })),
  h('div', { className: 'dsh3dv-top' },
    h('span', { className: 'dsh3dv-badge' }, t(`${format}Badge`)),
    state.status === 'ready'
      ? h('span', { className: 'dsh3dv-badge' },
        `${state.width} × ${state.height} · ${state.bits}-bit`)
      : null),
  h(StatusOverlay, {
    status: state.status,
    failure: state.failure,
    onRetry: () => setAttempt((value) => value + 1),
    t,
    loadingKey: 'textureLoading',
    errorTitleKey: 'textureErrorTitle',
  }));
}

/**
 * Build a texture preview bound to one format.
 *
 * @param {'tga' | 'exr' | 'hdr'} format Texture format.
 * @returns {(props: object) => unknown} Slot body component.
 */
function createTextureViewer(format) {
  function Viewer(props) {
    return h(TextureViewer, { ...props, format });
  }
  return Viewer;
}

/** TGA document body. */
export const TgaViewer = createTextureViewer('tga');

/** EXR document body. */
export const ExrViewer = createTextureViewer('exr');

/** HDR document body. */
export const HdrViewer = createTextureViewer('hdr');

/** Texture slot bodies keyed by the texture format registry id. */
export const TEXTURE_VIEWER_COMPONENTS = Object.freeze({
  tga: TgaViewer,
  exr: ExrViewer,
  hdr: HdrViewer,
});
