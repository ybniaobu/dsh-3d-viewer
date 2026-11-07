import {
  DataTexture,
  HalfFloatType,
  LinearFilter,
  NoColorSpace,
  RGBAFormat,
} from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

/**
 * Decode a Radiance RGBE image into a half-float DataTexture.
 *
 * @param {ArrayBuffer} buffer Complete HDR bytes.
 * @returns {import('three').DataTexture} Decoded texture.
 */
export function decodeHdr(buffer) {
  const texData = new HDRLoader().parse(buffer);
  const texture = new DataTexture(
    texData.data,
    texData.width,
    texData.height,
    RGBAFormat,
    texData.type ?? HalfFloatType,
  );
  texture.colorSpace = texData.colorSpace ?? NoColorSpace;
  texture.flipY = texData.flipY ?? true;
  texture.generateMipmaps = texData.generateMipmaps ?? false;
  texture.minFilter = texData.minFilter ?? LinearFilter;
  texture.magFilter = texData.magFilter ?? LinearFilter;
  texture.unpackAlignment = 1;
  texture.userData.dsh3dHdr = true;
  texture.needsUpdate = true;
  return texture;
}
