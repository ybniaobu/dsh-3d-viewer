import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// The browser module loader supplies React; registration itself never renders.
const React = new Proxy({ __esModule: true, createElement: () => null }, {
  get(target, key) {
    if (key in target) return target[key];
    return () => null;
  },
});

let entry;
const window = {
  __ModuleLoader__: {
    load(value) {
      entry = value;
    },
  },
};

const bundle = await readFile(new URL('../client.js', import.meta.url), 'utf8');
new Function('window', bundle)(window);
assert.equal(entry.id, 'dsh-3d-viewer');

const registration = {
  definitions: [],
  slots: [],
  injectKeys: [],
  effects: [],
};
const ctx = {
  locale: {
    bind(namespace) {
      registration.namespace = namespace;
      return (key) => key;
    },
    register(namespace, dictionaries) {
      registration.dictionaries = { namespace, dictionaries };
      return () => {};
    },
  },
  documentPreviews: {
    register(definition) {
      registration.definitions.push(definition);
      return () => {};
    },
  },
  slots: {
    inject(key, callback) {
      registration.injectKeys.push(key);
      return callback();
    },
    register(options, component) {
      registration.slots.push({ options, component });
      return () => {};
    },
  },
  effect(callback, label) {
    registration.effects.push({ label, dispose: callback() });
  },
};

const moduleExports = entry.factory((name) => {
  if (name === 'react') return React;
  throw new Error(`unexpected runtime import: ${name}`);
});
moduleExports.apply(ctx);

assert.deepEqual(moduleExports.inject, ['documentPreviews', 'slots', 'locale', 'remote', 'remote.workspaceFiles']);
assert.equal(registration.definitions.length, 4);
assert.equal(registration.slots.length, 4);
assert.deepEqual(registration.injectKeys, [
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
]);
assert.equal(registration.effects.length, 9);

const fbx = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/fbx');
const obj = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/obj');
const gltf = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/gltf');
const stl = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/stl');
assert.ok(fbx, 'FBX preview should be registered');
assert.ok(obj, 'OBJ preview should be registered');
assert.ok(gltf, 'glTF preview should be registered');
assert.ok(stl, 'STL preview should be registered');

for (const definition of [fbx, obj, gltf, stl]) {
  assert.equal(definition.priority, 'extension');
  assert.equal(definition.loading, 'renderer');
  assert.equal(definition.wrap, false);
}

assert.deepEqual(fbx.extensions, ['fbx']);
assert.deepEqual(fbx.binaryExtensions, ['fbx']);
assert.equal(fbx.title(), 'rendererTitle');
assert.deepEqual(obj.extensions, ['obj']);
assert.deepEqual(obj.binaryExtensions, ['obj']);
assert.equal(obj.title(), 'objRendererTitle');
assert.deepEqual(gltf.extensions, ['gltf', 'glb']);
assert.deepEqual(gltf.binaryExtensions, ['gltf', 'glb']);
assert.equal(gltf.title(), 'gltfRendererTitle');
assert.deepEqual(stl.extensions, ['stl']);
assert.deepEqual(stl.binaryExtensions, ['stl']);
assert.equal(stl.title(), 'stlRendererTitle');

for (const definition of [fbx, obj, gltf, stl]) {
  const slot = registration.slots.find((candidate) => candidate.options.key === definition.id);
  assert.ok(slot, `missing body for ${definition.id}`);
  assert.equal(slot.options.name, 'sidebar.right.tab.document');
  assert.equal(slot.options.locale, 'dsh3dViewer');
  assert.equal(typeof slot.component, 'function');
  const injected = slot.options.inject();
  assert.equal(typeof injected.fallbackT, 'function');
  assert.equal(typeof injected.readWorkspaceFile, 'function');
  assert.equal(typeof injected.loadBytes, 'function');
}

console.log('Registration verified:', {
  implementations: registration.definitions.map((definition) => ({
    id: definition.id,
    extensions: definition.extensions,
  })),
  slots: registration.slots.map((slot) => slot.options.key),
  effects: registration.effects.map((effect) => effect.label),
});
