"use client";

import { useEffect, useRef } from "react";

/**
 * Glove + ball track the homepage scroll from the hero through About.
 * Position is lerped every frame so motion stays smooth the whole way.
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
    const heroEl = () => document.querySelector<HTMLElement>(".hero-overlay");
    const endEl = () =>
      document.querySelector<HTMLElement>("#about") ??
      document.querySelector<HTMLElement>("#who") ??
      document.querySelector<HTMLElement>(".ages-band");

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const zoneProgress = () => {
      const hero = heroEl();
      const end = endEl();
      if (!hero) return 0;
      const startY = window.scrollY + hero.getBoundingClientRect().top;
      const endY = end
        ? window.scrollY + end.getBoundingClientRect().top - window.innerHeight * 0.48
        : startY + window.innerHeight * 1.1;
      const span = Math.max(1, endY - startY);
      return Math.min(1, Math.max(0, (window.scrollY - startY) / span));
    };

    const zoneVisible = () => {
      if (!heroEl()) return false;
      const end = endEl();
      if (end && end.getBoundingClientRect().top <= window.innerHeight * 0.78) {
        return false;
      }
      return true;
    };

    let currentP = zoneProgress();
    let currentOpacity = zoneVisible() ? 1 : 0;
    let raf = 0;

    const apply = (p: number, opacity: number) => {
      const cwY = 8 + p * 36;
      const ccwY = 16 + p * 32;
      cw.style.transform = `translate3d(${(-3 + p * 9).toFixed(2)}vw, ${cwY.toFixed(2)}vh, 0)`;
      ccw.style.transform = `translate3d(${(3 - p * 9).toFixed(2)}vw, ${ccwY.toFixed(2)}vh, 0)`;
      const rot = p * 260;
      cw.style.setProperty("--throw-rot", `${rot.toFixed(2)}deg`);
      ccw.style.setProperty("--throw-rot", `${(-rot).toFixed(2)}deg`);
      const ballLead = p * 16;
      cw.style.setProperty("--ball-nudge", `${ballLead.toFixed(2)}px`);
      ccw.style.setProperty("--ball-nudge", `${(-ballLead).toFixed(2)}px`);
      root.style.opacity = opacity.toFixed(3);
      root.style.visibility = opacity > 0.02 ? "visible" : "hidden";
      root.dataset.pastHero = opacity > 0.02 ? "true" : "false";
    };

    const tick = () => {
      const reduced = mq.matches;
      const visible = zoneVisible();
      const targetP = zoneProgress();
      const targetOpacity = visible ? 1 : 0;

      if (reduced) {
        currentP = targetP;
        currentOpacity = targetOpacity;
        cw.style.transform = "translate3d(-4vw, 12vh, 0)";
        ccw.style.transform = "translate3d(4vw, 22vh, 0)";
        cw.style.setProperty("--throw-rot", "0deg");
        ccw.style.setProperty("--throw-rot", "0deg");
        cw.style.setProperty("--ball-nudge", "0px");
        ccw.style.setProperty("--ball-nudge", "0px");
        root.style.opacity = currentOpacity.toFixed(3);
        root.style.visibility = visible ? "visible" : "hidden";
        root.dataset.pastHero = visible ? "true" : "false";
      } else {
        currentP = lerp(currentP, targetP, 0.16);
        currentOpacity = lerp(currentOpacity, targetOpacity, visible ? 0.14 : 0.1);
        apply(currentP, currentOpacity);
      }

      raf = window.requestAnimationFrame(tick);
    };

    apply(currentP, currentOpacity);
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={rootRef}
      className="scroll-throw"
      aria-hidden="true"
      data-past-hero="false"
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
