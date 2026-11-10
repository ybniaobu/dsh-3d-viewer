import { DirectionalLight, Vector3 } from 'three';

const KEY_OFFSET = new Vector3(-3.2, 5.0, 3.0);

/**
 * Add the shadow-casting key light used by the preview.
 *
 * @param {{
 *   scene: import('three').Scene,
 *   center: import('three').Vector3,
 *   maxDimension: number,
 *   shadowMapSize?: number,
 * }} options Target scene, model bounds, and selected shadow resolution.
 * @returns {{ dispose: () => void }} Lighting controls.
 */
export function createLighting({ scene, center, maxDimension, shadowMapSize = 2048 }) {
  const key = new DirectionalLight(0xffffff, 5.0);

  key.position.copy(center).addScaledVector(KEY_OFFSET, maxDimension);
  key.target.position.copy(center);
  key.castShadow = true;
  key.shadow.mapSize.set(shadowMapSize, shadowMapSize);
  key.shadow.camera.left = -maxDimension * 2;
  key.shadow.camera.right = maxDimension * 2;
  key.shadow.camera.top = maxDimension * 2;
  key.shadow.camera.bottom = -maxDimension * 2;
  key.shadow.camera.near = maxDimension * 2;
  key.shadow.camera.far = maxDimension * 12;
  key.shadow.bias = -0.0001;
  key.shadow.normalBias = maxDimension * 0.002;
  key.shadow.radius = 2;
  key.shadow.camera.updateProjectionMatrix();

  scene.add(key, key.target);

  function dispose() {
    scene.remove(key, key.target);
    key.dispose();
  }

  return { dispose };
}
