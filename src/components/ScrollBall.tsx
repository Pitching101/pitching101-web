"use client";

import { useEffect, useRef, useState } from "react";
import PixelBall from "./PixelBall";

/**
 * Pixel baseball that travels down the page with scroll (parallax path).
 * Static / hidden when prefers-reduced-motion.
 */
export default function ScrollBall() {
  const ballRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyReduce = () => setReduced(mq.matches);
    applyReduce();
    mq.addEventListener("change", applyReduce);

    if (mq.matches) {
      return () => mq.removeEventListener("change", applyReduce);
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ballRef.current;
        if (!el) return;
        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - window.innerHeight);
        const t = Math.min(1, Math.max(0, window.scrollY / max));
        // Fun arc: drop + gentle side sway, not dizzy
        const y = t * (window.innerHeight * 0.72);
        const x = Math.sin(t * Math.PI * 1.4) * 28;
        const rot = t * 360;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`;
        el.style.opacity = String(0.35 + t * 0.45);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", applyReduce);
    };
  }, []);

  if (reduced) return null;

  return (
    <div
      className="scroll-ball-layer pointer-events-none fixed top-24 right-[max(0.75rem,calc((100vw-64rem)/2+0.5rem))] z-30 hidden sm:block"
      aria-hidden="true"
    >
      <div ref={ballRef} className="scroll-ball will-change-transform">
        <PixelBall size={40} />
      </div>
    </div>
  );
}
