# DSH 3D Viewer

Preview FBX, OBJ, glTF, GLB, DAE, and STL models plus PNG, JPEG, TGA, EXR, and HDR textures directly in DSH's right sidebar.

**Requires DSH Desktop 0.2.2-rc.3 or newer** (built and tested on 0.2.2-rc.3).

## What's new in 0.3.0

- Added COLLADA `.dae` previews with materials, external textures, and embedded animation clips.
- Added PNG, JPG, and JPEG texture previews with alpha preservation. Raster previews draw from `ImageBitmap` without a full pixel readback.
- Animation playback now has a clip picker, a `0.5×`–`2×` speed selector, seeking, and idle prewarming for later clips.
- Localized the viewer and plugin metadata for all eight DSH languages: German, English, Spanish, French, Japanese, Portuguese, Russian, and Chinese.
- Reduced per-frame allocations in the axis gizmo, camera notifications, texture zooming, animation labels, and texture decoding.
- Reused vertex-deduplication and glTF shadow-detection scratch buffers to lower loading-time memory pressure.
- Refreshed the texture controls so Fit and Flip Y stay together while metadata wraps on narrow sidebars.

## Highlights

- Orbit, zoom, pan, keyboard navigation, reset view, and 15-second auto-rotate
- Orientation-axis camera presets and drag-to-orbit navigation
- Six material presets and four built-in HDRI environments
- PNG, JPEG, TGA, EXR, and HDR previews with tone mapping, alpha, and dimension/bit-depth/zoom metadata
- Animation playback with clip switching, seeking, speed control, and progress
- Mesh, vertex, triangle, and file-size statistics
- Embedded lights, cameras, and audio in source files are ignored
- Eight-language UI matching DSH's language setting
- Three.js loads lazily; HDRIs ship with the plugin and are served by a local host route

## Install

1. Download the `dsh-3d-viewer-*.tgz` asset from this release.
2. In DSH Desktop 0.2.2-rc.3 or newer, open **Plugins** → **Add plugin** → **Install a third-party plugin**.
3. Select the downloaded tarball, or enter its absolute path, and click **Install**.

The npm package is published as `dsh-3d-viewer`. npm publishing happens separately from this GitHub Release and may lag behind it; when it is available, the plugin can also be installed by name from the official npm registry.
