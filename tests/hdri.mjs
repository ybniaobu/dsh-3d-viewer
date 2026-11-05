import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { HDRI_ROUTE, apply, createHdriRoute } from '../index.js';
import {
  ENVIRONMENT_IDS,
  ENVIRONMENT_INTENSITIES,
  createEquirectangularTexture,
  normalizeEnvironmentId,
} from '../src/scene/environment.js';
import { ENVIRONMENT_OPTIONS } from '../src/ui/options.js';

// 1. The rail and the packaged files describe the same environments.
assert.deepEqual(
  ENVIRONMENT_OPTIONS.map((option) => option.id),
  ENVIRONMENT_IDS,
  'environment rail should match the packaged HDRI ids',
);

assert.deepEqual(ENVIRONMENT_INTENSITIES, {
  nature: 1.0,
  city: 1.0,
  indoor: 0.8,
  studio: 0.9,
});

assert.equal(normalizeEnvironmentId('city'), 'city');
assert.equal(normalizeEnvironmentId('ocean'), 'nature');
assert.equal(normalizeEnvironmentId(null), 'nature');
assert.equal(normalizeEnvironmentId(undefined), 'nature');

// 2. Every packaged file is a 1024x512 equirectangular RGBE image, which is the
//    source resolution the PMREM path expects (256 face, 1:1).
const loader = new HDRLoader();
let natureBytes = 0;

for (const id of ENVIRONMENT_IDS) {
  const bytes = await readFile(new URL(`../assets/hdri/${id}.hdr`, import.meta.url));
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const parsed = loader.parse(buffer);

  assert.ok(bytes.subarray(0, 2).toString() === '#?', `${id} is not a Radiance HDR file`);
  assert.equal(parsed.width, 1024, `${id} width should be 1024`);
  assert.equal(parsed.height, 512, `${id} height should be 512`);
  assert.equal(parsed.height * 2, parsed.width, `${id} is not 2:1 equirectangular`);

  const texture = createEquirectangularTexture(buffer, loader);
  assert.equal(texture.image.width, 1024);
  assert.equal(texture.image.height, 512);
  texture.dispose();

  if (id === 'nature') natureBytes = bytes.byteLength;
}

// 3. The Host route serves exactly those files, and nothing else.
const route = createHdriRoute();
assert.equal(route.kind, 'prefix');
assert.equal(route.path, HDRI_ROUTE);
assert.equal(HDRI_ROUTE, '/dsh-3d-viewer/hdri');
// The host matcher accepts `pathname === prefix || pathname.startsWith(prefix + '/')`,
// so a registered trailing slash would never match a file under it.
assert.equal(HDRI_ROUTE.endsWith('/'), false, 'prefix routes must not end with a slash');

// Mirrors @deepseek-ai/dsh-host-webserver `match()`: a prefix route owns
// `pathname === prefix` and everything below `${prefix}/`, nothing else.
const prefixMatches = (prefix, pathname) => pathname === prefix || pathname.startsWith(`${prefix}/`);
assert.equal(prefixMatches(HDRI_ROUTE, `${HDRI_ROUTE}/nature.hdr`), true);
assert.equal(prefixMatches(`${HDRI_ROUTE}/`, `${HDRI_ROUTE}/nature.hdr`), false);

const server = createServer((request, response) => {
  void route.handler(request, response);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const { port } = server.address();
const base = `http://127.0.0.1:${port}${HDRI_ROUTE}/`;

try {
  const ok = await fetch(`${base}nature.hdr?v=test`);
  assert.equal(ok.status, 200);
  assert.equal(ok.headers.get('content-type'), 'image/vnd.radiance');
  assert.match(ok.headers.get('cache-control'), /immutable/);

  const body = Buffer.from(await ok.arrayBuffer());
  assert.deepEqual([...body.subarray(0, 4)], [0x23, 0x3f, 0x52, 0x41], 'expected a Radiance signature');
  assert.equal(body.length, natureBytes);
  assert.equal(Number(ok.headers.get('content-length')), body.length);

  assert.equal((await fetch(`${base}ocean.hdr`)).status, 404, 'unknown ids must 404');
  assert.equal((await fetch(`${base}..%2fpackage.json`)).status, 404, 'encoded traversal must 404');

  const post = await fetch(`${base}nature.hdr`, { method: 'POST' });
  assert.equal(post.status, 405, 'only GET and HEAD are served');
  assert.equal(post.headers.get('allow'), 'GET, HEAD');

  const head = await fetch(`${base}nature.hdr`, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal((await head.arrayBuffer()).byteLength, 0);

  const headMissing = await fetch(`${base}ocean.hdr`, { method: 'HEAD' });
  assert.equal(headMissing.status, 404);
  assert.equal((await headMissing.arrayBuffer()).byteLength, 0, 'HEAD must not carry a body');
} finally {
  server.closeAllConnections?.();
  await new Promise((done) => server.close(done));
}

// 4. The Host half waits for the web server and registers the route inside it.
const routes = [];
const labels = [];
const ctx = {
  get() {
    throw new Error('apply must wait for webServer through ctx.inject');
  },
  inject(deps, callback) {
    assert.deepEqual(deps, ['webServer']);
    callback({
      webServer: {
        register(value) {
          routes.push(value);
          return () => {};
        },
      },
      effect(innerCallback, label) {
        labels.push(label);
        innerCallback();
      },
    });
  },
};
apply(ctx);

assert.equal(routes.length, 1);
assert.equal(routes[0].path, HDRI_ROUTE);
assert.deepEqual(labels, ['dsh-3d-viewer: HDRI route']);

// A Host without a web server simply never invokes the injected callback.
let injected = 0;
apply({
  inject(deps) {
    injected += 1;
    assert.deepEqual(deps, ['webServer']);
  },
});
assert.equal(injected, 1);

console.log('HDRI route verified:', {
  route: HDRI_ROUTE,
  ids: ENVIRONMENT_IDS,
  natureBytes,
  checks: ['1024x512 files', 'GET/HEAD', '404 whitelist', 'cache-control', 'host registration'],
});
