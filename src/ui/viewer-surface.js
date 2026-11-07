import * as React from 'react';
import { AnimationBar } from './animation-bar.js';
import {
  Badge,
  Hint,
  StatsPanel,
  StatusOverlay,
  Toolbar,
  ViewControls,
} from './chrome.js';
import { CSS } from './styles.js';

const h = React.createElement;

/**
 * Pure presentation of one 3D document body.
 *
 * All load, WebGL, and animation lifecycle lives in `ModelViewer`. Keeping the
 * markup free of hooks makes the ready/loading/empty/error surfaces renderable
 * without a canvas or a WebGL context.
 *
 * @param {{
 *   format: 'fbx' | 'gltf' | 'obj' | 'stl',
 *   glb: boolean,
 *   t: (key: string, params?: Record<string, unknown>) => string,
 *   view: object | null,
 *   settings: { grid: boolean, autoRotate: boolean, wireframe: boolean, material: string, environment: string },
 *   runtime: { status: string, failure: object | null, stats: object | null, clips: Array<{ name: string, duration: number }>, fileSize?: number | null },
 *   hostRef: { current: HTMLElement | null },
 *   onSettingsChange: (patch: Record<string, unknown>) => void,
 *   onRetry: () => void,
 * }} props Surface state and callbacks.
 */
export function ViewerSurface({
  format,
  glb,
  t,
  view,
  settings,
  runtime,
  hostRef,
  onSettingsChange,
  onRetry,
}) {
  const ready = runtime.status === 'ready' && view !== null;
  const stats = runtime.stats;

  return h('div', { className: 'dsh3dv-root', 'data-dsh3d-viewer': '', 'data-dsh3d-format': format },
    h('style', null, CSS),
    h('div', { className: 'dsh3dv-stage', ref: hostRef, 'data-dsh3d-stage': '' }),
    h('div', { className: 'dsh3dv-top' },
      h(Badge, { t, format, glb }),
      h('div', { className: 'dsh3dv-top-actions' },
        ready
          ? h(ViewControls, {
            material: settings.material,
            environment: settings.environment,
            onMaterialChange: (id) => onSettingsChange({ material: id, wireframe: false }),
            onEnvironmentChange: (id) => onSettingsChange({ environment: id }),
            t,
          })
          : null,
        ready
          ? h(Toolbar, {
            view,
            settings,
            onChange: onSettingsChange,
            t,
          })
          : null)),
    ready && stats !== null
      ? h('div', { className: 'dsh3dv-hud' },
        h(StatsPanel, { stats, fileSize: runtime.fileSize, t }))
      : null,
    ready && runtime.clips.length > 0
      ? h(AnimationBar, { view, clips: runtime.clips, t })
      : null,
    ready
      ? h(Hint, { t })
      : null,
    h(StatusOverlay, {
      status: runtime.status,
      failure: runtime.failure,
      onRetry,
      t,
    }));
}
