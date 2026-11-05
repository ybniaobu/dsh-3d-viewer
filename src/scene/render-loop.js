/**
 * A coalescing frame scheduler.
 *
 * Continuous loops run only while requested (auto-rotate or animation).
 * One-off invalidations are merged into a single animation frame, so multiple
 * OrbitControls change events in the same frame render once.
 *
 * @param {(delta: number, timestamp: number) => void} onFrame Frame callback.
 * @returns {{
 *   invalidate: () => void,
 *   start: () => void,
 *   stop: () => void,
 *   setActive: (active: boolean) => void,
 *   dispose: () => void,
 *   readonly looping: boolean,
 * }} Scheduler controls.
 */
export function createRenderLoop(onFrame) {
  let looping = false;
  let active = true;
  let disposed = false;
  let dirty = false;
  let frameHandle = 0;
  let lastTimestamp = 0;

  function schedule() {
    if (disposed || !active || frameHandle !== 0) return;
    frameHandle = requestAnimationFrame(frame);
  }

  function frame(timestamp) {
    frameHandle = 0;
    if (disposed || !active) return;

    const delta = lastTimestamp === 0 ? 0 : Math.min((timestamp - lastTimestamp) / 1000, 0.1);
    lastTimestamp = timestamp;
    dirty = false;
    onFrame(delta, timestamp);

    if (looping) schedule();
  }

  function invalidate() {
    if (disposed) return;
    dirty = true;
    schedule();
  }

  function start() {
    if (disposed || looping) return;
    looping = true;
    lastTimestamp = 0;
    schedule();
  }

  function stop() {
    looping = false;
    lastTimestamp = 0;
    if (frameHandle !== 0) {
      cancelAnimationFrame(frameHandle);
      frameHandle = 0;
    }
  }

  function setActive(next) {
    const value = Boolean(next);
    if (value === active) return;

    active = value;
    if (!active) {
      if (frameHandle !== 0) {
        cancelAnimationFrame(frameHandle);
        frameHandle = 0;
      }
      lastTimestamp = 0;
      return;
    }

    if (looping || dirty) schedule();
  }

  function dispose() {
    disposed = true;
    dirty = false;
    stop();
  }

  return {
    invalidate,
    start,
    stop,
    setActive,
    dispose,
    get looping() {
      return looping;
    },
  };
}
