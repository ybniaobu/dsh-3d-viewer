import assert from 'node:assert/strict';
import { AnimationClip, AnimationMixer, Object3D, VectorKeyframeTrack } from 'three';
import { createAnimationController } from '../src/scene/animation.js';

const object = new Object3D();
object.animations = [
  new AnimationClip('move', 1, [
    new VectorKeyframeTrack('.position', [0, 1], [0, 0, 0, 2, 0, 0]),
  ]),
  new AnimationClip('empty', 0, []),
  new AnimationClip('slide', 2, [
    new VectorKeyframeTrack('.position', [0, 2], [0, 0, 0, 0, 3, 0]),
  ]),
];

const originalClipAction = AnimationMixer.prototype.clipAction;
let clipActionCalls = 0;
AnimationMixer.prototype.clipAction = function (...args) {
  clipActionCalls += 1;
  return originalClipAction.apply(this, args);
};

const ticks = [];
const controller = createAnimationController(object, {
  onTick: (state) => ticks.push(state.time),
});

assert.deepEqual(controller.animations, [
  { name: 'move', duration: 1 },
  { name: 'slide', duration: 2 },
]);
assert.equal(clipActionCalls, 1, 'only the first clip action is created up front');
assert.deepEqual(controller.snapshot(), { time: 0, duration: 1, index: 0, playing: false });
assert.equal(controller.isPlaying(), false);

assert.equal(controller.setPlaying(true), true);
assert.equal(controller.isPlaying(), true);
controller.update(0.5, 1000);
assert.equal(controller.snapshot().time, 0.5);

assert.equal(controller.seek(0.25), true);
assert.deepEqual(controller.snapshot(), { time: 0.25, duration: 1, index: 0, playing: true });

assert.equal(controller.setClip(0), true);
assert.deepEqual(controller.snapshot(), { time: 0, duration: 1, index: 0, playing: true });

assert.equal(controller.setClip(1), true);
assert.deepEqual(controller.snapshot(), { time: 0, duration: 2, index: 1, playing: true });
assert.equal(clipActionCalls, 2, 'switching to a clip creates its action');
controller.setClip(0);
assert.equal(clipActionCalls, 2, 'switching back reuses the existing action');

assert.equal(controller.setPlaying(false), true);
assert.equal(controller.isPlaying(), false);
controller.update(1, 2000);
assert.equal(controller.snapshot().time, 0, 'paused mixer should not advance');
assert.equal(controller.setClip(1), true);
assert.deepEqual(controller.snapshot(), { time: 0, duration: 2, index: 1, playing: false });
assert.equal(controller.setClip(0), true);
assert.equal(controller.snapshot().playing, false, 'clip switching must preserve the paused state');

assert.equal(controller.setClip(3), false);
assert.equal(controller.seek(Number.NaN), true);
assert.equal(controller.snapshot().time, 0);

assert.equal(controller.setPlaying(true), true);
controller.seek(0);
assert.equal(controller.setSpeed(2), true);
controller.update(0.2, 3000);
assert.equal(controller.snapshot().time, 0.4);
assert.equal(controller.setSpeed(0), false);
assert.equal(controller.setSpeed(Number.NaN), false);

controller.dispose();

const idleQueue = [];
const originalRequestIdleCallback = globalThis.requestIdleCallback;
const originalCancelIdleCallback = globalThis.cancelIdleCallback;
globalThis.requestIdleCallback = (callback) => {
  idleQueue.push(callback);
  return idleQueue.length;
};
globalThis.cancelIdleCallback = () => {};

const warmObject = new Object3D();
warmObject.animations = Array.from({ length: 4 }, (_, clipIndex) => new AnimationClip(
  `warm-${clipIndex}`,
  1,
  [new VectorKeyframeTrack('.position', [0, 1], [0, 0, 0, clipIndex, 0, 0])],
));
const warmController = createAnimationController(warmObject);
const actionCallsBeforePrewarm = clipActionCalls;
assert.equal(warmController.prewarm(), true);
assert.equal(idleQueue.length, 1, 'prewarm schedules an idle callback');
while (idleQueue.length > 0) {
  idleQueue.shift()({ timeRemaining: () => 8 });
}
assert.equal(clipActionCalls - actionCallsBeforePrewarm, 3, 'prewarm creates the remaining actions');
assert.deepEqual(warmController.snapshot(), { time: 0, duration: 1, index: 0, playing: false });
warmController.dispose();

if (originalRequestIdleCallback === undefined) delete globalThis.requestIdleCallback;
else globalThis.requestIdleCallback = originalRequestIdleCallback;
if (originalCancelIdleCallback === undefined) delete globalThis.cancelIdleCallback;
else globalThis.cancelIdleCallback = originalCancelIdleCallback;

AnimationMixer.prototype.clipAction = originalClipAction;
assert.ok(ticks.length >= 4);

console.log('Animation controller verified:', {
  clips: controller.animations,
  clipActionCalls,
  ticks: ticks.length,
  final: ticks[ticks.length - 1],
});
