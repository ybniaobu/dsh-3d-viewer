import * as React from 'react';
import { badgeKeyFor } from '../formats.js';
import { CubeIcon, FrameIcon, GridIcon, OrbitIcon, WireframeIcon } from './icons.js';
import { ENVIRONMENT_OPTIONS, MATERIAL_OPTIONS } from './options.js';
import { StatRow, ToolButton, errorText, formatBytes, formatCount } from './primitives.js';

const h = React.createElement;

/** Swatch shape used by the material and environment rails. */
const PICKER_SWATCH = Object.freeze({
  material: 'dsh3dv-ball',
  environment: 'dsh3dv-env',
});

export function Badge({ t, format, glb }) {
  return h('span', { className: 'dsh3dv-badge' },
    h(CubeIcon),
    h('span', null, t(badgeKeyFor(format, glb))));
}

export function Toolbar({ view, settings, onChange, t }) {
  return h('div', { className: 'dsh3dv-toolbar', role: 'toolbar', 'aria-label': t('controls') },
    h(ToolButton, {
      label: t('reset'),
      onClick: () => view?.reset(),
    }, h(FrameIcon)),
    h(ToolButton, {
      label: t('autoRotate'),
      active: settings.autoRotate,
      onClick: () => onChange({ autoRotate: !settings.autoRotate }),
    }, h(OrbitIcon)),
    h(ToolButton, {
      label: t('grid'),
      active: settings.grid,
      onClick: () => onChange({ grid: !settings.grid }),
    }, h(GridIcon)),
    h(ToolButton, {
      label: t('wireframe'),
      active: settings.wireframe,
      onClick: () => onChange({ wireframe: !settings.wireframe }),
    }, h(WireframeIcon)));
}

export function StatsPanel({ stats, fileSize, t }) {
  return h('div', {
    className: 'dsh3dv-stats',
    'data-dsh3d-stats': '',
    role: 'group',
    'aria-label': t('statsTitle'),
  },
  Number.isFinite(fileSize) ? h(StatRow, { label: t('statsFileSize'), value: formatBytes(fileSize) }) : null,
  h(StatRow, { label: t('statsMeshes'), value: formatCount(stats.meshes) }),
  h(StatRow, { label: t('statsVertices'), value: formatCount(stats.vertices) }),
  h(StatRow, { label: t('statsTriangles'), value: formatCount(stats.triangles) }));
}

/**
 * Find the option matching a settings id, falling back to the first one.
 *
 * @param {ReadonlyArray<{ id: string }>} options Rail options.
 * @param {string} value Current settings id.
 * @returns {{ id: string, labelKey: string, className: string }} Selected option.
 */
function findOption(options, value) {
  return options.find((option) => option.id === value) ?? options[0];
}

/**
 * One swatch trigger and its popup menu.
 *
 * The open state is owned by `ViewControls` so opening one rail closes the
 * other; the picker owns only focus management.
 */
function Picker({ kind, groupLabel, options, value, open, onOpenChange, onSelect, t }) {
  const triggerRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const selected = findOption(options, value);
  const swatch = PICKER_SWATCH[kind];
  const label = `${groupLabel}: ${t(selected.labelKey)}`;

  React.useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector('[aria-checked="true"]')?.focus?.();
  }, [open]);

  return h('div', { className: 'dsh3dv-picker' },
    h('button', {
      type: 'button',
      className: 'dsh3dv-picker-trigger',
      'data-dsh3d-picker': kind,
      'aria-haspopup': 'menu',
      'aria-expanded': open,
      'aria-label': label,
      title: label,
      ref: triggerRef,
      onClick: () => onOpenChange(open ? null : kind),
    },
    h('span', {
      className: `dsh3dv-picker-swatch ${swatch} ${selected.className}`,
      'aria-hidden': true,
    })),
    open
      ? h('div', {
        className: 'dsh3dv-picker-menu',
        role: 'menu',
        'data-dsh3d-picker-menu': kind,
        'aria-label': groupLabel,
        ref: menuRef,
      }, options.map((option) => h('button', {
        key: option.id,
        type: 'button',
        className: 'dsh3dv-picker-option',
        role: 'menuitemradio',
        'aria-checked': value === option.id,
        title: t(option.labelKey),
        onClick: () => {
          onSelect(option.id);
          onOpenChange(null);
          triggerRef.current?.focus?.();
        },
      },
      h('span', {
        className: `dsh3dv-picker-option-swatch ${swatch} ${option.className}`,
        'aria-hidden': true,
      }),
      h('span', { className: 'dsh3dv-picker-option-label' }, t(option.labelKey)))))
      : null);
}

export function ViewControls({ material, environment, onMaterialChange, onEnvironmentChange, t }) {
  const [open, setOpen] = React.useState(null);
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (open === null) return undefined;

    const closeOnOutside = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return;
      if (event.type === 'pointerdown' && rootRef.current?.contains(event.target)) return;
      setOpen(null);
    };

    document.addEventListener('pointerdown', closeOnOutside);
    document.addEventListener('keydown', closeOnOutside);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutside);
      document.removeEventListener('keydown', closeOnOutside);
    };
  }, [open]);

  return h('div', {
    className: 'dsh3dv-view-controls',
    'data-dsh3d-controls': '',
    ref: rootRef,
  },
  h(Picker, {
    kind: 'material',
    groupLabel: t('materials'),
    options: MATERIAL_OPTIONS,
    value: material,
    open: open === 'material',
    onOpenChange: setOpen,
    onSelect: onMaterialChange,
    t,
  }),
  h(Picker, {
    kind: 'environment',
    groupLabel: t('environment'),
    options: ENVIRONMENT_OPTIONS,
    value: environment,
    open: open === 'environment',
    onOpenChange: setOpen,
    onSelect: onEnvironmentChange,
    t,
  }));
}

export function Hint({ t }) {
  return h('div', { className: 'dsh3dv-hint' }, t('hint'));
}

export function StatusOverlay({ status, failure, onRetry, t }) {
  if (status === 'loading') {
    return h('div', { className: 'dsh3dv-overlay', 'data-dsh3d-status': 'loading' },
      h('div', {
        className: 'dsh3dv-panel dsh3dv-panel--loading',
        role: 'status',
        'aria-live': 'polite',
      },
      h('span', { className: 'dsh3dv-spinner', 'aria-hidden': true }),
      h('span', null, t('loading'))));
  }

  if (status === 'empty') {
    return h('div', { className: 'dsh3dv-overlay', 'data-dsh3d-status': 'empty' },
      h('div', { className: 'dsh3dv-panel', role: 'status' },
        h('div', { className: 'dsh3dv-panel-icon' }, h(CubeIcon)),
        h('p', { className: 'dsh3dv-panel-title' }, t('emptyTitle')),
        h('p', { className: 'dsh3dv-panel-text' }, t('empty'))));
  }

  if (status === 'error') {
    return h('div', { className: 'dsh3dv-overlay', 'data-dsh3d-status': 'error' },
      h('div', { className: 'dsh3dv-panel dsh3dv-panel--error', role: 'alert' },
        h('div', { className: 'dsh3dv-panel-icon' }, h(CubeIcon)),
        h('p', { className: 'dsh3dv-panel-title' }, t('errorTitle')),
        h('p', { className: 'dsh3dv-panel-text' }, errorText(failure, t)),
        h('div', { className: 'dsh3dv-actions' },
          h('button', {
            type: 'button',
            className: 'dsh3dv-action',
            onClick: onRetry,
          }, t('retry'))),
        h('details', { className: 'dsh3dv-details' },
          h('summary', null, t('details')),
          h('pre', null, failure?.detail ?? ''))));
  }

  return null;
}
