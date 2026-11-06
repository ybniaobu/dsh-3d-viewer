/**
 * Host half of the 3D viewer bundle.
 *
 * The viewer itself runs in the browser, but its four HDRI environments are
 * packaged as `.hdr` files instead of base64 inside the client bundle: a web
 * page has no URL for a file inside an installed plugin package. This half
 * registers one read-only route that serves those files from the package the
 * host already loaded, so the browser can fetch them like any other asset.
 *
 * The route is public by design. The HDRIs are CC0 images, the route answers
 * only GET/HEAD, and it maps a fixed whitelist of names to files — it never
 * accepts a caller-chosen path, so there is nothing to traverse and nothing
 * secret to leak. This mirrors how other Host plugins serve their own assets.
 */
import { readFile } from 'node:fs/promises';

/**
 * Route prefix registered with the host web server.
 *
 * No trailing slash: `webServer.match` accepts a prefix only when the request
 * pathname equals it or starts with `${prefix}/`. A registered `/hdri/` would
 * therefore never match `/hdri/nature.hdr`.
 */
export const HDRI_ROUTE = '/dsh-3d-viewer/hdri';

/** Request prefix, with the slash the route matcher expects after the prefix. */
const HDRI_PREFIX = `${HDRI_ROUTE}/`;

/** Environment id to packaged file name. Mirrors `ENVIRONMENT_IDS` client-side. */
const HDRI_FILES = Object.freeze({
  nature: 'nature.hdr',
  city: 'city.hdr',
  indoor: 'indoor.hdr',
  studio: 'studio.hdr',
});

/** Request name (`<id>.hdr`) to packaged file name. */
const HDRI_PATHS = new Map(
  Object.entries(HDRI_FILES).map(([id, file]) => [`${id}.hdr`, file]),
);

const HDRI_TYPE = 'image/vnd.radiance';
// The client appends `?v=<package version>`, so a long immutable lifetime is
// safe: an upgrade changes the URL instead of reusing a stale cached response.
const HDRI_CACHE_CONTROL = 'public, max-age=31536000, immutable';

/**
 * Packaged HDRIs read once per host process.
 *
 * The files belong to an installed (immutable) package, so caching decoded
 * query results is safe; a rebuilt package restarts the host.
 *
 * @type {Map<string, Promise<Buffer>>}
 */
const fileCache = new Map();

/**
 * Read one packaged HDRI, reusing an earlier read.
 *
 * @param {string} file Packaged file name.
 * @returns {Promise<Buffer>} File contents.
 */
function readHdriFile(file) {
  const cached = fileCache.get(file);
  if (cached !== undefined) return cached;

  const task = readFile(new URL(`./assets/hdri/${file}`, import.meta.url));
  task.catch(() => fileCache.delete(file));
  fileCache.set(file, task);
  return task;
}

/**
 * Answer one request with a short plain-text response.
 *
 * @param {import('node:http').ServerResponse} response Response to finish.
 * @param {number} status HTTP status.
 * @param {string} message Body text.
 * @param {Record<string, string | number>} [headers] Extra headers.
 * @param {boolean} [headOnly] Omit the body for a HEAD request.
 */
function sendText(response, status, message, headers = {}, headOnly = false) {
  response.writeHead(status, {
    'content-type': 'text/plain; charset=utf-8',
    'content-length': Buffer.byteLength(message),
    ...headers,
  });
  response.end(headOnly ? undefined : message);
}

/**
 * Create the read-only route that serves the packaged HDRIs.
 *
 * @returns {{
 *   kind: 'prefix',
 *   path: string,
 *   handler: (request: import('node:http').IncomingMessage, response: import('node:http').ServerResponse) => Promise<void>,
 * }} A WebRoute for the host `webServer` service.
 */
export function createHdriRoute() {
  return {
    kind: 'prefix',
    path: HDRI_ROUTE,

    async handler(request, response) {
      if (request.method !== 'GET' && request.method !== 'HEAD') {
        sendText(response, 405, 'Method not allowed', { allow: 'GET, HEAD' });
        return;
      }

      const headOnly = request.method === 'HEAD';
      let pathname;
      try {
        pathname = new URL(request.url ?? '', 'http://localhost').pathname;
      } catch {
        sendText(response, 400, 'Malformed request URL', {}, headOnly);
        return;
      }

      // Only the exact `<id>.hdr` names in the whitelist resolve. Percent
      // escapes are never decoded, so `..%2fpackage.json` stays a miss.
      const name = pathname.startsWith(HDRI_PREFIX) ? pathname.slice(HDRI_PREFIX.length) : '';
      const file = HDRI_PATHS.get(name);
      if (file === undefined) {
        sendText(response, 404, 'Unknown HDRI', {}, headOnly);
        return;
      }

      let body;
      try {
        body = await readHdriFile(file);
      } catch (error) {
        console.warn(`[dsh-3d-viewer] Could not read the packaged HDRI "${file}".`, error);
        sendText(response, 500, 'The packaged HDRI could not be read', {}, headOnly);
        return;
      }

      response.writeHead(200, {
        'content-type': HDRI_TYPE,
        'content-length': body.length,
        'cache-control': HDRI_CACHE_CONTROL,
      });
      if (headOnly) response.end();
      else response.end(body);
    },
  };
}

/**
 * Register the HDRI route once the composition provides a web server.
 *
 * The service is acquired through `ctx.inject`, not `ctx.get`: a Host plugin
 * applies before sibling rows finish loading, so a direct probe can run while
 * `webServer` is still absent. `inject` keeps the callback dormant until the
 * service exists and disposes the route with the plugin. A non-web runtime has
 * no `webServer`, and this half never registers anything there.
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx Owning Host context.
 */
export function apply(ctx) {
  ctx.inject(['webServer'], (hostCtx) => {
    hostCtx.effect(
      () => hostCtx.webServer.register(createHdriRoute()),
      'dsh-3d-viewer: HDRI route',
    );
  });
}
