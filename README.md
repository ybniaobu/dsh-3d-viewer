<div align="center">
  <img src="https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/icon-180.png" alt="3D Viewer icon" width="96" height="96">
  <h1 align="center">3D Viewer</h1>
</div>

English | [中文](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/README.zh.md)

[![GitHub](https://img.shields.io/badge/GitHub-ybniaobu-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ybniaobu/dsh-3d-viewer) [![npm](https://img.shields.io/badge/npm-dsh--3d--viewer-CB3837?logo=npm&logoColor=white&style=flat-square)](https://www.npmjs.com/package/dsh-3d-viewer?activeTab=readme)

Preview FBX, OBJ, glTF, GLB, and STL models from the current session's workspace in DSH's right sidebar. No uploads or network: open a model, orbit, zoom, switch materials and environments, and play embedded animations.

![3D Viewer preview](https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/preview.png)

## Installation and enabling

Distributed as the npm package `dsh-3d-viewer`. The prebuilt `client.js` contains the viewer and Three.js core; each format loader is a package-local lazy chunk fetched only when that format is first opened. The four HDRI files ship in the package and are served by a small read-only host route on the local DSH server, so no network access is needed at runtime. React comes from DSH.

### Install from npm (recommended)

1. Open DSH Desktop and choose **Plugins** in the sidebar.
2. Click **Add plugin** → **Install a third-party plugin**.
3. Enter `dsh-3d-viewer` (or `dsh-3d-viewer@0.1.1` to pin a version).
4. Set **Registry** to the official npm registry (npmmirror also works in mainland China).
5. Click **Install**, then confirm **3D Viewer** is **On** under **Installed plugins**.
6. Open a model from any session. If no preview appears, refresh the page; if it still does not, restart DSH.

> **Updating**: remove the old version under **Plugins**, then install the new one with a higher version.

### Install from a local directory (optional)

Use this for offline or intranet distribution.

1. Unpack the plugin directory anywhere; it must contain `package.json`, `client.js`, `index.js`, `cordis.patch.yml`, and the `assets/hdri/` directory.
2. Open DSH Desktop and choose **Plugins** in the sidebar.
3. Click **Add plugin** → **Install a third-party plugin**.
4. Enter the directory's absolute path (for example `F:\plugins\dsh-3d-viewer`) and click **Install**.
5. Confirm **3D Viewer** is **On** under **Installed plugins**.
6. Open a model from any session. If no preview appears, refresh the page; if it still does not, restart DSH.

> Local installs link to the directory rather than copying it. Do not move, rename, or delete it, or DSH may not find the plugin on the next start.
>
> Plugins run inside the DSH process; install only trusted sources.

### Requirements

- DSH Desktop 0.2.2-rc.1 or newer (built and tested on 0.2.2-rc.1).
- WebGL 2 support; otherwise the preview reports an error.
- Model files in the session workspace, reachable through **Files** in the right sidebar.

## Open a model

1. Open any session and click the right-sidebar button at the top-right of the conversation.
2. Open **Files** in the sidebar (or press `Mod+P`).
3. Click any `.fbx`, `.obj`, `.gltf`, `.glb`, or `.stl` file.
4. The model opens in a preview tab. Large files and the first environment switch may take a few seconds.

## Supported formats

| Format | Support |
| --- | --- |
| **FBX** | Meshes, hierarchy, materials, embedded textures, animations, and node data |
| **OBJ** | Polygons, `o`/`g` groups, normals, UVs, vertex colors, line/point primitives, `mtllib`/MTL, and common textures |
| **glTF / GLB** | Animations, skinning, embedded resources, and external `.bin` files and textures |
| **STL** | ASCII and binary STL; neutral double-sided PBR material; binary vertex colors preserved |

External resources (FBX/glTF textures, glTF `.bin`, OBJ MTL and textures) are read from the session workspace.

The four environments are the exception: the HDRIs ship inside the plugin package, and the Host half serves them from the local DSH server on `/dsh-3d-viewer/hdri/`, so switching environments never touches the network.

Notes:

- **All formats**: lights, cameras, and audio embedded in the file are removed; the preview uses its own lighting and camera.
- **FBX**: a missing external texture warns but does not block geometry.
- **OBJ**: a missing MTL falls back to default materials; missing textures use white placeholders.
- **glTF / GLB**: resources shared by several primitives are read once.
- **STL**: no materials or animations.

### Not supported

- glTF extensions that need extra decoders: Draco, Meshopt, KTX2.
- Texture formats DSH cannot decode directly: TGA, DDS, EXR, and similar (shown as white placeholders).
- MTL `map_Ks` / `map_Ns` are not fully mapped to PBR yet (`Kd/Ks/Ns/d` and diffuse/normal/bump/emissive/alpha/displacement textures are supported).

## Code structure

| Path | Responsibility |
| --- | --- |
| `index.js` | Host half: registers the read-only `/dsh-3d-viewer/hdri/` route that serves the packaged HDRIs |
| `src/client.js` | Plugin entry; registers document previews and Sidebar slots per format |
| `src/formats.js` | Format registry: ids, extensions, title/badge keys, and format normalization |
| `src/bytes.js` | Shared byte, text, path, MIME, and base64 helpers plus the cancellation error |
| `src/ui/ModelViewer.js` | Viewer container: loading/error state, format binding, and scene lifecycle |
| `src/ui/ViewerSurface.js` | Pure presentation: toolbar, stats, animation bar, and status overlay; renderable without WebGL |
| `src/ui/AnimationBar.js` | Animation transport; playback state and 30 Hz progress updates re-render only this small component |
| `src/ui/chrome.js`, `icons.js`, `primitives.js` | Toolbar, data-driven material/environment popovers, stats panel, icons, and formatting |
| `src/ui/styles.js`, `dictionaries.js`, `options.js` | Styles, English/Chinese copy, and UI options |
| `src/scene/createSceneView.js` | Scene orchestration: renderer, camera, controls, lifecycle |
| `src/scene/environment.js` | HDRI fetch from the host route, decode, PMREM construction, and per-id caching |
| `src/scene/materials.js` | Phong/Lambert → PBR conversion, material presets, and wireframe material |
| `src/scene/ground.js` | Infinite grid shader and shadow receiver; grid pixels are generated once per page |
| `src/scene/animation.js` | AnimationMixer, clip timeline, and progress notifications |
| `src/scene/camera.js`, `lighting.js`, `render-loop.js`, `postprocessing.js`, `blue-noise.js` | Framing and keyboard orbit, lighting, frame scheduling, MSAA/ACES post-processing, and blue-noise dithering |
| `src/loaders/workspace.js` | `resourceAddress` parsing, workspaceFiles reads, absolute-path fallback, texture Blob/white fallback, and resource cleanup |
| `src/loaders/model-loader.js` | Async FBX / OBJ / glTF / GLB / STL loading and table-driven format dispatch |
| `src/loaders/gltf.js` | glTF/GLB external buffer/texture prefetch (deduplicated by resource), animation wiring, and cleanup |
| `src/model.js` | Synchronous FBX / OBJ / STL parsing, stats, and resource disposal |
| `src/vendor/FBXLoaderPbr.js` | Vendored Three.js FBXLoader with metalness/roughness custom-attribute support |
| `tests/run.mjs` | Test entry; each `tests/*.mjs` runs in its own process |
| `icon.svg` | Plugin icon; DSH metadata requires it at the package root |
| `assets/hdri/` | Packaged HDRI files served by the host route (Poly Haven CC0) |

## License

MIT; see [LICENSE](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/LICENSE). Third-party notices are in [THIRD_PARTY_NOTICES.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/THIRD_PARTY_NOTICES.md), including Three.js (MIT) and Poly Haven HDRIs (CC0; see [assets/hdri/LICENSE.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/assets/hdri/LICENSE.md)). React is provided by DSH and is not distributed with this package.
