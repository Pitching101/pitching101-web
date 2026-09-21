"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

const CLIPS: readonly { src: string; poster?: string; name: string }[] = [
  { src: "/videos/IMG_2676.mp4", poster: "/videos/IMG_2676.jpg", name: "Rep 1" },
  { src: "/videos/IMG_1247.mp4", poster: "/videos/IMG_1247.jpg", name: "Rep 2" },
  { src: "/videos/IMG_2698.mp4", name: "Rep 3" },
];

const SHUFFLE_MS = 620;

type Slot = "left" | "main" | "right" | "back";

function slotOf(clipIndex: number, current: number): Slot {
  const rel = (clipIndex - current + CLIPS.length) % CLIPS.length;
  if (rel === 0) return "main";
  if (rel === 1) return "right";
  if (rel === CLIPS.length - 1) return "left";
  return "back";
}

function playMuted(el: HTMLVideoElement | null) {
  if (!el) return;
  el.muted = true;
  el.playsInline = true;
  const play = el.play();
  if (play) play.catch(() => undefined);
}

/**
 * A few baseball cards on the field. Desktop hover shuffles the deck;
 * swipe or tap still works on a phone.
 */
export default function TrainingClipsStrip() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const startX = useRef<number | null>(null);
  const startY = useRef(0);
  const swiped = useRef(false);
  const busy = useRef(false);
  const hoverLocked = useRef(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [shuffling, setShuffling] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      setReduceMotion(motion.matches);
      setCanHover(hover.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    hover.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      hover.removeEventListener("change", sync);
    };
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

  const goTo = useCallback((next: number, { riffle } = { riffle: true }) => {
    const wrapped = ((next % CLIPS.length) + CLIPS.length) % CLIPS.length;
    if (wrapped === index || busy.current) return;

    if (reduceMotion || !riffle) {
      setIndex(wrapped);
      return;
    }

    busy.current = true;
    setShuffling(true);
    setIndex(wrapped);
    window.setTimeout(() => {
      setShuffling(false);
      busy.current = false;
    }, SHUFFLE_MS);
  }, [index, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || paused || held || !inView || CLIPS.length < 2) return;
    const id = window.setInterval(() => {
      goTo(index + 1);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, held, inView, goTo, index]);

  useEffect(() => {
    const videos = videoRefs.current;
    videos.forEach((video, i) => {
      if (!video) return;
      const slot = slotOf(i, index);
      if (reduceMotion || held || !inView || slot === "back") {
        video.pause();
        return;
      }
      playMuted(video);
    });
  }, [index, inView, reduceMotion, held]);

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
    const dy = event.clientY - startY.current;
    startX.current = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
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

  function onFanEnter() {
    setPaused(true);
    if (!canHover || reduceMotion || hoverLocked.current) return;
    hoverLocked.current = true;
    goTo(index + 1);
  }

  function onFanLeave() {
    hoverLocked.current = false;
    setPaused(false);
  }

  return (
    <div
      ref={rootRef}
      className="training-clips"
      role="region"
      aria-roledescription="carousel"
      aria-label="A look at training"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <p className="training-clips-label">A look at training</p>
      <div
        className={`clip-fan${shuffling ? " is-shuffling" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
        onMouseEnter={onFanEnter}
        onMouseLeave={onFanLeave}
      >
        {CLIPS.map((item, i) => {
          const slot = slotOf(i, index);
          const isMain = slot === "main";
          return (
            <button
              key={item.src}
              type="button"
              className={`bb-card clip-card clip-card-${slot}`}
              aria-label={isMain ? item.name : `Show ${item.name}`}
              aria-current={isMain ? "true" : undefined}
              tabIndex={slot === "back" ? -1 : 0}
              onClick={() => onCardClick(i)}
              onMouseEnter={() => {
                if (!canHover || reduceMotion || slot === "back" || slot === "main") return;
                goTo(i);
              }}
            >
              <div className="clip-card-inner">
                <div className="bb-card-photo">
                  {item.poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="training-clip-poster"
                      src={item.poster}
                      alt=""
                      width={480}
                      height={854}
                    />
                  ) : null}
                  <video
                    ref={(node) => {
                      videoRefs.current[i] = node;
                    }}
                    className="training-clip-video"
                    src={inView ? item.src : undefined}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                    preload="none"
                    aria-hidden="true"
                    onCanPlay={(event) => playMuted(event.currentTarget)}
                  />
                </div>
                <p className="bb-card-name">{item.name}</p>
                <p className={`bb-card-role${isMain ? "" : " is-muted"}`}>
                  Pitching101
                </p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="training-clips-nav">
        <button
          type="button"
          className="motion-pause"
          aria-pressed={held}
          onClick={() => setHeld((current) => !current)}
        >
          {held ? "Play clips" : "Pause clips"}
        </button>
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
      <p className="training-clips-hint training-clips-hint-touch" aria-hidden="true">
        Swipe to shuffle
      </p>
      <p className="training-clips-hint training-clips-hint-hover" aria-hidden="true">
        Hover to shuffle
      </p>
    </div>
  );
}
