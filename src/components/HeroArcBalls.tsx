"use client";

import { useEffect, useRef } from "react";

const SIZE = 36;
/** One throw across the hero. Slow enough that it does not fight the page. */
const CYCLE_MS = 5600;

/**
 * Phone only: two baseballs throw themselves across the hero.
 * Paths stay offset so they do not meet in a straight X.
 * Reduced motion hides the layer in CSS.
 */
export default function HeroArcBalls() {
  const layerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!layer || !left || !right) return;

    const mobile = window.matchMedia("(max-width: 639px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let origin = 0;
    let running = false;

    const paint = (progress: number) => {
      const width = layer.clientWidth;
      const height = layer.clientHeight;
      if (width < 8 || height < 8) return;
      const off = SIZE + 12;
      const span = width + off * 2;

      const bump = (t: number, peak: number) => {
        const denom = Math.max(0.12, peak * (1 - peak));
        return (t * (1 - t)) / denom;
      };

      const place = (
        el: HTMLImageElement,
        t: number,
        peak: number,
        rise: number,
        spin: number,
      ) => {
        const x = -off + t * span;
        const y = rise * (1 - bump(t, peak));
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${(spin * t).toFixed(1)}deg)`;
      };

      const high = Math.max(22, height - SIZE - 2);
      const low = Math.max(16, high * 0.58);
      place(left, progress, 0.34, high, 420);
      place(right, 1 - progress, 0.68, low, -300);
    };

    const tick = (now: number) => {
      if (!origin) origin = now;
      paint(((now - origin) % CYCLE_MS) / CYCLE_MS);
      raf = window.requestAnimationFrame(tick);
    };

    const bind = () => {
      const on = mobile.matches && !reduce.matches;
      if (on && !running) {
        origin = 0;
        running = true;
        raf = window.requestAnimationFrame(tick);
      }
      if (!on && running) {
        window.cancelAnimationFrame(raf);
        raf = 0;
        origin = 0;
        running = false;
      }
    };

    bind();
    mobile.addEventListener("change", bind);
    reduce.addEventListener("change", bind);
    return () => {
      window.cancelAnimationFrame(raf);
      mobile.removeEventListener("change", bind);
      reduce.removeEventListener("change", bind);
    };
  }, []);

  return (
    <div className="hero-arc" ref={layerRef} aria-hidden="true">
      <img
        ref={leftRef}
        className="hero-arc-ball"
        src="/assets/pixel-baseball-solid.png"
        alt=""
        width={SIZE}
        height={SIZE}
      />
      <img
        ref={rightRef}
        className="hero-arc-ball"
        src="/assets/pixel-baseball-solid.png"
        alt=""
        width={SIZE}
        height={SIZE}
      />
    </div>
  );
}
