import * as React from 'react';
import { StatusOverlay } from '../chrome.js';
import { CSS } from '../styles.js';
import { en } from '../dictionaries.js';
import { loadViewerRuntime } from '../viewer-runtime.js';
import {
  getCachedPreview,
  previewCacheBudget,
  previewCacheKey,
  setCachedPreview,
} from './texture-preview-cache.js';

const h = React.createElement;
const MAX_TEXTURE_ZOOM = 16;
const KEY_ZOOM_FACTOR = 1.25;
const KEY_PAN_STEP = 40;

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
 * Precompute byte values for every IEEE half-float bit pattern. Large EXR and
 * HDR previews are half-float; doing the half decode and Reinhard/sRGB curve
 * once per bit pattern avoids millions of pow() calls in the pixel loop.
 *
 * @param {boolean} toneMapped Whether to apply the HDR tone map.
 * @returns {Uint8Array} 65,536-entry byte lookup table.
 */
function buildHalfLut(toneMapped) {
  const lut = new Uint8Array(65536);
  for (let bits = 0; bits < 65536; bits += 1) {
    const value = halfToFloat(bits);
    lut[bits] = Math.round(clamp01(toneMapped ? toneMap(value) : value) * 255);
  }
  return lut;
}

const HALF_SRGB_LUT = buildHalfLut(true);
const HALF_LINEAR_LUT = buildHalfLut(false);

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
  const sourceBottomUp = texture.userData?.dsh3dSourceBottomUp === true;
  const byteData = data instanceof Uint8Array || data instanceof Uint8ClampedArray;

  if (byteData && !hdr && !sourceBottomUp && channels === 4) {
    return new ImageData(
      new Uint8ClampedArray(data.subarray(0, pixels * 4)),
      width,
      height,
    );
  }

  if (hdr && data instanceof Uint16Array) {
    const out = new Uint8ClampedArray(pixels * 4);
    for (let pixel = 0; pixel < pixels; pixel += 1) {
      const source = pixel * channels;
      const sourceRow = Math.floor(pixel / width);
      const targetRow = sourceBottomUp ? height - 1 - sourceRow : sourceRow;
      const target = (targetRow * width + (pixel % width)) * 4;
      const red = HALF_SRGB_LUT[data[source]];
      if (channels === 1) {
        out[target] = red;
        out[target + 1] = red;
        out[target + 2] = red;
        out[target + 3] = 255;
      } else {
        const green = HALF_SRGB_LUT[data[source + 1]];
        out[target] = red;
        out[target + 1] = green;
        out[target + 2] = channels >= 3 ? HALF_SRGB_LUT[data[source + 2]] : green;
        out[target + 3] = channels === 4 ? HALF_LINEAR_LUT[data[source + 3]] : 255;
      }
    }
    return new ImageData(out, width, height);
  }

  const out = new Uint8ClampedArray(pixels * 4);
  const read = byteData
    ? (index) => data[index] / 255
    : data instanceof Uint16Array
      ? (index) => halfToFloat(data[index])
      : (index) => Number(data[index]);

  for (let pixel = 0; pixel < pixels; pixel += 1) {
    const source = pixel * channels;
    const sourceRow = Math.floor(pixel / width);
    const targetRow = sourceBottomUp ? height - 1 - sourceRow : sourceRow;
    const target = (targetRow * width + (pixel % width)) * 4;
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
 * Prepare an off-screen canvas with the raw image so vertical flipping can use
 * a canvas transform instead of copying the whole RGBA buffer.
 *
 * @param {ImageData} image Source pixels.
 * @param {{ current: HTMLCanvasElement | null }} sourceCanvasRef Off-screen canvas ref.
 * @param {{ current: ImageData | null }} sourceImageRef Last uploaded image ref.
 * @returns {HTMLCanvasElement} Off-screen canvas.
 */
function ensureSourceCanvas(image, sourceCanvasRef, sourceImageRef) {
  let source = sourceCanvasRef.current;
  if (source === null || source === undefined) {
    source = document.createElement('canvas');
    sourceCanvasRef.current = source;
    sourceImageRef.current = null;
  }
  if (source.width !== image.width || source.height !== image.height) {
    source.width = image.width;
    source.height = image.height;
    sourceImageRef.current = null;
  }
  if (sourceImageRef.current !== image) {
    const sourceContext = source.getContext('2d');
    if (sourceContext === null) throw new Error('The texture preview canvas is unavailable.');
    sourceContext.putImageData(image, 0, 0);
    sourceImageRef.current = image;
  }
  return source;
}

/**
 * @param {HTMLCanvasElement | null} canvas Target canvas.
 * @param {ImageData} image Pixels to draw.
 * @param {boolean} [flipY] Draw with a vertical canvas transform.
 * @param {{ current: HTMLCanvasElement | null }} [sourceCanvasRef] Off-screen canvas ref.
 * @param {{ current: ImageData | null }} [sourceImageRef] Last uploaded image ref.
 * @returns {void}
 */
function drawImageData(canvas, image, flipY = false, sourceCanvasRef, sourceImageRef) {
  if (canvas === null) throw new Error('The texture preview canvas is unavailable.');
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  if (context === null) throw new Error('The 2D canvas context is unavailable.');

  if (!flipY) {
    context.putImageData(image, 0, 0);
    return;
  }
  if (sourceCanvasRef === undefined || sourceImageRef === undefined) {
    throw new Error('The texture preview flip canvas is unavailable.');
  }

  const source = ensureSourceCanvas(image, sourceCanvasRef, sourceImageRef);
  context.save();
  context.translate(0, image.height);
  context.scale(1, -1);
  context.drawImage(source, 0, 0);
  context.restore();
}

/**
 * @param {HTMLCanvasElement | null} canvas Target canvas.
 * @param {import('three').Texture} texture Decoded texture.
 * @returns {{
 *   width: number,
 *   height: number,
 *   bits: number,
 *   image?: ImageData,
 *   glPreview?: { render: (flipY: boolean) => void, dispose: () => void },
 * }} Preview metadata.
 */
function drawTexture(canvas, texture, runtime) {
  const image = texture.image;
  const width = image?.width;
  const height = image?.height;
  const bits = bitDepthFor(texture);
  if (texture.userData?.dsh3dHdr === true) {
    try {
      const glPreview = runtime.createWebGlPreview(canvas, texture);
      return { width, height, bits, glPreview };
    } catch {
      // Fall through to the CPU path when WebGL2 or the float upload is
      // unavailable; the visible canvas has not been switched to WebGL.
    }
  }

  const pixels = imageDataFor(texture);
  drawImageData(canvas, pixels);
  return {
    width: pixels.width,
    height: pixels.height,
    bits,
    image: pixels,
  };
}

/**
 * Standalone TGA/EXR/HDR preview body.
 *
 * @param {{
 *   format: 'tga' | 'exr' | 'hdr' | 'png' | 'jpeg',
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
  const [zoomed, setZoomed] = React.useState(false);
  const [flipY, setFlipY] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const canvasRef = React.useRef(null);
  const stageRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const glPreviewRef = React.useRef(null);
  const sourceCanvasRef = React.useRef(null);
  const sourceImageRef = React.useRef(null);
  const flipYRef = React.useRef(false);
  const cacheTokenRef = React.useRef(0);
  const viewRafRef = React.useRef(0);
  const pendingViewRef = React.useRef(null);
  if (pendingViewRef.current === null) {
    pendingViewRef.current = { kind: '', x: 0, y: 0, delta: 0 };
  }
  const viewRef = React.useRef(null);
  if (viewRef.current === null) {
    viewRef.current = { scale: 1, x: 0, y: 0 };
  }
  const zoomedRef = React.useRef(false);
  const zoomLabelRef = React.useRef(null);
  const loadBytesRef = React.useRef(typeof props.loadBytes === 'function' ? props.loadBytes : null);
  const addressRef = React.useRef(typeof props.resourceAddress === 'string' ? props.resourceAddress : null);
  const rendererRef = React.useRef(renderer);

  loadBytesRef.current = typeof props.loadBytes === 'function' ? props.loadBytes : null;
  addressRef.current = typeof props.resourceAddress === 'string' ? props.resourceAddress : null;
  rendererRef.current = renderer;

  // High-frequency pan/zoom stays outside React state. Writing the transform
  // and zoom label directly avoids a new state object on every animation frame;
  // React only re-renders when the zoomed flag crosses 1x.
  const applyView = () => {
    const current = viewRef.current;
    if (canvasRef.current !== null) {
      canvasRef.current.style.transform = `translate(${current.x}px, ${current.y}px) scale(${current.scale})`;
    }
    if (zoomLabelRef.current !== null) {
      zoomLabelRef.current.textContent = `${Math.round(current.scale * 100)}%`;
    }
    const nextZoomed = current.scale > 1.001;
    if (nextZoomed !== zoomedRef.current) {
      zoomedRef.current = nextZoomed;
      setZoomed(nextZoomed);
    }
  };

  const resetView = () => {
    const current = viewRef.current;
    current.scale = 1;
    current.x = 0;
    current.y = 0;
    applyView();
  };

  loadBytesRef.current = typeof props.loadBytes === 'function' ? props.loadBytes : null;
  addressRef.current = typeof props.resourceAddress === 'string' ? props.resourceAddress : null;
  rendererRef.current = renderer;

  React.useEffect(() => {
    flipYRef.current = flipY;
  }, [flipY]);

  React.useEffect(() => {
    const controller = new AbortController();
    let disposed = false;

    const run = async () => {
      const cacheToken = (cacheTokenRef.current += 1);
      flipYRef.current = false;
      setState({ status: 'loading', failure: null, width: 0, height: 0, bits: 0 });
      resetView();
      setFlipY(false);
      glPreviewRef.current?.dispose();
      glPreviewRef.current = null;
      imageRef.current = null;
      sourceImageRef.current = null;
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

        const cacheKey = activeRenderer !== null
          && version !== undefined
          && addressRef.current !== null
          ? previewCacheKey(addressRef.current, version, format)
          : null;
        const cached = cacheKey === null ? null : getCachedPreview(cacheKey);
        if (cached !== null) {
          if (disposed || controller.signal.aborted) return;
          drawImageData(canvasRef.current, cached.image);
          imageRef.current = cached.image;
          glPreviewRef.current = null;
          sourceImageRef.current = null;
          activeRenderer?.loaded?.(version);
          resetView();
          setFlipY(false);
          setState({
            status: 'ready',
            failure: null,
            width: cached.width,
            height: cached.height,
            bits: cached.bits,
          });
          return;
        }

        const runtime = await loadViewerRuntime();
        if (disposed || controller.signal.aborted) return;

        const texture = await runtime.decodeWorkspaceTexture(format, bytes, {
          signal: controller.signal,
        });
        if (disposed || controller.signal.aborted) {
          texture.dispose();
          return;
        }

        const info = drawTexture(canvasRef.current, texture, runtime);
        texture.dispose();
        imageRef.current = info.image ?? null;
        glPreviewRef.current = info.glPreview ?? null;
        sourceImageRef.current = null;
        activeRenderer?.loaded?.(version);
        resetView();
        setFlipY(false);
        setState({
          status: 'ready',
          failure: null,
          width: info.width,
          height: info.height,
          bits: info.bits,
        });

        if (cacheKey !== null && info.image !== null && info.image !== undefined) {
          setCachedPreview(cacheKey, {
            image: info.image,
            width: info.width,
            height: info.height,
            bits: info.bits,
          });
        } else if (cacheKey !== null
          && info.image === undefined
          && info.width * info.height * 4 <= previewCacheBudget()) {
          const capture = () => {
            if (disposed || controller.signal.aborted || cacheTokenRef.current !== cacheToken) return;
            if (flipYRef.current || glPreviewRef.current !== info.glPreview) return;
            if (getCachedPreview(cacheKey) !== null) return;
            try {
              const context = canvasRef.current?.getContext('2d');
              if (context === null || context === undefined) return;
              const image = context.getImageData(0, 0, info.width, info.height);
              setCachedPreview(cacheKey, {
                image,
                width: info.width,
                height: info.height,
                bits: info.bits,
              });
            } catch {
              // Cache capture is best-effort; the preview is already visible.
            }
          };
          if (typeof requestIdleCallback === 'function') {
            requestIdleCallback(capture, { timeout: 2000 });
          } else {
            setTimeout(capture, 0);
          }
        }
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

  React.useEffect(() => {
    if (state.status !== 'ready') return;
    if (glPreviewRef.current !== null) {
      glPreviewRef.current.render(flipY);
      return;
    }
    if (imageRef.current === null) return;
    drawImageData(
      canvasRef.current,
      imageRef.current,
      flipY,
      sourceCanvasRef,
      sourceImageRef,
    );
  }, [flipY, state.status]);

  React.useEffect(() => () => {
    glPreviewRef.current?.dispose();
    glPreviewRef.current = null;
    if (viewRafRef.current !== 0) {
      cancelAnimationFrame(viewRafRef.current);
      viewRafRef.current = 0;
    }
  }, []);

  const scheduleViewFrame = () => {
    if (viewRafRef.current !== 0) return;
    viewRafRef.current = requestAnimationFrame(() => {
      viewRafRef.current = 0;
      const pending = pendingViewRef.current;
      const current = viewRef.current;
      if (pending.kind === 'drag') {
        pending.kind = '';
        current.x = pending.x;
        current.y = pending.y;
        applyView();
      } else if (pending.kind === 'wheel') {
        const delta = pending.delta;
        pending.kind = '';
        pending.delta = 0;
        const next = Math.min(
          MAX_TEXTURE_ZOOM,
          Math.max(1, current.scale * Math.exp(-delta * 0.0015)),
        );
        if (next <= 1.0001) {
          current.scale = 1;
          current.x = 0;
          current.y = 0;
        } else {
          current.scale = next;
        }
        applyView();
      }
    });
  };

  React.useEffect(() => {
    if (state.status !== 'ready') return undefined;
    const stage = stageRef.current;
    if (stage === null) return undefined;

    const onWheel = (event) => {
      event.preventDefault();
      const pending = pendingViewRef.current;
      pending.kind = 'wheel';
      pending.delta += event.deltaY * (event.deltaMode === 1 ? 16 : 1);
      scheduleViewFrame();
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, [state.status]);

  const ready = state.status === 'ready';

  const endDrag = (event) => {
    if (dragRef.current === null) return;
    if (event?.pointerId !== undefined
      && event.currentTarget?.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    setDragging(false);
  };

  const handlePointerDown = (event) => {
    if (viewRef.current.scale <= 1.001 || event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    const current = viewRef.current;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: current.x,
      y: current.y,
    };
    setDragging(true);
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (drag === null || drag.pointerId !== event.pointerId) return;
    const pending = pendingViewRef.current;
    pending.kind = 'drag';
    pending.x = drag.x + event.clientX - drag.startX;
    pending.y = drag.y + event.clientY - drag.startY;
    scheduleViewFrame();
  };

  const zoomBy = (factor) => {
    const current = viewRef.current;
    const next = Math.min(MAX_TEXTURE_ZOOM, Math.max(1, current.scale * factor));
    if (next <= 1.0001) {
      current.scale = 1;
      current.x = 0;
      current.y = 0;
    } else {
      current.scale = next;
    }
    applyView();
  };

  const handleStageKeyDown = (event) => {
    if (!ready) return;
    const isZoomed = viewRef.current.scale > 1.001;
    let handled = true;
    switch (event.key) {
      case '+':
      case '=':
        zoomBy(KEY_ZOOM_FACTOR);
        break;
      case '-':
      case '_':
        zoomBy(1 / KEY_ZOOM_FACTOR);
        break;
      case '0':
      case 'Home':
        resetView();
        break;
      case 'ArrowLeft':
        if (!isZoomed) handled = false;
        else {
          viewRef.current.x += KEY_PAN_STEP;
          applyView();
        }
        break;
      case 'ArrowRight':
        if (!isZoomed) handled = false;
        else {
          viewRef.current.x -= KEY_PAN_STEP;
          applyView();
        }
        break;
      case 'ArrowUp':
        if (!isZoomed) handled = false;
        else {
          viewRef.current.y += KEY_PAN_STEP;
          applyView();
        }
        break;
      case 'ArrowDown':
        if (!isZoomed) handled = false;
        else {
          viewRef.current.y -= KEY_PAN_STEP;
          applyView();
        }
        break;
      default:
        handled = false;
    }
    if (handled) event.preventDefault();
  };

  return h('div', {
    className: 'dsh3dv-root',
    'data-dsh3d-texture': '',
    'data-dsh3d-format': format,
  },
  h('style', null, CSS),
  h('div', {
    ref: stageRef,
    className: 'dsh3dv-texture-stage',
    role: 'region',
    tabIndex: 0,
    'aria-label': t('textureKeyboardHelp'),
    'data-zoomed': zoomed ? 'true' : undefined,
    'data-dragging': dragging ? 'true' : undefined,
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onLostPointerCapture: endDrag,
    onDoubleClick: resetView,
    onKeyDown: handleStageKeyDown,
  },
  h('canvas', {
    ref: canvasRef,
    className: 'dsh3dv-texture-image',
    role: 'img',
    'aria-label': `${format.toUpperCase()} texture`,
    style: {
      visibility: ready ? 'visible' : 'hidden',
    },
  })),
  h('div', { className: 'dsh3dv-top' },
    h('span', { className: 'dsh3dv-badge' }, t(`${format}Badge`)),
    h('div', { className: 'dsh3dv-texture-actions' },
      ready
        ? h('div', { className: 'dsh3dv-texture-controls' },
          h('button', {
            type: 'button',
            className: 'dsh3dv-texture-fit',
            onClick: resetView,
            title: t('textureFit'),
            'aria-label': t('textureFit'),
          }, t('textureFit')),
          h('button', {
            type: 'button',
            className: 'dsh3dv-texture-fit',
            'aria-pressed': flipY ? 'true' : 'false',
            onClick: () => setFlipY((value) => {
              const next = !value;
              flipYRef.current = next;
              return next;
            }),
            title: t('textureFlipY'),
            'aria-label': t('textureFlipY'),
          }, t('textureFlipY')))
        : null,
      ready
        ? h('span', { className: 'dsh3dv-badge' },
          `${state.width} × ${state.height} · ${state.bits}-bit · `,
          h('span', { ref: zoomLabelRef }, '100%'))
        : null)),
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
 * @param {'tga' | 'exr' | 'hdr' | 'png' | 'jpeg'} format Texture format.
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

/** PNG document body. */
export const PngViewer = createTextureViewer('png');

/** JPEG document body. */
export const JpegViewer = createTextureViewer('jpeg');

/** Texture slot bodies keyed by the texture format registry id. */
export const TEXTURE_VIEWER_COMPONENTS = Object.freeze({
  tga: TgaViewer,
  exr: ExrViewer,
  hdr: HdrViewer,
  png: PngViewer,
  jpeg: JpegViewer,
});
