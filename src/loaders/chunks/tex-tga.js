import {
  DataTexture,
  LinearFilter,
  LinearMipmapLinearFilter,
  NoColorSpace,
  RGBAFormat,
  UnsignedByteType,
} from 'three';
import { TGALoader } from 'three/addons/loaders/TGALoader.js';

/**
 * Decode a TGA image into an RGBA DataTexture.
 *
 * @param {ArrayBuffer} buffer Complete TGA bytes.
 * @returns {import('three').DataTexture} Decoded texture.
 */
export function decodeTga(buffer) {
  const texData = new TGALoader().parse(buffer);
  const texture = new DataTexture(
    texData.data,
    texData.width,
    texData.height,
    RGBAFormat,
    UnsignedByteType,
  );
  texture.colorSpace = NoColorSpace;
  texture.flipY = texData.flipY ?? true;
  texture.generateMipmaps = texData.generateMipmaps ?? true;
  texture.minFilter = texData.minFilter ?? LinearMipmapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}
