import {
  ACESFilmicToneMapping,
  PCFShadowMap,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { ViewerError } from './viewer-error.js';

/**
 * Create a renderer for the viewer pool.
 *
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
