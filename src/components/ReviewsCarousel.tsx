"use client";

import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    quote:
      "Our son finally understands what to work on between practices. Clear cues, no fluff.",
    attribution: "Parent Of 11-Year-Old Pitcher — Sample Review",
  },
  {
    quote:
      "We wanted healthy mechanics before chasing velocity. Nick keeps arm care first.",
    attribution: "Parent Of 9-Year-Old Pitcher — Sample Review",
  },
  {
    quote:
      "Affordable and practical. The DIY plan gave us drills we can do in the backyard.",
    attribution: "Parent Of 13-Year-Old Pitcher — Sample Review",
  },
  {
    quote:
      "Texting first made it easy. We knew what to expect before we committed.",
    attribution: "Naples-Area Parent — Sample Review",
  },
];

/** Auto-rotating parent testimonials. Static stack when prefers-reduced-motion. */
export default function ReviewsCarousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % reviews.length) + reviews.length) % reviews.length);
  }, []);

  if (reduceMotion) {
    return (
      <div className={`reviews-stack space-y-4 ${className}`.trim()} aria-label="Sample client reviews">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-dark">
          Sample Reviews · Placeholders Until Real Ones Arrive
        </p>
        <ul className="space-y-4">
          {reviews.map((r) => (
            <li key={r.attribution} className="reviews-carousel">
              <blockquote className="text-lg leading-relaxed text-ink">
                “{r.quote}”
              </blockquote>
              <footer className="mt-3 text-sm font-semibold text-ink-soft">
                — {r.attribution}
              </footer>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const current = reviews[index];

  return (
    <div
      className={`reviews-carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label="Sample client reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-dark">
        Sample Reviews · Placeholders Until Real Ones Arrive
      </p>

      <div className="reviews-slide space-y-4" aria-live="polite" aria-atomic="true">
        <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
          “{current.quote}”
        </blockquote>
        <footer className="text-sm font-semibold text-ink-soft">
          — {current.attribution}
        </footer>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex gap-2" role="tablist" aria-label="Choose review">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1} of ${reviews.length}`}
              className={`reviews-dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            className="reviews-nav"
            aria-label="Previous review"
            onClick={() => goTo(index - 1)}
          >
            Prev
          </button>
          <button
            type="button"
            className="reviews-nav"
            aria-label="Next review"
            onClick={() => goTo(index + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
