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
} from '../../core/bytes.js';
import { disposeObject } from '../../core/model.js';
import { WHITE_PIXEL } from '../workspace.js';

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

const IMAGE_URI = /\.(?:avif|bmp|dds|exr|gif|hdr|jpe?g|ktx2|png|tga|webp)(?:[?#]|$)/iu;
const WHITESPACE = /\s/u;

/**
 * Read one JSON string literal starting at `start`.
 *
 * @param {string} text JSON text.
 * @param {number} start Index of the opening quote.
 * @returns {{ value: string, end: number } | null} Decoded string and the index after it.
 */
function readJsonString(text, start) {
  if (text[start] !== '"') return null;

  let index = start + 1;
  let escaped = false;
  while (index < text.length) {
    const character = text[index];
    if (escaped) {
      escaped = false;
    } else if (character === '\\') {
      escaped = true;
    } else if (character === '"') {
      index += 1;
      try {
        return { value: JSON.parse(text.slice(start, index)), end: index };
      } catch {
        return null;
      }
    }
    index += 1;
  }
  return null;
}

/**
 * Extract the JSON text of a `.gltf` document or GLB JSON chunk without
 * parsing it. GLTFLoader remains the single JSON parser.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete glTF/GLB bytes.
 * @returns {string | null} JSON text, or null when a GLB has no JSON chunk.
 */
function gltfJsonText(data) {
  const bytes = toBytes(data);
  if (bytes.byteLength >= 12
    && bytes[0] === 0x67
    && bytes[1] === 0x6c
    && bytes[2] === 0x54
    && bytes[3] === 0x46) {
    return jsonChunkOfGlb(bytes);
  }
  return decodeText(bytes).replace(/^\uFEFF/u, '');
}

/**
 * Scan JSON text for local `uri` string values without parsing the document.
 * The scan may see custom extension URIs too; they are still valid resources to
 * prefetch and are deduplicated by decoded path.
 *
 * @param {string | null} jsonText glTF JSON text.
 * @returns {Array<{ uri: string, kind: 'buffer' | 'image', aliases: Set<string> }>} Local URIs.
 */
function collectGltfUris(jsonText) {
  if (typeof jsonText !== 'string') return [];
  const entries = new Map();

  for (let index = 0; index < jsonText.length; index += 1) {
    if (jsonText[index] !== '"') continue;
    const key = readJsonString(jsonText, index);
    if (key === null) continue;
    index = key.end - 1;
    if (key.value !== 'uri') continue;

    let cursor = key.end;
    while (WHITESPACE.test(jsonText[cursor] ?? '')) cursor += 1;
    if (jsonText[cursor] !== ':') continue;
    cursor += 1;
    while (WHITESPACE.test(jsonText[cursor] ?? '')) cursor += 1;
    const value = readJsonString(jsonText, cursor);
    if (value === null) continue;
    index = value.end - 1;

    const uri = value.value;
    if (!isLocalPath(uri)) continue;

    const path = decodeLocalPath(uri);
    const kind = IMAGE_URI.test(path) ? 'image' : 'buffer';
    const current = entries.get(path);
    if (current === undefined) {
      entries.set(path, { uri, kind, aliases: new Set([uri, path]) });
    } else {
      if (current.kind === 'buffer' && kind === 'image') current.kind = 'image';
      current.aliases.add(uri);
      current.aliases.add(path);
    }
  }
  return [...entries.values()];
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
  const modelArea = modelSize.x * modelSize.z;
  const childBox = new Box3();
  const childSize = new Vector3();

  let hidden = 0;
  object.traverse((child) => {
    if (child.isMesh !== true || child.isSkinnedMesh === true) return;

    const geometry = child.geometry;
    const position = geometry?.getAttribute?.('position');
    if (position === undefined || position.count > 8) return;

    const index = geometry.getIndex();
    const triangles = (index === null ? position.count : index.count) / 3;
    if (triangles > 4) return;

    const material = child.material;
    const materials = Array.isArray(material) ? material : null;
    const transparent = materials === null
      ? material !== null && material !== undefined
        && (material.transparent === true || material.opacity < 1)
      : materials.some((entry) => entry !== null
        && (entry.transparent === true || entry.opacity < 1));
    if (!transparent) return;

    let label = child.name;
    if (materials === null) {
      if (material?.name) label += ` ${material.name}`;
    } else {
      for (const entry of materials) {
        if (entry?.name) label += ` ${entry.name}`;
      }
    }
    if (/plane|shadow|ground|contact|bake/iu.test(label) === false) return;

    childBox.setFromObject(child);
    childBox.getSize(childSize);
    const thickness = Math.min(childSize.x, childSize.y, childSize.z);
    const horizontalArea = childSize.x * childSize.z;

    if (thickness > maxDimension * 0.001) return;
    if (childBox.min.y - modelBox.min.y > maxDimension * 0.005) return;
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
    let jsonText = null;
    if (typeof options.readWorkspaceFile === 'function'
      && typeof options.resourceAddress === 'string') {
      try {
        jsonText = gltfJsonText(data);
      } catch {
        // GLTFLoader reports malformed files; do not duplicate that error here.
      }
    }

    if (jsonText !== null) {
      // A document may reference the same buffer or image from several
      // primitives; each unique URI is read exactly once.
      const entries = collectGltfUris(jsonText);
      let next = 0;
      const workers = Array.from({ length: Math.min(4, entries.length) }, async () => {
        while (next < entries.length) {
          const entry = entries[next];
          next += 1;
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
              for (const alias of entry.aliases) blobs.set(alias, blob);
            } else if (entry.kind === 'image') {
              onWarn(`[dsh-3d-viewer] Could not read glTF image "${entry.uri}"; using a white texture.`);
              for (const alias of entry.aliases) blobs.set(alias, WHITE_PIXEL);
            } else {
              onWarn(`[dsh-3d-viewer] Could not read glTF buffer "${entry.uri}".`);
            }
          } catch (error) {
            if (options.signal?.aborted === true) throw abortError();
            if (entry.kind === 'image') {
              onWarn(`[dsh-3d-viewer] Could not read glTF image "${entry.uri}"; using a white texture.`);
              for (const alias of entry.aliases) blobs.set(alias, WHITE_PIXEL);
            } else {
              onWarn(`[dsh-3d-viewer] Could not read glTF buffer "${entry.uri}": ${String(error)}`);
            }
          }
        }
      });
      await Promise.all(workers);
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
