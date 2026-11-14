/**
 * The single registry of document formats this plugin renders.
 *
 * Registration (client.js), the viewer factories (ui/model-viewer.js), the HUD
 * badge (ui/chrome.js), and format normalization all derive from this table,
 * so a format is declared exactly once instead of in four parallel lists.
 */

/**
 * @typedef {{
 *   id: string,
 *   format: 'fbx' | 'obj' | 'gltf' | 'stl' | 'dae',
 *   extensions: readonly string[],
 *   titleKey: string,
 *   badgeKey: string,
 *   glbBadgeKey?: string,
 *   label: string,
 * }} FormatDefinition
 */

/** @type {Readonly<Record<string, FormatDefinition>>} */
export const FORMATS = Object.freeze({
  fbx: Object.freeze({
    id: 'dsh-3d-viewer/fbx',
    format: 'fbx',
    extensions: Object.freeze(['fbx']),
    titleKey: 'rendererTitle',
    badgeKey: 'badge',
    label: 'FBX',
  }),
  obj: Object.freeze({
    id: 'dsh-3d-viewer/obj',
    format: 'obj',
    extensions: Object.freeze(['obj']),
    titleKey: 'objRendererTitle',
    badgeKey: 'objBadge',
    label: 'OBJ',
  }),
  gltf: Object.freeze({
    id: 'dsh-3d-viewer/gltf',
    format: 'gltf',
    extensions: Object.freeze(['gltf', 'glb']),
    titleKey: 'gltfRendererTitle',
    badgeKey: 'gltfBadge',
    glbBadgeKey: 'glbBadge',
    label: 'glTF / GLB',
  }),
  stl: Object.freeze({
    id: 'dsh-3d-viewer/stl',
    format: 'stl',
    extensions: Object.freeze(['stl']),
    titleKey: 'stlRendererTitle',
    badgeKey: 'stlBadge',
    label: 'STL',
  }),
  dae: Object.freeze({
    id: 'dsh-3d-viewer/dae',
    format: 'dae',
    extensions: Object.freeze(['dae']),
    titleKey: 'daeRendererTitle',
    badgeKey: 'daeBadge',
    label: 'DAE',
  }),
});

/** Registration order, which is also the order of the sidebar preview list. */
export const FORMAT_IDS = Object.freeze(Object.keys(FORMATS));

/** @type {readonly FormatDefinition[]} */
export const FORMAT_ENTRIES = Object.freeze(FORMAT_IDS.map((id) => FORMATS[id]));

/**
 * Normalize a slot-provided format name.
 *
 * `glb` is an alias of `gltf`; unknown values fall back to the FBX viewer,
 * matching the previous default of the single viewer component.
 *
 * @param {unknown} value Requested format.
 * @returns {'fbx' | 'obj' | 'gltf' | 'stl' | 'dae'} A registered format.
 */
export function normalizeFormat(value) {
  if (value === 'glb') return 'gltf';
  return typeof value === 'string' && Object.hasOwn(FORMATS, value)
    ? /** @type {'fbx' | 'obj' | 'gltf' | 'stl' | 'dae'} */ (value)
    : 'fbx';
}

/**
 * Resolve the dictionary key for a preview badge.
 *
 * @param {unknown} format Document format.
 * @param {boolean} [glb] Whether a glTF document is a binary GLB.
 * @returns {string} Dictionary key.
 */
export function badgeKeyFor(format, glb = false) {
  const entry = FORMATS[normalizeFormat(format)];
  return glb === true && entry.glbBadgeKey !== undefined ? entry.glbBadgeKey : entry.badgeKey;
}

/**
 * Whether a document address points at a binary GLB container.
 *
 * @param {unknown} address Document resource address.
 * @returns {boolean} True for `.glb` paths, ignoring query and fragment suffixes.
 */
export function isGlbAddress(address) {
  return typeof address === 'string' && /\.glb(?:[?#]|$)/iu.test(address);
}
