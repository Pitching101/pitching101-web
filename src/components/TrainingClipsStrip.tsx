"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CLIPS = [
  { src: "/videos/IMG_1238.mp4", label: "Training clip 1" },
  { src: "/videos/IMG_2676.mp4", label: "Training clip 2" },
  { src: "/videos/IMG_1247.mp4", label: "Training clip 3" },
] as const;

/**
 * Stadium-band showcase of real training clips.
 * Muted autoplay when in view; tap/click to play or pause. Respects reduced-motion.
 */
export default function TrainingClipsStrip() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [playing, setPlaying] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduceMotion) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        videoRefs.current.forEach((v, i) => {
          if (!v) return;
          if (visible) {
            v.play().catch(() => {});
            setPlaying((p) => ({ ...p, [i]: true }));
          } else {
            v.pause();
            setPlaying((p) => ({ ...p, [i]: false }));
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [reduceMotion]);

  const toggle = useCallback((i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying((p) => ({ ...p, [i]: true }));
    } else {
      v.pause();
      setPlaying((p) => ({ ...p, [i]: false }));
    }
  }, []);

  return (
    <div
      ref={rootRef}
      className="training-clips"
      aria-label="Training clips"
    >
      <p className="training-clips-label">Training Clips</p>
      <ul className="training-clips-grid">
        {CLIPS.map((clip, i) => (
          <li key={clip.src} className="training-clip-item">
            <button
              type="button"
              className="training-clip-card"
              aria-label={`${clip.label} — ${playing[i] ? "pause" : "play"}`}
              onClick={() => toggle(i)}
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className="training-clip-video"
                src={clip.src}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              {!playing[i] ? (
                <span className="training-clip-play" aria-hidden="true">
                  ▶
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
