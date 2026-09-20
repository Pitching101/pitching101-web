"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Subtle scroll fade/slide — respects prefers-reduced-motion. */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  from?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-revealed");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = delayMs
    ? ({ ["--reveal-delay" as string]: `${delayMs}ms` } as CSSProperties)
    : undefined;

  const fromClass =
    from === "left"
      ? "reveal-from-left"
      : from === "right"
        ? "reveal-from-right"
        : "";

  return (
    <div
      ref={ref}
      className={`reveal ${fromClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
