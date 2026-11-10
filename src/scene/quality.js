/**
 * Device- and surface-based render quality.
 *
 * The profile is chosen from stable device hints and never changes during a
 * view's lifetime. Pixel ratio is recalculated from the host size so a large
 * surface does not allocate an excessive drawing buffer.
 */

/**
 * @typedef {{
 *   name: 'high' | 'balanced' | 'low',
 *   maxPixelRatio: number,
 *   samples: number,
 *   shadowMapSize: number,
 *   maxAnisotropy: number,
 *   pixelBudget: number,
 * }} QualityProfile
 */

/** @type {Readonly<Record<'high' | 'balanced' | 'low', QualityProfile>>} */
export const QUALITY_PROFILES = Object.freeze({
  high: Object.freeze({
    name: 'high',
    maxPixelRatio: 2,
    samples: 4,
    shadowMapSize: 2048,
    maxAnisotropy: 8,
    pixelBudget: 3840 * 2160,
  }),
  balanced: Object.freeze({
    name: 'balanced',
    maxPixelRatio: 1.5,
    samples: 2,
    shadowMapSize: 1024,
    maxAnisotropy: 4,
    pixelBudget: 1920 * 1080,
  }),
  low: Object.freeze({
    name: 'low',
    maxPixelRatio: 1,
    samples: 0,
    shadowMapSize: 1024,
    maxAnisotropy: 2,
    pixelBudget: 1280 * 720,
  }),
});

/**
 * Pick a stable device profile.
 *
 * deviceMemory is Chromium-only, so core count is the fallback. Unknown
 * values select the balanced profile rather than assuming a high-end device.
 *
 * @param {{ deviceMemory?: number, hardwareConcurrency?: number }} [navigatorLike] Capability source.
 * @returns {QualityProfile} Selected profile.
 */
export function detectQualityProfile(navigatorLike = globalThis.navigator) {
  const memory = Number(navigatorLike?.deviceMemory);
  const cores = Number(navigatorLike?.hardwareConcurrency);
  const knownMemory = Number.isFinite(memory) && memory > 0;
  const knownCores = Number.isFinite(cores) && cores > 0;

  if ((knownMemory && memory <= 4) || (knownCores && cores <= 2)) {
    return QUALITY_PROFILES.low;
  }

  if (knownCores && cores >= 8 && (!knownMemory || memory >= 8)) {
    return QUALITY_PROFILES.high;
  }

  return QUALITY_PROFILES.balanced;
}

/**
 * Clamp the renderer pixel ratio to both the profile and a surface budget.
 *
 * The ratio never goes below 1: rendering below CSS resolution would blur the
 * whole viewer. Large surfaces therefore cap at native resolution instead.
 *
 * @param {QualityProfile} profile Selected quality profile.
 * @param {number} width CSS width.
 * @param {number} height CSS height.
 * @param {number} [devicePixelRatio] Current device pixel ratio.
 * @returns {number} Pixel ratio for the renderer and composer.
 */
export function pixelRatioFor(profile, width, height, devicePixelRatio = globalThis.devicePixelRatio) {
  const dpr = Number.isFinite(devicePixelRatio) && devicePixelRatio > 0 ? devicePixelRatio : 1;
  const pixels = Math.max(Number(width) || 1, 1) * Math.max(Number(height) || 1, 1);
  const budgetRatio = Math.sqrt(profile.pixelBudget / pixels);
  return Math.max(1, Math.min(dpr, profile.maxPixelRatio, budgetRatio));
}
