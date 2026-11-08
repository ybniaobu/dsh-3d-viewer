import assert from 'node:assert/strict';
import {
  BoxGeometry,
  DoubleSide,
  Group,
  Mesh,
  MeshPhongMaterial,
  NoColorSpace,
  SRGBColorSpace,
  Texture,
} from 'three';
import { extractFbxMetalness, extractFbxRoughness } from '../src/vendor/fbx-loader-pbr.js';
import { MATERIAL_PRESETS, createMaterialController, toPbrMaterial } from '../src/scene/materials.js';
import { MATERIAL_OPTIONS } from '../src/ui/options.js';

assert.deepEqual(
  MATERIAL_OPTIONS.map((option) => option.id).filter((id) => id !== 'original').sort(),
  Object.keys(MATERIAL_PRESETS).sort(),
  'material rail should match the preset ids',
);

assert.equal(extractFbxMetalness({ Metalness: { value: 0.65 } }), 0.65);
assert.equal(extractFbxMetalness({ 'Maya|metalness': { value: [ 0.35 ] } }), 0.35);
assert.equal(extractFbxMetalness({ MetallicFactor: { value: '0.9' } }), 0.9);
assert.equal(extractFbxMetalness({ MetalnessMap: { value: 1 } }), undefined);
assert.equal(extractFbxMetalness({ ShadingModel: 'phong' }), undefined);

assert.equal(extractFbxRoughness({ Roughness: { value: 0.42 } }), 0.42);
assert.equal(extractFbxRoughness({ 'Maya|roughness': { value: [ 0.6 ] } }), 0.6);
assert.equal(extractFbxRoughness({ RoughnessFactor: { value: '0.25' } }), 0.25);
assert.equal(extractFbxRoughness({ RoughnessMap: { value: 1 } }), undefined);

const map = new Texture();
const normalMap = new Texture();
const source = new MeshPhongMaterial({
  color: 0x336699,
  shininess: 20,
  map,
  normalMap,
  transparent: true,
  opacity: 0.4,
  side: DoubleSide,
  alphaTest: 0.1,
});
source.userData.fbxMetalness = 0.35;
source.userData.fbxRoughness = 0.23;

const cache = new Map();
const pbr = toPbrMaterial(source, cache);
assert.equal(pbr.isMeshStandardMaterial, true);
assert.equal(pbr.color.getHexString(), '336699');
assert.equal(pbr.map, map, 'diffuse texture should be retained');
assert.equal(pbr.normalMap, normalMap, 'normal texture should be retained');
assert.equal(pbr.map.colorSpace, SRGBColorSpace, 'diffuse map should decode from sRGB');
assert.equal(pbr.normalMap.colorSpace, NoColorSpace, 'normal map should stay linear');
assert.equal(pbr.roughness, 0.23);
assert.equal(pbr.metalness, 0.35);
assert.equal(pbr.transparent, true);
assert.equal(pbr.opacity, 0.4);
assert.equal(pbr.side, DoubleSide);
assert.equal(pbr.alphaTest, 0.1);
assert.equal(toPbrMaterial(source, cache), pbr, 'shared source material should be cached');

const fallback = new MeshPhongMaterial({ color: 0xffffff, shininess: 20 });
const fallbackPbr = toPbrMaterial(fallback, new Map());
assert.equal(fallbackPbr.metalness, 0, 'missing metalness should fall back to 0');
assert.equal(fallbackPbr.roughness.toFixed(3), '0.561', 'missing roughness should fall back to shininess');

const mesh = new Mesh(new BoxGeometry(), new MeshPhongMaterial({ color: 0x336699 }));
const group = new Group().add(mesh);
const controller = createMaterialController(group);
const originalPbr = mesh.material;
assert.equal(originalPbr.isMeshStandardMaterial, true);
assert.equal(mesh.castShadow, true);
assert.equal(mesh.receiveShadow, true);

assert.equal(controller.setPreset('metal'), true);
assert.equal(mesh.material.metalness, 1);
assert.equal(controller.setPreset('plastic'), true);
assert.equal(mesh.material.metalness, 0);
assert.equal(mesh.material.roughness, 0.1);
assert.equal(controller.setWireframe(true), true);
assert.equal(mesh.material.wireframe, true);
assert.equal(mesh.castShadow, false);
assert.equal(controller.setWireframeColor(0xcfd3d6), true);
assert.equal(mesh.material.color.getHex(), 0xcfd3d6);
assert.equal(controller.setWireframeColor(0xcfd3d6), false);
assert.equal(controller.setPreset('clay'), true);
assert.equal(mesh.material.wireframe, true, 'preset changes while wireframed should be deferred');
assert.equal(controller.setWireframe(false), true);
assert.equal(mesh.material.metalness, 0);
assert.equal(mesh.material.roughness, 0.84);
assert.equal(mesh.castShadow, true);
assert.equal(controller.setPreset('original'), true);
assert.equal(mesh.material, originalPbr);
controller.dispose();
assert.equal(mesh.material, originalPbr);
originalPbr.dispose();
mesh.geometry.dispose();

console.log('PBR material conversion verified:', {
  type: pbr.type,
  roughness: pbr.roughness,
  metalness: pbr.metalness,
  fallbackMetalness: fallbackPbr.metalness,
  fallbackRoughness: fallbackPbr.roughness,
  mapRetained: pbr.map === map,
  normalMapRetained: pbr.normalMap === normalMap,
});
