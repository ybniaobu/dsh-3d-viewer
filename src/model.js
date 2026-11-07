import { Box3, Vector3 } from 'three';

/** Normalized bits used when a position component is NaN. */
const NAN_BITS = 0x7fc00000;

/**
 * Hash three IEEE-754 float bit patterns into one 32-bit bucket key.
 *
 * @param {number} x X bits.
 * @param {number} y Y bits.
 * @param {number} z Z bits.
 * @returns {number} 32-bit hash.
 */
function hashPosition(x, y, z) {
  let hash = Math.imul(x ^ 0x9e3779b9, 0x85ebca6b);
  hash = Math.imul(hash ^ y, 0xc2b2ae35);
  hash = Math.imul(hash ^ z, 0x27d4eb2f);
  return hash ^ (hash >>> 15);
}

/**
 * Compare two vertices of a non-interleaved Float32 position attribute.
 *
 * @param {Float32Array} array Position storage.
 * @param {number} a First vertex index.
 * @param {number} b Second vertex index.
 * @returns {boolean} True when the positions are identical (NaN equals NaN).
 */
function samePosition(array, a, b) {
  const ao = a * 3;
  const bo = b * 3;
  for (let component = 0; component < 3; component += 1) {
    const left = array[ao + component];
    const right = array[bo + component];
    if (left === right) continue;
    if (left !== left && right !== right) continue;
    return false;
  }
  return true;
}

/**
 * Count distinct positions without allocating one string per vertex.
 *
 * FBX exporters commonly split a shared vertex by normal or UV seam, so
 * deduplicating by exact position keeps the HUD count meaningful.
 *
 * @param {Float32Array} array Position storage.
 * @param {number} count Number of vertices.
 * @returns {number} Distinct position count.
 */
function countUniqueFloat32(array, count) {
  const bits = new Uint32Array(array.buffer, array.byteOffset, array.length);
  const buckets = new Map();
  let unique = 0;

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    const x = array[offset];
    const y = array[offset + 1];
    const z = array[offset + 2];
    const xBits = x === 0 ? 0 : (x !== x ? NAN_BITS : bits[offset]);
    const yBits = y === 0 ? 0 : (y !== y ? NAN_BITS : bits[offset + 1]);
    const zBits = z === 0 ? 0 : (z !== z ? NAN_BITS : bits[offset + 2]);
    const key = hashPosition(xBits, yBits, zBits);
    const bucket = buckets.get(key);

    if (bucket === undefined) {
      buckets.set(key, index);
      unique += 1;
      continue;
    }

    if (typeof bucket === 'number') {
      if (samePosition(array, bucket, index)) continue;
      buckets.set(key, [bucket, index]);
      unique += 1;
      continue;
    }

    let found = false;
    for (let candidate = 0; candidate < bucket.length; candidate += 1) {
      if (samePosition(array, bucket[candidate], index)) {
        found = true;
        break;
      }
    }
    if (!found) {
      bucket.push(index);
      unique += 1;
    }
  }

  return unique;
}

/**
 * Count distinct positions for any BufferAttribute.
 *
 * The fast path avoids string allocation for the common non-interleaved
 * Float32 position attribute; interleaved or non-float attributes fall back
 * to exact key strings.
 *
 * @param {import('three').BufferAttribute | import('three').InterleavedBufferAttribute} position Position attribute.
 * @returns {number} Distinct position count.
 */
function countUniquePositions(position) {
  const count = position.count;
  if (count <= 0) return 0;

  if (position.itemSize === 3
    && position.array instanceof Float32Array
    && position.isInterleavedBufferAttribute !== true) {
    return countUniqueFloat32(position.array, count);
  }

  const seen = new Set();
  for (let index = 0; index < count; index += 1) {
    seen.add(`${position.getX(index)},${position.getY(index)},${position.getZ(index)}`);
  }
  return seen.size;
}

/**
 * Add every material reachable from one mesh to the shared set.
 *
 * @param {unknown} material Mesh material or material array.
 * @param {Set<object>} materials Accumulating material set.
 */
function collectMaterials(material, materials) {
  if (Array.isArray(material)) {
    for (const entry of material) {
      if (entry !== undefined && entry !== null) materials.add(entry);
    }
  } else if (material !== undefined && material !== null) {
    materials.add(material);
  }
}

/**
 * Collect the values the HUD and the camera fit need from one parsed graph.
 *
 * Vertices are measured per mesh by distinct position, then summed across
 * meshes. This keeps the count meaningful for FBX exports that split vertices
 * by normal or UV seam instead of sharing an index buffer.
 *
 * The graph is walked once, carrying visibility down the tree, so an invisible
 * branch costs one check instead of one ancestor scan per descendant.
 *
 * @param {import('three').Object3D} object Parsed model graph.
 * @returns {{
 *   meshes: number,
 *   renderables: number,
 *   vertices: number,
 *   triangles: number,
 *   materials: number,
 *   box: Box3,
 *   size: Vector3,
 *   center: Vector3,
 *   maxDimension: number,
 * }} Mesh counts and a world-space bounding volume.
 */
export function collectModelStats(object) {
  object.updateMatrixWorld(true);
  const box = new Box3();
  const size = new Vector3();
  const center = new Vector3();
  const scratch = new Box3();

  let meshes = 0;
  let renderables = 0;
  let vertices = 0;
  let triangles = 0;
  const materials = new Set();

  /** @param {import('three').Object3D} node */
  const visit = (node) => {
    if (node.visible === false) return;

    const geometry = node.geometry;
    if (geometry !== undefined && geometry !== null) {
      const isMesh = node.isMesh === true;
      const isLine = node.isLine === true;
      const isPoints = node.isPoints === true;

      if (isMesh || isLine || isPoints) {
        renderables += 1;
        geometry.computeBoundingBox();
        if (geometry.boundingBox !== null) {
          box.union(scratch.copy(geometry.boundingBox).applyMatrix4(node.matrixWorld));
        }

        if (isMesh) {
          meshes += 1;
          const position = geometry.getAttribute('position');
          if (position !== undefined && position.count > 0) {
            vertices += countUniquePositions(position);
            const index = geometry.getIndex();
            triangles += Math.floor((index === null ? position.count : index.count) / 3);
          }
          collectMaterials(node.material, materials);
        }
      }
    }

    const children = node.children;
    for (let index = 0; index < children.length; index += 1) visit(children[index]);
  };

  visit(object);

  box.getSize(size);
  box.getCenter(center);

  return {
    meshes,
    renderables,
    vertices,
    triangles,
    materials: materials.size,
    box,
    size,
    center,
    maxDimension: Math.max(size.x, size.y, size.z),
  };
}

/**
 * Remove lights, cameras, and audio nodes that belong to the source file.
 *
 * FBX and glTF documents can carry their own lights and cameras. The preview
 * supplies its own lighting and camera, so embedded ones would double-light
 * the model or leave stray nodes in the graph.
 *
 * @param {import('three').Object3D} root Parsed scene graph.
 * @returns {number} Number of removed nodes.
 */
export function stripEmbeddedSceneNodes(root) {
  const embedded = [];
  root.traverse((child) => {
    if (child.isLight === true || child.isCamera === true || child.isAudio === true) {
      embedded.push(child);
    }
  });

  for (const node of embedded) {
    node.removeFromParent();
    node.dispose?.();
  }
  return embedded.length;
}

/**
 * Dispose every geometry, material, texture, skeleton, and embedded Blob URL
 * reachable from one graph. Shared resources are released once.
 *
 * @param {import('three').Object3D} root Parsed graph or whole scene.
 */
export function disposeObject(root) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  const skeletons = new Set();
  const blobUrls = new Set();

  root.traverse((child) => {
    if (child.geometry !== undefined && child.geometry !== null) {
      geometries.add(child.geometry);
    }
    if (child.isSkinnedMesh === true && child.skeleton !== undefined && child.skeleton !== null) {
      skeletons.add(child.skeleton);
    }

    const material = child.material;
    if (material === undefined || material === null) return;

    for (const entry of Array.isArray(material) ? material : [material]) {
      if (entry === undefined || entry === null) continue;
      materials.add(entry);

      for (const value of Object.values(entry)) {
        if (value === null || typeof value !== 'object') continue;
        if (value.isTexture === true) {
          textures.add(value);
        } else if (Array.isArray(value)) {
          for (const nested of value) {
            if (nested !== null && typeof nested === 'object' && nested.isTexture === true) {
              textures.add(nested);
            }
          }
        }
      }
    }
  });

  for (const texture of textures) {
    const source = texture.image?.src;
    if (typeof source === 'string' && source.startsWith('blob:')) blobUrls.add(source);
    texture.dispose();
  }

  if (typeof URL.revokeObjectURL === 'function') {
    for (const url of blobUrls) {
      try {
        URL.revokeObjectURL(url);
      } catch {
        // A URL already released by the browser is harmless.
      }
    }
  }

  for (const skeleton of skeletons) skeleton.dispose();
  for (const material of materials) material.dispose();
  for (const geometry of geometries) geometry.dispose();
}
