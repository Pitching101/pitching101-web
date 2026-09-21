"use client";

import { useEffect, useRef } from "react";

const SIZE = 36;
/** One throw across the hero. Slow enough that it does not fight the page. */
const CYCLE_MS = 5600;

/**
 * Phone only: two baseballs throw themselves across the hero.
 * The layer spans the full hero so balls are not sliced at the type column.
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

    const overlay = layer.closest(".hero-overlay");
    const slot = overlay?.querySelector<HTMLElement>(".hero-arc-slot");
    const mobile = window.matchMedia("(max-width: 639px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let origin = 0;
    let running = false;
    let inView = true;

    const align = () => {
      if (!overlay || !slot) return;
      const scene = overlay.getBoundingClientRect();
      const band = slot.getBoundingClientRect();
      layer.style.top = `${(band.top - scene.top).toFixed(1)}px`;
      layer.style.height = `${Math.max(band.height, 1).toFixed(1)}px`;
    };

    const paint = (progress: number) => {
      const width = layer.clientWidth;
      const height = layer.clientHeight;
      if (width < 8 || height < 8) return;
      const off = SIZE + 8;
      const span = width + off * 2;
      const topPad = 10;
      const floor = Math.max(8, height - SIZE - 4);
      const high = Math.max(topPad + 18, floor);
      const low = Math.max(topPad + 12, high * 0.62);

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
        const y = topPad + (rise - topPad) * (1 - bump(t, peak));
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${(spin * t).toFixed(1)}deg)`;
      };

      place(left, progress, 0.34, high, 420);
      place(right, 1 - progress, 0.68, low, -300);
    };

    const tick = (now: number) => {
      if (!origin) origin = now;
      paint(((now - origin) % CYCLE_MS) / CYCLE_MS);
      raf = window.requestAnimationFrame(tick);
    };

    const bind = () => {
      const on = mobile.matches && !reduce.matches && inView;
      if (on && !running) {
        align();
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

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting);
        bind();
      },
      { rootMargin: "40px 0px", threshold: 0.05 },
    );
    io.observe(layer);

    const ro = new ResizeObserver(align);
    if (overlay) ro.observe(overlay);
    if (slot) ro.observe(slot);

    align();
    bind();
    mobile.addEventListener("change", bind);
    reduce.addEventListener("change", bind);
    window.addEventListener("resize", align, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      mobile.removeEventListener("change", bind);
      reduce.removeEventListener("change", bind);
      window.removeEventListener("resize", align);
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
