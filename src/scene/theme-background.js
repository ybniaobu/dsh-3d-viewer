/** Blender viewport tones; CSS maps them to #303030 and #f8f8f8. */
const TONE_DARK = 'dark';
const TONE_LIGHT = 'light';

/**
 * Read the resolved DSH surface color through a hidden probe, because a custom
 * property's raw value is not necessarily an `rgb()` string.
 *
 * @param {HTMLElement} host Viewer host element.
 * @returns {'dark' | 'light'} Current appearance tone.
 */
function resolveTone(host) {
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;width:0;height:0;visibility:hidden;pointer-events:none;'
    + 'background-color:var(--dsw-alias-bg-layer-1, #fff)';
  try {
    host.appendChild(probe);
    const color = getComputedStyle(probe).backgroundColor;
    const match = /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\s*\)$/iu.exec(color);
    if (match !== null) {
      const alpha = match[4] === undefined ? 1 : Number(match[4]);
      if (alpha > 0) {
        const luminance = Number(match[1]) * 0.299
          + Number(match[2]) * 0.587
          + Number(match[3]) * 0.114;
        return luminance < 128 ? TONE_DARK : TONE_LIGHT;
      }
    }
  } catch {
    // Fall back to the OS preference below.
  } finally {
    probe.remove();
  }

  return typeof globalThis.matchMedia === 'function'
    && globalThis.matchMedia('(prefers-color-scheme: dark)').matches
    ? TONE_DARK
    : TONE_LIGHT;
}

/**
 * Make the model viewport background follow DSH's current light/dark theme with
 * Blender's default viewport colors. The CSS rule uses a data attribute so no
 * inline style is needed.
 *
 * @param {HTMLElement} root Viewer root carrying the background.
 * @param {HTMLElement} host Viewer host inside that root.
 * @param {(tone: 'dark' | 'light') => void} [onTone] Called for the initial tone and every change.
 * @returns {() => void} Cleanup.
 */
export function followBlenderBackground(root, host, onTone) {
  let disposed = false;
  let currentTone = null;

  const update = () => {
    if (disposed) return;
    const tone = resolveTone(host);
    if (root.dataset.dsh3dTone !== tone) root.dataset.dsh3dTone = tone;
    if (currentTone !== tone) {
      currentTone = tone;
      onTone?.(tone);
    }
  };

  let observer = null;
  if (typeof MutationObserver === 'function' && document.documentElement !== null) {
    observer = new MutationObserver(update);
    const attributeFilter = ['class', 'style', 'data-theme', 'data-color-scheme', 'data-ds-dark-theme'];
    let node = host;
    while (node !== null) {
      observer.observe(node, { attributes: true, attributeFilter });
      node = node.parentElement;
    }
  }

  const media = typeof globalThis.matchMedia === 'function'
    ? globalThis.matchMedia('(prefers-color-scheme: dark)')
    : null;
  media?.addEventListener?.('change', update);
  update();

  return () => {
    disposed = true;
    observer?.disconnect();
    media?.removeEventListener?.('change', update);
    delete root.dataset.dsh3dTone;
  };
}
