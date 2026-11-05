export const MATERIAL_OPTIONS = Object.freeze([
  { id: 'original', labelKey: 'materialOriginal', className: 'dsh3dv-ball--original' },
  { id: 'diffuse', labelKey: 'materialDiffuse', className: 'dsh3dv-ball--diffuse' },
  { id: 'plastic', labelKey: 'materialPlastic', className: 'dsh3dv-ball--plastic' },
  { id: 'metal', labelKey: 'materialMetal', className: 'dsh3dv-ball--metal' },
  { id: 'metal-polished', labelKey: 'materialMetalPolished', className: 'dsh3dv-ball--polished' },
  { id: 'clay', labelKey: 'materialClay', className: 'dsh3dv-ball--clay' },
]);

export const ENVIRONMENT_OPTIONS = Object.freeze([
  { id: 'nature', labelKey: 'envNature', className: 'dsh3dv-env--nature' },
  { id: 'city', labelKey: 'envCity', className: 'dsh3dv-env--city' },
  { id: 'indoor', labelKey: 'envIndoor', className: 'dsh3dv-env--indoor' },
  { id: 'studio', labelKey: 'envStudio', className: 'dsh3dv-env--studio' },
]);

export const DEFAULT_SETTINGS = Object.freeze({
  grid: true,
  autoRotate: false,
  wireframe: false,
  material: 'original',
  environment: 'nature',
});
