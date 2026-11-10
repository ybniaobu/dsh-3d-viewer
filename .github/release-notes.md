# DSH 3D Viewer

Preview FBX, OBJ, glTF, GLB, and STL models plus TGA, EXR, and HDR textures directly in DSH's right sidebar.

**Requires DSH Desktop 0.2.2-rc.1 or newer** (built and tested on 0.2.2-rc.1).

## What's new in 0.2.2

- Startup is lighter: the UI shell loads first, while Three.js, scene setup, and texture preview support are fetched only when a preview opens. Format loaders and decoders remain lazy.
- Render quality now adapts to device memory, CPU cores, and display resolution: pixel ratio, MSAA, shadow-map size, and grid anisotropy are selected per preview.
- Camera navigation gains an orientation gizmo with positive and negative axes. Click an endpoint for a standard view, or drag the gizmo to orbit. Material and environment choices are remembered for the next model.
- The ground grid now follows the orbit target, uses world-space UVs, and has a tuned linear fog range.
- Animation progress no longer re-renders React on every tick, and texture pan/zoom writes directly to the DOM instead of creating state objects per frame.
- The texture worker client is shared through the lazy runtime instead of being duplicated in every format chunk.

## Highlights

- Orbit, zoom, pan, keyboard navigation, reset view, and 15-second auto-rotate
- Orientation-axis camera presets and drag-to-orbit navigation
- Six material presets and four built-in HDRI environments
- Standalone TGA, EXR, and HDR texture previews with tone mapping and dimension/bit-depth/zoom metadata
- Animation playback with clip switching, seeking, and progress
- Mesh, vertex, triangle, and file-size statistics
- Embedded lights, cameras, and audio in source files are ignored
- Three.js loads lazily; HDRIs ship with the plugin and are served by a local host route

## Install

1. Download the `dsh-3d-viewer-*.tgz` asset from this release.
2. In DSH Desktop 0.2.2-rc.1 or newer, open **Plugins** → **Add plugin** → **Install a third-party plugin**.
3. Select the downloaded tarball, or enter its absolute path, and click **Install**.

The npm package is published as `dsh-3d-viewer`. npm publishing happens separately from this GitHub Release and may lag behind it; when it is available, the plugin can also be installed by name from the official npm registry.
