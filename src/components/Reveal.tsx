"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll fade/slide. Threshold is 0 so a block taller than the screen still
 * reveals when any part of it is visible. A ratio threshold (the old 0.08)
 * can never be reached for a list that is many viewports tall, which left
 * the guides shelf at opacity 0 on iPhone Safari.
 */
const ROOT_MARGIN = "0px 0px -32px 0px";

const pending = new Set<HTMLElement>();
let observer: IntersectionObserver | null = null;
let listening = false;
let scheduled = false;
let trail = 0;

function viewportHeight() {
  return window.innerHeight || document.documentElement.clientHeight || 0;
}

function markRevealed(el: HTMLElement) {
  el.classList.add("is-revealed");
  pending.delete(el);
  observer?.unobserve(el);
  if (pending.size === 0) stopListening();
}

function tallerThanViewport(el: HTMLElement) {
  const height = viewportHeight();
  if (height <= 0) return false;
  return el.getBoundingClientRect().height > height;
}

function anyPartVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const height = viewportHeight();
  const width = window.innerWidth || document.documentElement.clientWidth || 0;
  if (rect.width <= 0 || rect.height <= 0 || height <= 0 || width <= 0) return false;
  return rect.bottom > 0 && rect.top < height && rect.right > 0 && rect.left < width;
}

/** A fast fling can jump farther than one screen between frames. */
function scrolledPast(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.height > 0 && rect.bottom <= 0;
}

function flush() {
  for (const el of [...pending]) {
    if (!el.isConnected) {
      pending.delete(el);
      observer?.unobserve(el);
      continue;
    }
    if (el.classList.contains("is-revealed")) {
      pending.delete(el);
      observer?.unobserve(el);
      continue;
    }
    // Taller than the screen: a ratio threshold can never succeed, and some
    // iOS builds never fire the observer for an oversized target. Show it.
    if (tallerThanViewport(el) || anyPartVisible(el) || scrolledPast(el)) markRevealed(el);
  }
  if (pending.size === 0) stopListening();
}

function scheduleFlush() {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      flush();
    });
  }
  window.clearTimeout(trail);
  trail = window.setTimeout(flush, 150);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", scheduleFlush, { passive: true, capture: true });
  window.addEventListener("resize", scheduleFlush, { passive: true });
  window.visualViewport?.addEventListener("scroll", scheduleFlush);
  window.visualViewport?.addEventListener("resize", scheduleFlush);
}

function stopListening() {
  if (!listening && trail === 0) return;
  listening = false;
  window.clearTimeout(trail);
  trail = 0;
  window.removeEventListener("scroll", scheduleFlush, { capture: true });
  window.removeEventListener("resize", scheduleFlush);
  window.visualViewport?.removeEventListener("scroll", scheduleFlush);
  window.visualViewport?.removeEventListener("resize", scheduleFlush);
}

function ensureObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  try {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          markRevealed(entry.target as HTMLElement);
        }
      },
      { threshold: 0, rootMargin: ROOT_MARGIN },
    );
  } catch {
    observer = null;
  }
  return observer;
}

function watch(el: HTMLElement) {
  if (typeof IntersectionObserver === "undefined") {
    markRevealed(el);
    return;
  }
  pending.add(el);
  try {
    const io = ensureObserver();
    if (!io) {
      markRevealed(el);
      return;
    }
    io.observe(el);
  } catch {
    markRevealed(el);
    return;
  }
  startListening();
  flush();
}

function unwatch(el: HTMLElement) {
  pending.delete(el);
  observer?.unobserve(el);
  if (pending.size === 0) stopListening();
}

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
      markRevealed(el);
      return;
    }

    watch(el);
    return () => unwatch(el);
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
