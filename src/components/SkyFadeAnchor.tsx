"use client";

import { useEffect } from "react";

/**
 * Pins where the homepage wash leaves solid white and fades into blue.
 * Hero + Trustpilot heading stay white; sky and clouds start at #sky-start
 * (the review card, right under that heading).
 */
export default function SkyFadeAnchor() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".home-sky-scene");
    const mark =
      document.getElementById("sky-start") ??
      document.getElementById("reviews");
    if (!scene || !mark) return;

    const sync = () => {
      const sceneBox = scene.getBoundingClientRect();
      const markBox = mark.getBoundingClientRect();
      const height = Math.max(1, sceneBox.height);
      const pct = Math.min(82, Math.max(8, ((markBox.top - sceneBox.top) / height) * 100));
      scene.style.setProperty("--sky-stop", `${pct.toFixed(2)}%`);
      scene.classList.toggle("is-sky-in", markBox.top < window.innerHeight * 0.62);
    };

    sync();
    const raf = window.requestAnimationFrame(sync);
    window.addEventListener("resize", sync, { passive: true });
    window.addEventListener("scroll", sync, { passive: true });
    const ro = new ResizeObserver(sync);
    ro.observe(scene);
    ro.observe(mark);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", sync);
      window.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, []);

  return null;
}
