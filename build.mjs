import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const esbuildBin = resolve(root, 'node_modules/esbuild/bin/esbuild');
const bundlePath = resolve(root, '.build/client.bundle.cjs');

await mkdir(dirname(bundlePath), { recursive: true });

const result = spawnSync(process.execPath, [
  esbuildBin,
  resolve(root, 'src/client.js'),
  '--bundle',
  '--format=cjs',
  '--platform=browser',
  '--target=chrome120,edge120',
  '--external:react',
  '--minify',
  '--legal-comments=none',
  '--log-level=warning',
  // The HDRI route URL carries this, so an upgrade never reuses a cached file.
  `--define:__DSH3D_VIEWER_VERSION__=${JSON.stringify(pkg.version)}`,
  `--outfile=${bundlePath}`,
], {
  cwd: root,
  stdio: 'inherit',
});

if (result.error !== undefined) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const code = (await readFile(bundlePath, 'utf8')).trimEnd();
const wrapped = `/*! dsh-3d-viewer | bundles Three.js (MIT), FBXLoader, OBJLoader, MTLLoader, GLTFLoader, STLLoader, OrbitControls and HDRLoader (MIT). The four Poly Haven CC0 HDRIs ship as files and are served by the host route in index.js. See THIRD_PARTY_NOTICES.md for third-party licenses. */
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
${code}
    return module.exports;
  },
});
`;

await writeFile(resolve(root, 'client.js'), wrapped);
console.log(`Built client.js (${Buffer.byteLength(wrapped)} bytes) for ${pkg.name}.`);
