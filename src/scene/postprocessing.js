import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
} from 'three';
import { BLUE_NOISE_SIZE, createBlueNoiseTexture } from './blue-noise.js';

const POST_VERTEX_SHADER = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const POST_FRAGMENT_SHADER = `
uniform sampler2D tDiffuse;
uniform sampler2D uBlueNoise;
uniform float uExposure;
uniform float uBlueNoiseScale;

varying vec2 vUv;

vec3 RRTAndODTFit(vec3 v) {
  vec3 a = v * (v + 0.0245786) - 0.000090537;
  vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
  return a / b;
}

vec3 acesFilmic(vec3 color) {
  const mat3 ACESInputMat = mat3(
    vec3(0.59719, 0.07600, 0.02840),
    vec3(0.35458, 0.90834, 0.13383),
    vec3(0.04823, 0.01566, 0.83777)
  );
  const mat3 ACESOutputMat = mat3(
    vec3(1.60475, -0.10208, -0.00327),
    vec3(-0.53108, 1.10813, -0.07276),
    vec3(-0.07367, -0.00605, 1.07602)
  );
  color = ACESInputMat * color;
  color = RRTAndODTFit(color);
  color = ACESOutputMat * color;
  return clamp(color, 0.0, 1.0);
}

vec3 sRGBTransferOETF(vec3 value) {
  return mix(
    pow(value, vec3(0.41666)) * 1.055 - 0.055,
    value * 12.92,
    lessThanEqual(value, vec3(0.0031308))
  );
}

float ditherNoise(vec2 p) {
  // Blue-noise mask, sampled at native pixel coordinates. The amplitude is
  // +/- 1.5 8-bit display steps; the alpha mask below keeps white clean.
  float noise = texture2D(uBlueNoise, p * uBlueNoiseScale).r;
  return (noise - 0.5) * (3.0 / 255.0);
}

void main() {
  vec4 base = texture2D(tDiffuse, vUv);
  float alpha = clamp(base.a, 0.0, 1.0);
  vec3 linear = base.rgb / max(alpha, 1e-4);

  linear *= uExposure;
  linear = acesFilmic(linear);
  vec3 color = sRGBTransferOETF(linear);

  // Keep the canvas transparent so the themed host background shows through.
  // Dither only pixels that actually contain scene content.
  float ditherMask = smoothstep(0.0, 0.02, alpha);
  color += ditherNoise(gl_FragCoord.xy) * ditherMask;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0) * alpha, alpha);
}
`;

/**
 * Render the transparent scene into an MSAA target, then tone-map it and keep
 * the result transparent so the themed host background remains visible.
 *
 * @param {{
 *   renderer: import('three').WebGLRenderer,
 *   scene: import('three').Scene,
 *   camera: import('three').PerspectiveCamera,
 *   width: number,
 *   height: number,
 *   pixelRatio: number,
 * }} options Renderer, scene, camera, and initial surface size.
 * @returns {{
 *   render: (delta: number) => void,
 *   setSize: (width: number, height: number, pixelRatio: number) => boolean,
 *   warmup: (renderer: import('three').WebGLRenderer) => void,
 *   dispose: () => void,
 * }} Post-processing controls.
 */
export function createPostProcessing({ renderer, scene, camera, width, height, pixelRatio }) {
  const composer = new EffectComposer(renderer);
  const samples = Math.min(4, renderer.capabilities.maxSamples || 0);
  if (samples > 0) {
    composer.renderTarget1.samples = samples;
    composer.renderTarget2.samples = samples;
  }
  composer.setPixelRatio(pixelRatio);
  composer.setSize(width, height);

  const renderPass = new RenderPass(scene, camera);
  const blueNoise = createBlueNoiseTexture();
  const outputPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uBlueNoise: { value: blueNoise },
      uExposure: { value: renderer.toneMappingExposure },
      uBlueNoiseScale: { value: 1 / BLUE_NOISE_SIZE },
    },
    vertexShader: POST_VERTEX_SHADER,
    fragmentShader: POST_FRAGMENT_SHADER,
  });
  outputPass.material.toneMapped = false;
  outputPass.renderToScreen = true;

  composer.addPass(renderPass);
  composer.addPass(outputPass);

  let currentWidth = width;
  let currentHeight = height;
  let currentPixelRatio = pixelRatio;

  function setSize(nextWidth, nextHeight, nextPixelRatio) {
    const sizeChanged = nextWidth !== currentWidth || nextHeight !== currentHeight;
    const ratioChanged = nextPixelRatio !== currentPixelRatio;
    if (!sizeChanged && !ratioChanged) return false;

    if (ratioChanged) composer.setPixelRatio(nextPixelRatio);
    if (sizeChanged) composer.setSize(nextWidth, nextHeight);

    currentWidth = nextWidth;
    currentHeight = nextHeight;
    currentPixelRatio = nextPixelRatio;
    return true;
  }

  function render(delta) {
    composer.render(delta);
  }

  /**
   * Compile the tone-mapping pass before the first visible frame.
   *
   * The pass has its own ShaderMaterial, which the scene compile cannot reach.
   * A tiny full-screen quad shares the material so Three caches the same
   * program the composer will use.
   *
   * @param {import('three').WebGLRenderer} renderer Active renderer.
   * @returns {void}
   */
  function warmup(renderer) {
    const scene = new Scene();
    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, outputPass.material);
    scene.add(mesh);
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

    try {
      renderer.compile(scene, camera);
    } finally {
      scene.remove(mesh);
      geometry.dispose();
    }
  }

  function dispose() {
    composer.dispose();
    outputPass.dispose();
    blueNoise.dispose();
    renderPass.dispose?.();
  }

  return { render, setSize, warmup, dispose };
}
