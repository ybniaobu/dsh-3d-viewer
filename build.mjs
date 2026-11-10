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
  fbx: 'src/loaders/fbx.js',
  obj: 'src/loaders/obj.js',
  gltf: 'src/loaders/gltf.js',
  stl: 'src/loaders/stl.js',
  'tex-tga': 'src/loaders/chunks/tex-tga.js',
  'tex-exr': 'src/loaders/chunks/tex-exr.js',
  'tex-hdr': 'src/loaders/chunks/tex-hdr.js',
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
  outfile: workerBundle,
});
const workerCode = (await readFile(workerBundle, 'utf8')).trimEnd();
const workerName = 'client.tex-worker.js';
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