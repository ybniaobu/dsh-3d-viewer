# DSH 3D Viewer

Preview FBX, OBJ, glTF/GLB, and STL models directly in DSH's right sidebar.

**Requires DSH Desktop 0.2.1-rc.5 or newer** (built and tested on 0.2.1-rc.5).

## What's new in 0.1.1

- HDRI environments are served by a small read-only host route instead of being base64-encoded inside the client bundle.
- `client.js` drops from 9.56 MB to 0.82 MB; the unpacked npm package drops from 24.6 MB to 7.4 MB.
- The four 1024x512 HDRIs keep their full resolution; only their delivery changed.

## Highlights

- Orbit, zoom, pan, and keyboard navigation; reset view and auto-rotate
- Six material presets and four built-in HDRI environments
- Animation playback with clip switching, seeking, and progress
- Mesh, vertex, triangle, and file-size statistics
- Embedded lights, cameras, and audio in source files are ignored
- Three.js is bundled; the HDRIs ship with the plugin and are served by a local host route; no uploads or network required

## Install

1. Download the `dsh-3d-viewer-*.tgz` asset from this release.
2. In DSH Desktop 0.2.1-rc.5 or newer, open **Plugins** → **Add plugin** → **Install a third-party plugin**.
3. Select the downloaded tarball, or enter its absolute path, and click **Install**.

The npm package is published as `dsh-3d-viewer`. npm publishing happens separately from this GitHub Release and may lag behind it; when it is available, the plugin can also be installed by name from the official npm registry.
