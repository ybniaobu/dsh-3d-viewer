import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

/**
 * Decode one EXR or HDR image off the main thread and transfer its pixel
 * buffer back. TGA keeps using the small main-thread decoder.
 *
 * @param {MessageEvent<{ id: number, format: 'exr' | 'hdr', bytes: ArrayBuffer }>} event Request.
 * @returns {void}
 */
self.onmessage = (event) => {
  const { id, format, bytes } = event.data;
  try {
    const loader = format === 'exr' ? new EXRLoader() : new HDRLoader();
    const texData = loader.parse(bytes);
    self.postMessage({
      id,
      ok: true,
      width: texData.width,
      height: texData.height,
      data: texData.data.buffer,
      format: texData.format,
      type: texData.type,
      colorSpace: texData.colorSpace,
      flipY: texData.flipY,
      generateMipmaps: texData.generateMipmaps,
      minFilter: texData.minFilter,
      magFilter: texData.magFilter,
      unpackAlignment: texData.unpackAlignment,
    }, [texData.data.buffer]);
  } catch (error) {
    self.postMessage({
      id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

// Imports and the message handler are ready; only now may the client transfer
// ownership of input bytes, so startup failures can still fall back.
self.postMessage({ ready: true });
