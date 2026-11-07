import assert from 'node:assert/strict';
import { RendererPool } from '../src/scene/renderer-pool.js';

/** A renderer stand-in that records the pool's lifecycle calls. */
function fakeRenderer() {
  return {
    calls: { removed: 0, disposed: 0, lost: 0, renderTargets: 0 },
    domElement: {
      remove() {
        this.calls.removed += 1;
      },
      calls: null,
    },
    setRenderTarget() {
      this.calls.renderTargets += 1;
    },
    dispose() {
      this.calls.disposed += 1;
    },
    forceContextLoss() {
      this.calls.lost += 1;
    },
  };
}

const created = [];
const pool = new RendererPool(() => {
  const renderer = fakeRenderer();
  renderer.domElement.calls = renderer.calls;
  created.push(renderer);
  return renderer;
}, 1);

const first = pool.acquire();
const second = pool.acquire();
assert.equal(created.length, 2);
assert.notEqual(first, second);
assert.equal(first.inUse, true);

const cachedTarget = {
  disposed: 0,
  dispose() {
    this.disposed += 1;
  },
};
first.environment.targets.set('nature', cachedTarget);

pool.release(first);
assert.equal(first.inUse, false);
assert.equal(first.renderer.calls.removed, 1);
assert.equal(first.renderer.calls.renderTargets, 1);

const reused = pool.acquire();
assert.equal(reused, first, 'the most recently released renderer is reused');
assert.equal(created.length, 2);

pool.release(reused);
pool.release(second);
assert.equal(reused.renderer.calls.disposed, 1, 'the oldest idle renderer is trimmed');
assert.equal(reused.renderer.calls.lost, 1);
assert.equal(cachedTarget.disposed, 1, 'its PMREM cache is disposed with it');
assert.equal(reused.environment.disposed, true);
assert.equal(second.renderer.calls.disposed, 0, 'the remaining idle renderer stays warm');

pool.dispose();
assert.equal(second.renderer.calls.disposed, 1);
assert.equal(pool.entries.size, 0);

console.log('Renderer pool verified:', {
  created: created.length,
  reused: reused === first,
  idleAfterTrim: 1,
});
