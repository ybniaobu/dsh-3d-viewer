import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const root = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const bundlePath = resolve(root, '.build/client.bundle.cjs');
const distDir = resolve(root, 'dist');

await mkdir(dirname(bundlePath), { recursive: true });
await mkdir(distDir, { recursive: true });

// Use the JS API rather than node_modules/esbuild/bin/esbuild: that path is a
// JS shim on Windows but the native binary on Linux, so spawning it with node
// fails in CI. The API resolves the platform binary itself.
await esbuild.build({
  absWorkingDir: root,
  entryPoints: [resolve(root, 'src/client.js')],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome120', 'edge120'],
  external: ['react'],
  minify: true,
  legalComments: 'none',
  logLevel: 'warning',
  define: {
    // The HDRI route URL carries this, so an upgrade never reuses a cached file.
    __DSH3D_VIEWER_VERSION__: JSON.stringify(pkg.version),
  },
  outfile: bundlePath,
});

const code = (await readFile(bundlePath, 'utf8')).trimEnd();
const wrapped = `/*! dsh-3d-viewer | UI entry bundle. The Three.js/scene/texture runtime and format loaders are package-local lazy chunks. HDRIs ship as files and are served by the host route in index.js. See THIRD_PARTY_NOTICES.md for third-party licenses. */
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  factory(require) {
    globalThis.__DSH3DV_REQUIRE__ = require;
    var module = { exports: {} };
    var exports = module.exports;
${code}
    return module.exports;
  },
});
`;

await writeFile(resolve(distDir, 'client.js'), wrapped);
console.log(`Built dist/client.js (${Buffer.byteLength(wrapped)} bytes) for ${pkg.name}.`);

// The heavy 3D/texture runtime is loaded only when a preview opens. It owns
// Three and installs the bridge consumed by the lazy format chunks.
const runtimeBundle = resolve(root, '.build/runtime.cjs');
await esbuild.build({
  absWorkingDir: root,
  entryPoints: [resolve(root, 'src/runtime.js')],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome120', 'edge120'],
  minify: true,
  legalComments: 'none',
  logLevel: 'warning',
  define: {
    __DSH3D_VIEWER_VERSION__: JSON.stringify(pkg.version),
  },
  outfile: runtimeBundle,
});
const runtimeCode = (await readFile(runtimeBundle, 'utf8')).trimEnd();
const runtimeName = 'client.runtime.js';
const runtimeWrapped = `/*! dsh-3d-viewer runtime chunk | bundles Three.js, scene, and texture preview support (MIT). See THIRD_PARTY_NOTICES.md. */
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  chunk: ${JSON.stringify(runtimeName)},
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
${runtimeCode}
    return module.exports;
  },
});
`;
await writeFile(resolve(distDir, runtimeName), runtimeWrapped);
console.log(`Built dist/${runtimeName} (${Buffer.byteLength(runtimeWrapped)} bytes) for ${pkg.name}.`);

// Format loaders are package-local chunks. They are self-contained CJS and
// receive the entry bundle's Three instance through a tiny require shim, so a
// format is only downloaded when it is first opened.
const CHUNK_ENTRIES = Object.freeze({
  'formats.fbx': 'src/loaders/formats/fbx.js',
  'formats.obj': 'src/loaders/formats/obj.js',
  'formats.gltf': 'src/loaders/formats/gltf.js',
  'formats.stl': 'src/loaders/formats/stl.js',
  'formats.dae': 'src/loaders/formats/dae.js',
  'textures.tga': 'src/loaders/chunks/tex-tga.js',
  'textures.exr': 'src/loaders/chunks/tex-exr.js',
  'textures.hdr': 'src/loaders/chunks/tex-hdr.js',
});
for (const [name, entry] of Object.entries(CHUNK_ENTRIES)) {
  const chunkBundle = resolve(root, `.build/chunk-${name}.cjs`);
  await esbuild.build({
    absWorkingDir: root,
    entryPoints: [resolve(root, entry)],
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: ['chrome120', 'edge120'],
    // Externalise only the bare package. esbuild's string `external` also
    // matches subpaths, which would leave `three/addons/*` as a require that a
    // chunk cannot resolve.
    plugins: [{
      name: 'three-exact',
      setup(build) {
        build.onResolve({ filter: /^three$/ }, () => ({ path: 'three', external: true }));
      },
    }],
    minify: true,
    legalComments: 'none',
    logLevel: 'warning',
    outfile: chunkBundle,
  });

  const chunkCode = (await readFile(chunkBundle, 'utf8')).trimEnd();
  const chunkName = `client.${name}.js`;
  const chunkWrapped = `/*! dsh-3d-viewer ${name} loader chunk | bundles Three.js addons (MIT). See THIRD_PARTY_NOTICES.md. */
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  chunk: ${JSON.stringify(chunkName)},
  factory(require) {
    var localRequire = (id) => id === 'three' ? globalThis.__DSH3DV_THREE__ : require(id);
    var module = { exports: {} };
    var exports = module.exports;
    (function (require, module, exports) {
${chunkCode}
    })(localRequire, module, module.exports);
    return module.exports;
  },
});
`;
  await writeFile(resolve(distDir, chunkName), chunkWrapped);
  console.log(`Built dist/${chunkName} (${Buffer.byteLength(chunkWrapped)} bytes) for ${pkg.name}.`);
}

// Styles, non-baseline locales, and the texture viewer are UI chunks. They are
// requested only when the viewer starts, the locale is selected, or a texture
// document is opened; the formats above stay independent.
const AUX_CHUNK_ENTRIES = Object.freeze({
  'ui.styles': { entry: 'src/ui/styles.js' },
  'ui.texture': { entry: 'src/ui/texture/texture-viewer.js', external: ['react'] },
  'locales.de': { entry: 'src/ui/dictionaries/de.js' },
  'locales.es': { entry: 'src/ui/dictionaries/es.js' },
  'locales.fr': { entry: 'src/ui/dictionaries/fr.js' },
  'locales.ja': { entry: 'src/ui/dictionaries/ja.js' },
  'locales.pt': { entry: 'src/ui/dictionaries/pt.js' },
  'locales.ru': { entry: 'src/ui/dictionaries/ru.js' },
});
for (const [name, definition] of Object.entries(AUX_CHUNK_ENTRIES)) {
  const chunkBundle = resolve(root, `.build/chunk-${name}.cjs`);
  await esbuild.build({
    absWorkingDir: root,
    entryPoints: [resolve(root, definition.entry)],
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: ['chrome120', 'edge120'],
    external: definition.external,
    minify: true,
    legalComments: 'none',
    logLevel: 'warning',
    outfile: chunkBundle,
  });

  const chunkCode = (await readFile(chunkBundle, 'utf8')).trimEnd();
  const chunkName = `client.${name}.js`;
  const chunkWrapped = `/*! dsh-3d-viewer ${name} UI chunk | ${definition.entry}. See THIRD_PARTY_NOTICES.md. */
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  chunk: ${JSON.stringify(chunkName)},
  factory(require) {
    var localRequire = (id) => id === 'three' ? globalThis.__DSH3DV_THREE__ : require(id);
    var module = { exports: {} };
    var exports = module.exports;
    (function (require, module, exports) {
${chunkCode}
    })(localRequire, module, module.exports);
    return module.exports;
  },
});
`;
  await writeFile(resolve(distDir, chunkName), chunkWrapped);
  console.log(`Built dist/${chunkName} (${Buffer.byteLength(chunkWrapped)} bytes) for ${pkg.name}.`);
}

// EXR/HDR parsing is CPU-heavy for large images. This lazy chunk carries a
// standalone worker bundle; the preview creates a Blob worker from its source
// string and falls back to the main-thread decoders when workers are blocked.
const workerBundle = resolve(root, '.build/tex-worker.iife.js');
await esbuild.build({
  absWorkingDir: root,
  entryPoints: [resolve(root, 'src/loaders/chunks/tex-worker.js')],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome120', 'edge120'],
  minify: true,
  legalComments: 'none',
  logLevel: 'warning',
  // EXRLoader/HDRLoader only need Three's core classes. Resolving `three` to
  // three.core.js keeps WebGLRenderer and the rest of the browser build out of
  // this worker, cutting the lazy worker by more than half.
  plugins: [{
    name: 'three-core-worker',
    setup(build) {
      build.onResolve({ filter: /^three$/ }, () => ({
        path: resolve(root, 'node_modules/three/build/three.core.js'),
      }));
    },
  }],
  outfile: workerBundle,
});
const workerCode = (await readFile(workerBundle, 'utf8')).trimEnd();
const workerName = 'client.textures.worker.js';
const workerWrapped = `/*! dsh-3d-viewer EXR/HDR worker chunk | bundles Three.js addons (MIT). See THIRD_PARTY_NOTICES.md. */
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  chunk: ${JSON.stringify(workerName)},
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
    exports.workerSource = ${JSON.stringify(workerCode)};
    return module.exports;
  },
});
`;
await writeFile(resolve(distDir, workerName), workerWrapped);
console.log(`Built dist/${workerName} (${Buffer.byteLength(workerWrapped)} bytes) for ${pkg.name}.`);