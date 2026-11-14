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

const bundle = await readFile(new URL('../../dist/client.js', import.meta.url), 'utf8');
new Function('window', bundle)(window);
assert.equal(entry.id, 'dsh-3d-viewer');

const registration = {
  definitions: [],
  slots: [],
  injectKeys: [],
  effects: [],
};

// Exercise the >32 MiB fallback end to end: the full read rejects, and the
// body assembles the same bytes from 2 MiB windows.
const largeFile = new Uint8Array(5 * 1024 * 1024);
for (let index = 0; index < largeFile.length; index += 1) largeFile[index] = index % 251;

let statCalls = 0;
let rangeCalls = 0;
let inFlight = 0;
let maxInFlight = 0;

const remote = {
  workspaceFiles: {
    async stat() {
      statCalls += 1;
      return { ok: true, value: { version: 'v1', bytes: largeFile.length } };
    },
    async readBytes(_sessionId, _path, request) {
      if (request.range === undefined) {
        return { ok: false, error: { code: 'workspace-file/too-large', message: 'too large' } };
      }
      rangeCalls += 1;
      inFlight += 1;
      maxInFlight = Math.max(maxInFlight, inFlight);
      try {
        await new Promise((resolve) => setTimeout(resolve, 0));
        const { offset, length } = request.range;
        const end = Math.min(offset + length, largeFile.length);
        return {
          ok: true,
          value: {
            data: largeFile.subarray(offset, end),
            offset,
            eof: end >= largeFile.length,
            version: 'v1',
            bytes: largeFile.length,
          },
        };
      } finally {
        inFlight -= 1;
      }
    },
  },
};

const ctx = {
  remote,
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
await moduleExports.apply(ctx);

assert.deepEqual(moduleExports.inject, ['documentPreviews', 'slots', 'locale', 'remote', 'remote.workspaceFiles']);
assert.equal(registration.definitions.length, 10);
assert.equal(registration.slots.length, 10);
assert.deepEqual(registration.injectKeys, [
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
  'sidebar.right.tab.document',
]);
assert.equal(registration.effects.length, 22);
assert.deepEqual(
  Object.keys(registration.dictionaries.dictionaries).sort(),
  ['en', 'zh'],
);

const fbx = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/fbx');
const obj = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/obj');
const gltf = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/gltf');
const stl = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/stl');
const tga = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/tga');
const exr = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/exr');
const hdr = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/hdr');
const png = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/png');
const jpeg = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/jpeg');
const dae = registration.definitions.find((definition) => definition.id === 'dsh-3d-viewer/dae');
assert.ok(fbx, 'FBX preview should be registered');
assert.ok(obj, 'OBJ preview should be registered');
assert.ok(gltf, 'glTF preview should be registered');
assert.ok(stl, 'STL preview should be registered');
assert.ok(dae, 'DAE preview should be registered');
assert.ok(tga, 'TGA preview should be registered');
assert.ok(exr, 'EXR preview should be registered');
assert.ok(hdr, 'HDR preview should be registered');
assert.ok(png, 'PNG preview should be registered');
assert.ok(jpeg, 'JPEG preview should be registered');

for (const definition of [fbx, obj, gltf, stl, dae, tga, exr, hdr, png, jpeg]) {
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
assert.deepEqual(dae.extensions, ['dae']);
assert.deepEqual(dae.binaryExtensions, ['dae']);
assert.equal(dae.title(), 'daeRendererTitle');
assert.deepEqual(tga.extensions, ['tga']);
assert.deepEqual(tga.binaryExtensions, ['tga']);
assert.equal(tga.title(), 'tgaRendererTitle');
assert.deepEqual(exr.extensions, ['exr']);
assert.deepEqual(exr.binaryExtensions, ['exr']);
assert.equal(exr.title(), 'exrRendererTitle');
assert.deepEqual(hdr.extensions, ['hdr']);
assert.deepEqual(hdr.binaryExtensions, ['hdr']);
assert.equal(hdr.title(), 'hdrRendererTitle');
assert.deepEqual(png.extensions, ['png']);
assert.deepEqual(png.binaryExtensions, ['png']);
assert.equal(png.title(), 'pngRendererTitle');
assert.deepEqual(jpeg.extensions, ['jpg', 'jpeg']);
assert.deepEqual(jpeg.binaryExtensions, ['jpg', 'jpeg']);
assert.equal(jpeg.title(), 'jpegRendererTitle');

for (const definition of [fbx, obj, gltf, stl, dae, tga, exr, hdr, png, jpeg]) {
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

const fbxSlot = registration.slots.find((slot) => slot.options.key === 'dsh-3d-viewer/fbx');
const large = await fbxSlot.options.inject().loadBytes(
  'dsh-resource://file/session/s1/samples/source/datsun240k.fbx',
  new AbortController().signal,
);
assert.equal(large.ok, true);
assert.equal(large.value.data.length, largeFile.length);
assert.equal(large.value.version, 'v1');
assert.equal(large.value.data[0], largeFile[0]);
assert.equal(large.value.data[largeFile.length - 1], largeFile[largeFile.length - 1]);
assert.ok(maxInFlight > 1, 'large windows should be read concurrently');

const firstRangeCalls = rangeCalls;
const cached = await fbxSlot.options.inject().loadBytes(
  'dsh-resource://file/session/s1/samples/source/datsun240k.fbx',
  new AbortController().signal,
);
assert.equal(cached.ok, true);
assert.equal(cached.value.data.length, largeFile.length);
assert.equal(statCalls, 2, 'the cached read still checks the file version');
assert.equal(rangeCalls, firstRangeCalls, 'a version hit must not read the file again');

const originalStat = remote.workspaceFiles.stat;
const originalReadBytes = remote.workspaceFiles.readBytes;
try {
  remote.workspaceFiles.stat = async () => ({
    ok: true,
    value: { version: 'v1', bytes: 3 },
  });
  remote.workspaceFiles.readBytes = async () => ({
    ok: true,
    value: {
      data: new Uint8Array([1, 2, 3]),
      version: 'v2',
      eof: true,
      bytes: 5,
    },
  });
  const race = await fbxSlot.options.inject().loadBytes(
    'dsh-resource://file/session/s1/samples/source/race.fbx',
    new AbortController().signal,
  );
  assert.equal(race.ok, false, 'a changed file must not populate the cache');
  assert.equal(race.error.code, 'workspace-file/changed');
} finally {
  remote.workspaceFiles.stat = originalStat;
  remote.workspaceFiles.readBytes = originalReadBytes;
}

console.log('Registration verified:', {
  implementations: registration.definitions.map((definition) => ({
    id: definition.id,
    extensions: definition.extensions,
  })),
  slots: registration.slots.map((slot) => slot.options.key),
  effects: registration.effects.map((effect) => effect.label),
});
