/**
 * Standalone texture formats rendered by the texture preview.
 *
 * Kept separate from the model formats so the 3D viewer's format normalization
 * and material pipeline never receive a texture id.
 */

/**
 * @typedef {{
 *   id: string,
 *   format: 'tga' | 'exr' | 'hdr' | 'png' | 'jpeg',
 *   extensions: readonly string[],
 *   titleKey: string,
 *   badgeKey: string,
 *   label: string,
 * }} TextureFormatDefinition
 */

/** @type {Readonly<Record<string, TextureFormatDefinition>>} */
export const TEXTURE_FORMATS = Object.freeze({
  png: Object.freeze({
    id: 'dsh-3d-viewer/png',
    format: 'png',
    extensions: Object.freeze(['png']),
    titleKey: 'pngRendererTitle',
    badgeKey: 'pngBadge',
    label: 'PNG',
  }),
  jpeg: Object.freeze({
    id: 'dsh-3d-viewer/jpeg',
    format: 'jpeg',
    extensions: Object.freeze(['jpg', 'jpeg']),
    titleKey: 'jpegRendererTitle',
    badgeKey: 'jpegBadge',
    label: 'JPEG',
  }),
  tga: Object.freeze({
    id: 'dsh-3d-viewer/tga',
    format: 'tga',
    extensions: Object.freeze(['tga']),
    titleKey: 'tgaRendererTitle',
    badgeKey: 'tgaBadge',
    label: 'TGA',
  }),
  exr: Object.freeze({
    id: 'dsh-3d-viewer/exr',
    format: 'exr',
    extensions: Object.freeze(['exr']),
    titleKey: 'exrRendererTitle',
    badgeKey: 'exrBadge',
    label: 'EXR',
  }),
  hdr: Object.freeze({
    id: 'dsh-3d-viewer/hdr',
    format: 'hdr',
    extensions: Object.freeze(['hdr']),
    titleKey: 'hdrRendererTitle',
    badgeKey: 'hdrBadge',
    label: 'HDR',
  }),
});

/** Registration order in the sidebar preview list. */
const TEXTURE_FORMAT_IDS = Object.freeze(Object.keys(TEXTURE_FORMATS));

/** @type {readonly TextureFormatDefinition[]} */
export const TEXTURE_FORMAT_ENTRIES = Object.freeze(
  TEXTURE_FORMAT_IDS.map((id) => TEXTURE_FORMATS[id]),
);
