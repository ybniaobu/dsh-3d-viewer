import * as React from 'react';

const h = React.createElement;

export function CubeIcon() {
  return h('svg', {
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3,
    strokeLinejoin: 'round',
    'aria-hidden': true,
  },
  h('path', { d: 'M8 1.8 14 5.2v5.6L8 14.2 2 10.8V5.2Z' }),
  h('path', { d: 'M2.3 5.4 8 8.6l5.7-3.2M8 8.6v5.2' }));
}

export function FrameIcon() {
  return h('svg', {
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    'aria-hidden': true,
  },
  h('path', { d: 'M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4' }),
  h('circle', { cx: 8, cy: 8, r: 2.1 }));
}

export function GridIcon() {
  return h('svg', {
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3,
    strokeLinecap: 'round',
    'aria-hidden': true,
  },
  h('path', { d: 'M2 6h12M2 10h12M6 2v12M10 2v12' }),
  h('rect', { x: 2, y: 2, width: 12, height: 12, rx: 1.5 }));
}

export function OrbitIcon() {
  return h('span', {
    className: 'dsh3dv-auto-rotate-glyph',
    'aria-hidden': true,
  }, '\u21BB');
}

export function WireframeIcon() {
  return h('svg', {
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinejoin: 'round',
    'aria-hidden': true,
  },
  h('path', { d: 'M8 1.8 14 5.2v5.6L8 14.2 2 10.8V5.2Z' }),
  h('path', { d: 'M2 5.2 8 8.6l6-3.4M8 8.6v5.6M2 10.8 8 8.6l6 2.2' }));
}

export function PlayIcon() {
  return h('svg', {
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    'aria-hidden': true,
  }, h('path', { d: 'M5.2 3.3v9.4L13.1 8Z' }));
}

export function PauseIcon() {
  return h('svg', {
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    'aria-hidden': true,
  },
  h('rect', { x: 4.1, y: 3.2, width: 2.7, height: 9.6, rx: 0.7 }),
  h('rect', { x: 9.2, y: 3.2, width: 2.7, height: 9.6, rx: 0.7 }));
}
