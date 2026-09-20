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

type SoloFlight = {
  start: number;
  duration: number;
  y: number;
  fromLeft: boolean;
  rise: number;
  spin: number;
};

/**
 * Glove + ball stay glued to homepage scroll from the hero through About.
 * Occasional solo baseballs cross the sky underneath type.
 */
export default function ScrollThrowDecor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cwRef = useRef<HTMLDivElement>(null);
  const ccwRef = useRef<HTMLDivElement>(null);
  const cwGloveRef = useRef<HTMLImageElement>(null);
  const ccwGloveRef = useRef<HTMLImageElement>(null);
  const cwBallRef = useRef<HTMLImageElement>(null);
  const ccwBallRef = useRef<HTMLImageElement>(null);
  const soloRefs = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)];

  useEffect(() => {
    const root = rootRef.current;
    const cw = cwRef.current;
    const ccw = ccwRef.current;
    const cwGlove = cwGloveRef.current;
    const ccwGlove = ccwGloveRef.current;
    const cwBall = cwBallRef.current;
    const ccwBall = ccwBallRef.current;
    const solos = soloRefs.map((item) => item.current).filter((el): el is HTMLImageElement => Boolean(el));
    if (!root || !cw || !ccw || !cwGlove || !ccwGlove || !cwBall || !ccwBall || solos.length < 2) {
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const heroEl = () => document.querySelector<HTMLElement>(".hero-overlay");
    const parkEl = () => document.querySelector<HTMLElement>(".park-sky");
    const endEl = () =>
      document.querySelector<HTMLElement>("#about") ??
      document.querySelector<HTMLElement>("#who") ??
      document.querySelector<HTMLElement>(".ages-band");

    const readProgress = () => {
      const hero = heroEl();
      if (!hero) return 0;
      const end = endEl();
      const startY = yOf(hero);
      const endY = end ? yOf(end) : startY + window.innerHeight * 1.35;
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

      const fade = home ? 1 - smoothstep(0.88, 1, p) : 0;
      root.style.opacity = home ? "1" : "0";
      cw.style.opacity = fade.toFixed(3);
      ccw.style.opacity = fade.toFixed(3);

      // Stay under type: on a phone the title fills the width, so start lower.
      const startTop = vw < 720 ? Math.max(260, vh * 0.44) : Math.max(96, vh * 0.22);

      if (reduced) {
        const restX = edge;
        cw.style.transform = `translate3d(${restX}px, ${startTop}px, 0)`;
        ccw.style.transform = `translate3d(${vw - pairW - restX}px, ${startTop + 48}px, 0)`;
        cwGlove.style.transform = "rotate(0deg)";
        ccwGlove.style.transform = "rotate(0deg)";
        cwBall.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
        ccwBall.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
        return;
      }

      const leftX = edge;
      const rightX = vw - pairW - edge;
      const leftY = startTop + p * vh * 0.5;
      const rightY = startTop + 36 + p * vh * 0.46;
      const gloveSpin = p * 200;
      const throwX = p * Math.max(180, vw - pairW - 56);
      const throwY = Math.sin(p * Math.PI) * -Math.min(28, vh * 0.04);

      cw.style.transform = `translate3d(${leftX.toFixed(2)}px, ${leftY.toFixed(2)}px, 0)`;
      ccw.style.transform = `translate3d(${rightX.toFixed(2)}px, ${rightY.toFixed(2)}px, 0)`;
      cwGlove.style.transform = `rotate(${gloveSpin.toFixed(2)}deg)`;
      ccwGlove.style.transform = `rotate(${(-gloveSpin).toFixed(2)}deg)`;
      cwBall.style.transform = `translate3d(${throwX.toFixed(2)}px, ${throwY.toFixed(2)}px, 0) rotate(${(gloveSpin * 0.8).toFixed(2)}deg)`;
      ccwBall.style.transform = `translate3d(${(-throwX).toFixed(2)}px, ${throwY.toFixed(2)}px, 0) rotate(${(-gloveSpin * 0.8).toFixed(2)}deg)`;
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

    const flights: (SoloFlight | null)[] = [null, null];
    let soloRaf = 0;
    let nextSoloAt = performance.now() + 900;
    let soloLane = 0;

    const parkSolo = (el: HTMLImageElement) => {
      el.style.opacity = "0";
      el.style.transform = "translate3d(-80px, 0, 0)";
    };
    solos.forEach(parkSolo);

    const spawnSolo = (now: number) => {
      if (!parkEl() || mq.matches) return;
      const slot = flights[0] ? 1 : 0;
      if (flights[slot]) return;
      const vh = window.innerHeight;
      soloLane += 1;
      flights[slot] = {
        start: now,
        duration: 1600 + Math.random() * 700,
        y: Math.max(96, vh * 0.18) + ((soloLane * 97) % Math.max(80, vh * 0.52)),
        fromLeft: soloLane % 2 === 0,
        rise: 18 + Math.random() * 26,
        spin: 280 + Math.random() * 220,
      };
    };

    const paintSolo = (now: number) => {
      const vw = window.innerWidth;
      const travel = vw + 96;
      flights.forEach((flight, i) => {
        const el = solos[i];
        if (!flight) {
          parkSolo(el);
          return;
        }
        const t = clamp((now - flight.start) / flight.duration, 0, 1);
        const ease = t * t * (3 - 2 * t);
        const x = flight.fromLeft ? -48 + ease * travel : vw - ease * travel;
        const arc = Math.sin(t * Math.PI) * -flight.rise;
        const fadeIn = smoothstep(0, 0.12, t);
        const fadeOut = 1 - smoothstep(0.82, 1, t);
        el.style.opacity = (fadeIn * fadeOut).toFixed(3);
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${(flight.y + arc).toFixed(2)}px, 0) rotate(${(flight.spin * t * (flight.fromLeft ? 1 : -1)).toFixed(2)}deg)`;
        if (t >= 1) flights[i] = null;
      });
    };

    const soloLoop = (now: number) => {
      if (parkEl() && !mq.matches && now >= nextSoloAt) {
        spawnSolo(now);
        nextSoloAt = now + 3800 + Math.random() * 4200;
      }
      paintSolo(now);
      soloRaf = window.requestAnimationFrame(soloLoop);
    };
    soloRaf = window.requestAnimationFrame(soloLoop);

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    mq.addEventListener("change", kick);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      if (soloRaf) window.cancelAnimationFrame(soloRaf);
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
          src="/assets/pixel-glove-transparent.png"
          alt=""
          width={72}
          height={84}
          className="scroll-throw-img scroll-throw-glove-img"
          draggable={false}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={cwBallRef}
          src="/assets/pixel-baseball-transparent.png"
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
          src="/assets/pixel-glove-transparent.png"
          alt=""
          width={72}
          height={84}
          className="scroll-throw-img scroll-throw-glove-img"
          draggable={false}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ccwBallRef}
          src="/assets/pixel-baseball-transparent.png"
          alt=""
          width={48}
          height={48}
          className="scroll-throw-img scroll-throw-ball-img"
          draggable={false}
        />
      </div>

      {soloRefs.map((ref, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          ref={ref}
          src="/assets/pixel-baseball-transparent.png"
          alt=""
          width={40}
          height={40}
          className="scroll-throw-img scroll-throw-solo"
          draggable={false}
        />
      ))}
    </div>
  );
}
