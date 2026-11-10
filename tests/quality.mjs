import assert from 'node:assert/strict';
import {
  QUALITY_PROFILES,
  detectQualityProfile,
  pixelRatioFor,
} from '../src/scene/quality.js';

assert.equal(
  detectQualityProfile({ deviceMemory: 16, hardwareConcurrency: 12 }),
  QUALITY_PROFILES.high,
);
assert.equal(
  detectQualityProfile({ deviceMemory: 8, hardwareConcurrency: 8 }),
  QUALITY_PROFILES.high,
);
assert.equal(
  detectQualityProfile({ deviceMemory: 8, hardwareConcurrency: 4 }),
  QUALITY_PROFILES.balanced,
);
assert.equal(
  detectQualityProfile({ deviceMemory: 4, hardwareConcurrency: 8 }),
  QUALITY_PROFILES.low,
);
assert.equal(
  detectQualityProfile({ deviceMemory: 16, hardwareConcurrency: 2 }),
  QUALITY_PROFILES.low,
);
assert.equal(
  detectQualityProfile({}),
  QUALITY_PROFILES.balanced,
  'unknown device hints must not select the high profile',
);

assert.equal(pixelRatioFor(QUALITY_PROFILES.high, 800, 600, 2), 2);
assert.equal(
  pixelRatioFor(QUALITY_PROFILES.high, 3840, 2160, 2),
  1,
  'a 4K surface stays at native resolution instead of 2x',
);
assert.ok(pixelRatioFor(QUALITY_PROFILES.high, 2560, 1440, 2) > 1);
assert.equal(pixelRatioFor(QUALITY_PROFILES.low, 1920, 1080, 2), 1);
assert.equal(pixelRatioFor(QUALITY_PROFILES.high, 0, 0, 2), 2);
assert.equal(
  pixelRatioFor(QUALITY_PROFILES.balanced, 1920, 1080, Number.NaN),
  1,
  'invalid DPR falls back to 1',
);

assert.deepEqual(
  Object.keys(QUALITY_PROFILES),
  ['high', 'balanced', 'low'],
);
assert.ok(QUALITY_PROFILES.high.samples > QUALITY_PROFILES.balanced.samples);
assert.ok(QUALITY_PROFILES.balanced.samples > QUALITY_PROFILES.low.samples);
assert.ok(QUALITY_PROFILES.high.shadowMapSize > QUALITY_PROFILES.balanced.shadowMapSize);

console.log('Adaptive quality profiles verified:', {
  high: QUALITY_PROFILES.high.name,
  balanced: QUALITY_PROFILES.balanced.name,
  low: QUALITY_PROFILES.low.name,
});
