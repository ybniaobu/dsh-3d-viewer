<div align="center">
  <img src="https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/icon-180.png" alt="3D Viewer icon" width="96" height="96">
  <h1 align="center">3D Viewer</h1>
</div>

English | [中文](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/README.zh.md)

[![GitHub](https://img.shields.io/badge/GitHub-ybniaobu-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ybniaobu/dsh-3d-viewer) [![npm](https://img.shields.io/badge/npm-dsh--3d--viewer-CB3837?logo=npm&logoColor=white&style=flat-square)](https://www.npmjs.com/package/dsh-3d-viewer?activeTab=readme)

Preview FBX, OBJ, glTF, GLB, and STL models plus TGA, EXR, and HDR textures from the current session's workspace in DSH's right sidebar. No uploads or network: open a model, orbit, zoom, switch materials and environments, and play embedded animations.

![3D Viewer preview](https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/preview.png)

## Installation and enabling

Distributed as the npm package `dsh-3d-viewer`. The prebuilt `dist/client.js` contains the viewer and Three.js core; each format loader is a package-local lazy chunk fetched only when that format is first opened. The four HDRI files ship in the package and are served by a small read-only host route on the local DSH server, so no network access is needed at runtime. React comes from DSH.

### Install from npm (recommended)

1. Open DSH Desktop and choose **Plugins** in the sidebar.
2. Click **Add plugin** → **Install a third-party plugin**.
3. Enter `dsh-3d-viewer` (or `dsh-3d-viewer@0.2.0` to pin a version).
4. Set **Registry** to the official npm registry (npmmirror also works in mainland China).
5. Click **Install**, then confirm **3D Viewer** is **On** under **Installed plugins**.
6. Open a model or texture from any session. If no preview appears, refresh the page; if it still does not, restart DSH.

> **Updating**: remove the old version under **Plugins**, then install the new one with a higher version.

### Install from a local directory (optional)

Use this for offline or intranet distribution.

1. Unpack the plugin directory anywhere; it must contain `package.json`, `dist/client.js` plus its chunks, `index.js`, `cordis.patch.yml`, and the `assets/hdri/` directory.
2. Open DSH Desktop and choose **Plugins** in the sidebar.
3. Click **Add plugin** → **Install a third-party plugin**.
4. Enter the directory's absolute path (for example `F:\plugins\dsh-3d-viewer`) and click **Install**.
5. Confirm **3D Viewer** is **On** under **Installed plugins**.
6. Open a model or texture from any session. If no preview appears, refresh the page; if it still does not, restart DSH.

> Local installs link to the directory rather than copying it. Do not move, rename, or delete it, or DSH may not find the plugin on the next start.
>
> Plugins run inside the DSH process; install only trusted sources.

### Requirements

- DSH Desktop 0.2.2-rc.1 or newer (built and tested on 0.2.2-rc.1).
- WebGL 2 support; otherwise the preview reports an error.
- Model files in the session workspace, reachable through **Files** in the right sidebar.

## Open a model or texture

1. Open any session and click the right-sidebar button at the top-right of the conversation.
2. Open **Files** in the sidebar (or press `Mod+P`).
3. Click any `.fbx`, `.obj`, `.gltf`, `.glb`, `.stl`, `.tga`, `.exr`, or `.hdr` file.
4. The model or texture opens in a preview tab. Large files and the first environment switch may take a few seconds.

## Supported formats

| Format | Support |
| --- | --- |
| **FBX** | Meshes, hierarchy, materials, embedded textures, animations, and node data |
| **OBJ** | Polygons, `o`/`g` groups, normals, UVs, vertex colors, line/point primitives, `mtllib`/MTL, and common textures |
| **glTF, GLB** | Animations, skinning, embedded resources, and external `.bin` files and textures |
| **STL** | ASCII and binary STL; neutral double-sided PBR material; binary vertex colors preserved |
| **TGA, EXR, HDR** | Standalone texture preview; TGA shows 8-bit RGBA, EXR and HDR are tone-mapped from linear HDR data |

External resources (FBX/glTF textures, glTF `.bin`, OBJ MTL and textures) are read from the session workspace.

The four environments are the exception: the HDRIs ship inside the plugin package, and the Host half serves them from the local DSH server on `/dsh-3d-viewer/hdri/`, so switching environments never touches the network.

Notes:

- **All formats**: lights, cameras, and audio embedded in the file are removed; the preview uses its own lighting and camera.
- **FBX**: a missing external texture warns but does not block geometry.
- **OBJ**: a missing MTL falls back to default materials; missing textures use white placeholders.
- **glTF / GLB**: resources shared by several primitives are read once.
- **STL**: no materials or animations.
- **Textures**: PNG, JPEG, WebP, and GIF use browser decoding; TGA, EXR, and HDR decode through lazy texture chunks. EXR and HDR keep their linear HDR data. Standalone texture previews zoom with the mouse wheel, pan by dragging when zoomed, reset with the **Fit** button or a double-click, and can be flipped vertically when a source stores rows bottom-up.

### Texture previews

TGA, EXR, and HDR files can be opened directly from **Files**. The same decoders are used for external FBX and OBJ texture references.

| Format | Decoded data | Preview behavior |
| --- | --- | --- |
| **TGA** | 8-bit RGBA (RGBA8) | Pixel data is shown directly; alpha is preserved. |
| **EXR** | 16-bit half float or 32-bit float, 1–4 channels | Linear HDR data is tone-mapped to SDR for display. |
| **HDR** | Radiance RGBE, decoded to 16-bit half float by default | Linear HDR data is tone-mapped to SDR for display. |

- EXR and HDR previews use exposure 1 and Reinhard tone mapping before sRGB output; material rendering keeps the linear values.
- The metadata badge shows dimensions, per-channel bit depth, and the current zoom percentage.
- Direct previews support wheel zoom, drag-to-pan when zoomed, **Fit** / double-click reset, and **Flip Y** for bottom-up sources.
- Decoder chunks are fetched only on first use; opening a PNG or JPEG, or a model that never uses TGA, EXR, or HDR, does not download them.
- DDS, KTX2, and PVR still fall back to the white placeholder.

### Not supported

- glTF extensions that need extra decoders: Draco, Meshopt, KTX2.
- Texture formats without a bundled decoder: DDS, KTX2, PVR, and similar (shown as white placeholders).
- MTL `map_Ks` / `map_Ns` are not fully mapped to PBR yet (`Kd/Ks/Ns/d` and diffuse/normal/bump/emissive/alpha/displacement textures are supported).

## Code structure

### Host and package

| Path | Responsibility |
| --- | --- |
| `index.js` | Host half: registers the read-only `/dsh-3d-viewer/hdri` route |
| `cordis.patch.yml` | Bundle patch that inserts the plugin row |
| `package.json` | DSH manifest, exports, engines, and package file list |
| `dist/client.js` | Prebuilt client entry served through `exports["./client"]` |
| `dist/client.*.js` | Lazy format and texture decoder chunks, colocated with the entry |
| `icon.svg` | Plugin icon required at the package root |
| `locale/*.json` | English/Chinese UI dictionaries |
| `assets/hdri/` | Packaged Poly Haven CC0 HDRIs served by the host route |

### Client entry and shared data

| Path | Responsibility |
| --- | --- |
| `src/client.js` | Registers document previews and Sidebar slots for each format |
| `src/formats.js` | Model format ids, extensions, titles, and normalization |
| `src/texture-formats.js` | Standalone texture format ids, extensions, and titles |
| `src/bytes.js` | Byte, text, path, MIME, and base64 helpers plus cancellation |
| `src/model.js` | Model stats, embedded-node stripping, and resource disposal |

### UI

| Path | Responsibility |
| --- | --- |
| `src/ui/model-viewer.js` | Viewer container: load lifecycle, settings, and status |
| `src/ui/viewer-surface.js` | Pure presentation: toolbar, stats, animation bar, and overlay |
| `src/ui/texture-viewer.js` | Standalone TGA, EXR, HDR texture preview, tone mapping, wheel zoom, pan, and vertical flip |
| `src/ui/animation-bar.js` | Animation transport and progress updates |
| `src/ui/chrome.js` | Toolbar, material/environment popovers, and stats panel |
| `src/ui/primitives.js` | Shared small UI primitives |
| `src/ui/icons.js` | Inline icons |
| `src/ui/styles.js` | Scoped styles |
| `src/ui/dictionaries.js` | English/Chinese copy |
| `src/ui/options.js` | Material and environment option metadata |

### Scene

| Path | Responsibility |
| --- | --- |
| `src/scene/create-scene-view.js` | Scene orchestration: renderer, camera, controls, and loop |
| `src/scene/renderer.js` | Renderer creation and fixed Three settings |
| `src/scene/renderer-pool.js` | Renderer and PMREM reuse across views |
| `src/scene/environment.js` | HDRI fetch, PMREM construction, and per-id cache |
| `src/scene/materials.js` | Phong/Lambert → PBR conversion, presets, and wireframe |
| `src/scene/ground.js` | Infinite grid shader and shadow receiver |
| `src/scene/animation.js` | AnimationMixer, clip timeline, and progress |
| `src/scene/camera.js` | Framing, keyboard orbit, and clip planes |
| `src/scene/lighting.js` | Key/fill lighting and shadows |
| `src/scene/render-loop.js` | Coalescing frame scheduler |
| `src/scene/postprocessing.js` | MSAA/ACES pass and dithering |
| `src/scene/blue-noise.js` | Blue-noise texture |
| `src/scene/viewer-error.js` | Typed preview errors |

### Loaders and chunks

| Path | Responsibility |
| --- | --- |
| `src/loaders/model-loader.js` | Lazy chunk dispatch and format loading |
| `src/loaders/fbx.js` | FBX parsing and texture sidecars |
| `src/loaders/obj.js` | OBJ parsing and MTL/texture resolution |
| `src/loaders/stl.js` | STL parsing |
| `src/loaders/gltf.js` | glTF, GLB buffers, textures, animations, and cleanup |
| `src/loaders/workspace.js` | Resource addresses, workspace reads, TGA, EXR, HDR dispatch, and texture fallback |
| `src/loaders/chunk-require.js` | `require.async` bridge for DSH package chunks |
| `src/loaders/three-bridge.js` | Curated Three exports shared with lazy chunks |
| `src/loaders/chunks/*.js` | One entry per lazy format or texture chunk |
| `src/vendor/fbx-loader-pbr.js` | Vendored Three FBXLoader with PBR custom attributes |

### Build and tests

| Path | Responsibility |
| --- | --- |
| `build.mjs` | Bundles `dist/client.js` and the format chunks |
| `tests/run.mjs` | Runs each `tests/*.mjs` in its own process |
| `tests/*.mjs` | Loaders, renderer pool, HDRI route, SSR, manifest, and chunks |

Naming: source files use `kebab-case`; React components and classes use `PascalCase`; functions and variables use `camelCase`; module constants use `UPPER_SNAKE_CASE`. Vendored loader internals keep their upstream names.

## License

MIT; see [LICENSE](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/LICENSE). Third-party notices are in [THIRD_PARTY_NOTICES.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/THIRD_PARTY_NOTICES.md), including Three.js (MIT) and Poly Haven HDRIs (CC0; see [assets/hdri/LICENSE.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/assets/hdri/LICENSE.md)). React is provided by DSH and is not distributed with this package.
