"use client";

import { useEffect, useRef } from "react";

/**
 * Two floating throw pairs (glove + ball) over page sections after the hero.
 * Full opacity (no fade). Scroll-linked soft drift + CW/CCW spin.
 * pointer-events: none. Hidden when prefers-reduced-motion: reduce.
 */
export default function ScrollThrowDecor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cwRef = useRef<HTMLDivElement>(null);
  const ccwRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const cw = cwRef.current;
    const ccw = ccwRef.current;
    if (!root || !cw || !ccw) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = () =>
      document.querySelector<HTMLElement>(".hero-overlay") ??
      document.querySelector<HTMLElement>('[aria-label*="Youth Pitching"]');
    const isPastHero = () => {
      const heroEl = hero();
      return heroEl
        ? heroEl.getBoundingClientRect().bottom <= 0
        : window.scrollY > window.innerHeight * 0.75;
    };
    const applyVisibility = () => {
      const visible = !mq.matches && isPastHero();
      root.hidden = !visible;
      root.dataset.pastHero = visible ? "true" : "false";
      return visible;
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      if (!applyVisibility()) return;

      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      // Soft throw arc along gutters — keep clear of center CTAs/copy
      const rot = p * 320; // degrees over full page scroll
      const cwY = 10 + p * 58;
      const ccwY = 22 + p * 52;
      cw.style.transform = `translate3d(${(-4 + p * 10).toFixed(2)}vw, ${cwY.toFixed(2)}vh, 0)`;
      ccw.style.transform = `translate3d(${(4 - p * 10).toFixed(2)}vw, ${ccwY.toFixed(2)}vh, 0)`;
      cw.style.setProperty("--throw-rot", `${rot.toFixed(2)}deg`);
      ccw.style.setProperty("--throw-rot", `${(-rot).toFixed(2)}deg`);
      // Ball travels a bit farther than the glove (throw feel)
      const ballLead = p * 18;
      cw.style.setProperty("--ball-nudge", `${ballLead.toFixed(2)}px`);
      ccw.style.setProperty("--ball-nudge", `${(-ballLead).toFixed(2)}px`);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="scroll-throw"
      aria-hidden="true"
      hidden
      data-past-hero="false"
    >
      {/* Instance 1 — left gutter, clockwise */}
      <div ref={cwRef} className="scroll-throw-pair scroll-throw-pair-cw">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-glove.png"
          alt=""
          width={72}
          height={84}
          className="scroll-throw-img scroll-throw-glove-img"
          draggable={false}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-baseball.png"
          alt=""
          width={48}
          height={48}
          className="scroll-throw-img scroll-throw-ball-img"
          draggable={false}
        />
      </div>

      {/* Instance 2 — right gutter, counter-clockwise */}
      <div ref={ccwRef} className="scroll-throw-pair scroll-throw-pair-ccw">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-glove.png"
          alt=""
          width={72}
          height={84}
          className="scroll-throw-img scroll-throw-glove-img"
          draggable={false}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-baseball.png"
          alt=""
          width={48}
          height={48}
          className="scroll-throw-img scroll-throw-ball-img"
          draggable={false}
        />
      </div>
    </div>
  );
}
