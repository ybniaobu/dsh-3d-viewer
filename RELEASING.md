# Releasing

One commit produces both artifacts: the GitHub Release tarball and the npm
package. They must share the same `dist/client.js`, and that bundle must match
the version in `package.json` — the version is embedded in the HDRI route's
cache-busting query, so a version bump always requires a rebuild.

## 1. Bump, build, test

```sh
npm ci
npm version <next-version> --no-git-tag-version   # package.json + package-lock.json
npm run build                                     # rebuilds dist/client.js + chunks
npm test
```

Commit `package.json`, `package-lock.json`, and the rebuilt `dist/client.js`
plus its `dist/client.*.js` chunks together.

## 2. Push to main

`.github/workflows/ci.yml` runs the tests and fails when a fresh build differs
from the committed `dist/client.js` or chunks.

`.github/workflows/release.yml` then:

1. installs with `npm ci`;
2. rebuilds and verifies `dist/client.js` and chunks;
3. runs the tests;
4. runs `npm pack` and attaches `dsh-3d-viewer-<version>.tgz` to a
   `v<version>` GitHub Release.

A release whose tag already exists is skipped. The notes come from
`.github/release-notes.md`; update that file for the version being released.

## 3. Publish to npm (manual)

The release workflow does **not** publish to npm. From the same commit, with npm
authentication configured:

```sh
npm pack --dry-run --json   # review the exact file list and size
npm publish
```

## 4. Verify

- CI is green, including the `dist/client.js` and chunk drift checks.
- The supported client is DSH Desktop 0.2.2-rc.1 or newer; verify the install
  there.
- `npm pack --dry-run --json` lists `dist/client.js`, `dist/client.*.js`,
  `index.js`, `cordis.patch.yml`, `locale/*.json`, the docs, `icon.svg`, and
  `assets/hdri/*`.
- Install the tarball or the npm package in a clean profile and open one FBX,
  OBJ, glTF, GLB, and STL file; switch all four environments and reload the page.
