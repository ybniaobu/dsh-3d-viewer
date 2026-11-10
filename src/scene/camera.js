import { Spherical, Vector3 } from 'three';

const FIT_DIRECTION = new Vector3(1, 0.55, 1.3).normalize();
const KEY_STEP = Math.PI / 36;
const scratchOffset = new Vector3();
const scratchSpherical = new Spherical();

/**
 * Match the camera projection to the renderer's depth-buffer convention before
 * the first render. Three normally applies this on the first draw, but the grid
 * fog uniforms are computed earlier and need the final projection matrix.
 *
 * @param {import('three').PerspectiveCamera} camera Active camera.
 * @param {boolean} reversedDepthBuffer Whether the renderer uses reversed depth.
 * @returns {void}
 */
export function enableReversedDepth(camera, reversedDepthBuffer) {
  if (reversedDepthBuffer !== true || camera.reversedDepth === true) return;
  // Three exposes no setter; this mirrors WebGLRenderer's first-render update.
  camera._reversedDepth = true;
  camera.updateProjectionMatrix();
}

/**
 * Keep the near/far planes proportional to the current orbit distance so the
 * grid's fog distance stays stable across zoom levels.
 *
 * @param {import('three').PerspectiveCamera} camera Active camera.
 * @param {number} distance Camera-to-target distance.
 * @param {number} maxDimension Largest model dimension.
 */
export function updateClipPlanes(camera, distance, maxDimension) {
  const near = Math.max(distance / 500, maxDimension / 10000, 0.0001);
  const far = Math.max(distance * 40, maxDimension * 20);
  if (camera.near === near && camera.far === far) return;

  camera.near = near;
  camera.far = far;
  camera.updateProjectionMatrix();
}

/**
 * Frame the model from a three-quarter view and set orbit limits.
 *
 * @param {import('three').PerspectiveCamera} camera Active camera.
 * @param {import('three').OrbitControls} controls Orbit controls.
 * @param {ReturnType<import('../model.js').collectModelStats>} stats Model bounds.
 * @param {number} maxDimension Largest model dimension.
 * @returns {number} Camera-to-target distance.
 */
export function frameModel(camera, controls, stats, maxDimension) {
  const fov = (camera.fov * Math.PI) / 180;
  const aspect = camera.aspect > 0 ? camera.aspect : 1;
  const fitHeight = stats.size.y / (2 * Math.tan(fov / 2));
  const fitWidth = stats.size.x / (2 * Math.tan(fov / 2) * aspect);
  const fitDepth = stats.size.z * 0.8;
  let distance = Math.max(fitHeight, fitWidth, fitDepth) * 2.5;
  if (!Number.isFinite(distance) || distance <= 0) distance = maxDimension * 2.5;
  distance = Math.max(distance, maxDimension * 0.9);

  camera.position.copy(stats.center).addScaledVector(FIT_DIRECTION, distance);
  controls.target.copy(stats.center);
  controls.minDistance = Math.max(distance * 0.02, maxDimension * 0.03);
  controls.maxDistance = Math.max(distance * 30, maxDimension * 10);
  controls.update();
  return distance;
}

/**
 * Whether a key is handled by the orbit keyboard controls.
 *
 * @param {string} key KeyboardEvent.key value.
 * @returns {boolean} True for the four arrow keys.
 */
export function isOrbitKey(key) {
  return key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown';
}

/**
 * Orbit the camera by one keyboard step.
 *
 * @param {import('three').PerspectiveCamera} camera Active camera.
 * @param {import('three').OrbitControls} controls Orbit controls.
 * @param {string} key KeyboardEvent.key value.
 */
export function orbitByKey(camera, controls, key) {
  scratchOffset.copy(camera.position).sub(controls.target);
  scratchSpherical.setFromVector3(scratchOffset);

  if (key === 'ArrowLeft') scratchSpherical.theta += KEY_STEP;
  else if (key === 'ArrowRight') scratchSpherical.theta -= KEY_STEP;
  else if (key === 'ArrowUp') scratchSpherical.phi = Math.max(controls.minPolarAngle, scratchSpherical.phi - KEY_STEP);
  else if (key === 'ArrowDown') scratchSpherical.phi = Math.min(controls.maxPolarAngle, scratchSpherical.phi + KEY_STEP);
  else return;

  camera.position.copy(controls.target).add(scratchOffset.setFromSpherical(scratchSpherical));
  camera.lookAt(controls.target);
  controls.update();
}
