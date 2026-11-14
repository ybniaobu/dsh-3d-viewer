import * as React from 'react';
import { PauseIcon, PlayIcon } from '../icons.js';
import { formatSeconds } from '../primitives.js';

const h = React.createElement;
export const SPEEDS = Object.freeze([0.5, 0.75, 1, 1.5, 2]);

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
 *     setAnimationSpeed: (rate: number) => void,
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
  const [speed, setSpeed] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [speedOpen, setSpeedOpen] = React.useState(false);
  const progressRef = React.useRef(null);
  const timeRef = React.useRef(null);
  const pickerRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const optionRefs = React.useRef([]);
  const speedPickerRef = React.useRef(null);
  const speedButtonRef = React.useRef(null);
  const lastSecondsRef = React.useRef(0);

  const clipName = (clip, clipIndex) => clip.name || t('animationFallback', { n: clipIndex + 1 });
  const activeIndex = clips.length === 0 ? 0 : Math.min(index, clips.length - 1);
  const currentClip = clips[activeIndex];
  const animationLabel = currentClip !== undefined && currentClip !== null
    ? clipName(currentClip, activeIndex)
    : '';
  const animationMax = Number.isFinite(currentClip?.duration)
    ? Math.max(Number(currentClip.duration), 0)
    : 0;

  React.useEffect(() => {
    if (index >= clips.length && clips.length > 0) setIndex(0);
  }, [clips.length, index]);

  React.useEffect(() => {
    if (!open) return undefined;
    optionRefs.current[activeIndex]?.scrollIntoView?.({ block: 'nearest' });
  }, [activeIndex, open]);

  React.useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (pickerRef.current?.contains(event.target) !== true) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  React.useEffect(() => {
    if (!speedOpen) return undefined;

    const onPointerDown = (event) => {
      if (speedPickerRef.current?.contains(event.target) !== true) setSpeedOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setSpeedOpen(false);
      speedButtonRef.current?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [speedOpen]);

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
    view.setAnimationSpeed(speed);
  }, [view, speed]);

  React.useEffect(() => {
    view.setAnimationClip(activeIndex);
    updateDisplay(0);
  }, [view, activeIndex]);

  React.useEffect(() => view.subscribeAnimation((state) => {
    updateDisplay(state.time);
  }), [view, activeIndex, animationMax]);

  const initialSeconds = lastSecondsRef.current;
  const timeLabel = `${formatSeconds(initialSeconds)}s / ${formatSeconds(animationMax)}s`;

  let clipControl;
  if (clips.length > 1) {
    clipControl = h('div', { className: 'dsh3dv-anim-picker', ref: pickerRef },
      h('button', {
        type: 'button',
        className: 'dsh3dv-anim-select',
        ref: buttonRef,
        title: animationLabel,
        'aria-label': t('animationClip'),
        'aria-haspopup': 'listbox',
        'aria-expanded': open,
        onClick: () => setOpen((value) => !value),
        onKeyDown: (event) => {
          if (event.key !== 'ArrowDown') return;
          event.preventDefault();
          setOpen(true);
        },
      }, animationLabel),
      open
        ? h('div', {
          className: 'dsh3dv-anim-menu',
          role: 'listbox',
          'aria-label': t('animationClip'),
        }, clips.map((clip, clipIndex) => h('button', {
          key: clipIndex,
          ref: (node) => {
            optionRefs.current[clipIndex] = node;
          },
          type: 'button',
          role: 'option',
          'aria-selected': clipIndex === activeIndex,
          className: clipIndex === activeIndex
            ? 'dsh3dv-anim-option dsh3dv-anim-option--active'
            : 'dsh3dv-anim-option',
          onClick: () => {
            updateDisplay(0);
            setIndex(clipIndex);
            setOpen(false);
            buttonRef.current?.focus();
          },
        }, clipName(clip, clipIndex))))
        : null);
  } else {
    clipControl = h('span', { className: 'dsh3dv-anim-name', title: animationLabel }, animationLabel);
  }

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
  clipControl,
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
  }, timeLabel),
  h('div', { className: 'dsh3dv-speed-picker', ref: speedPickerRef },
    h('button', {
      type: 'button',
      className: 'dsh3dv-speed',
      ref: speedButtonRef,
      title: t('animationSpeed'),
      'aria-label': t('animationSpeed'),
      'aria-haspopup': 'listbox',
      'aria-expanded': speedOpen,
      onClick: () => setSpeedOpen((value) => !value),
      onKeyDown: (event) => {
        if (event.key !== 'ArrowDown') return;
        event.preventDefault();
        setSpeedOpen(true);
      },
    }, `${speed}×`),
    speedOpen
      ? h('div', {
        className: 'dsh3dv-anim-menu dsh3dv-speed-menu',
        role: 'listbox',
        'aria-label': t('animationSpeed'),
      }, SPEEDS.map((rate) => h('button', {
        key: rate,
        type: 'button',
        role: 'option',
        'aria-selected': rate === speed,
        className: rate === speed
          ? 'dsh3dv-anim-option dsh3dv-anim-option--active'
          : 'dsh3dv-anim-option',
        onClick: () => {
          setSpeed(rate);
          setSpeedOpen(false);
          speedButtonRef.current?.focus();
        },
      }, `${rate}×`)))
      : null));
}
