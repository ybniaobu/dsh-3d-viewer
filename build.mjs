import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const root = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const bundlePath = resolve(root, '.build/client.bundle.cjs');

await mkdir(dirname(bundlePath), { recursive: true });

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
const wrapped = `/*! dsh-3d-viewer | entry bundle: Three.js core, OrbitControls, HDRLoader and post-processing (MIT). FBX, OBJ, glTF/GLB and STL loaders are package-local lazy chunks. HDRIs ship as files and are served by the host route in index.js. See THIRD_PARTY_NOTICES.md for third-party licenses. */
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

await writeFile(resolve(root, 'client.js'), wrapped);
console.log(`Built client.js (${Buffer.byteLength(wrapped)} bytes) for ${pkg.name}.`);

// Format loaders are package-local chunks. They are self-contained CJS and
// receive the entry bundle's Three instance through a tiny require shim, so a
// format is only downloaded when it is first opened.
const CHUNK_NAMES = ['fbx', 'obj', 'gltf', 'stl'];
for (const name of CHUNK_NAMES) {
  const chunkBundle = resolve(root, `.build/chunk-${name}.cjs`);
  await esbuild.build({
    absWorkingDir: root,
    entryPoints: [resolve(root, `src/loaders/chunks/${name}.js`)],
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
  await writeFile(resolve(root, chunkName), chunkWrapped);
  console.log(`Built ${chunkName} (${Buffer.byteLength(chunkWrapped)} bytes) for ${pkg.name}.`);
}