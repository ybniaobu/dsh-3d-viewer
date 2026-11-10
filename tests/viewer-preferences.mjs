import assert from 'node:assert/strict';
import {
  VIEWER_PREFERENCES_KEY,
  loadViewerPreferences,
  normalizeViewerPreferences,
  saveViewerPreferences,
} from '../src/ui/viewer-preferences.js';

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    dump: () => Object.fromEntries(values),
  };
}

assert.deepEqual(normalizeViewerPreferences(null), {
  material: 'original',
  environment: 'nature',
});

const storage = memoryStorage();
assert.deepEqual(loadViewerPreferences(storage), {
  material: 'original',
  environment: 'nature',
});

const saved = saveViewerPreferences({
  material: 'metal-polished',
  environment: 'studio',
  grid: false,
  wireframe: true,
}, storage);
assert.deepEqual(saved, {
  material: 'metal-polished',
  environment: 'studio',
});
assert.deepEqual(loadViewerPreferences(storage), saved);

const stored = JSON.parse(storage.dump()[VIEWER_PREFERENCES_KEY]);
assert.deepEqual(stored, saved);
assert.equal('grid' in stored, false);
assert.equal('wireframe' in stored, false);

const partial = memoryStorage({
  [VIEWER_PREFERENCES_KEY]: JSON.stringify({ material: 'clay', environment: 'missing' }),
});
assert.deepEqual(loadViewerPreferences(partial), {
  material: 'clay',
  environment: 'nature',
});

const malformed = memoryStorage({ [VIEWER_PREFERENCES_KEY]: '{not json' });
assert.deepEqual(loadViewerPreferences(malformed), {
  material: 'original',
  environment: 'nature',
});

const invalid = memoryStorage({
  [VIEWER_PREFERENCES_KEY]: JSON.stringify({
    material: 'not-a-material',
    environment: 'not-an-environment',
  }),
});
assert.deepEqual(loadViewerPreferences(invalid), {
  material: 'original',
  environment: 'nature',
});

const throwing = {
  getItem() {
    throw new Error('storage disabled');
  },
  setItem() {
    throw new Error('storage full');
  },
};
assert.deepEqual(loadViewerPreferences(throwing), {
  material: 'original',
  environment: 'nature',
});
assert.deepEqual(
  saveViewerPreferences({ material: 'metal', environment: 'city' }, throwing),
  { material: 'metal', environment: 'city' },
);

console.log('Viewer material/environment memory verified:', saved);
