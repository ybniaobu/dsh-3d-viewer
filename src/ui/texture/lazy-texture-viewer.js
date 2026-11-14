import * as React from 'react';
import { asyncChunk } from '../../loaders/chunk-require.js';

const h = React.createElement;
let componentsPromise = null;

/**
 * Load the texture viewer chunk once. The chunk owns the texture decoder UI,
 * keeping it out of the always-loaded document-preview entry.
 *
 * @returns {Promise<Record<string, any>>} Texture viewer exports.
 */
function loadTextureComponents() {
  if (componentsPromise === null) {
    componentsPromise = asyncChunk('./client.texture.js');
    componentsPromise.catch(() => {
      componentsPromise = null;
    });
  }
  return componentsPromise;
}

/**
 * Build a texture preview body that loads its implementation on first use.
 *
 * @param {'tga' | 'exr' | 'hdr' | 'png' | 'jpeg'} format Texture format.
 * @returns {(props: object) => unknown} Slot body component.
 */
export function createLazyTextureViewer(format) {
  return function LazyTextureViewer(props) {
    const [Component, setComponent] = React.useState(null);
    const [failure, setFailure] = React.useState(false);

    React.useEffect(() => {
      let active = true;
      setFailure(false);
      loadTextureComponents()
        .then((module) => {
          const component = module.TEXTURE_VIEWER_COMPONENTS?.[format];
          if (typeof component !== 'function') {
            throw new Error(`The ${format.toUpperCase()} viewer is unavailable.`);
          }
          if (active) setComponent(() => component);
        })
        .catch(() => {
          if (active) setFailure(true);
        });
      return () => {
        active = false;
      };
    }, [format]);

    if (Component !== null) {
      return h(Component, { ...props, format });
    }

    const t = props.t ?? props.fallbackT;
    return h('div', {
      className: 'dsh3dv-root',
      'data-dsh3d-texture': '',
      'data-dsh3d-format': format,
      'data-dsh3d-status': failure ? 'error' : 'loading',
      role: 'region',
      tabIndex: 0,
      'aria-label': t?.('textureKeyboardHelp') ?? 'Texture preview',
    }, failure
      ? h('div', { className: 'dsh3dv-overlay' }, t?.('textureErrorTitle') ?? 'Could not display this texture')
      : null);
  };
}
