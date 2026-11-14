import {
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
} from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { abortError, toArrayBuffer } from '../../core/bytes.js';
import { disposeObject } from '../../core/model.js';

/**
 * Parse one complete STL file (ASCII or binary) into a single mesh.
 *
 * STL has no material library or scene hierarchy, so a neutral double-sided
 * PBR material is assigned. Binary STL vertex colors are retained when present.
 *
 * @param {Uint8Array | ArrayBuffer | string} data Complete STL bytes or text.
 * @returns {import('three').Mesh} The parsed STL mesh.
 */
export function parseStlBytes(data) {
  const geometry = new STLLoader().parse(toArrayBuffer(data));
  if (geometry.getAttribute('normal') === undefined) geometry.computeVertexNormals();
  const hasColors = geometry.hasColors === true;
  const material = new MeshStandardMaterial({
    name: 'STL',
    color: hasColors ? 0xffffff : 0xc9c9c9,
    metalness: 0,
    roughness: 0.8,
    side: DoubleSide,
    vertexColors: hasColors,
  });
  const mesh = new Mesh(geometry, material);
  mesh.name = 'STL';
  mesh.animations = [];
  return mesh;
}

/**
 * Load an STL model.
 *
 * @param {Uint8Array | ArrayBuffer | string} data STL bytes or text.
 * @param {{ signal?: AbortSignal }} [options] Cancellation.
 * @returns {Promise<{ object: import('three').Mesh, assets: null }>} Parsed mesh.
 */
export async function loadStlModel(data, options = {}) {
  if (options.signal?.aborted === true) throw abortError();
  const object = parseStlBytes(data);
  if (options.signal?.aborted === true) {
    disposeObject(object);
    throw abortError();
  }
  return { object, assets: null };
}
