"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-linked gifted GIF (pitcher + runner swap) — not an SVG ball alone.
 * Hidden when prefers-reduced-motion.
 */
export default function ScrollBall() {
  const ballRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [src, setSrc] = useState("/assets/pixel-pitcher.gif");

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
        const y = t * (window.innerHeight * 0.72);
        const x = Math.sin(t * Math.PI * 1.4) * 28;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        el.style.opacity = String(0.55 + t * 0.35);
        setSrc(t > 0.45 ? "/assets/pixel-runner.gif" : "/assets/pixel-pitcher.gif");
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
    <div className="scroll-ball-layer" aria-hidden="true">
      <div ref={ballRef} className="scroll-ball">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={56} height={42} />
      </div>
    </div>
  );
}
