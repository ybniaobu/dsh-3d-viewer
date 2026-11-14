import { FloatType, UnsignedByteType } from 'three';

const VERTEX_SHADER = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;
uniform sampler2D u_texture;
uniform float u_flip;
in vec2 v_uv;
out vec4 out_color;

vec3 toSrgb(vec3 color) {
  vec3 low = color * 12.92;
  vec3 high = 1.055 * pow(max(color, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  return mix(low, high, step(vec3(0.0031308), color));
}

void main() {
  vec2 uv = vec2(v_uv.x, mix(v_uv.y, 1.0 - v_uv.y, u_flip));
  vec4 texel = texture(u_texture, uv);
  vec3 color = min(max(texel.rgb, vec3(0.0)), vec3(1.0e30));
  color = color / (1.0 + color);
  if (color.r != color.r) color.r = 0.0;
  if (color.g != color.g) color.g = 0.0;
  if (color.b != color.b) color.b = 0.0;
  out_color = vec4(clamp(toSrgb(color), 0.0, 1.0), clamp(texel.a, 0.0, 1.0));
}
`;

let sharedPreview = null;

/**
 * @param {WebGL2RenderingContext} gl WebGL context.
 * @param {number} type Shader type.
 * @param {string} source GLSL source.
 * @returns {WebGLShader} Compiled shader.
 */
function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (shader === null) throw new Error('Could not create the preview shader.');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) !== true) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(log ?? 'Could not compile the preview shader.');
  }
  return shader;
}

/**
 * @param {WebGL2RenderingContext} gl WebGL context.
 * @returns {WebGLProgram} Linked program.
 */
function createProgram(gl) {
  const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (program === null) throw new Error('Could not create the preview program.');
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (gl.getProgramParameter(program, gl.LINK_STATUS) !== true) {
    const log = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(log ?? 'Could not link the preview program.');
  }
  return program;
}

/**
 * @param {import('three').Texture} texture HDR texture.
 * @returns {{ internalFormat: number, format: number, type: number }} WebGL texture format.
 */
function textureFormat(texture) {
  if (texture.type === FloatType) {
    return { internalFormat: 0x8814, format: 0x1908, type: 0x1406 }; // RGBA32F, RGBA, FLOAT
  }
  if (texture.type === UnsignedByteType) {
    return { internalFormat: 0x8058, format: 0x1908, type: 0x1401 }; // RGBA8, RGBA, UNSIGNED_BYTE
  }
  return { internalFormat: 0x881A, format: 0x1908, type: 0x140B }; // RGBA16F, RGBA, HALF_FLOAT
}

/**
 * @param {WebGL2RenderingContext} gl WebGL context.
 * @param {WebGLProgram} program Program.
 * @param {WebGLBuffer} buffer Fullscreen triangle buffer.
 * @param {WebGLTexture} textureObject Texture object.
 * @returns {void}
 */
function disposeState(gl, program, buffer, textureObject) {
  if (textureObject !== null && textureObject !== undefined) gl.deleteTexture(textureObject);
  gl.deleteBuffer(buffer);
  gl.deleteProgram(program);
  gl.getExtension('WEBGL_lose_context')?.loseContext();
}

/**
 * Create a standalone WebGL context with program, buffer, and texture.
 *
 * @returns {object} WebGL state.
 */
function createState() {
  const source = document.createElement('canvas');
  const gl = source.getContext('webgl2', {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: true,
  });
  if (gl === null) throw new Error('WebGL2 is unavailable.');

  let program;
  let buffer;
  let textureObject;
  try {
    program = createProgram(gl);
    const position = gl.getAttribLocation(program, 'a_position');
    const uniformTexture = gl.getUniformLocation(program, 'u_texture');
    const uniformFlip = gl.getUniformLocation(program, 'u_flip');

    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    textureObject = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textureObject);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.useProgram(program);
    gl.uniform1i(uniformTexture, 0);

    return {
      source,
      gl,
      program,
      buffer,
      textureObject,
      uniformFlip,
      owner: null,
    };
  } catch (error) {
    gl.deleteTexture(textureObject ?? null);
    gl.deleteBuffer(buffer ?? null);
    gl.deleteProgram(program ?? null);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    throw error;
  }
}

/**
 * @returns {object} Reusable shared state.
 */
function getSharedState() {
  if (sharedPreview === null) sharedPreview = createState();
  return sharedPreview;
}

/**
 * @param {object} state WebGL state.
 * @returns {WebGLTexture} Texture object, created after a shared preview released it.
 */
function ensureTexture(state) {
  if (state.textureObject !== null) return state.textureObject;

  const { gl } = state;
  const textureObject = gl.createTexture();
  if (textureObject === null) throw new Error('Could not create the preview texture.');
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, textureObject);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  state.textureObject = textureObject;
  return textureObject;
}

/**
 * @param {object} state WebGL state.
 * @param {HTMLCanvasElement} canvas Visible 2D preview canvas.
 * @param {CanvasRenderingContext2D} target Visible 2D context.
 * @param {import('three').Texture} texture HDR texture.
 * @param {boolean} shared Whether the state is the shared context.
 * @returns {{ render: (flipY: boolean) => void, dispose: () => void }} Preview controls.
 */
function configurePreview(state, canvas, target, texture, shared) {
  const image = texture.image;
  const width = image?.width;
  const height = image?.height;
  const data = image?.data;
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0
    || data === undefined || data === null || data.length !== width * height * 4) {
    throw new Error('The HDR texture is not RGBA.');
  }

  const { source, gl, program, buffer, uniformFlip } = state;
  const sourceFlipY = texture.flipY === true;
  const textureObject = ensureTexture(state);
  source.width = width;
  source.height = height;
  gl.bindTexture(gl.TEXTURE_2D, textureObject);
  const format = textureFormat(texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    format.internalFormat,
    width,
    height,
    0,
    format.format,
    format.type,
    data,
  );
  if (gl.getError() !== gl.NO_ERROR) throw new Error('WebGL could not upload the HDR texture.');

  canvas.width = width;
  canvas.height = height;
  let disposed = false;
  const controller = {
    render(flipY) {
      if (disposed) return;
      gl.viewport(0, 0, width, height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.uniform1f(uniformFlip, sourceFlipY !== flipY ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      target.clearRect(0, 0, width, height);
      target.drawImage(source, 0, 0);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (shared) {
        if (state.owner === controller) state.owner = null;
        if (state.textureObject !== null) {
          gl.deleteTexture(state.textureObject);
          state.textureObject = null;
        }
        source.width = 1;
        source.height = 1;
      } else {
        disposeState(gl, program, buffer, state.textureObject);
        source.width = 1;
        source.height = 1;
      }
    },
  };
  controller.render(false);
  return controller;
}

/**
 * Render an HDR texture through a WebGL tone-mapping pass, then copy the
 * result into the existing 2D preview canvas. Keeping the visible canvas on
 * 2D preserves the current CSS zoom/pan and makes a CPU fallback possible.
 * The first context is reused across sequential previews; a concurrent preview
 * gets its own standalone context.
 *
 * @param {HTMLCanvasElement} canvas Visible 2D preview canvas.
 * @param {import('three').Texture} texture HDR texture.
 * @returns {{ render: (flipY: boolean) => void, dispose: () => void }} Preview controls.
 */
export function createWebGlPreview(canvas, texture) {
  const target = canvas.getContext('2d');
  if (target === null) throw new Error('The texture preview canvas is unavailable.');

  const shared = getSharedState();
  if (shared.owner !== null) {
    const standalone = createState();
    try {
      return configurePreview(standalone, canvas, target, texture, false);
    } catch (error) {
      disposeState(standalone.gl, standalone.program, standalone.buffer, standalone.textureObject);
      throw error;
    }
  }

  shared.owner = {};
  try {
    const controller = configurePreview(shared, canvas, target, texture, true);
    shared.owner = controller;
    return controller;
  } catch (error) {
    shared.owner = null;
    sharedPreview = null;
    disposeState(shared.gl, shared.program, shared.buffer, shared.textureObject);
    throw error;
  }
}
