"use client";

import { useEffect } from "react";

/**
 * Pins where the homepage wash leaves solid white and fades into blue.
 * White stays on the youth pitching lessons hero; sky and clouds start at
 * #sky-start (the bottom of that title block).
 */
export default function SkyFadeAnchor() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".home-sky-scene");
    const mark =
      document.getElementById("sky-start") ??
      document.getElementById("reviews");
    if (!scene || !mark) return;

    let lastStop = "";
    let lastSkyIn: boolean | null = null;
    let raf = 0;

    const paint = () => {
      raf = 0;
      const sceneBox = scene.getBoundingClientRect();
      const markBox = mark.getBoundingClientRect();
      const height = Math.max(1, sceneBox.height);
      const pct = Math.min(82, Math.max(8, ((markBox.top - sceneBox.top) / height) * 100));
      const stop = `${pct.toFixed(1)}%`;
      if (stop !== lastStop) {
        lastStop = stop;
        scene.style.setProperty("--sky-stop", stop);
      }
      const footer = document.querySelector<HTMLElement>(".site-footer");
      const footerBox = footer?.getBoundingClientRect();
      const footerIn = footerBox != null && footerBox.top < window.innerHeight * 0.78;
      const skyIn = markBox.top < window.innerHeight * 0.62 && !footerIn;
      if (skyIn !== lastSkyIn) {
        lastSkyIn = skyIn;
        scene.classList.toggle("is-sky-in", skyIn);
      }
    };

    const requestPaint = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("resize", requestPaint, { passive: true });
    window.addEventListener("scroll", requestPaint, { passive: true });
    const ro = new ResizeObserver(requestPaint);
    ro.observe(scene);
    ro.observe(mark);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", requestPaint);
      window.removeEventListener("scroll", requestPaint);
      ro.disconnect();
    };
  }, []);

  return null;
}
