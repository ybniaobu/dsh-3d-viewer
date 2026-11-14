<div align="center">
  <img src="https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/icon-180.png" alt="3D Viewer icon" width="96" height="96">
  <h1 align="center">3D Viewer</h1>
</div>

English | [中文](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/README.zh.md)

[![GitHub](https://img.shields.io/badge/GitHub-ybniaobu-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ybniaobu/dsh-3d-viewer) [![npm](https://img.shields.io/badge/npm-dsh--3d--viewer-CB3837?logo=npm&logoColor=white&style=flat-square)](https://www.npmjs.com/package/dsh-3d-viewer?activeTab=readme)

Preview 3D models and textures from the session workspace in DSH's right sidebar. Supported formats include FBX, OBJ, glTF, GLB, STL, and DAE models, plus PNG, JPEG, TGA, EXR, and HDR textures. Orbit, zoom, switch camera views, materials and environments, and play embedded animations.

![3D Viewer preview](https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/preview.gif)

## Installation

The plugin is distributed as the npm package `dsh-3d-viewer`. The Three.js runtime and format decoders load only when a preview is opened.

### Install from npm (recommended)

1. Open DSH Desktop and choose **Plugins** in the sidebar.
2. Click **Add plugin** → **Install a third-party plugin**.
3. Enter `dsh-3d-viewer` (or `dsh-3d-viewer@0.2.2` to pin a version).
4. Set **Registry** to the official npm registry (npmmirror also works in mainland China).
5. Click **Install**, then confirm **3D Viewer** is **On** under **Installed plugins**.

### Install from a local directory (optional)

1. Unpack the plugin directory anywhere.
2. Open DSH Desktop and choose **Plugins** in the sidebar.
3. Click **Add plugin** → **Install a third-party plugin**.
4. Enter the directory's absolute path (for example `F:\plugins\dsh-3d-viewer`) and click **Install**.
5. Confirm **3D Viewer** is **On** under **Installed plugins**.

Plugins run inside the DSH process; install only trusted sources.

### Requirements

- DSH Desktop 0.2.2-rc.1 or newer.
- WebGL 2.
- The model or texture must be in the session workspace.

## Usage

Open the right sidebar, choose **Files** (`Mod+P`), and click a supported file.

**Model previews:** drag to orbit, scroll to zoom, and right-drag to pan. The toolbar resets the view, starts auto-rotation, and toggles the grid and wireframe. Click or drag the orientation axes to change the camera view. Material and environment pickers are in the top-right controls. When the model has clips, the animation bar appears above the bottom hint: use play/pause, pick a clip by name, drag the progress slider to seek, and choose a playback speed from `0.5×` to `2×`. Switching clips resets to that clip's first frame while preserving the current play/pause state.

**Texture previews:** scroll to zoom, drag to pan when zoomed, and use **Fit** or double-click to reset. **Flip Y** handles bottom-up sources. The badge shows dimensions, bit depth, and zoom.

Large files and the first environment switch may take a few seconds. If no preview appears, refresh the page and then restart DSH.

## Supported formats

### Model previews

| Format | Support |
| --- | --- |
| **FBX** | Meshes, hierarchy, materials, embedded textures, animations, node data |
| **OBJ** | Polygons, groups, normals, UVs, vertex colors, lines/points, MTL, common textures |
| **glTF / GLB** | Animations, skinning, embedded resources, external `.bin` files and textures |
| **STL** | ASCII and binary, neutral PBR material, binary vertex colors |
| **DAE** | COLLADA meshes, materials, external textures, and animations |

Notes:

- Embedded lights, cameras, and audio are ignored.
- External textures are read from the workspace.
- Missing FBX textures only warn.
- OBJ missing MTL uses default materials; missing textures use white placeholders.
- glTF/GLB external `.bin` files and textures must exist in the workspace; missing resources can prevent loading.
- glTF Draco, Meshopt, and KTX2 extensions are not supported.
- DDS, KTX2, PVR, and other formats without a bundled decoder are not supported.
- MTL `map_Ks` / `map_Ns` are not fully mapped to PBR.
- STL has no materials or animations.

### Texture previews

| Format | Decoded data | Preview |
| --- | --- | --- |
| **PNG** | 8-bit RGBA | Direct pixels, alpha preserved |
| **JPG / JPEG** | 8-bit RGBA | Direct pixels, alpha preserved |
| **TGA** | 8-bit RGBA | Direct pixels, alpha preserved |
| **EXR** | 16-bit half or 32-bit float, 1–4 channels | Tone-mapped to SDR |
| **HDR** | Radiance RGBE, 16-bit half by default | Tone-mapped to SDR |

- EXR and HDR use exposure 1 and Reinhard tone mapping before sRGB output.
- HDR previews use a WebGL2 tone-mapping pass when available, with a half-float CPU fallback.
- Previews are cached by resource address, version, and format (160 MiB; 64 MiB on low-memory devices).

## Code structure

| Area | Main files |
| --- | --- |
| Host and package | `index.js`, `cordis.patch.yml`, `package.json` |
| Client registration | `src/client.js`, `src/formats.js`, `src/texture-formats.js` |
| Lazy runtime | `src/runtime.js`, `src/ui/viewer-runtime.js`, `src/loaders/address.js` |
| UI | `src/ui/`: viewer, toolbar, texture preview, animation, preferences |
| Scene | `src/scene/`: renderer, camera, materials, environment, grid, post-processing |
| Loaders | `src/loaders/`: format dispatch, workspace reads, texture workers |
| Vendored code | `src/vendor/`: modified FBX loader |
| Build and tests | `build.mjs`, `tests/run.mjs`, `tests/*.mjs` |

`src/client.js` only registers previews; `src/runtime.js` owns Three.js, scene setup, and lazy format dispatch. The UI shell does not import Three.js directly; scene code and the texture WebGL preview load with the lazy runtime.

## Development

```sh
npm ci
npm test
npm run build
```

CI uses Node.js 24. `npm test` runs each `tests/*.mjs` file in its own process.

`npm run build` writes the UI entry, lazy runtime, format/texture chunks, and the EXR/HDR worker to `dist/`. Commit the rebuilt `dist/` files when source changes.

## License

MIT; see [LICENSE](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/LICENSE). Third-party notices are in [THIRD_PARTY_NOTICES.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/THIRD_PARTY_NOTICES.md), including Three.js (MIT) and Poly Haven HDRIs (CC0). React is provided by DSH.
