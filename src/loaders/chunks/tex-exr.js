import {
  DataTexture,
  HalfFloatType,
  LinearFilter,
  NoColorSpace,
  RGBAFormat,
} from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';

/**
 * Decode an EXR image into a float DataTexture.
 *
 * @param {ArrayBuffer} buffer Complete EXR bytes.
 * @returns {import('three').DataTexture} Decoded texture.
 */
export function decodeExr(buffer) {
  const texData = new EXRLoader().parse(buffer);
  const texture = new DataTexture(
    texData.data,
    texData.width,
    texData.height,
    texData.format ?? RGBAFormat,
    texData.type ?? HalfFloatType,
  );
  texture.colorSpace = texData.colorSpace ?? NoColorSpace;
  texture.flipY = texData.flipY ?? false;
  texture.generateMipmaps = texData.generateMipmaps ?? false;
  texture.minFilter = texData.minFilter ?? LinearFilter;
  texture.magFilter = texData.magFilter ?? LinearFilter;
  texture.unpackAlignment = texData.unpackAlignment ?? 1;
  texture.userData.dsh3dHdr = true;
  // Three's EXRLoader flips OpenEXR scanlines into a bottom-up DataTexture.
  // The standalone preview needs to reverse them again before putImageData.
  texture.userData.dsh3dSourceBottomUp = true;
  texture.needsUpdate = true;
  return texture;
}
