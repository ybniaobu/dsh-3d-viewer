import { AnimationMixer, LoopRepeat } from 'three';

const NOTIFY_INTERVAL_MS = 33;

/**
 * Drive the FBX animation clips without coupling playback state to React.
 *
 * Only the first clip is prepared at construction; it starts paused so the
 * caller decides when playback begins. Progress notifications are throttled
 * to roughly 30 Hz and are emitted only while the mixer is actually running.
 *
 * @param {import('three').Object3D} object Parsed FBX graph.
 * @param {{ onTick?: (state: { time: number, duration: number, index: number, playing: boolean }) => void }} [options] Progress callback.
 *   The state object is reused between ticks; read it synchronously and do not retain it.
 * @returns {{
 *   animations: Array<{ name: string, duration: number }>,
 *   setPlaying: (enabled: boolean) => boolean,
 *   setClip: (index: number) => boolean,
 *   setSpeed: (rate: number) => boolean,
 *   seek: (seconds: number) => boolean,
 *   update: (delta: number, timestamp: number) => void,
 *   prewarm: () => boolean,
 *   snapshot: () => { time: number, duration: number, index: number, playing: boolean },
 *   isPlaying: () => boolean,
 *   dispose: () => void,
 * }} Animation controls.
 */
export function createAnimationController(object, { onTick } = {}) {
  const clips = Array.isArray(object.animations)
    ? object.animations.filter((clip) => Number.isFinite(clip.duration)
      && clip.duration > 0
      && clip.tracks.length > 0)
    : [];
  const animations = clips.map((clip) => ({ name: clip.name, duration: clip.duration }));
  const mixer = clips.length > 0 ? new AnimationMixer(object) : null;
  const actions = new Array(clips.length).fill(null);
  let index = 0;
  let playing = false;
  let playbackRate = 1;
  let prewarmIndex = 1;
  let prewarmScheduled = false;
  let prewarmHandle = 0;
  let prewarmIdle = false;
  let lastNotify = -Infinity;
  let disposed = false;
  // Listeners read this synchronously and must not retain it. Reusing the
  // object removes one allocation from every ~30 Hz progress notification.
  const notificationState = { time: 0, duration: 0, index: 0, playing: false };

  /**
   * Create an action only when its clip is first selected. The mixer keeps the
   * action bound to the object, but unused clips stay uncached.
   *
   * @param {number} actionIndex Clip index.
   * @returns {import('three').AnimationAction | null} Action.
   */
  function getAction(actionIndex) {
    if (mixer === null || actionIndex < 0 || actionIndex >= clips.length) return null;

    let action = actions[actionIndex];
    if (action === null) {
      action = mixer.clipAction(clips[actionIndex]);
      action.setLoop(LoopRepeat, Infinity);
      action.clampWhenFinished = false;
      actions[actionIndex] = action;
    }
    return action;
  }

  if (mixer !== null) {
    const first = getAction(0);
    if (first !== null) {
      first.reset().play();
      first.paused = true;
      mixer.update(0);
    }
  }

  function currentAction() {
    return actions[index];
  }

  function currentDuration() {
    return clips[index]?.duration ?? 0;
  }

  function currentTime() {
    return currentAction()?.time ?? 0;
  }

  function snapshot() {
    return { time: currentTime(), duration: currentDuration(), index, playing };
  }

  function emit() {
    if (disposed || typeof onTick !== 'function') return;
    notificationState.time = currentTime();
    notificationState.duration = currentDuration();
    notificationState.index = index;
    notificationState.playing = playing;
    onTick(notificationState);
  }

  function update(delta, timestamp) {
    if (disposed || mixer === null || !playing) return;

    mixer.update(delta * playbackRate);
    if (timestamp - lastNotify >= NOTIFY_INTERVAL_MS) {
      lastNotify = timestamp;
      emit();
    }
  }

  function setSpeed(rate) {
    if (disposed || mixer === null) return false;

    const next = Number(rate);
    if (!Number.isFinite(next) || next <= 0 || next === playbackRate) return false;
    playbackRate = next;
    lastNotify = -Infinity;
    return true;
  }

  function cancelPrewarm() {
    if (!prewarmScheduled) return;
    if (prewarmIdle && typeof cancelIdleCallback === 'function') cancelIdleCallback(prewarmHandle);
    else clearTimeout(prewarmHandle);
    prewarmScheduled = false;
    prewarmHandle = 0;
  }

  function schedulePrewarm() {
    if (disposed || mixer === null || prewarmScheduled || prewarmIndex >= clips.length) return;
    prewarmScheduled = true;
    prewarmIdle = typeof requestIdleCallback === 'function';

    const run = (deadline) => {
      prewarmScheduled = false;
      prewarmHandle = 0;
      if (disposed || mixer === null) return;

      let created = 0;
      while (prewarmIndex < clips.length
        && created < 2
        && (!prewarmIdle || deadline === undefined || deadline.timeRemaining() > 2)) {
        if (actions[prewarmIndex] === null) getAction(prewarmIndex);
        prewarmIndex += 1;
        created += 1;
      }
      schedulePrewarm();
    };

    prewarmHandle = prewarmIdle
      ? requestIdleCallback(run, { timeout: 500 })
      : setTimeout(run, 32);
  }

  function prewarm() {
    if (disposed || prewarmIndex >= clips.length) return false;
    schedulePrewarm();
    return true;
  }

  function setPlaying(enabled) {
    if (disposed || mixer === null) return false;

    const next = Boolean(enabled);
    if (next === playing) return false;

    const action = getAction(index);
    if (action === null) return false;
    playing = next;
    action.paused = !playing;
    lastNotify = -Infinity;
    emit();
    return true;
  }

  function setClip(nextIndex) {
    if (disposed || mixer === null) return false;
    if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex >= clips.length) return false;

    index = nextIndex;
    for (const action of actions) action?.stop();
    const action = getAction(index);
    if (action === null) return false;
    action.reset().play();
    action.paused = !playing;
    mixer.update(0);
    lastNotify = -Infinity;
    emit();
    return true;
  }

  function seek(seconds) {
    if (disposed || mixer === null) return false;

    const action = getAction(index);
    if (action === null) return false;

    const duration = action.getClip().duration;
    const next = Number(seconds);
    action.time = Math.max(0, Math.min(duration, Number.isFinite(next) ? next : 0));
    mixer.update(0);
    lastNotify = -Infinity;
    emit();
    return true;
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelPrewarm();
    if (mixer !== null) {
      mixer.stopAllAction();
      mixer.uncacheRoot(object);
    }
  }

  return {
    animations,
    setPlaying,
    setClip,
    setSpeed,
    seek,
    update,
    prewarm,
    snapshot,
    isPlaying: () => playing,
    dispose,
  };
}
