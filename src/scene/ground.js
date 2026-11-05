import {
  Color,
  DataTexture,
  DoubleSide,
  LinearFilter,
  LinearMipmapLinearFilter,
  Mesh,
  NoColorSpace,
  PlaneGeometry,
  RGBAFormat,
  RepeatWrapping,
  ShaderMaterial,
  ShadowMaterial,
  UnsignedByteType,
  Vector4,
} from 'three';

const GRID_TEXTURE_SIZE = 512;
const GRID_TEXTURE_CELLS = 5;
const GRID_MINOR_HALF_WIDTH_RATIO = 0.016;
const GRID_MAJOR_HALF_WIDTH_RATIO = 0.022;
const GRID_TEXTURE_AA = 0.75;

const GRID_VERTEX_SHADER = `
varying vec3 vWorldPosition;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

const GRID_FRAGMENT_SHADER = `
uniform sampler2D uGridMap;
uniform vec3 uColor;
uniform float uGridScale;
uniform float uMinorAlpha;
uniform float uMajorAlpha;
uniform float uFogStart;
uniform float uFogEnd;

varying vec3 vWorldPosition;

void main() {
  // One normalized projection-depth factor drives fog color, transparency,
  // and the final disappearance together.
  float depthT = clamp(
    (gl_FragCoord.z - uFogStart) / max(uFogEnd - uFogStart, 1e-6),
    0.0,
    1.0
  );
  if (depthT >= 0.998) discard;

  float opacity = 1.0 - depthT;
  vec2 gridUv = vWorldPosition.xz * uGridScale;
  vec2 lines = texture2D(uGridMap, gridUv).rg;
  float alpha = max(lines.r * uMinorAlpha, lines.g * uMajorAlpha) * opacity;
  vec3 color = mix(uColor, vec3(1.0), depthT);

  if (alpha <= 0.002) discard;
  gl_FragColor = vec4(color, alpha);
  #include <colorspace_fragment>
}
`;

const _depthProbe = new Vector4();

/** Rasterized grid pixels, shared by every viewer on the page. */
let gridPixelCache = null;

/**
 * Pick a decimal grid step near one twelfth of the model's largest dimension.
 *
 * @param {number} size Largest model dimension.
 * @returns {number} A 1/2/5 x 10^n world-space spacing.
 */
export function niceGridStep(size) {
  const raw = size / 12;
  if (!Number.isFinite(raw) || raw <= 0) return 1;
  const power = 10 ** Math.floor(Math.log10(raw));
  const normalized = raw / power;
  const multiplier = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return multiplier * power;
}

/**
 * Convert a camera-space distance into the projection-window depth used by the
 * grid shader. The value is independent of the viewport size.
 *
 * @param {import('three').PerspectiveCamera} camera Active camera.
 * @param {number} viewDistance Distance from the camera along -Z.
 * @returns {number} Depth in [0, 1].
 */
function projectionWindowDepth(camera, viewDistance) {
  _depthProbe.set(0, 0, -viewDistance, 1).applyMatrix4(camera.projectionMatrix);
  return (_depthProbe.z / _depthProbe.w) * 0.5 + 0.5;
}

/**
 * Build the repeating 5x5-cell grid map used by the mipmapped grid shader.
 *
 * R stores minor-line coverage and G stores major-line coverage. The texture is
 * sampled with mipmaps and maximum anisotropy instead of screen-space
 * derivatives, so distant lines fade smoothly rather than breaking into dashes.
 *
 * The pixel data is deterministic, so it is rasterized once per page and
 * reused by every viewer; only the GPU texture object is per-renderer.
 *
 * @returns {Uint8Array} RGBA grid coverage pixels.
 */
function gridPixelData() {
  if (gridPixelCache !== null) return gridPixelCache;

  const size = GRID_TEXTURE_SIZE;
  const cellSize = size / GRID_TEXTURE_CELLS;
  const minorHalfWidth = cellSize * GRID_MINOR_HALF_WIDTH_RATIO;
  const majorHalfWidth = cellSize * GRID_MAJOR_HALF_WIDTH_RATIO;
  const data = new Uint8Array(size * size * 4);

  const coverage = (distance, halfWidth) => {
    const inner = Math.max(halfWidth - GRID_TEXTURE_AA, 0);
    const outer = halfWidth + GRID_TEXTURE_AA;
    if (distance <= inner) return 1;
    if (distance >= outer) return 0;
    const t = (distance - inner) / (outer - inner);
    return 1 - t * t * (3 - 2 * t);
  };

  for (let y = 0; y < size; y += 1) {
    const yPos = y + 0.5;
    const minorY = yPos % cellSize;
    const minorDistanceY = Math.min(minorY, cellSize - minorY);
    const majorDistanceY = Math.min(yPos, size - yPos);

    for (let x = 0; x < size; x += 1) {
      const xPos = x + 0.5;
      const minorX = xPos % cellSize;
      const minorDistanceX = Math.min(minorX, cellSize - minorX);
      const majorDistanceX = Math.min(xPos, size - xPos);

      const minor = Math.max(
        coverage(minorDistanceX, minorHalfWidth),
        coverage(minorDistanceY, minorHalfWidth),
      );
      const major = Math.max(
        coverage(majorDistanceX, majorHalfWidth),
        coverage(majorDistanceY, majorHalfWidth),
      );

      const offset = (y * size + x) * 4;
      data[offset] = Math.round(minor * 255);
      data[offset + 1] = Math.round(major * 255);
      data[offset + 2] = 0;
      data[offset + 3] = 255;
    }
  }

  gridPixelCache = data;
  return data;
}

/**
 * Wrap the shared grid pixels in a mipmapped, repeating DataTexture.
 *
 * @param {number} anisotropy Maximum anisotropy supported by the renderer.
 * @returns {DataTexture} Repeating grid coverage texture.
 */
function createGridTexture(anisotropy) {
  const size = GRID_TEXTURE_SIZE;
  const texture = new DataTexture(gridPixelData(), size, size, RGBAFormat, UnsignedByteType);
  texture.name = 'dsh3dv-grid';
  texture.colorSpace = NoColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = Math.max(1, Math.floor(anisotropy));
  texture.needsUpdate = true;
  return texture;
}

/**
 * Build the procedural infinite grid and the transparent shadow receiver.
 *
 * @param {{
 *   scene: import('three').Scene,
 *   stats: ReturnType<import('../model.js').collectModelStats>,
 *   maxDimension: number,
 *   maxAnisotropy?: number,
 * }} options Target scene, model bounds, and renderer anisotropy support.
 * @returns {{
 *   update: (camera: import('three').PerspectiveCamera, target: import('three').Vector3, distance: number) => void,
 *   setGridVisible: (visible: boolean) => boolean,
 *   setShadowVisible: (visible: boolean) => boolean,
 *   dispose: () => void,
 * }} Ground controls.
 */
export function createGround({ scene, stats, maxDimension, maxAnisotropy = 1 }) {
  const floorY = Number.isFinite(stats.box.min.y)
    ? stats.box.min.y - maxDimension * 0.003
    : -maxDimension * 0.003;
  const gridCell = niceGridStep(maxDimension);
  const gridTexture = createGridTexture(maxAnisotropy);

  const gridGeometry = new PlaneGeometry(maxDimension * 10000, maxDimension * 10000);
  gridGeometry.rotateX(-Math.PI / 2);
  const gridUniforms = {
    uGridMap: { value: gridTexture },
    uColor: { value: new Color(0x7b8087) },
    uGridScale: { value: 1 / (gridCell * GRID_TEXTURE_CELLS) },
    uMinorAlpha: { value: 0.25 },
    uMajorAlpha: { value: 0.5 },
    uFogStart: { value: 0.9 },
    uFogEnd: { value: 0.99 },
  };
  const gridMaterial = new ShaderMaterial({
    uniforms: gridUniforms,
    vertexShader: GRID_VERTEX_SHADER,
    fragmentShader: GRID_FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    toneMapped: false,
  });
  const grid = new Mesh(gridGeometry, gridMaterial);
  grid.position.set(stats.center.x, floorY, stats.center.z);
  grid.renderOrder = 0;
  scene.add(grid);

  const shadowGeometry = new PlaneGeometry(maxDimension * 20, maxDimension * 20);
  shadowGeometry.rotateX(-Math.PI / 2);
  const shadowMaterial = new ShadowMaterial({
    color: 0x000000,
    opacity: 0.24,
    transparent: true,
    depthWrite: false,
  });
  const shadowPlane = new Mesh(shadowGeometry, shadowMaterial);
  shadowPlane.position.set(stats.center.x, floorY + maxDimension * 0.0002, stats.center.z);
  shadowPlane.receiveShadow = true;
  shadowPlane.renderOrder = 1;
  scene.add(shadowPlane);

  function update(camera, target, distance) {
    grid.position.x = target.x;
    grid.position.z = target.z;
    grid.updateMatrixWorld();

    const fogEndWorld = Math.min(distance * 6, maxDimension * 4000);
    const fogStartWorld = Math.min(distance * 1.8, fogEndWorld * 0.3);
    gridUniforms.uFogStart.value = projectionWindowDepth(camera, fogStartWorld);
    gridUniforms.uFogEnd.value = projectionWindowDepth(camera, fogEndWorld);
  }

  function setGridVisible(visible) {
    const next = Boolean(visible);
    if (grid.visible === next) return false;
    grid.visible = next;
    return true;
  }

  function setShadowVisible(visible) {
    const next = Boolean(visible);
    if (shadowPlane.visible === next) return false;
    shadowPlane.visible = next;
    return true;
  }

  function dispose() {
    scene.remove(grid, shadowPlane);
    gridGeometry.dispose();
    gridTexture.dispose();
    gridMaterial.dispose();
    shadowGeometry.dispose();
    shadowMaterial.dispose();
  }

  return {
    update,
    setGridVisible,
    setShadowVisible,
    dispose,
  };
}
