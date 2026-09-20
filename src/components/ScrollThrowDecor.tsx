"use client";

import { useEffect, useRef } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / Math.max(0.0001, edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function yOf(el: HTMLElement) {
  return window.scrollY + el.getBoundingClientRect().top;
}

/**
 * Glove + ball stay glued to homepage scroll from the hero through About.
 * Pose is a continuous function of scroll progress — no CSS keyframes, no laggy catch-up.
 */
export default function ScrollThrowDecor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cwRef = useRef<HTMLDivElement>(null);
  const ccwRef = useRef<HTMLDivElement>(null);
  const cwGloveRef = useRef<HTMLImageElement>(null);
  const ccwGloveRef = useRef<HTMLImageElement>(null);
  const cwBallRef = useRef<HTMLImageElement>(null);
  const ccwBallRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const cw = cwRef.current;
    const ccw = ccwRef.current;
    const cwGlove = cwGloveRef.current;
    const ccwGlove = ccwGloveRef.current;
    const cwBall = cwBallRef.current;
    const ccwBall = ccwBallRef.current;
    if (!root || !cw || !ccw || !cwGlove || !ccwGlove || !cwBall || !ccwBall) {
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const heroEl = () => document.querySelector<HTMLElement>(".hero-overlay");
    const endEl = () =>
      document.querySelector<HTMLElement>("#about") ??
      document.querySelector<HTMLElement>("#who") ??
      document.querySelector<HTMLElement>(".ages-band");

    const readProgress = () => {
      const hero = heroEl();
      if (!hero) return 0;
      const end = endEl();
      const startY = yOf(hero);
      const endY = end ? yOf(end) + end.offsetHeight * 0.22 : startY + window.innerHeight * 1.6;
      const span = Math.max(1, endY - startY);
      return clamp((window.scrollY - startY) / span, 0, 1);
    };

    let currentP = readProgress();
    let targetP = currentP;
    let raf = 0;
    let running = false;
    let lastTs = 0;

    const apply = (p: number, reduced: boolean) => {
      const home = Boolean(heroEl());
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const pairW = cw.offsetWidth || 120;
      const edge = Math.max(8, Math.min(22, vw * 0.012));

      const fade = home ? 1 - smoothstep(0.9, 1, p) : 0;
      root.style.opacity = fade.toFixed(3);

      if (reduced) {
        const restX = edge;
        const restY = vh * 0.14;
        cw.style.transform = `translate3d(${restX}px, ${restY}px, 0)`;
        ccw.style.transform = `translate3d(${vw - pairW - restX}px, ${vh * 0.22}px, 0)`;
        cwGlove.style.transform = "rotate(0deg)";
        ccwGlove.style.transform = "rotate(0deg)";
        cwBall.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
        ccwBall.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
        return;
      }

      const travel = smoothstep(0, 1, p);
      const arc = Math.sin(p * Math.PI);
      const leftX = edge + travel * 14;
      const rightX = vw - pairW - edge - travel * 14;
      const leftY = vh * (0.11 + travel * 0.5);
      const rightY = vh * (0.2 + travel * 0.46);
      const gloveSpin = p * 210;
      const ballOut = arc * Math.min(36, vw * 0.035);
      const ballLift = arc * -14;

      cw.style.transform = `translate3d(${leftX.toFixed(2)}px, ${leftY.toFixed(2)}px, 0)`;
      ccw.style.transform = `translate3d(${rightX.toFixed(2)}px, ${rightY.toFixed(2)}px, 0)`;
      cwGlove.style.transform = `rotate(${gloveSpin.toFixed(2)}deg)`;
      ccwGlove.style.transform = `rotate(${(-gloveSpin).toFixed(2)}deg)`;
      cwBall.style.transform = `translate3d(${ballOut.toFixed(2)}px, ${ballLift.toFixed(2)}px, 0) rotate(${(gloveSpin * 0.7).toFixed(2)}deg)`;
      ccwBall.style.transform = `translate3d(${(-ballOut).toFixed(2)}px, ${ballLift.toFixed(2)}px, 0) rotate(${(-gloveSpin * 0.7).toFixed(2)}deg)`;
    };

    const loop = (ts: number) => {
      const reduced = mq.matches;
      targetP = readProgress();
      const dt = lastTs ? clamp((ts - lastTs) / 1000, 0, 0.032) : 0.016;
      lastTs = ts;

      if (reduced) {
        currentP = targetP;
        apply(currentP, true);
        running = false;
        raf = 0;
        return;
      }

      // Frame-rate independent follow — tight enough to feel locked to the wheel.
      const follow = 1 - Math.exp(-dt * 22);
      currentP += (targetP - currentP) * follow;

      if (Math.abs(targetP - currentP) < 0.0005) {
        currentP = targetP;
        apply(currentP, false);
        running = false;
        raf = 0;
        return;
      }

      apply(currentP, false);
      raf = window.requestAnimationFrame(loop);
    };

    const kick = () => {
      targetP = readProgress();
      if (running) return;
      running = true;
      lastTs = 0;
      raf = window.requestAnimationFrame(loop);
    };

    apply(currentP, mq.matches);
    kick();

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    mq.addEventListener("change", kick);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      mq.removeEventListener("change", kick);
    };
  }, []);

  return (
    <div ref={rootRef} className="scroll-throw" aria-hidden="true">
      <div ref={cwRef} className="scroll-throw-pair scroll-throw-pair-cw">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={cwGloveRef}
          src="/assets/pixel-glove.png"
          alt=""
          width={72}
          height={84}
          className="scroll-throw-img scroll-throw-glove-img"
          draggable={false}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={cwBallRef}
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
          ref={ccwGloveRef}
          src="/assets/pixel-glove.png"
          alt=""
          width={72}
          height={84}
          className="scroll-throw-img scroll-throw-glove-img"
          draggable={false}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ccwBallRef}
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
