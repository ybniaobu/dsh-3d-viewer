import { DEFAULT_SETTINGS, ENVIRONMENT_OPTIONS, MATERIAL_OPTIONS } from './options.js';

/** Versioned localStorage key for cross-preview viewer preferences. */
export const VIEWER_PREFERENCES_KEY = 'dsh3d-viewer:preferences:v1';

const MATERIAL_IDS = new Set(MATERIAL_OPTIONS.map((option) => option.id));
const ENVIRONMENT_IDS = new Set(ENVIRONMENT_OPTIONS.map((option) => option.id));

/**
 * @returns {Storage | null} Local storage when the browser makes it available.
 */
function defaultStorage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    // Privacy modes can throw merely by reading the property.
    return null;
  }
}

/**
 * Keep only the two preferences this plugin remembers across model previews.
 *
 * @param {unknown} value Parsed or partial preference object.
 * @returns {{ material: string, environment: string }} Normalized preferences.
 */
export function normalizeViewerPreferences(value) {
  const source = value !== null && typeof value === 'object' ? value : {};
  return {
    material: MATERIAL_IDS.has(source.material) ? source.material : DEFAULT_SETTINGS.material,
    environment: ENVIRONMENT_IDS.has(source.environment)
      ? source.environment
      : DEFAULT_SETTINGS.environment,
  };
}

/**
 * Read the last material preset and environment.
 *
 * Any storage or JSON failure falls back to defaults; a malformed or partial
 * value keeps the valid field and restores the other.
 *
 * @param {Storage | null} [storage] Storage override for tests.
 * @returns {{ material: string, environment: string }} Preferences for a new preview.
 */
export function loadViewerPreferences(storage = defaultStorage()) {
  try {
    const raw = storage?.getItem(VIEWER_PREFERENCES_KEY);
    if (raw === null || raw === undefined) return normalizeViewerPreferences(null);
    return normalizeViewerPreferences(JSON.parse(raw));
  } catch {
    return normalizeViewerPreferences(null);
  }
}

/**
 * Remember the material preset and environment for the next preview.
 *
 * @param {{ material?: unknown, environment?: unknown }} settings Current settings.
 * @param {Storage | null} [storage] Storage override for tests.
 * @returns {{ material: string, environment: string }} Stored preferences.
 */
export function saveViewerPreferences(settings, storage = defaultStorage()) {
  const preferences = normalizeViewerPreferences(settings);
  try {
    storage?.setItem(VIEWER_PREFERENCES_KEY, JSON.stringify(preferences));
  } catch {
    // Storage can be full or disabled; the current preview still works.
  }
  return preferences;
}
