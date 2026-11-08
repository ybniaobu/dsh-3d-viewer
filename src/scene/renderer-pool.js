import {
  ACESFilmicToneMapping,
  PCFShadowMap,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { ViewerError } from './viewer-error.js';

const MAX_IDLE_RENDERERS = 2;

/**
 * @returns {WebGLRenderer} Configured but unsized renderer.
 */
export function createViewerRenderer() {
  try {
    return new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
  } catch (error) {
    throw new ViewerError('webgl', 'A WebGL context could not be created.', error);
  }
}

/**
 * Apply the viewer's fixed renderer settings. Shared renderers are reconfigured
 * on every view because they may have been released by another view.
 *
 * @param {WebGLRenderer} renderer Renderer to configure.
 * @returns {void}
 */
export function configureViewerRenderer(renderer) {
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
}

/**
 * One reusable renderer and the environment targets built with its WebGL
 * context. Targets cannot move between contexts, so the cache travels with the
 * renderer.
 *
 * @returns {{ targets: Map<string, import('three').WebGLRenderTarget>, pending: Map<string, Promise<unknown>>, disposed: boolean }} Cache.
 */
function createEnvironmentCache() {
  return {
    targets: new Map(),
    pending: new Map(),
    disposed: false,
  };
}

/**
 * Reuse WebGL contexts across document views.
 *
 * A document view borrows an entry for its lifetime. Sequential views reuse the
 * most recently released renderer, keeping its compiled programs and PMREM
 * targets warm; a second concurrent view gets another entry. Idle entries are
 * capped so closing many tabs does not accumulate contexts.
 */
export class RendererPool {
  /**
   * @param {() => import('three').WebGLRenderer} [createRenderer] Renderer factory.
   * @param {number} [maxIdle] Maximum idle renderers retained.
   */
  constructor(createRenderer = createViewerRenderer, maxIdle = MAX_IDLE_RENDERERS) {
    this.createRenderer = createRenderer;
    this.maxIdle = maxIdle;
    this.idle = [];
    this.entries = new Set();
  }

  /**
   * Borrow a renderer for one view.
   *
   * @returns {{
   *   renderer: import('three').WebGLRenderer,
   *   canvas: HTMLCanvasElement,
   *   environment: ReturnType<typeof createEnvironmentCache>,
   *   inUse: boolean,
   * }} Pool entry.
   */
  acquire() {
    const reusable = this.idle.pop();
    if (reusable !== undefined) {
      reusable.inUse = true;
      return reusable;
    }

    const renderer = this.createRenderer();
    const entry = {
      renderer,
      canvas: renderer.domElement,
      environment: createEnvironmentCache(),
      inUse: true,
    };
    this.entries.add(entry);
    return entry;
  }

  /**
   * Return a renderer to the pool. The view must already have detached its
   * scene-level resources; the pool owns the context and environment cache.
   *
   * @param {ReturnType<RendererPool['acquire']>} entry Entry being released.
   * @returns {void}
   */
  release(entry) {
    if (entry === undefined || !entry.inUse) return;

    entry.inUse = false;
    entry.renderer.setRenderTarget(null);
    entry.canvas.remove();
    this.idle.push(entry);

    while (this.idle.length > this.maxIdle) {
      this.disposeEntry(this.idle.shift());
    }
  }

  /**
   * Drop one entry and every GPU resource the pool retained for it.
   *
   * @param {ReturnType<RendererPool['acquire']> | undefined} entry Entry to dispose.
   * @returns {void}
   */
  disposeEntry(entry) {
    if (entry === undefined) return;

    this.entries.delete(entry);
    entry.environment.disposed = true;
    for (const target of entry.environment.targets.values()) target.dispose();
    entry.environment.targets.clear();
    entry.environment.pending.clear();
    entry.canvas.remove();
    entry.renderer.dispose();
    entry.renderer.forceContextLoss();
  }

  /** Dispose every retained renderer. */
  dispose() {
    for (const entry of this.entries) this.disposeEntry(entry);
    this.entries.clear();
    this.idle.length = 0;
  }
}

/** Shared pool used by document views. */
export const rendererPool = new RendererPool();
