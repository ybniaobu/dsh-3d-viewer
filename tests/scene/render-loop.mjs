import assert from 'node:assert/strict';

let nextId = 1;
const queue = new Map();

globalThis.requestAnimationFrame = (callback) => {
  const id = nextId;
  nextId += 1;
  queue.set(id, callback);
  return id;
};
globalThis.cancelAnimationFrame = (id) => {
  queue.delete(id);
};

function flush(timestamp) {
  const pending = [...queue.entries()];
  queue.clear();
  for (const [, callback] of pending) callback(timestamp);
}

const { createRenderLoop } = await import('../../src/scene/render-loop.js');
const frames = [];
const loop = createRenderLoop((delta, timestamp) => {
  frames.push({ delta, timestamp });
});

loop.invalidate();
loop.invalidate();
assert.equal(queue.size, 1, 'invalidations should coalesce into one frame');
flush(16);
assert.equal(frames.length, 1);
assert.equal(frames[0].delta, 0);
assert.equal(queue.size, 0, 'one-off invalidation should not keep looping');

loop.start();
assert.equal(queue.size, 1);
flush(32);
assert.equal(frames.length, 2);
assert.equal(frames[1].delta, 0, 'the first looping frame starts with a zero delta');
assert.equal(queue.size, 1, 'looping should schedule the next frame');

flush(48);
assert.equal(frames.length, 3);
assert.ok(frames[2].delta > 0);

loop.invalidate();
assert.equal(queue.size, 1, 'invalidate while looping should not double-schedule');
flush(64);
assert.equal(frames.length, 4);

loop.setActive(false);
assert.equal(queue.size, 0);
loop.invalidate();
assert.equal(queue.size, 0, 'inactive loops should not schedule frames');
assert.equal(frames.length, 4);

loop.setActive(true);
assert.equal(queue.size, 1, 'resuming should schedule the pending frame');
flush(80);
assert.equal(frames.length, 5);
assert.equal(queue.size, 1, 'the loop should continue after resuming');

loop.stop();
assert.equal(queue.size, 0);
loop.start();
flush(96);
loop.dispose();
assert.equal(queue.size, 0);

console.log('Render loop verified:', {
  frames: frames.length,
  loopDelta: frames[2].delta,
});
