"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

const CLIPS = [
  { src: "/videos/IMG_1238.mp4", name: "Rep 1" },
  { src: "/videos/IMG_2676.mp4", name: "Rep 2" },
  { src: "/videos/IMG_1247.mp4", name: "Rep 3" },
  { src: "/videos/IMG_2698.mp4", name: "Rep 4" },
] as const;

function playMuted(el: HTMLVideoElement | null) {
  if (!el) return;
  el.muted = true;
  el.playsInline = true;
  const play = el.play();
  if (play) play.catch(() => undefined);
}

/**
 * A few baseball cards on the field. Swipe or tap to shuffle.
 * Every visible card plays its clip automatically.
 */
export default function TrainingClipsStrip() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const startX = useRef<number | null>(null);
  const startY = useRef(0);
  const swiped = useRef(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        setInView(entries.some((e) => e.isIntersecting));
      },
      { threshold: 0.2 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || !inView || CLIPS.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % CLIPS.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, inView]);

  useEffect(() => {
    const videos = videoRefs.current;
    videos.forEach((video) => {
      if (!video) return;
      if (reduceMotion || !inView) {
        video.pause();
        return;
      }
      video.currentTime = 0;
      playMuted(video);
    });
  }, [index, inView, reduceMotion]);

  const goTo = useCallback((next: number) => {
    setIndex(((next % CLIPS.length) + CLIPS.length) % CLIPS.length);
  }, []);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    startX.current = event.clientX;
    startY.current = event.clientY;
    swiped.current = false;
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (startX.current == null) return;
    const dx = event.clientX - startX.current;
    const dy = event.clientY - startY.current;
    if (Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      swiped.current = true;
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (startX.current == null) return;
    const dx = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < 40) return;
    swiped.current = true;
    goTo(dx < 0 ? index + 1 : index - 1);
  }

  function onCardClick(next: number) {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    goTo(next);
  }

  const prev = (index - 1 + CLIPS.length) % CLIPS.length;
  const next = (index + 1) % CLIPS.length;
  const clip = CLIPS[index];

  return (
    <div
      ref={rootRef}
      className="training-clips"
      role="region"
      aria-roledescription="carousel"
      aria-label="A look at training"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <p className="training-clips-label">A look at training</p>
      <div
        className="clip-fan"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        <button
          type="button"
          className="bb-card clip-card clip-card-left"
          aria-label={`Show ${CLIPS[prev].name}`}
          onClick={() => onCardClick(prev)}
        >
          <div className="bb-card-photo">
            <video
              ref={(node) => {
                videoRefs.current[0] = node;
              }}
              className="training-clip-video"
              src={CLIPS[prev].src}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              aria-hidden="true"
            />
          </div>
          <p className="bb-card-name">{CLIPS[prev].name}</p>
        </button>

        <div className="bb-card clip-card clip-card-main">
          <div className="bb-card-photo">
            <video
              key={clip.src}
              ref={(node) => {
                videoRefs.current[1] = node;
              }}
              className="training-clip-video"
              src={clip.src}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              aria-hidden="true"
            />
          </div>
          <p className="bb-card-name">{clip.name}</p>
          <p className="bb-card-role">Pitching101</p>
        </div>

        <button
          type="button"
          className="bb-card clip-card clip-card-right"
          aria-label={`Show ${CLIPS[next].name}`}
          onClick={() => onCardClick(next)}
        >
          <div className="bb-card-photo">
            <video
              ref={(node) => {
                videoRefs.current[2] = node;
              }}
              className="training-clip-video"
              src={CLIPS[next].src}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              aria-hidden="true"
            />
          </div>
          <p className="bb-card-name">{CLIPS[next].name}</p>
        </button>
      </div>
      <div className="training-clips-nav">
        <div className="training-clips-dots" role="tablist" aria-label="Choose clip">
          {CLIPS.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${item.name}, ${i + 1} of ${CLIPS.length}`}
              className={`reviews-dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
      <p className="training-clips-hint">Swipe to shuffle</p>
    </div>
  );
}
