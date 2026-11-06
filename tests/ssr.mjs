import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ViewerSurface } from '../src/ui/ViewerSurface.js';

// 1. Bundle integration: the plugin registers four bodies, and a newly opened
//    document renders its loading state without touching WebGL.
let entry;
const window = {
  __ModuleLoader__: {
    load(value) {
      entry = value;
    },
  },
};

const bundle = await readFile(new URL('../client.js', import.meta.url), 'utf8');
new Function('window', bundle)(window);

const components = [];
const ctx = {
  locale: {
    bind: () => (key) => key,
    register: () => () => {},
  },
  documentPreviews: { register: () => () => {} },
  slots: {
    inject: (_key, callback) => callback(),
    register: (options, body) => {
      components.push({ key: options.key, body });
      return () => {};
    },
  },
  effect: (callback) => callback(),
};

const moduleExports = entry.factory((name) => {
  if (name === 'react') return React;
  throw new Error(`unexpected runtime import: ${name}`);
});
moduleExports.apply(ctx);
assert.equal(components.length, 4);
const component = components.find(({ key }) => key === 'dsh-3d-viewer/obj')?.body;
assert.equal(typeof component, 'function');

const loadingHtml = renderToStaticMarkup(React.createElement(component, {
  content: { kind: 'bytes', data: new Uint8Array([1, 2, 3]) },
  t: (key) => key,
}));

assert.match(loadingHtml, /class="dsh3dv-root"/);
assert.match(loadingHtml, /data-dsh3d-format="obj"/);
assert.match(loadingHtml, /data-dsh3d-status="loading"/);
assert.match(loadingHtml, /--dsw-alias-label-primary/);
assert.match(loadingHtml, /background:#fff/);
assert.match(loadingHtml, /class="dsh3dv-spinner"/);
assert.doesNotMatch(loadingHtml, /WebGL|THREE/);

// 2. Ready surface: the pure presentation component takes the state the
//    container would hold after parsing, so no canvas or hook mocking is needed.
const settings = {
  grid: true,
  autoRotate: false,
  wireframe: false,
  material: 'original',
  environment: 'nature',
};
const clips = [{ name: 'Idle', duration: 2.5 }];
const runtime = {
  status: 'ready',
  failure: null,
  stats: { meshes: 1, vertices: 20315, triangles: 40370 },
  clips,
  fileSize: 3,
};
const fakeView = {
  animations: clips,
  reset: () => {},
  setAnimationPlaying: () => {},
  setAnimationClip: () => {},
  seekAnimation: () => {},
  subscribeAnimation: () => () => {},
  setAutoRotate: () => {},
  setGrid: () => {},
  setEnvironment: () => {},
  setMaterialPreset: () => {},
  setWireframe: () => {},
  invalidate: () => {},
  dispose: () => {},
};

const labels = {
  statsTitle: 'Model statistics',
  statsFileSize: 'File size',
  statsMeshes: 'Meshes',
  statsVertices: 'Vertices',
  statsTriangles: 'Triangles',
  objBadge: 'OBJ',
};
const readyHtml = renderToStaticMarkup(React.createElement(ViewerSurface, {
  format: 'obj',
  glb: false,
  t: (key) => labels[key] ?? key,
  view: fakeView,
  settings,
  runtime,
  hostRef: { current: null },
  onSettingsChange: () => {},
  onRetry: () => {},
}));
const rows = [...readyHtml.matchAll(/class="dsh3dv-stat"><span class="dsh3dv-stat-label">([^<]+)<\/span><span class="dsh3dv-stat-value">([^<]+)<\/span>/g)]
  .map((match) => [match[1], match[2]]);
assert.deepEqual(rows, [
  ['File size', '3 B'],
  ['Meshes', '1'],
  ['Vertices', '20,315'],
  ['Triangles', '40,370'],
]);
assert.match(readyHtml, /data-dsh3d-format="obj"/);
assert.match(readyHtml, />OBJ</);
assert.match(readyHtml, /\.dsh3dv-stats\{[^}]*flex-direction:column/);
assert.match(readyHtml, /class="dsh3dv-top-actions"/);
assert.match(readyHtml, /data-dsh3d-controls/);
assert.match(readyHtml, /data-dsh3d-picker="material"/);
assert.match(readyHtml, /data-dsh3d-picker="environment"/);
assert.match(readyHtml, /\.dsh3dv-view-controls\{[^}]*flex-direction:row/);
assert.match(readyHtml, /\.dsh3dv-picker-menu\{[^}]*top:calc\(100% \+ 6px\)/);
assert.match(readyHtml, /\.dsh3dv-picker-menu\{[^}]*left:0/);
assert.match(readyHtml, /\.dsh3dv-picker-menu\{[^}]*right:auto/);
assert.match(readyHtml, /\.dsh3dv-picker-menu\{[^}]*position:fixed/);
assert.match(readyHtml, /\.dsh3dv-picker-menu\{[^}]*flex-direction:column/);
assert.match(readyHtml, /\.dsh3dv-picker-menu\{[^}]*flex-wrap:nowrap/);
assert.match(readyHtml, /\.dsh3dv-picker-option\{[^}]*flex-direction:row/);
assert.match(readyHtml, /dsh3dv-ball--original/);
assert.match(readyHtml, /dsh3dv-env--nature/);
assert.doesNotMatch(readyHtml, /data-dsh3d-picker-menu/);
assert.match(readyHtml, /--dsh3dv-bar-height:32px/);
assert.match(readyHtml, /\.dsh3dv-hint\{[^}]*height:var\(--dsh3dv-bar-height\)/);
assert.match(readyHtml, /\.dsh3dv-anim\{[^}]*height:var\(--dsh3dv-bar-height\)/);
assert.match(readyHtml, /data-dsh3d-animation/);
assert.match(readyHtml, />Idle</);
assert.match(readyHtml, /class="dsh3dv-progress"/);
assert.match(readyHtml, />0\.00s \/ 2\.50s</);

console.log('Server-render smoke test passed:', {
  markupBytes: Buffer.byteLength(loadingHtml),
  hasLoadingState: loadingHtml.includes('data-dsh3d-status="loading"'),
  statsRows: rows,
  hasAnimationBar: readyHtml.includes('data-dsh3d-animation'),
});
