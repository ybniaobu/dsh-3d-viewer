import {
  DoubleSide,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NoColorSpace,
  SRGBColorSpace,
} from 'three';

/** Fallback materials offered by the material rail. */
export const MATERIAL_PRESETS = Object.freeze({
  diffuse: Object.freeze({ color: 0xdcdcdc, metalness: 0, roughness: 1 }),
  plastic: Object.freeze({ color: 0xc8c9cb, metalness: 0, roughness: 0.1 }),
  metal: Object.freeze({ color: 0xc5cbd3, metalness: 1, roughness: 0 }),
  'metal-polished': Object.freeze({ color: 0xd9dde4, metalness: 1, roughness: 0.3 }),
  clay: Object.freeze({ color: 0xb46f52, metalness: 0, roughness: 0.84 }),
});

/** Preset id that keeps the original converted FBX material. */
export const DEFAULT_MATERIAL = 'original';

/** Texture slots carried over from the source material to the PBR replacement. */
const TEXTURE_SLOTS = Object.freeze([
  'map',
  'normalMap',
  'bumpMap',
  'displacementMap',
  'aoMap',
  'lightMap',
  'alphaMap',
  'emissiveMap',
]);

/** Slots whose pixels are sRGB-encoded color data. */
const SRGB_TEXTURE_SLOTS = new Set(['map', 'emissiveMap', 'lightMap']);

/** Scalar material fields copied verbatim, with the value used when unset. */
const SCALAR_DEFAULTS = Object.freeze({
  emissiveIntensity: 1,
  bumpScale: 1,
  displacementScale: 1,
  displacementBias: 0,
  aoMapIntensity: 1,
  lightMapIntensity: 1,
});

/** Material state copied verbatim from the source material. */
const COPIED_PROPERTIES = Object.freeze([
  'transparent',
  'opacity',
  'alphaTest',
  'side',
  'shadowSide',
  'depthWrite',
  'depthTest',
  'blending',
  'premultipliedAlpha',
  'polygonOffset',
  'polygonOffsetFactor',
  'polygonOffsetUnits',
  'toneMapped',
  'vertexColors',
  'flatShading',
  'wireframe',
  'visible',
]);

/**
 * Approximate a PBR roughness from a Phong specular exponent.
 *
 * @param {import('three').Material} material Source FBX material.
 * @returns {number} GGX roughness in [0.2, 0.9].
 */
export function pbrRoughness(material) {
  const shininess = typeof material.shininess === 'number' ? material.shininess : 0;
  if (shininess <= 0) return 0.62;
  return Math.min(0.9, Math.max(0.2, 1 - Math.log2(shininess + 1) / 10));
}

/**
 * Replace an FBX Phong/Lambert material with a metallic-roughness PBR material.
 *
 * Three's MeshStandardMaterial is its Cook-Torrance path and evaluates
 * BRDF_Lambert for diffuse, D_GGX, F_Schlick and the correlated Smith-GGX
 * visibility (V_GGX_SmithCorrelated, equivalent to Filament's
 * V_SmithGGXCorrelated). Textures and material state are retained.
 *
 * @param {import('three').Material | import('three').Material[] | null | undefined} source Source material(s).
 * @param {Map<string, import('three').Material>} cache Shared converted materials.
 * @returns {import('three').Material | import('three').Material[] | null | undefined} PBR material(s).
 */
export function toPbrMaterial(source, cache) {
  if (source === null || source === undefined) return source;
  if (Array.isArray(source)) return source.map((entry) => toPbrMaterial(entry, cache));
  if (source.isMeshStandardMaterial === true || source.isMeshPhysicalMaterial === true) return source;

  const cached = cache.get(source.uuid);
  if (cached !== undefined) return cached;

  const pbr = new MeshStandardMaterial();
  pbr.name = source.name;
  // FBXLoaderPbr converts FBX Diffuse/Emissive/Specular colors from sRGB to
  // the linear working color space; copy those linear values unchanged.
  if (source.color !== undefined) pbr.color.copy(source.color);
  if (source.emissive !== undefined) pbr.emissive.copy(source.emissive);
  for (const [property, fallback] of Object.entries(SCALAR_DEFAULTS)) {
    pbr[property] = source[property] ?? fallback;
  }
  for (const slot of TEXTURE_SLOTS) {
    const texture = source[slot] ?? null;
    pbr[slot] = texture;
    // Color maps are decoded from sRGB by the shader; normal/AO/alpha/
    // displacement/bump maps stay linear.
    if (texture !== null) {
      texture.colorSpace = SRGB_TEXTURE_SLOTS.has(slot) ? SRGBColorSpace : NoColorSpace;
    }
  }
  if (source.normalScale !== undefined) pbr.normalScale.copy(source.normalScale);

  const fbxRoughness = source.userData?.fbxRoughness;
  pbr.roughness = typeof fbxRoughness === 'number' && Number.isFinite(fbxRoughness)
    ? Math.min(1, Math.max(0, fbxRoughness))
    : pbrRoughness(source);
  const fbxMetalness = source.userData?.fbxMetalness;
  pbr.metalness = typeof fbxMetalness === 'number' && Number.isFinite(fbxMetalness)
    ? Math.min(1, Math.max(0, fbxMetalness))
    : 0;
  for (const property of COPIED_PROPERTIES) {
    pbr[property] = source[property];
  }
  pbr.userData = { ...source.userData };

  cache.set(source.uuid, pbr);
  return pbr;
}

/**
 * Resolve a material preset id, falling back to the original material.
 *
 * @param {unknown} id Requested preset.
 * @returns {string} A valid preset id.
 */
export function normalizeMaterialPreset(id) {
  return id === DEFAULT_MATERIAL || (typeof id === 'string' && MATERIAL_PRESETS[id] !== undefined)
    ? id
    : DEFAULT_MATERIAL;
}

/**
 * Convert every mesh once, then switch between original, preset, and wireframe
 * materials without touching geometry.
 *
 * @param {import('three').Object3D} root Parsed FBX graph.
 * @returns {{
 *   setPreset: (id: unknown) => boolean,
 *   setWireframe: (enabled: boolean) => boolean,
 *   dispose: () => void,
 *   readonly preset: string,
 *   readonly wireframe: boolean,
 * }} Material controls.
 */
export function createMaterialController(root) {
  const pbrMaterials = new Map();
  const presetMaterials = new Map();
  const meshStates = [];
  let preset = DEFAULT_MATERIAL;
  let wireframeActive = false;

  root.traverse((child) => {
    if (child.isMesh !== true) return;

    child.material = toPbrMaterial(child.material, pbrMaterials);
    child.castShadow = true;
    child.receiveShadow = true;
    meshStates.push({
      mesh: child,
      material: child.material,
      castShadow: true,
      receiveShadow: true,
    });
  });

  const wireframeMaterial = new MeshBasicMaterial({
    color: 0x4d5561,
    wireframe: true,
    side: DoubleSide,
    toneMapped: false,
  });

  function getPresetMaterial(id) {
    const cached = presetMaterials.get(id);
    if (cached !== undefined) return cached;

    const definition = MATERIAL_PRESETS[id];
    if (definition === undefined) return null;

    const material = new MeshStandardMaterial({
      name: `dsh3dv-${id}`,
      color: definition.color,
      metalness: definition.metalness,
      roughness: definition.roughness,
      side: DoubleSide,
    });
    presetMaterials.set(id, material);
    return material;
  }

  function apply() {
    const override = !wireframeActive && preset !== DEFAULT_MATERIAL
      ? getPresetMaterial(preset)
      : null;

    for (const state of meshStates) {
      state.mesh.material = wireframeActive
        ? wireframeMaterial
        : (override ?? state.material);
      state.mesh.castShadow = wireframeActive ? false : state.castShadow;
      state.mesh.receiveShadow = wireframeActive ? false : state.receiveShadow;
    }
  }

  function setPreset(id) {
    const next = normalizeMaterialPreset(id);
    if (next === preset) return false;

    preset = next;
    if (!wireframeActive) apply();
    return true;
  }

  function setWireframe(enabled) {
    const next = Boolean(enabled);
    if (next === wireframeActive) return false;

    wireframeActive = next;
    apply();
    return true;
  }

  function dispose() {
    for (const state of meshStates) {
      state.mesh.material = state.material;
      state.mesh.castShadow = state.castShadow;
      state.mesh.receiveShadow = state.receiveShadow;
    }
    for (const material of presetMaterials.values()) material.dispose();
    presetMaterials.clear();
    wireframeMaterial.dispose();
  }

  return {
    setPreset,
    setWireframe,
    dispose,
    get preset() {
      return preset;
    },
    get wireframe() {
      return wireframeActive;
    },
  };
}
