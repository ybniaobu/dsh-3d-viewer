import * as React from 'react';
import { PauseIcon, PlayIcon } from './icons.js';
import { formatSeconds } from './primitives.js';

const h = React.createElement;

/**
 * Animation transport bar.
 *
 * The bar owns playback state and subscribes to the viewer's progress stream,
 * so 30 Hz ticks re-render this small component instead of the whole viewer.
 *
 * @param {{
 *   view: {
 *     setAnimationPlaying: (playing: boolean) => void,
 *     setAnimationClip: (index: number) => void,
 *     seekAnimation: (seconds: number) => void,
 *     subscribeAnimation: (listener: (state: { time: number, duration: number }) => void) => () => void,
 *   },
 *   clips: Array<{ name: string, duration: number }>,
 *   t: (key: string, params?: Record<string, unknown>) => string,
 * }} props Viewer, clip metadata, and translator.
 */
export function AnimationBar({ view, clips, t }) {
  const [playing, setPlaying] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const progressRef = React.useRef(null);
  const timeRef = React.useRef(null);
  const lastSecondsRef = React.useRef(0);

  const currentClip = clips[Math.min(index, clips.length - 1)];
  const animationLabel = currentClip !== undefined && currentClip !== null
    ? (currentClip.name || t('animationFallback', { n: index + 1 }))
    : '';
  const animationMax = Number.isFinite(currentClip?.duration)
    ? Math.max(Number(currentClip.duration), 0)
    : 0;

  const updateDisplay = (seconds) => {
    const next = Math.min(Math.max(Number(seconds) || 0, 0), animationMax);
    lastSecondsRef.current = next;
    if (progressRef.current !== null) progressRef.current.value = String(next);
    if (timeRef.current !== null) {
      timeRef.current.textContent = `${formatSeconds(next)}s / ${formatSeconds(animationMax)}s`;
    }
  };

  React.useEffect(() => {
    view.setAnimationPlaying(playing);
  }, [view, playing]);

  React.useEffect(() => {
    view.setAnimationClip(index);
    updateDisplay(0);
  }, [view, index]);

  React.useEffect(() => view.subscribeAnimation((state) => {
    updateDisplay(state.time);
  }), [view, index, animationMax]);

  const initialSeconds = lastSecondsRef.current;
  const timeLabel = `${formatSeconds(initialSeconds)}s / ${formatSeconds(animationMax)}s`;

  return h('div', {
    className: 'dsh3dv-anim',
    'data-dsh3d-animation': '',
    role: 'group',
    'aria-label': t('animation'),
  },
  h('button', {
    type: 'button',
    className: 'dsh3dv-play',
    title: playing ? t('pause') : t('play'),
    'aria-label': playing ? t('pause') : t('play'),
    'aria-pressed': playing,
    onClick: () => setPlaying((value) => !value),
  }, playing ? h(PauseIcon) : h(PlayIcon)),
  clips.length > 1
    ? h('select', {
      className: 'dsh3dv-anim-select',
      value: index,
      'aria-label': t('animation'),
      onChange: (event) => {
        updateDisplay(0);
        setIndex(Number(event.currentTarget.value));
      },
    }, clips.map((clip, clipIndex) => h('option', {
      key: clipIndex,
      value: clipIndex,
    }, clip.name || t('animationFallback', { n: clipIndex + 1 }))))
    : h('span', { className: 'dsh3dv-anim-name', title: animationLabel }, animationLabel),
  h('input', {
    type: 'range',
    className: 'dsh3dv-progress',
    ref: progressRef,
    min: 0,
    max: Math.max(animationMax, 0.01),
    step: 0.01,
    defaultValue: 0,
    'aria-label': t('animationProgress'),
    onChange: (event) => {
      const next = Number(event.currentTarget.value);
      updateDisplay(next);
      view.seekAnimation(next);
    },
  }),
  h('span', {
    className: 'dsh3dv-anim-time',
    ref: timeRef,
  }, timeLabel));
}
