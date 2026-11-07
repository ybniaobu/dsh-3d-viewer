import { PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { disposeObject } from '../model.js';
import { createAnimationController } from './animation.js';
import { frameModel, isOrbitKey, orbitByKey, updateClipPlanes } from './camera.js';
import { DEFAULT_ENVIRONMENT, createEnvironment } from './environment.js';
import { createGround } from './ground.js';
import { createLighting } from './lighting.js';
import { createMaterialController } from './materials.js';
import { createPostProcessing } from './postprocessing.js';
import { createRenderLoop } from './render-loop.js';
import { configureViewerRenderer } from './renderer.js';
import { rendererPool } from './renderer-pool.js';

const MAX_PIXEL_RATIO = 2;

/** Device pixel ratio, clamped so 4K/5K displays do not quadruple the cost. */
function readPixelRatio() {
  return Math.min(globalThis.devicePixelRatio || 1, MAX_PIXEL_RATIO);
}

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
 * @param {ReturnType<import('../model.js').collectModelStats>} stats Model bounds and counts.
 * @param {{ ariaLabel?: string, environment?: string }} [options] Localized accessibility text and initial IBL environment.
 * @returns {{
 *   animations: Array<{ name: string, duration: number }>,
 *   subscribeAnimation: (listener: (state: { time: number, duration: number, index: number, playing: boolean }) => void) => () => void,
 *   setAnimationPlaying: (enabled: boolean) => void,
 *   setAnimationClip: (index: number) => void,
 *   seekAnimation: (seconds: number) => void,
 *   setAutoRotate: (enabled: boolean) => boolean,
 *   setGrid: (visible: boolean) => boolean,
 *   setEnvironment: (id: string) => boolean,
 *   setMaterialPreset: (id: string) => boolean,
 *   setWireframe: (enabled: boolean) => boolean,
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
  const initialPixelRatio = readPixelRatio();

  renderer.setPixelRatio(initialPixelRatio);
  renderer.setSize(initialWidth, initialHeight, false);

  const scene = new Scene();
  const camera = new PerspectiveCamera(38, initialWidth / initialHeight, 0.1, 1000);
  const maxDimension = stats.maxDimension > 0 ? stats.maxDimension : 1;

  const lighting = createLighting({ scene, center: stats.center, maxDimension });
  scene.add(object);

  const materials = createMaterialController(object);
  const ground = createGround({
    scene,
    stats,
    maxDimension,
    maxAnisotropy: renderer.capabilities.getMaxAnisotropy(),
  });

  const animationListeners = new Set();
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
  });

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = 0.9;
  controls.zoomSpeed = 0.9;
  controls.panSpeed = 0.8;
  controls.autoRotateSpeed = 4;
  controls.minPolarAngle = 0.02;
  controls.maxPolarAngle = Math.PI * 0.98;

  let autoRotate = false;
  let interacting = false;
  let disposed = false;
  let onScreen = true;
  let lastWidth = 0;
  let lastHeight = 0;
  let lastPixelRatio = 0;
  let lastSyncDistance = Number.NaN;
  let lastSyncTargetX = Number.NaN;
  let lastSyncTargetZ = Number.NaN;
  let resizeObserver;
  let intersectionObserver;

  const loop = createRenderLoop((delta, timestamp) => {
    animation.update(delta, timestamp);
    if (autoRotate) controls.update(delta);
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

  function syncView() {
    const distance = Math.max(camera.position.distanceTo(controls.target), maxDimension * 0.05);
    const targetX = controls.target.x;
    const targetZ = controls.target.z;

    // Auto-rotation changes the camera orientation but not its distance or
    // target. Use a small tolerance: OrbitControls' spherical integration can
    // leave tiny floating-point differences, and updating the clip planes and
    // grid uniforms every frame makes the grid visibly tremble.
    const tolerance = Math.max(maxDimension * 1e-6, 1e-9);
    if (Math.abs(distance - lastSyncDistance) <= tolerance
      && Math.abs(targetX - lastSyncTargetX) <= tolerance
      && Math.abs(targetZ - lastSyncTargetZ) <= tolerance) {
      return;
    }
    lastSyncDistance = distance;
    lastSyncTargetX = targetX;
    lastSyncTargetZ = targetZ;

    updateClipPlanes(camera, distance, maxDimension);
    ground.update(camera, controls.target, distance);
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
    syncView();
    loop.invalidate();
  }

  function onControlsChange() {
    // Auto-rotate changes only the camera orientation. Updating clip planes
    // and grid uniforms for those change events can cause a one-frame tremble.
    // The continuous loop already renders those frames, so skip invalidation.
    if (!autoRotate || interacting) {
      syncView();
      loop.invalidate();
    }
  }

  function resize() {
    if (disposed) return;

    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    const pixelRatio = readPixelRatio();
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
    loop.invalidate();
  }

  function onPointerDown() {
    canvas.focus({ preventScroll: true });
  }

  function onVisibilityChange() {
    loop.setActive(onScreen && !document.hidden);
  }

  function setAutoRotate(enabled) {
    const next = Boolean(enabled);
    if (next === autoRotate) return false;

    autoRotate = next;
    controls.autoRotate = next;
    updateLoop();
    if (!next) loop.invalidate();
    return true;
  }

  function setGrid(visible) {
    if (!ground.setGridVisible(visible)) return false;
    loop.invalidate();
    return true;
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

  function reset() {
    frameModel(camera, controls, stats, maxDimension);
    syncView();
    loop.invalidate();
  }

  function invalidate() {
    loop.invalidate();
  }

  function paint() {
    if (disposed) return;
    animation.update(0, performance.now());
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
    setAnimationPlaying,
    setAnimationClip,
    seekAnimation,
    setAutoRotate,
    setGrid,
    setEnvironment,
    setMaterialPreset,
    setWireframe,
    reset,
    invalidate,
    paint,
    warmup,
    environmentReady,
    dispose,
  };
}
