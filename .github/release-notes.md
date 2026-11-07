# DSH 3D Viewer

Preview FBX, OBJ, glTF, GLB, and STL models plus TGA, EXR, and HDR textures directly in DSH's right sidebar.

**Requires DSH Desktop 0.2.2-rc.1 or newer** (built and tested on 0.2.2-rc.1).

## What's new in 0.2.0

- TGA, EXR, and HDR files can be opened directly as texture previews.
- TGA, EXR, and HDR sidecar textures are decoded through lazy chunks and can be used by FBX and OBJ materials.
- Texture previews support wheel zoom, drag panning, Fit/double-click reset, vertical flip, and dimension/bit-depth/zoom metadata.
- Large models are read through parallel windows with a preallocated output buffer; complete files are cached by version.
- Startup and scene setup are faster: lazy format chunks, shared renderers/PMREM targets, shader warmup, and fewer material conversions.
- Auto-rotate is time-based and grid/clip-plane updates are avoided while it runs.

## Highlights

- Orbit, zoom, pan, and keyboard navigation; reset view and 15-second auto-rotate
- Six material presets and four built-in HDRI environments
- Standalone TGA, EXR, and HDR texture previews with tone mapping and dimension/bit-depth/zoom metadata
- Animation playback with clip switching, seeking, and progress
- Mesh, vertex, triangle, and file-size statistics
- Embedded lights, cameras, and audio in source files are ignored
- Three.js is bundled; the HDRIs ship with the plugin and are served by a local host route

## Install

1. Download the `dsh-3d-viewer-*.tgz` asset from this release.
2. In DSH Desktop 0.2.2-rc.1 or newer, open **Plugins** → **Add plugin** → **Install a third-party plugin**.
3. Select the downloaded tarball, or enter its absolute path, and click **Install**.

The npm package is published as `dsh-3d-viewer`. npm publishing happens separately from this GitHub Release and may lag behind it; when it is available, the plugin can also be installed by name from the official npm registry.
