"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative baseball + glove that drift over page sections on scroll.
 * pointer-events: none so CTAs/text stay clickable. Hidden under reduced motion.
 */
export default function ScrollThrowDecor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const gloveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const ball = ballRef.current;
    const glove = gloveRef.current;
    if (!root || !ball || !glove) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      if (mq.matches) {
        root.hidden = true;
        return false;
      }
      root.hidden = false;
      return true;
    };
    if (!applyMotionPreference()) {
      const onChange = () => applyMotionPreference();
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      // Diagonal “throw” paths along the gutters — stay off main text columns
      const ballY = p * 72; // vh-ish via % of path
      const gloveY = p * 68;
      ball.style.transform = `translate3d(${(-8 + p * 18).toFixed(2)}vw, ${(8 + ballY).toFixed(2)}vh, 0)`;
      glove.style.transform = `translate3d(${(6 - p * 14).toFixed(2)}vw, ${(18 + gloveY).toFixed(2)}vh, 0)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const onChange = () => {
      if (!applyMotionPreference()) return;
      update();
    };
    mq.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="scroll-throw"
      aria-hidden="true"
      hidden
    >
      <div ref={ballRef} className="scroll-throw-item scroll-throw-ball">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-baseball.png"
          alt=""
          width={72}
          height={72}
          className="scroll-throw-img scroll-throw-spin-cw"
          draggable={false}
        />
      </div>
      <div ref={gloveRef} className="scroll-throw-item scroll-throw-glove">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-glove.png"
          alt=""
          width={78}
          height={92}
          className="scroll-throw-img scroll-throw-spin-ccw"
          draggable={false}
        />
      </div>
    </div>
  );
}
