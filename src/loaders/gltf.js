import { Box3, LoadingManager, Vector3 } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
  abortError,
  decodeLocalPath,
  decodeText,
  isLocalPath,
  mimeOf,
  toArrayBuffer,
  toBytes,
  warn,
} from '../bytes.js';
import { disposeObject } from '../model.js';
import { WHITE_PIXEL } from './workspace.js';

/**
 * Extract the JSON chunk of a binary GLB container.
 *
 * @param {Uint8Array} bytes Complete GLB bytes.
 * @returns {string | null} JSON text, or null when the container has no JSON chunk.
 */
function jsonChunkOfGlb(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 12;
  while (offset + 8 <= bytes.byteLength) {
    const length = view.getUint32(offset, true);
    const type = view.getUint32(offset + 4, true);
    const start = offset + 8;
    if (start + length > bytes.byteLength) break;
    if (type === 0x4e4f534a) {
      return decodeText(bytes.subarray(start, start + length)).replace(/\0+$/u, '').trim();
    }
    offset = start + length;
  }
  return null;
}

/**
 * Parse glTF JSON from either a `.gltf` text document or a `.glb` container.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete glTF/GLB bytes.
 * @returns {object | null} Parsed glTF JSON, or null when a GLB has no JSON chunk.
 */
function parseGltfJson(data) {
  const bytes = toBytes(data);
  if (bytes.byteLength >= 12
    && bytes[0] === 0x67
    && bytes[1] === 0x6c
    && bytes[2] === 0x54
    && bytes[3] === 0x46) {
    const json = jsonChunkOfGlb(bytes);
    return json === null ? null : JSON.parse(json);
  }
  return JSON.parse(decodeText(bytes).replace(/^\uFEFF/u, ''));
}

/**
 * List the external buffers and images a glTF document references.
 *
 * @param {any} json Parsed glTF JSON.
 * @returns {Array<{ uri: string, kind: 'buffer' | 'image' }>} Local URIs in document order.
 */
function collectUris(json) {
  const entries = [];
  for (const buffer of Array.isArray(json.buffers) ? json.buffers : []) {
    if (isLocalPath(buffer?.uri)) entries.push({ uri: buffer.uri, kind: 'buffer' });
  }
  for (const image of Array.isArray(json.images) ? json.images : []) {
    if (isLocalPath(image?.uri)) entries.push({ uri: image.uri, kind: 'image' });
  }
  return entries;
}

function createAssets() {
  const blobUrls = new Set();
  return {
    onTextureLoad() {
      return () => {};
    },
    track(url) {
      blobUrls.add(url);
    },
    dispose() {
      for (const url of blobUrls) URL.revokeObjectURL(url);
      blobUrls.clear();
    },
  };
}

/**
 * Hide Sketchfab-style baked contact-shadow planes.
 *
 * These are usually a single large quad at the model's ground plane with a
 * transparent material and a baked shadow texture. They are not part of the
 * vehicle/object itself and look like a gray slab when alpha is unavailable or
 * the plane is viewed at an angle.
 *
 * @param {import('three').Object3D} object Parsed glTF scene.
 * @returns {number} Number of hidden meshes.
 */
export function hideBakedShadowPlanes(object) {
  object.updateMatrixWorld(true);
  const modelBox = new Box3().setFromObject(object);
  const modelSize = modelBox.getSize(new Vector3());
  const maxDimension = Math.max(modelSize.x, modelSize.y, modelSize.z);
  if (!Number.isFinite(maxDimension) || maxDimension <= 0) return 0;

  let hidden = 0;
  object.traverse((child) => {
    if (child.isMesh !== true || child.isSkinnedMesh === true) return;

    const geometry = child.geometry;
    const position = geometry?.getAttribute?.('position');
    if (position === undefined || position.count > 8) return;

    const index = geometry.getIndex();
    const triangles = (index === null ? position.count : index.count) / 3;
    if (triangles > 4) return;

    const materials = Array.isArray(child.material) ? child.material : [child.material];
    const transparent = materials.some((material) => material !== null
      && (material.transparent === true || material.opacity < 1));
    if (!transparent) return;

    const label = `${child.name} ${materials.map((material) => material?.name ?? '').join(' ')}`;
    if (/plane|shadow|ground|contact|bake/iu.test(label) === false) return;

    const box = new Box3().setFromObject(child);
    const size = box.getSize(new Vector3());
    const thickness = Math.min(size.x, size.y, size.z);
    const horizontalArea = size.x * size.z;
    const modelArea = modelSize.x * modelSize.z;

    if (thickness > maxDimension * 0.001) return;
    if (box.min.y - modelBox.min.y > maxDimension * 0.005) return;
    if (horizontalArea < modelArea * 0.25) return;

    child.visible = false;
    child.castShadow = false;
    child.receiveShadow = false;
    hidden += 1;
  });

  return hidden;
}

/**
 * Load a glTF or GLB scene, including external workspace buffers/images and
 * animation clips. The file may be either JSON text or a binary GLB container.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete glTF/GLB bytes.
 * @param {{
 *   readWorkspaceFile?: Function,
 *   resourceAddress?: string,
 *   signal?: AbortSignal,
 *   onWarn?: (message: string) => void,
 * }} [options] Workspace reader, document address, cancellation, and diagnostics.
 * @returns {Promise<{ object: import('three').Object3D, assets: object }>} Scene and asset controls.
 */
export async function loadGltfModel(data, options = {}) {
  const onWarn = options.onWarn ?? warn;
  const assets = createAssets();
  const blobs = new Map();

  try {
    let json = null;
    try {
      json = parseGltfJson(data);
    } catch (error) {
      throw new Error(`Invalid glTF JSON: ${error instanceof Error ? error.message : String(error)}`);
    }

    if (json !== null && typeof options.readWorkspaceFile === 'function'
      && typeof options.resourceAddress === 'string') {
      // A document may reference the same buffer or image from several
      // primitives; each unique (kind, uri) pair is read exactly once.
      const entries = new Map();
      for (const entry of collectUris(json)) {
        entries.set(`${entry.kind}\u0000${entry.uri}`, entry);
      }

      await Promise.all([...entries.values()].map(async (entry) => {
        if (options.signal?.aborted === true) throw abortError();
        try {
          const result = await options.readWorkspaceFile(options.resourceAddress, decodeLocalPath(entry.uri), {
            signal: options.signal,
          });
          if (options.signal?.aborted === true) throw abortError();
          if (result?.ok === true) {
            const blob = URL.createObjectURL(new Blob([result.value.data], {
              type: entry.kind === 'image' ? mimeOf(entry.uri) : 'application/octet-stream',
            }));
            assets.track(blob);
            blobs.set(entry.uri, blob);
            const decoded = decodeLocalPath(entry.uri);
            if (decoded !== entry.uri) blobs.set(decoded, blob);
          } else if (entry.kind === 'image') {
            onWarn(`[dsh-3d-viewer] Could not read glTF image "${entry.uri}"; using a white texture.`);
            blobs.set(entry.uri, WHITE_PIXEL);
          } else {
            onWarn(`[dsh-3d-viewer] Could not read glTF buffer "${entry.uri}".`);
          }
        } catch (error) {
          if (options.signal?.aborted === true) throw abortError();
          if (entry.kind === 'image') {
            onWarn(`[dsh-3d-viewer] Could not read glTF image "${entry.uri}"; using a white texture.`);
            blobs.set(entry.uri, WHITE_PIXEL);
          } else {
            onWarn(`[dsh-3d-viewer] Could not read glTF buffer "${entry.uri}": ${String(error)}`);
          }
        }
      }));
    }

    const manager = new LoadingManager();
    manager.setURLModifier((url) => blobs.get(url) ?? url);

    const gltf = await new Promise((resolve, reject) => {
      const loader = new GLTFLoader(manager);
      let settled = false;
      const fail = (error) => {
        if (settled) return;
        settled = true;
        reject(error instanceof Error ? error : new Error(String(error)));
      };

      try {
        loader.parse(toArrayBuffer(data), '', (result) => {
          if (settled) return;
          settled = true;
          if (options.signal?.aborted === true) {
            disposeObject(result.scene);
            reject(abortError());
            return;
          }
          resolve(result);
        }, fail);
      } catch (error) {
        fail(error);
      }
    });

    const object = gltf.scene;
    object.animations = Array.isArray(gltf.animations) ? gltf.animations : [];
    hideBakedShadowPlanes(object);
    return { object, assets };
  } catch (error) {
    assets.dispose();
    throw error;
  }
}
