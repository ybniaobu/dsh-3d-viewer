import assert from 'node:assert/strict';
import { AnimationClip, Object3D, VectorKeyframeTrack } from 'three';
import { createAnimationController } from '../src/scene/animation.js';

const object = new Object3D();
object.animations = [
  new AnimationClip('move', 1, [
    new VectorKeyframeTrack('.position', [0, 1], [0, 0, 0, 2, 0, 0]),
  ]),
  new AnimationClip('empty', 0, []),
];

const ticks = [];
const controller = createAnimationController(object, {
  onTick: (state) => ticks.push(state),
});

assert.deepEqual(controller.animations, [{ name: 'move', duration: 1 }]);
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

assert.equal(controller.setPlaying(false), true);
assert.equal(controller.isPlaying(), false);
controller.update(1, 2000);
assert.equal(controller.snapshot().time, 0, 'paused mixer should not advance');

assert.equal(controller.setClip(3), false);
assert.equal(controller.seek(Number.NaN), true);
assert.equal(controller.snapshot().time, 0);

controller.dispose();
assert.ok(ticks.length >= 4);

console.log('Animation controller verified:', {
  clips: controller.animations,
  ticks: ticks.length,
  final: ticks[ticks.length - 1],
});
