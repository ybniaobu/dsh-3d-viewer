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
 * @returns {{
 *   animations: Array<{ name: string, duration: number }>,
 *   setPlaying: (enabled: boolean) => boolean,
 *   setClip: (index: number) => boolean,
 *   seek: (seconds: number) => boolean,
 *   update: (delta: number, timestamp: number) => void,
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
  const actions = [];
  let index = 0;
  let playing = false;
  let lastNotify = -Infinity;
  let disposed = false;

  if (mixer !== null) {
    for (const clip of clips) {
      const action = mixer.clipAction(clip);
      action.setLoop(LoopRepeat, Infinity);
      action.clampWhenFinished = false;
      actions.push(action);
    }

    const first = actions[0];
    first.reset().play();
    first.paused = true;
    mixer.update(0);
  }

  function currentAction() {
    return actions[index];
  }

  function currentDuration() {
    const action = currentAction();
    return action === undefined ? 0 : action.getClip().duration;
  }

  function currentTime() {
    const action = currentAction();
    return action === undefined ? 0 : action.time;
  }

  function snapshot() {
    return { time: currentTime(), duration: currentDuration(), index, playing };
  }

  function emit() {
    if (disposed || typeof onTick !== 'function') return;
    onTick(snapshot());
  }

  function update(delta, timestamp) {
    if (disposed || mixer === null || !playing) return;

    mixer.update(delta);
    if (timestamp - lastNotify >= NOTIFY_INTERVAL_MS) {
      lastNotify = timestamp;
      emit();
    }
  }

  function setPlaying(enabled) {
    if (disposed || mixer === null) return false;

    const next = Boolean(enabled);
    if (next === playing) return false;

    playing = next;
    const action = currentAction();
    if (action !== undefined) action.paused = !playing;
    lastNotify = -Infinity;
    emit();
    return true;
  }

  function setClip(nextIndex) {
    if (disposed || mixer === null) return false;
    if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex >= actions.length) return false;

    index = nextIndex;
    for (const action of actions) action.stop();
    const action = actions[index];
    action.reset().play();
    action.paused = !playing;
    mixer.update(0);
    lastNotify = -Infinity;
    emit();
    return true;
  }

  function seek(seconds) {
    if (disposed || mixer === null) return false;

    const action = currentAction();
    if (action === undefined) return false;

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
    if (mixer !== null) {
      mixer.stopAllAction();
      mixer.uncacheRoot(object);
    }
  }

  return {
    animations,
    setPlaying,
    setClip,
    seek,
    update,
    snapshot,
    isPlaying: () => playing,
    dispose,
  };
}
