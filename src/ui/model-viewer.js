import * as React from 'react';
import { isGlbAddress, normalizeFormat } from '../formats.js';
import { loadModelBytes, preloadModelFormat } from '../loaders/model-loader.js';
import { collectModelStats, disposeObject } from '../model.js';
import { createSceneView } from '../scene/create-scene-view.js';
import { prefetchEnvironment } from '../scene/environment.js';
import { ViewerError } from '../scene/viewer-error.js';
import { en } from './dictionaries.js';
import { DEFAULT_SETTINGS } from './options.js';
import { ViewerSurface } from './viewer-surface.js';

const h = React.createElement;
const ENVIRONMENT_WAIT_MS = 3000;

function fallbackTranslate(key, params) {
  const template = en[key] ?? key;
  if (params === undefined) return template;
  return template.replace(/\{(\w+)\}/g, (_match, name) => String(params[name] ?? ''));
}

function loadingState() {
  return { status: 'loading', failure: null, stats: null, clips: [] };
}

function errorState(error) {
  return {
    status: 'error',
    failure: {
      code: error instanceof ViewerError ? error.code : 'scene',
      message: error instanceof Error ? error.message : String(error),
      detail: error instanceof Error ? (error.stack ?? error.message) : String(error),
    },
    stats: null,
    clips: [],
  };
}

function byteLengthOf(data) {
  if (typeof data === 'string') {
    try {
      return new TextEncoder().encode(data).byteLength;
    } catch {
      return data.length;
    }
  }
  if (data instanceof ArrayBuffer) return data.byteLength;
  if (ArrayBuffer.isView(data)) return data.byteLength;
  return null;
}

/**
 * Push one settings snapshot into a live view.
 *
 * @param {ReturnType<typeof createSceneView>} view Live scene view.
 * @param {{ grid: boolean, autoRotate: boolean, wireframe: boolean, material: string, environment: string }} settings Desired settings.
 */
function applyViewSettings(view, settings) {
  view.setGrid(settings.grid);
  view.setMaterialPreset(settings.material);
  view.setEnvironment(settings.environment);
  view.setWireframe(settings.wireframe);
  view.setAutoRotate(settings.autoRotate);
}

/**
 * Right-Sidebar document body for one 3D model.
 *
 * Owns loading, lifecycle, and settings; rendering is delegated to the pure
 * `ViewerSurface`, which can be server-rendered without a WebGL context.
 *
 * @param {{
 *   format: 'fbx' | 'gltf' | 'obj' | 'stl',
 *   content?: { kind?: string, data?: Uint8Array | ArrayBuffer | string },
 *   renderer?: { revision?: number, loaded?: (version?: unknown) => void, failed?: () => void },
 *   loadBytes?: (address: string, signal: AbortSignal) => Promise<object>,
 *   resourceAddress?: string,
 *   readWorkspaceFile?: Function,
 *   t?: (key: string, params?: Record<string, unknown>) => string,
 *   fallbackT?: (key: string, params?: Record<string, unknown>) => string,
 * }} props Model format, document content, workspace reader, and translator.
 */
function ModelViewer(props) {
  const format = normalizeFormat(props.format);
  const glb = format === 'gltf' && isGlbAddress(props.resourceAddress);
  const content = props.content;
  const renderer = content !== undefined && content !== null && content.kind === 'renderer'
    ? content
    : null;
  const t = props.t ?? props.fallbackT ?? fallbackTranslate;
  const data = content !== undefined && content !== null
    && (content.kind === 'bytes' || content.kind === 'text')
    ? content.data
    : null;

  const [runtime, setRuntime] = React.useState(loadingState);
  const [settings, setSettings] = React.useState(DEFAULT_SETTINGS);
  const [attempt, setAttempt] = React.useState(0);
  const hostRef = React.useRef(null);
  const viewRef = React.useRef(null);
  const tRef = React.useRef(t);
  const settingsRef = React.useRef(settings);
  const readerRef = React.useRef(typeof props.readWorkspaceFile === 'function' ? props.readWorkspaceFile : null);
  const loadBytesRef = React.useRef(typeof props.loadBytes === 'function' ? props.loadBytes : null);
  const addressRef = React.useRef(typeof props.resourceAddress === 'string' ? props.resourceAddress : null);

  tRef.current = t;
  settingsRef.current = settings;
  readerRef.current = typeof props.readWorkspaceFile === 'function' ? props.readWorkspaceFile : null;
  loadBytesRef.current = typeof props.loadBytes === 'function' ? props.loadBytes : null;
  addressRef.current = typeof props.resourceAddress === 'string' ? props.resourceAddress : null;

  React.useEffect(() => {
    const host = hostRef.current;
    if (host === null) return undefined;

    let disposed = false;
    let model = null;
    let view = null;
    let assets = null;
    const controller = new AbortController();

    // Start the format chunk while the root file is read; the parse step then
    // finds the chunk promise already settled.
    preloadModelFormat(format);

    // Overlap the HDRI fetch with the model read and parse; the PMREM build
    // then starts from bytes that are already in memory.
    prefetchEnvironment(settingsRef.current.environment);

    // Release whatever the load produced, whichever stage it reached. A view
    // owns the model once it adopts the scene, so only one of them is disposed.
    const release = () => {
      if (view !== null) {
        view.dispose();
        view = null;
        viewRef.current = null;
      } else if (model !== null) {
        disposeObject(model);
        model = null;
      }
      assets?.dispose();
      assets = null;
    };

    setRuntime((previous) => previous.status === 'loading' ? previous : loadingState());

    const run = async () => {
      if (disposed) return;

      try {
        let bytes = data;
        let version;

        let loaded;
        try {
          if (bytes === null) {
            const loadBytes = loadBytesRef.current;
            const address = addressRef.current;
            if (typeof loadBytes !== 'function' || address === null) {
              throw new ViewerError('parse', 'The preview supplied no binary model content.');
            }

            const result = await loadBytes(address, controller.signal);
            if (disposed || controller.signal.aborted) return;
            if (result?.ok !== true) {
              throw new ViewerError('parse', result?.error?.message ?? 'The model file could not be read.');
            }

            bytes = result.value?.data ?? null;
            version = result.value?.version;
            if (bytes === null || bytes === undefined) {
              throw new ViewerError('parse', 'The workspace returned no model bytes.');
            }

            // Renderer-mode bodies own the read. End the Host's loading state
            // as soon as the bytes are here; the viewer's own overlay covers
            // parsing and building.
            renderer?.loaded?.(version);
          }

          loaded = await loadModelBytes(bytes, format, {
            resourceAddress: addressRef.current ?? undefined,
            readWorkspaceFile: readerRef.current ?? undefined,
            signal: controller.signal,
          });
        } catch (error) {
          if (disposed || controller.signal.aborted) return;
          throw new ViewerError(
            'parse',
            error instanceof Error ? error.message : String(error),
            error,
          );
        }

        if (disposed || controller.signal.aborted) {
          loaded.assets?.dispose();
          disposeObject(loaded.object);
          return;
        }

        model = loaded.object;
        assets = loaded.assets ?? null;

        const nextStats = collectModelStats(model);
        if (nextStats.renderables === 0) {
          release();
          if (!disposed) setRuntime({ status: 'empty', failure: null, stats: null, clips: [] });
          return;
        }

        const current = settingsRef.current;
        assets?.onTextureLoad(() => {
          if (!disposed) view?.invalidate();
        });
        view = createSceneView(host, model, nextStats, {
          ariaLabel: tRef.current('canvasLabel'),
          environment: current.environment,
        });
        // The view owns the model from here on; disposing the view disposes it.
        model = null;
        applyViewSettings(view, current);

        if (disposed) {
          release();
          return;
        }

        // Wait for the IBL, then compile the scene and post-processing with the
        // environment already present. Painting before the environment applies
        // would compile a second program variant after the switch.
        let timer;
        try {
          await Promise.race([
            view.environmentReady,
            new Promise((resolve) => {
              timer = setTimeout(resolve, ENVIRONMENT_WAIT_MS);
            }),
          ]);
        } finally {
          clearTimeout(timer);
        }

        if (disposed) {
          release();
          return;
        }

        await view.warmup();
        if (disposed) {
          release();
          return;
        }

        // Paint the first visible frame from warm programs, with IBL in place.
        view.paint();

        viewRef.current = view;
        setRuntime({
          status: 'ready',
          failure: null,
          stats: nextStats,
          clips: view.animations,
          fileSize: byteLengthOf(bytes),
        });
      } catch (error) {
        if (disposed || controller.signal.aborted) return;

        release();
        // createSceneView appends its canvas before it can fail; never leave a
        // half-initialized stage behind. A superseded effect must not clear the
        // replacement viewer's canvas (its cleanup already ran).
        host.replaceChildren();
        viewRef.current = null;
        setRuntime(errorState(error));
      }
    };

    // The initial loading surface is already committed and painted before this
    // effect runs; starting immediately saves a timer turn and still leaves the
    // overlay in the DOM for slow parses.
    void run();

    return () => {
      disposed = true;
      controller.abort();
      release();
    };
  }, [data, attempt, format, renderer?.revision]);

  React.useEffect(() => {
    const view = viewRef.current;
    if (view !== null) applyViewSettings(view, settings);
  }, [settings]);

  const updateSettings = (patch) => {
    setSettings((previous) => ({ ...previous, ...patch }));
  };

  const retry = () => {
    setRuntime(loadingState());
    setAttempt((value) => value + 1);
  };

  return h(ViewerSurface, {
    format,
    glb,
    t,
    view: viewRef.current,
    settings,
    runtime,
    hostRef,
    onSettingsChange: updateSettings,
    onRetry: retry,
  });
}

/**
 * Build a viewer component bound to one document format.
 *
 * @param {'fbx' | 'gltf' | 'obj' | 'stl'} format Registered format name.
 * @returns {(props: object) => unknown} Slot body component.
 */
function createViewer(format) {
  function Viewer(props) {
    return h(ModelViewer, { ...props, format });
  }
  return Viewer;
}

/** FBX document body. */
export const FbxViewer = createViewer('fbx');

/** OBJ document body. */
export const ObjViewer = createViewer('obj');

/** glTF / GLB document body. */
export const GltfViewer = createViewer('gltf');

/** STL document body. */
export const StlViewer = createViewer('stl');

/** Slot bodies keyed by the format registry id. */
export const VIEWER_COMPONENTS = Object.freeze({
  fbx: FbxViewer,
  obj: ObjViewer,
  gltf: GltfViewer,
  stl: StlViewer,
});
