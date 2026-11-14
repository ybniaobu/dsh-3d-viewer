import { PerspectiveCamera, Scene, Spherical, Vector3 } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { disposeObject } from '../core/model.js';
import { createAnimationController } from './animation.js';
import {
  enableReversedDepth,
  frameModel,
  isOrbitKey,
  orbitByKey,
  updateClipPlanes,
} from './camera.js';
import { DEFAULT_ENVIRONMENT, createEnvironment } from './environment.js';
import { createGround } from './ground.js';
import { createLighting } from './lighting.js';
import { createMaterialController } from './materials.js';
import { createPostProcessing } from './postprocessing.js';
import { detectQualityProfile, pixelRatioFor } from './quality.js';
import { createRenderLoop } from './render-loop.js';
import {
  configureViewerRenderer,
  rendererPool,
} from './renderer-pool.js';
import { followViewportTone } from './theme-background.js';

const AUTO_ROTATE_SECONDS = 15;
// Positive theta moves the camera clockwise when viewed from above.
const AUTO_ROTATE_RADIANS_PER_SECOND = (Math.PI * 2) / AUTO_ROTATE_SECONDS;
const DRAG_RADIANS_PER_PIXEL = Math.PI / 400;
const PERSPECTIVE_FOV = 38;
const VIEW_UP = Object.freeze(new Vector3(0, 1, 0));
const CAMERA_VIEWS = Object.freeze({
  isometric: Object.freeze({
    direction: new Vector3(1, 0.55, 1.3).normalize(),
    up: VIEW_UP,
  }),
  front: Object.freeze({ direction: new Vector3(0, 0, 1), up: VIEW_UP }),
  back: Object.freeze({ direction: new Vector3(0, 0, -1), up: VIEW_UP }),
  right: Object.freeze({ direction: new Vector3(1, 0, 0), up: VIEW_UP }),
  left: Object.freeze({ direction: new Vector3(-1, 0, 0), up: VIEW_UP }),
  top: Object.freeze({ direction: new Vector3(0, 1, 0), up: VIEW_UP }),
  bottom: Object.freeze({ direction: new Vector3(0, -1, 0), up: VIEW_UP }),
});
/**
 * Attach a disposable, orbitable Three.js view to a host element.
 *
 * The renderer is transparent so the host's themed background stays visible.
 * Frames render on demand; only auto-rotate or animation keeps a continuous
 * loop, and that loop pauses while the viewer is off-screen or the page is
 * hidden.
 *
 * @param {HTMLElement} host Element that will own the canvas.
 * @param {import('three').Object3D} object Parsed FBX graph.
 * @param {ReturnType<import('../core/model.js').collectModelStats>} stats Model bounds and counts.
 * @param {{ ariaLabel?: string, environment?: string }} [options] Localized accessibility text and initial IBL environment.
 * Animation listeners receive a reused state object; read it synchronously.
 * Camera listeners likewise receive a reused quaternion object.
 * @returns {{
 *   animations: Array<{ name: string, duration: number }>,
 *   subscribeAnimation: (listener: (state: { time: number, duration: number, index: number, playing: boolean }) => void) => () => void,
 *   subscribeCamera: (listener: (quaternion: { x: number, y: number, z: number, w: number }) => void) => () => void,
 *   setAnimationPlaying: (enabled: boolean) => void,
 *   setAnimationClip: (index: number) => void,
 *   setAnimationSpeed: (rate: number) => void,
 *   seekAnimation: (seconds: number) => void,
 *   setAutoRotate: (enabled: boolean) => boolean,
 *   setGrid: (visible: boolean) => boolean,
 *   setEnvironment: (id: string) => boolean,
 *   setMaterialPreset: (id: string) => boolean,
 *   setWireframe: (enabled: boolean) => boolean,
 *   setCameraView: (name: 'isometric' | 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom') => boolean,
 *   rotateByPixels: (dx: number, dy: number) => void,
 *   reset: () => void,
 *   invalidate: () => void,
 *   paint: () => void,
 *   warmup: () => Promise<void>,
 *   environmentReady: Promise<void>,
 *   dispose: () => void,
 * }} View controls.
 */
export function createSceneView(host, object, stats, options = {}) {
  const poolEntry = rendererPool.acquire();
  const renderer = poolEntry.renderer;
  configureViewerRenderer(renderer);

  const canvas = renderer.domElement;
  canvas.className = 'dsh3dv-canvas';
  canvas.dataset.dsh3dCanvas = '';
  canvas.tabIndex = 0;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', options.ariaLabel ?? '3D model');
  canvas.style.touchAction = 'none';
  host.appendChild(canvas);

  const initialWidth = Math.max(host.clientWidth, 1);
  const initialHeight = Math.max(host.clientHeight, 1);
  const quality = detectQualityProfile();
  const initialPixelRatio = pixelRatioFor(
    quality,
    initialWidth,
    initialHeight,
    globalThis.devicePixelRatio,
  );

  renderer.setPixelRatio(initialPixelRatio);
  renderer.setSize(initialWidth, initialHeight, false);

  const scene = new Scene();
  const camera = new PerspectiveCamera(
    PERSPECTIVE_FOV,
    initialWidth / initialHeight,
    0.1,
    1000,
  );
  enableReversedDepth(camera, renderer.capabilities.reversedDepthBuffer);
  const maxDimension = stats.maxDimension > 0 ? stats.maxDimension : 1;

  const lighting = createLighting({
    scene,
    center: stats.center,
    maxDimension,
    shadowMapSize: quality.shadowMapSize,
  });
  scene.add(object);

  const materials = createMaterialController(object);
  let loop = null;
  const ground = createGround({
    scene,
    stats,
    maxDimension,
    maxAnisotropy: Math.min(
      renderer.capabilities.getMaxAnisotropy(),
      quality.maxAnisotropy,
    ),
  });
  const stopTheme = followViewportTone(
    host.closest?.('.dsh3dv-root') ?? host,
    host,
    (tone) => {
      const dark = tone === 'dark';
      materials.setWireframeColor(dark ? 0xcfd3d6 : 0x4d5561);
      ground.setFogColor(dark ? 0x000000 : 0xffffff);
      loop?.invalidate();
    },
  );

  const animationListeners = new Set();
  const cameraListeners = new Set();
  const cameraState = { x: 0, y: 0, z: 0, w: 1 };
  const animation = createAnimationController(object, {
    onTick(state) {
      for (const listener of animationListeners) {
        try {
          listener(state);
        } catch (error) {
          console.error('[dsh-3d-viewer] Animation listener failed.', error);
        }
      }
    },
  });

  const post = createPostProcessing({
    renderer,
    scene,
    camera,
    width: initialWidth,
    height: initialHeight,
    pixelRatio: initialPixelRatio,
    samples: quality.samples,
  });

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = 0.9;
  controls.zoomSpeed = 0.9;
  controls.panSpeed = 0.8;
  controls.minPolarAngle = 0.02;
  controls.maxPolarAngle = Math.PI * 0.98;

  let autoRotate = false;
  let interacting = false;
  let autoStartTime = 0;
  let autoStartTheta = 0;
  let autoRadius = 1;
  let autoPhi = Math.PI / 2;
  const autoOffset = new Vector3();
  const autoSpherical = new Spherical();
  const autoPosition = new Vector3();
  const dragOffset = new Vector3();
  const dragSpherical = new Spherical();
  let disposed = false;
  let onScreen = true;
  let lastWidth = 0;
  let lastHeight = 0;
  let lastPixelRatio = 0;
  let resizeObserver;
  let intersectionObserver;

  function beginAutoRotate() {
    autoOffset.copy(camera.position).sub(controls.target);
    autoSpherical.setFromVector3(autoOffset);
    autoStartTheta = autoSpherical.theta;
    autoPhi = autoSpherical.phi;
    autoRadius = autoSpherical.radius;
    autoStartTime = performance.now();
  }

  function updateAutoRotate(timestamp) {
    const elapsed = Math.max(0, (timestamp - autoStartTime) / 1000);
    const theta = autoStartTheta + elapsed * AUTO_ROTATE_RADIANS_PER_SECOND;
    autoPosition.setFromSphericalCoords(autoRadius, autoPhi, theta).add(controls.target);
    camera.position.copy(autoPosition);
    camera.lookAt(controls.target);
    emitCamera();
  }

  function emitCamera() {
    const quaternion = camera.quaternion;
    cameraState.x = quaternion.x;
    cameraState.y = quaternion.y;
    cameraState.z = quaternion.z;
    cameraState.w = quaternion.w;
    for (const listener of cameraListeners) {
      try {
        listener(cameraState);
      } catch (error) {
        console.error('[dsh-3d-viewer] Camera listener failed.', error);
      }
    }
  }

  loop = createRenderLoop((delta, timestamp) => {
    animation.update(delta, timestamp);
    if (autoRotate && !interacting) updateAutoRotate(timestamp);
    post.render(delta);
  });

  // The environment is fetched from the Host route, so the first selection
  // finishes after the model is already framed: PMREM leaves its own render
  // target bound, and the view repaints once the target is applied.
  let resolveEnvironmentReady;
  const environmentReady = new Promise((resolve) => {
    resolveEnvironmentReady = resolve;
  });

  const environment = createEnvironment({
    renderer,
    scene,
    cache: poolEntry.environment,
    onReady: () => {
      resolveEnvironmentReady();
      renderer.setRenderTarget(null);
      loop.invalidate();
    },
    onError: () => {
      // A failed HDRI must not keep the view on its loading overlay forever.
      resolveEnvironmentReady();
    },
  });
  environment.set(options.environment ?? DEFAULT_ENVIRONMENT);

  // The grid follows the orbit target; world-space UV keeps its pattern fixed
  // to the world while the plane moves. Only a target or distance change needs
  // to refresh the grid and clip planes.
  let lastSyncDistance = Number.NaN;
  let lastTargetX = Number.NaN;
  let lastTargetZ = Number.NaN;

  function syncView() {
    const distance = Math.max(camera.position.distanceTo(controls.target), maxDimension * 0.05);
    const tolerance = Math.max(maxDimension * 1e-6, 1e-9);
    const targetMoved = !Number.isFinite(lastTargetX)
      || !Number.isFinite(lastTargetZ)
      || Math.hypot(controls.target.x - lastTargetX, controls.target.z - lastTargetZ) > tolerance;
    const distanceChanged = !Number.isFinite(lastSyncDistance)
      || Math.abs(distance - lastSyncDistance) > tolerance;
    if (!targetMoved && !distanceChanged) return;

    lastSyncDistance = distance;
    lastTargetX = controls.target.x;
    lastTargetZ = controls.target.z;
    updateClipPlanes(camera, distance, maxDimension);
    ground.update(controls.target, distance);
  }

  function updateLoop() {
    if (autoRotate || animation.isPlaying()) loop.start();
    else {
      loop.stop();
      loop.invalidate();
    }
  }

  function onControlsStart() {
    interacting = true;
  }

  function onControlsEnd() {
    interacting = false;
    if (autoRotate) beginAutoRotate();
    syncView();
    loop.invalidate();
  }

  function onControlsChange() {
    // Auto-rotate no longer goes through OrbitControls, so every change event
    // here comes from a user interaction (orbit, zoom, or pan).
    syncView();
    emitCamera();
    loop.invalidate();
  }

  function resize() {
    if (disposed) return;

    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    const pixelRatio = pixelRatioFor(
      quality,
      width,
      height,
      globalThis.devicePixelRatio,
    );
    if (width === lastWidth && height === lastHeight && pixelRatio === lastPixelRatio) return;

    const pixelRatioChanged = pixelRatio !== lastPixelRatio;
    const sizeChanged = width !== lastWidth || height !== lastHeight;
    lastWidth = width;
    lastHeight = height;
    lastPixelRatio = pixelRatio;

    if (pixelRatioChanged) renderer.setPixelRatio(pixelRatio);
    if (sizeChanged) renderer.setSize(width, height, false);
    post.setSize(width, height, pixelRatio);

    if (sizeChanged) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    loop.invalidate();
  }

  function onKeyDown(event) {
    if (!isOrbitKey(event.key)) return;
    event.preventDefault();
    orbitByKey(camera, controls, event.key);
    if (autoRotate) beginAutoRotate();
    emitCamera();
    loop.invalidate();
  }

  function onPointerDown() {
    canvas.focus({ preventScroll: true });
  }

  function onVisibilityChange() {
    const active = onScreen && !document.hidden;
    loop.setActive(active);
    if (active && autoRotate) beginAutoRotate();
  }

  function setAutoRotate(enabled) {
    const next = Boolean(enabled);
    if (next === autoRotate) return false;

    autoRotate = next;
    if (next) beginAutoRotate();
    updateLoop();
    if (!next) loop.invalidate();
    return true;
  }

  function setGrid(visible) {
    if (!ground.setGridVisible(visible)) return false;
    loop.invalidate();
    return true;
  }

  function setCameraView(name) {
    const preset = CAMERA_VIEWS[name];
    if (preset === undefined) return false;

    const distance = Math.max(
      camera.position.distanceTo(controls.target),
      maxDimension * 0.05,
    );
    camera.up.copy(preset.up);
    camera.position.copy(controls.target).addScaledVector(preset.direction, distance);
    camera.lookAt(controls.target);
    camera.updateMatrixWorld();

    const previousMinPolar = controls.minPolarAngle;
    const previousMaxPolar = controls.maxPolarAngle;
    if (name === 'top') controls.minPolarAngle = 0;
    if (name === 'bottom') controls.maxPolarAngle = Math.PI;
    controls.update();
    controls.minPolarAngle = previousMinPolar;
    controls.maxPolarAngle = previousMaxPolar;
    if (autoRotate) beginAutoRotate();
    emitCamera();
    loop.invalidate();
    return true;
  }

  function rotateByPixels(dx, dy) {
    if (disposed) return;

    dragOffset.copy(camera.position).sub(controls.target);
    dragSpherical.setFromVector3(dragOffset);
    dragSpherical.theta -= dx * DRAG_RADIANS_PER_PIXEL;
    dragSpherical.phi = Math.min(
      controls.maxPolarAngle,
      Math.max(controls.minPolarAngle, dragSpherical.phi - dy * DRAG_RADIANS_PER_PIXEL),
    );
    camera.up.copy(VIEW_UP);
    camera.position.copy(controls.target)
      .add(dragOffset.setFromSpherical(dragSpherical));
    camera.lookAt(controls.target);
    camera.updateMatrixWorld();
    if (autoRotate) beginAutoRotate();
    emitCamera();
    syncView();
    loop.invalidate();
  }
  function setEnvironment(id) {
    if (!environment.set(id)) return false;
    loop.invalidate();
    return true;
  }

  function setMaterialPreset(id) {
    if (!materials.setPreset(id)) return false;
    loop.invalidate();
    return true;
  }

  function setWireframe(enabled) {
    if (!materials.setWireframe(enabled)) return false;
    ground.setShadowVisible(!materials.wireframe);
    loop.invalidate();
    return true;
  }

  function setAnimationPlaying(enabled) {
    if (!animation.setPlaying(enabled)) return;
    updateLoop();
  }

  function setAnimationClip(index) {
    if (!animation.setClip(index)) return;
    updateLoop();
    loop.invalidate();
  }

  function setAnimationSpeed(rate) {
    animation.setSpeed(rate);
  }

  function seekAnimation(seconds) {
    if (animation.seek(seconds)) loop.invalidate();
  }

  function subscribeAnimation(listener) {
    if (typeof listener !== 'function' || disposed) return () => {};

    animationListeners.add(listener);
    listener(animation.snapshot());
    return () => {
      animationListeners.delete(listener);
    };
  }

  function subscribeCamera(listener) {
    if (typeof listener !== 'function' || disposed) return () => {};

    cameraListeners.add(listener);
    emitCamera();
    return () => {
      cameraListeners.delete(listener);
    };
  }

  function reset() {
    camera.up.copy(VIEW_UP);
    frameModel(camera, controls, stats, maxDimension);
    lastSyncDistance = Number.NaN;
    lastTargetX = Number.NaN;
    lastTargetZ = Number.NaN;
    controls.update();
    if (autoRotate) beginAutoRotate();
    syncView();
    emitCamera();
    loop.invalidate();
  }

  function invalidate() {
    loop.invalidate();
  }

  function paint() {
    if (disposed) return;
    animation.update(0, performance.now());
    animation.prewarm();
    post.render(0);
  }

  async function warmup() {
    if (disposed) return;

    // Compile the scene materials and the post-processing pass before the
    // first visible frame. A synchronous compile is faster than polling
    // compileAsync for these few programs; the loading overlay covers it.
    renderer.compile(scene, camera);
    post.warmup(renderer);
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    resolveEnvironmentReady();

    loop.dispose();
    stopTheme();
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    controls.removeEventListener('change', onControlsChange);
    controls.removeEventListener('start', onControlsStart);
    controls.removeEventListener('end', onControlsEnd);
    canvas.removeEventListener('keydown', onKeyDown);
    canvas.removeEventListener('pointerdown', onPointerDown);
    animationListeners.clear();
    cameraListeners.clear();

    animation.dispose();
    materials.dispose();
    ground.dispose();
    lighting.dispose();
    environment.dispose();
    controls.dispose();
    post.dispose();
    disposeObject(scene);
    scene.clear();
    rendererPool.release(poolEntry);
  }

  controls.addEventListener('change', onControlsChange);
  controls.addEventListener('start', onControlsStart);
  controls.addEventListener('end', onControlsEnd);
  canvas.addEventListener('keydown', onKeyDown);
  canvas.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', onVisibilityChange);

  if (typeof ResizeObserver === 'function') {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
  }

  if (typeof IntersectionObserver === 'function') {
    intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[entries.length - 1];
      if (entry === undefined) return;
      onScreen = entry.isIntersecting;
      onVisibilityChange();
    }, { threshold: 0.01 });
    intersectionObserver.observe(host);
  }

  resize();
  frameModel(camera, controls, stats, maxDimension);
  syncView();
  loop.setActive(onScreen && !document.hidden);
  if (autoRotate || animation.isPlaying()) loop.start();
  else loop.invalidate();

  return {
    animations: animation.animations,
    subscribeAnimation,
    subscribeCamera,
    setAnimationPlaying,
    setAnimationClip,
    setAnimationSpeed,
    seekAnimation,
    setAutoRotate,
    setGrid,
    setEnvironment,
    setMaterialPreset,
    setWireframe,
    setCameraView,
    rotateByPixels,
    reset,
    invalidate,
    paint,
    warmup,
    environmentReady,
    dispose,
  };
}
