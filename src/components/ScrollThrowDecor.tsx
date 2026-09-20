"use client";

import { useEffect, useRef } from "react";

/**
 * Glove + ball float only between hero and Ages/peanuts (#who).
 * Fade in ~500ms after hero; fade + drift off when ages section reaches view.
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
    const heroEl = () =>
      document.querySelector<HTMLElement>(".hero-overlay") ??
      document.querySelector<HTMLElement>('[aria-label*="Youth Pitching"]');
    const agesEl = () =>
      document.querySelector<HTMLElement>("#who") ??
      document.querySelector<HTMLElement>(".ages-band");

    const inThrowZone = () => {
      const hero = heroEl();
      const ages = agesEl();
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom <= 8
        : window.scrollY > window.innerHeight * 0.75;
      if (!pastHero) return false;
      if (!ages) return true;
      return ages.getBoundingClientRect().top > window.innerHeight * 0.55;
    };

    const applyVisibility = () => {
      const visible = !mq.matches && inThrowZone();
      root.dataset.pastHero = visible ? "true" : "false";
      const hero = heroEl();
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom <= 8
        : window.scrollY > window.innerHeight * 0.75;
      if (!pastHero) root.dataset.wasVisible = "false";
      else if (visible) root.dataset.wasVisible = "true";
      return visible;
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const visible = applyVisibility();
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      const rot = p * 320;
      const cwY = 10 + p * 58;
      const ccwY = 22 + p * 52;

      if (visible) {
        cw.style.transform = `translate3d(${(-4 + p * 10).toFixed(2)}vw, ${cwY.toFixed(2)}vh, 0)`;
        ccw.style.transform = `translate3d(${(4 - p * 10).toFixed(2)}vw, ${ccwY.toFixed(2)}vh, 0)`;
      } else if (root.dataset.wasVisible === "true") {
        cw.style.transform = `translate3d(-28vw, ${cwY.toFixed(2)}vh, 0)`;
        ccw.style.transform = `translate3d(28vw, ${ccwY.toFixed(2)}vh, 0)`;
      }

      cw.style.setProperty("--throw-rot", `${rot.toFixed(2)}deg`);
      ccw.style.setProperty("--throw-rot", `${(-rot).toFixed(2)}deg`);
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
      data-past-hero="false"
      data-was-visible="false"
    >
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
