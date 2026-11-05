<div align="center">
  <img src="https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/icon-180.png" alt="3D Viewer 图标" width="96" height="96">
  <h1 align="center">3D Viewer</h1>
</div>

[English](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/README.md) | 中文

[![GitHub](https://img.shields.io/badge/GitHub-ybniaobu-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/ybniaobu/dsh-3d-viewer) [![npm](https://img.shields.io/badge/npm-dsh--3d--viewer-CB3837?logo=npm&logoColor=white&style=flat-square)](https://www.npmjs.com/package/dsh-3d-viewer?activeTab=readme)

在 DSH 右侧边栏预览当前会话工作区里的 FBX、OBJ、glTF、GLB、STL 模型。无需上传或联网：打开模型即可旋转、缩放、切换材质与环境，并播放内置动画。

![3D Viewer 预览](https://raw.githubusercontent.com/ybniaobu/dsh-3d-viewer/main/assets/preview.png)

## 安装与启用

插件通过 npm 包 `dsh-3d-viewer` 分发。包内 `client.js` 已打包 Three.js 与各类 Loader；四张 HDRI 以文件形式随包分发，由一段只读的宿主路由从本机 DSH 服务器提供，运行时不需联网，也不需 Node.js 或 npm。React 由 DSH 提供。

### 从 npm 安装（推荐）

1. 打开 DSH Desktop，点击侧边栏的 **Plugins（插件）**。
2. 点击 **Add plugin（添加插件）** → **Install a third-party plugin（安装第三方插件）**。
3. 输入 `dsh-3d-viewer`；需要固定版本时写 `dsh-3d-viewer@0.1.1`。
4. **Registry** 选择 npm 官方源（国内也可用 npmmirror）。
5. 点击 **Install**，在 **Installed plugins（已安装插件）** 中确认 **3D Viewer** 为 **On**。
6. 回到会话打开模型。若没有出现预览，先刷新页面；仍未出现时重启 DSH。

> **更新**：先在 **Plugins** 中移除旧版本，再安装更高版本的新包。

### 从本地目录安装（可选）

适合离线或内网分发。

1. 把插件目录解压到任意位置，目录需包含 `package.json`、`client.js`、`index.js`、`cordis.patch.yml` 和 `assets/hdri/` 目录。
2. 打开 DSH Desktop，点击侧边栏的 **Plugins（插件）**。
3. 点击 **Add plugin（添加插件）** → **Install a third-party plugin（安装第三方插件）**。
4. 填入插件目录的绝对路径（例如 `F:\plugins\dsh-3d-viewer`），点击 **Install**。
5. 在 **Installed plugins（已安装插件）** 中确认 **3D Viewer** 为 **On**。
6. 回到会话打开模型。若没有出现预览，先刷新页面；仍未出现时重启 DSH。

> 本地安装以链接方式引用目录，安装后不要移动、重命名或删除它，否则 DSH 下次启动可能找不到插件。
>
> 插件代码在 DSH 进程中运行，请只安装可信来源。

### 运行要求

- DSH Desktop 0.2.1-rc.5 或更高版本（在 0.2.1-rc.5 上构建和测试）。
- 支持 WebGL 2，否则预览会报错。
- 模型文件位于会话工作区内，可通过右侧边栏的 **Files** 打开。

## 打开一个模型

1. 打开任意会话，点击对话右上角的右侧边栏按钮。
2. 在右侧边栏打开 **Files**（也可按 `Mod+P`）。
3. 点击任意 `.fbx`、`.obj`、`.gltf`、`.glb` 或 `.stl` 文件。
4. 模型在预览标签中打开。大文件和第一次切换环境可能需要几秒钟。

## 支持的文件格式

| 格式 | 支持内容 |
| --- | --- |
| **FBX** | 网格、层级、材质、内嵌贴图、动画、节点数据 |
| **OBJ** | 多边形、`o`/`g` 分组、法线、UV、顶点色、线与点图元、`mtllib`/MTL、常用贴图 |
| **glTF / GLB** | 动画、蒙皮、内嵌资源、外部 `.bin` 与贴图 |
| **STL** | ASCII 与二进制 STL；中性双面 PBR 材质；保留二进制顶点色 |

外部资源（FBX/glTF 贴图、glTF `.bin`、OBJ MTL 与贴图）均从会话工作区读取。

四个环境是例外：HDRI 随插件包分发，由宿主端从本机 DSH 服务器的 `/dsh-3d-viewer/hdri/` 只读路由提供，切换环境不会联网。

补充说明：

- **所有格式**：文件自带的灯光、相机和音频节点会被移除，预览统一使用自己的灯光和相机。
- **FBX**：外部贴图缺失时仅告警，不阻断几何显示。
- **OBJ**：缺少 MTL 时回退默认材质；贴图缺失时使用白色占位。
- **glTF / GLB**：多个图元共用的资源只读取一次。
- **STL**：没有材质和动画。

### 暂不支持

- 需要额外解码器的 glTF 扩展：Draco、Meshopt、KTX2。
- DSH 无法直接解码的贴图格式：TGA、DDS、EXR 等（显示白色占位）。
- MTL 的 `map_Ks` / `map_Ns` 尚未完整映射到 PBR（`Kd/Ks/Ns/d` 和 diffuse/normal/bump/emissive/alpha/displacement 贴图已支持）。

## 代码结构

| 路径 | 职责 |
| --- | --- |
| `index.js` | 宿主端：注册只读的 `/dsh-3d-viewer/hdri/` 路由，提供包内 HDRI 文件 |
| `src/client.js` | 插件入口；按格式注册 document preview 与 Sidebar slot |
| `src/formats.js` | 格式注册表：id、扩展名、标题/徽标文案和格式归一化 |
| `src/bytes.js` | 共用的字节、文本、路径、MIME、base64 辅助函数与取消错误 |
| `src/ui/ModelViewer.js` | 渲染体容器，管理加载/错误状态、格式绑定与场景生命周期 |
| `src/ui/ViewerSurface.js` | 纯展示层：工具条、统计、动画条和状态浮层，可脱离 WebGL 渲染 |
| `src/ui/AnimationBar.js` | 动画工具条；播放状态与 30Hz 进度更新只重渲染这个小组件 |
| `src/ui/chrome.js`、`icons.js`、`primitives.js` | 工具条、数据驱动的材质/环境弹层、统计面板、图标与格式化 |
| `src/ui/styles.js`、`dictionaries.js`、`options.js` | 样式、中英文案和 UI 选项 |
| `src/scene/createSceneView.js` | 场景编排：renderer、camera、controls、生命周期 |
| `src/scene/environment.js` | 从宿主路由获取 HDRI、解码、构建 PMREM 并按 id 缓存 |
| `src/scene/materials.js` | Phong/Lambert → PBR 转换、材质预设、线框材质 |
| `src/scene/ground.js` | 无限网格 shader 与阴影接收面；网格像素图全页只生成一次 |
| `src/scene/animation.js` | AnimationMixer、片段时间轴和进度通知 |
| `src/scene/camera.js`、`lighting.js`、`render-loop.js`、`postprocessing.js`、`blue-noise.js` | 取景与键盘旋转、灯光、帧调度、MSAA/ACES 后处理与蓝色噪声抖动 |
| `src/loaders/workspace.js` | `resourceAddress` 解析、workspaceFiles 读取、绝对路径回退、贴图 Blob/白占位与资源回收 |
| `src/loaders/model-loader.js` | FBX / OBJ / glTF / GLB / STL 异步加载与表驱动格式分派 |
| `src/loaders/gltf.js` | glTF/GLB 外部 buffer/贴图预取（按资源去重）、动画挂载和资源清理 |
| `src/model.js` | FBX / OBJ / STL 同步解析、统计、资源释放 |
| `src/vendor/FBXLoaderPbr.js` | vendored Three.js FBXLoader，额外读取金属度/粗糙度自定义属性 |
| `tests/run.mjs` | 测试入口：每个 `tests/*.mjs` 都在独立进程中运行 |
| `icon.svg` | 插件图标；DSH 元信息要求它位于包根目录 |
| `assets/hdri/` | 由宿主路由提供的 HDRI 文件（Poly Haven CC0） |

## 许可证

MIT，见 [LICENSE](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/LICENSE)。第三方声明见 [THIRD_PARTY_NOTICES.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/THIRD_PARTY_NOTICES.md)，包括 Three.js（MIT）与 Poly Haven HDRI（CC0，见 [assets/hdri/LICENSE.md](https://github.com/ybniaobu/dsh-3d-viewer/blob/main/assets/hdri/LICENSE.md)）。React 由 DSH 提供，不随包分发。
