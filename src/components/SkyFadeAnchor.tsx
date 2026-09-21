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

    const sync = () => {
      const sceneBox = scene.getBoundingClientRect();
      const markBox = mark.getBoundingClientRect();
      const height = Math.max(1, sceneBox.height);
      const pct = Math.min(82, Math.max(8, ((markBox.top - sceneBox.top) / height) * 100));
      scene.style.setProperty("--sky-stop", `${pct.toFixed(2)}%`);
      const footer = document.querySelector<HTMLElement>(".site-footer");
      const footerBox = footer?.getBoundingClientRect();
      const footerIn =
        Boolean(footerBox) && footerBox.top < window.innerHeight * 0.78;
      scene.classList.toggle(
        "is-sky-in",
        markBox.top < window.innerHeight * 0.62 && !footerIn,
      );
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
