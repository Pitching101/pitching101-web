"use client";

import { useEffect } from "react";

/**
 * Pins where the homepage sky deepens — at #your-guy (midfield).
 * A pale sky hint already lives above that mark so the hero is in the park.
 */
export default function SkyFadeAnchor() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".home-sky-scene");
    const mark = document.getElementById("your-guy");
    if (!scene || !mark) return;

    const sync = () => {
      const sceneBox = scene.getBoundingClientRect();
      const markBox = mark.getBoundingClientRect();
      const height = Math.max(1, sceneBox.height);
      const pct = Math.min(82, Math.max(22, ((markBox.top - sceneBox.top) / height) * 100));
      scene.style.setProperty("--sky-stop", `${pct.toFixed(2)}%`);
    };

    sync();
    const raf = window.requestAnimationFrame(sync);
    window.addEventListener("resize", sync, { passive: true });
    const ro = new ResizeObserver(sync);
    ro.observe(scene);
    ro.observe(mark);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", sync);
      ro.disconnect();
    };
  }, []);

  return null;
}
