import * as React from 'react';

const h = React.createElement;

const COUNT_FORMATTER = (() => {
  try {
    return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });
  } catch {
    return null;
  }
})();

/**
 * Format a mesh/vertex/triangle count once with a shared formatter.
 *
 * @param {number} value Count to format.
 * @returns {string} Localized count.
 */
export function formatCount(value) {
  return COUNT_FORMATTER === null ? String(value) : COUNT_FORMATTER.format(value);
}

/**
 * Format a byte count using binary units.
 *
 * @param {number} bytes Byte count.
 * @returns {string} Localized size such as `1.36 KB` or `2.52 MB`.
 */
export function formatBytes(bytes) {
  const value = Number(bytes);
  if (!Number.isFinite(value) || value < 0) return '—';
  if (value < 1024) return `${formatCount(Math.round(value))} B`;

  const units = ['KB', 'MB', 'GB', 'TB'];
  let scaled = value;
  let unit = -1;
  do {
    scaled /= 1024;
    unit += 1;
  } while (scaled >= 1024 && unit < units.length - 1);

  const digits = scaled >= 100 ? 0 : scaled >= 10 ? 1 : 2;
  return `${scaled.toFixed(digits)} ${units[unit]}`;
}

/**
 * Format an animation time with two decimals under ten seconds.
 *
 * @param {number} value Seconds.
 * @returns {string} Formatted seconds.
 */
export function formatSeconds(value) {
  const seconds = Number(value);
  if (!Number.isFinite(seconds) || seconds < 0) return '0.00';
  return seconds.toFixed(seconds < 10 ? 2 : 1);
}

/**
 * Map a viewer failure to a localized sentence.
 *
 * @param {{ code?: string } | null} failure Failure state.
 * @param {(key: string) => string} t Translator.
 * @returns {string} Localized message.
 */
export function errorText(failure, t) {
  if (failure === null || failure === undefined) return t('renderFailed');
  if (failure.code === 'webgl') return t('webglUnavailable');
  if (failure.code === 'parse') return t('parseFailed');
  return t('renderFailed');
}

export function ToolButton({ label, active, onClick, children }) {
  const props = {
    type: 'button',
    className: 'dsh3dv-tool',
    title: label,
    'aria-label': label,
    onClick,
  };
  if (active !== undefined) props['aria-pressed'] = active;
  return h('button', props, children);
}

export function StatRow({ label, value }) {
  return h('div', { className: 'dsh3dv-stat' },
    h('span', { className: 'dsh3dv-stat-label' }, label),
    h('span', { className: 'dsh3dv-stat-value' }, value));
}
