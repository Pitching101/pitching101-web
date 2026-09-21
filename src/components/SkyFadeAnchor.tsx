"use client";

import { useEffect } from "react";

/**
 * Pins where the homepage wash leaves solid white and fades into blue.
 * White stays on the youth pitching lessons hero; sky and clouds start at
 * #sky-start (the bottom of that title block).
 *
 * The stop itself does not move with scroll — only the viewport check for
 * pinned clouds does, and that uses IntersectionObserver instead of a
 * scroll listener so the page can stay on the compositor.
 */
export default function SkyFadeAnchor() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".home-sky-scene");
    const mark =
      document.getElementById("sky-start") ??
      document.getElementById("reviews");
    if (!scene || !mark) return;

    let lastStop = "";

    const paintStop = () => {
      const sceneBox = scene.getBoundingClientRect();
      const markBox = mark.getBoundingClientRect();
      const height = Math.max(1, sceneBox.height);
      const pct = Math.min(82, Math.max(8, ((markBox.top - sceneBox.top) / height) * 100));
      const stop = `${pct.toFixed(1)}%`;
      if (stop === lastStop) return;
      lastStop = stop;
      scene.style.setProperty("--sky-stop", stop);
    };

    const setSkyIn = (on: boolean) => {
      scene.classList.toggle("is-sky-in", on);
    };

    paintStop();

    const markIo = new IntersectionObserver(
      (entries) => {
        setSkyIn(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: "-8% 0px -38% 0px", threshold: 0 },
    );
    markIo.observe(mark);

    const footer = document.querySelector<HTMLElement>(".site-footer");
    const footerIo = footer
      ? new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) setSkyIn(false);
          },
          { rootMargin: "0px 0px -22% 0px", threshold: 0 },
        )
      : null;
    if (footer && footerIo) footerIo.observe(footer);

    window.addEventListener("resize", paintStop, { passive: true });
    const ro = new ResizeObserver(paintStop);
    ro.observe(scene);
    ro.observe(mark);
    return () => {
      window.removeEventListener("resize", paintStop);
      ro.disconnect();
      markIo.disconnect();
      footerIo?.disconnect();
    };
  }, []);

  return null;
}
