"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CLIPS = [
  { src: "/videos/IMG_1238.mp4", name: "Rep 1" },
  { src: "/videos/IMG_2676.mp4", name: "Rep 2" },
  { src: "/videos/IMG_1247.mp4", name: "Rep 3" },
  { src: "/videos/IMG_2698.mp4", name: "Rep 4" },
] as const;

/**
 * A few baseball cards on the field — not one straight rectangle.
 * Center card plays. Side cards tilt and swap in on tap.
 */
export default function TrainingClipsStrip() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

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
      { threshold: 0.25 },
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
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);

    if (!reduceMotion && inView) {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [index, inView, reduceMotion]);

  const goTo = useCallback((next: number) => {
    setIndex(((next % CLIPS.length) + CLIPS.length) % CLIPS.length);
  }, []);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

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
      <div className="clip-fan">
        <button
          type="button"
          className="bb-card clip-card clip-card-left"
          aria-label={`Show ${CLIPS[prev].name}`}
          onClick={() => goTo(prev)}
        >
          <div className="bb-card-photo">
            <video
              className="training-clip-video"
              src={CLIPS[prev].src}
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>
          <p className="bb-card-name">{CLIPS[prev].name}</p>
        </button>

        <div className="bb-card clip-card clip-card-main">
          <button
            type="button"
            className="clip-card-hit"
            aria-label={`${clip.name} — ${playing ? "pause" : "play"}`}
            onClick={toggle}
          >
            <div className="bb-card-photo">
              <video
                key={clip.src}
                ref={videoRef}
                className="training-clip-video"
                src={clip.src}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              {!playing ? (
                <span className="training-clip-play" aria-hidden="true">
                  ▶
                </span>
              ) : null}
            </div>
          </button>
          <p className="bb-card-name">{clip.name}</p>
          <p className="bb-card-role">Pitching101</p>
        </div>

        <button
          type="button"
          className="bb-card clip-card clip-card-right"
          aria-label={`Show ${CLIPS[next].name}`}
          onClick={() => goTo(next)}
        >
          <div className="bb-card-photo">
            <video
              className="training-clip-video"
              src={CLIPS[next].src}
              muted
              playsInline
              preload="metadata"
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
    </div>
  );
}
