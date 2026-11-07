import assert from 'node:assert/strict';
import { Scene, Texture } from 'three';
import { createEnvironment, prefetchEnvironment } from '../src/scene/environment.js';

/**
 * A promise plus its settle functions, so a test can hold a fetch or a PMREM
 * build open and release it at the exact moment it wants.
 *
 * @returns {{ promise: Promise<any>, resolve: (value?: any) => void, reject: (error?: any) => void }} Deferred.
 */
function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((settle, fail) => {
    resolve = settle;
    reject = fail;
  });
  return { promise, resolve, reject };
}

/** Flush pending promise reactions. */
const tick = () => new Promise((resolve) => setImmediate(resolve));

/** A WebGLRenderTarget stand-in with a real Texture and a disposal counter. */
function fakeTarget() {
  return {
    texture: new Texture(),
    disposed: 0,
    dispose() {
      this.disposed += 1;
    },
  };
}

// 1. A superseded selection is cached but never applied; the latest one wins.
{
  const scene = new Scene();
  const fetches = new Map();
  const targets = new Map();
  let ready = 0;

  const env = createEnvironment({
    scene,
    fetchBytes(id) {
      const pending = deferred();
      fetches.set(id, pending);
      return pending.promise;
    },
    createTarget(id) {
      const target = fakeTarget();
      targets.set(id, target);
      return target;
    },
    onReady() {
      ready += 1;
    },
  });

  assert.equal(env.set('city'), true);
  assert.equal(env.set('nature'), true);
  assert.equal(env.activeId, null);

  fetches.get('city').resolve(new ArrayBuffer(1));
  await tick();
  assert.equal(env.activeId, null, 'a superseded selection must not be applied');
  assert.equal(ready, 0);
  assert.equal(targets.get('city').disposed, 0, 'a superseded target stays cached');

  fetches.get('nature').resolve(new ArrayBuffer(1));
  await tick();
  assert.equal(env.activeId, 'nature');
  assert.equal(ready, 1, 'only the latest selection notifies the view');
  assert.equal(scene.environment, targets.get('nature').texture);

  env.dispose();
  assert.equal(scene.environment, null);
}

// 2. Selecting the same id again while its fetch is pending reuses that fetch.
{
  const scene = new Scene();
  const city = deferred();
  let cityFetches = 0;

  const env = createEnvironment({
    scene,
    fetchBytes(id) {
      if (id === 'city') {
        cityFetches += 1;
        return city.promise;
      }
      return Promise.resolve(new ArrayBuffer(1));
    },
    createTarget: () => fakeTarget(),
  });

  env.set('city');
  env.set('nature');
  env.set('city');
  assert.equal(cityFetches, 1, 'an in-flight environment request is shared');

  city.resolve(new ArrayBuffer(1));
  await tick();
  assert.equal(env.activeId, 'city');
  env.dispose();
}

// 3. A failed fetch leaves no target behind and can be retried.
{
  const scene = new Scene();
  const target = fakeTarget();
  let attempts = 0;
  let created = 0;
  let failed = 0;

  const env = createEnvironment({
    scene,
    fetchBytes() {
      attempts += 1;
      return attempts === 1
        ? Promise.reject(new Error('offline'))
        : Promise.resolve(new ArrayBuffer(1));
    },
    createTarget() {
      created += 1;
      return target;
    },
    onError() {
      failed += 1;
    },
  });

  const warn = console.warn;
  console.warn = () => {};
  try {
    env.set('nature');
    await tick();
    assert.equal(env.activeId, null);
    assert.equal(created, 0, 'a failed fetch must not build a target');
    assert.equal(failed, 1, 'a failed environment notifies the view');

    assert.equal(env.set('nature'), true, 'a failed id can be retried');
    await tick();
    assert.equal(env.activeId, 'nature');
    assert.equal(attempts, 2);
    assert.equal(created, 1);
    assert.equal(failed, 1);
  } finally {
    console.warn = warn;
    env.dispose();
  }
}

// 4. Disposing while the fetch is in flight never reaches the target builder.
{
  const scene = new Scene();
  const fetch = deferred();
  let builds = 0;

  const env = createEnvironment({
    scene,
    fetchBytes: () => fetch.promise,
    createTarget() {
      builds += 1;
      return fakeTarget();
    },
    onReady() {
      throw new Error('onReady must not fire after dispose');
    },
  });

  env.set('nature');
  env.dispose();
  fetch.resolve(new ArrayBuffer(1));
  await tick();

  assert.equal(builds, 0, 'a disposed view must not build a target');
  assert.equal(scene.environment, null);
  assert.equal(env.activeId, null);
}

// 5. A target that lands after dispose is released instead of retained.
{
  const scene = new Scene();
  const target = fakeTarget();
  const pendingTarget = deferred();
  let ready = 0;

  const env = createEnvironment({
    scene,
    fetchBytes: () => Promise.resolve(new ArrayBuffer(1)),
    createTarget: () => pendingTarget.promise,
    onReady() {
      ready += 1;
    },
  });

  env.set('nature');
  await tick(); // fetch resolved; the target build is still pending
  env.dispose();
  pendingTarget.resolve(target);
  await tick();

  assert.equal(target.disposed, 1, 'a late target is disposed, not retained');
  assert.equal(scene.environment, null);
  assert.equal(ready, 0);
}

// 6. Disposing an applied view releases its cached target.
{
  const scene = new Scene();
  const target = fakeTarget();

  const env = createEnvironment({
    scene,
    fetchBytes: () => Promise.resolve(new ArrayBuffer(1)),
    createTarget: () => target,
  });

  env.set('nature');
  await tick();
  assert.equal(env.activeId, 'nature');

  env.dispose();
  assert.equal(target.disposed, 1);
  assert.equal(scene.environment, null);
}

// 7. A shared cache survives a view disposal and serves the next view.
{
  const cache = { targets: new Map(), pending: new Map(), disposed: false };
  const target = fakeTarget();
  let fetches = 0;
  let builds = 0;
  const scene1 = new Scene();
  const env1 = createEnvironment({
    scene: scene1,
    cache,
    fetchBytes() {
      fetches += 1;
      return Promise.resolve(new ArrayBuffer(1));
    },
    createTarget() {
      builds += 1;
      return target;
    },
  });

  env1.set('nature');
  await tick();
  assert.equal(env1.activeId, 'nature');
  assert.equal(cache.targets.get('nature'), target);

  env1.dispose();
  assert.equal(target.disposed, 0, 'a shared target is owned by the renderer cache');

  const scene2 = new Scene();
  const env2 = createEnvironment({
    scene: scene2,
    cache,
    fetchBytes() {
      fetches += 1;
      return Promise.resolve(new ArrayBuffer(1));
    },
    createTarget() {
      builds += 1;
      return fakeTarget();
    },
  });

  assert.equal(env2.set('nature'), true);
  assert.equal(env2.activeId, 'nature');
  assert.equal(scene2.environment, target.texture);
  assert.equal(fetches, 1, 'the cached environment does not fetch again');
  assert.equal(builds, 1, 'the cached environment does not build again');

  env2.dispose();
  assert.equal(target.disposed, 0);

  // The pool disposes the cache only when it drops the renderer.
  cache.disposed = true;
  for (const cached of cache.targets.values()) cached.dispose();
  cache.targets.clear();
  assert.equal(target.disposed, 1);
}

// 8. Prefetch is shared and can start before a renderer exists.
{
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return new Response(new Uint8Array([1, 2, 3]));
  };
  try {
    const first = prefetchEnvironment('nature');
    const second = prefetchEnvironment('nature');
    assert.equal(first, second);
    assert.equal((await first).byteLength, 3);
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
}

console.log('Environment lifecycle verified:', {
  cases: [
    'latest selection wins',
    'in-flight request shared',
    'retry after failure',
    'dispose before fetch',
    'late target disposed',
    'dispose releases cached target',
    'shared cache survives view',
    'prefetch shared',
  ],
});
