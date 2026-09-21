"use client";

import { useEffect, useRef, useState } from "react";
import {
  INSTAGRAM_FOLLOWERS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_POSTS,
  INSTAGRAM_URL,
} from "@/data/siteCopy";

const FOLLOWERS_LABEL = INSTAGRAM_FOLLOWERS.toLocaleString("en-US");

/** Scoreboard count-up, plus a few real reels from @pitchinglesson. */
export default function InstagramFollow() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setCount(INSTAGRAM_FOLLOWERS);
          return;
        }
        setStarted(true);
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setCount(Math.round(eased * INSTAGRAM_FOLLOWERS));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <div className="ig-block">
      <a
        ref={ref}
        className="ig-follow"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Follow @${INSTAGRAM_HANDLE} on Instagram, ${FOLLOWERS_LABEL} followers, opens in a new tab`}
      >
        <span className="ig-follow-count">
          <span className="ig-follow-count-ghost" aria-hidden="true">
            {FOLLOWERS_LABEL}
          </span>
          <span className="ig-follow-count-live" aria-hidden="true">
            {count.toLocaleString("en-US")}
          </span>
        </span>
        <span className="ig-follow-label">Followers on Instagram</span>
      </a>
      <ul className="ig-grid">
        {INSTAGRAM_POSTS.map((post) => (
          <li key={post.id}>
            <a
              className="ig-post"
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.src} alt={post.alt} width={540} height={960} />
              <span className="sr-only"> (opens in a new tab)</span>
              <span className="ig-post-play" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
