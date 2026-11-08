# DSH 3D Viewer

Preview FBX, OBJ, glTF, GLB, and STL models plus TGA, EXR, and HDR textures directly in DSH's right sidebar.

**Requires DSH Desktop 0.2.2-rc.1 or newer** (built and tested on 0.2.2-rc.1).

## What's new in 0.2.1

- Model loading is faster: glTF resources are discovered without a second full JSON parse, OBJ only creates MTL materials referenced by `usemtl`, FBX animation actions are created lazily, and full-buffer files are parsed without copying.
- Texture previews are smoother: HDR/EXR previews show before their cache image is captured, the shared WebGL context releases the previous texture, and the worker pool cancels stale work and reuses finished decodes.
- The model viewport now follows the DSH light/dark appearance with Blender-style backgrounds, a light wireframe on dark surfaces, black fog on dark backgrounds, and darker themed overlay panels.
- Viewer badges, status panels, hints, animation controls, and pickers now share the same 11px/600 typography hierarchy.
- Fixed the HDR/EXR preview cache crash when a WebGL preview has no `ImageData`, and fixed glTF URI aliases pointing at one prefetched resource.

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
