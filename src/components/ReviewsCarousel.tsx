"use client";

import { useCallback, useEffect, useState } from "react";
import {
  TRUSTPILOT_URL,
  trustpilotReviews,
  type TrustpilotReview,
} from "@/data/trustpilotReviews";

function Stars({ n }: { n: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(n)));
  return (
    <span className="reviews-stars" aria-label={`${filled} out of 5 stars`}>
      {"★".repeat(filled)}
      <span className="text-ink-soft/30">{"★".repeat(5 - filled)}</span>
    </span>
  );
}

function ReviewCard({ r }: { r: TrustpilotReview }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Stars n={r.stars} />
        {r.title ? (
          <p className="text-sm font-semibold text-blue-dark">{r.title}</p>
        ) : null}
      </div>
      <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
        “{r.quote}”
      </blockquote>
      <footer className="text-sm font-semibold text-ink-soft">— {r.name}</footer>
    </>
  );
}

/** Auto-rotating Trustpilot reviews. Static stack when prefers-reduced-motion. */
export default function ReviewsCarousel({ className = "" }: { className?: string }) {
  const reviews = trustpilotReviews;
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
    if (reduceMotion || paused || reviews.length === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, reviews.length]);

  const goTo = useCallback(
    (i: number) => {
      if (reviews.length === 0) return;
      setIndex(((i % reviews.length) + reviews.length) % reviews.length);
    },
    [reviews.length],
  );

  if (reviews.length === 0) {
    return (
      <div className={`reviews-carousel ${className}`.trim()}>
        <p className="text-base text-ink-soft">
          Loading From Trustpilot… Reviews Will Appear Here When Available.
        </p>
        <a
          href={TRUSTPILOT_URL}
          className="reviews-tp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          See All On Trustpilot
        </a>
      </div>
    );
  }

  if (reduceMotion) {
    return (
      <div className={`reviews-stack space-y-4 ${className}`.trim()} aria-label="Client reviews from Trustpilot">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-dark">
          Verified On Trustpilot
        </p>
        <ul className="space-y-4">
          {reviews.map((r) => (
            <li key={`${r.name}-${r.title}`} className="reviews-carousel space-y-3">
              <ReviewCard r={r} />
            </li>
          ))}
        </ul>
        <a
          href={TRUSTPILOT_URL}
          className="reviews-tp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          See All On Trustpilot
        </a>
      </div>
    );
  }

  const current = reviews[index];

  return (
    <div
      className={`reviews-carousel space-y-4 ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client reviews from Trustpilot"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-dark">
        Verified On Trustpilot
      </p>

      <div className="reviews-slide space-y-3" aria-live="polite" aria-atomic="true">
        <ReviewCard r={current} />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-3">
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

      <a
        href={TRUSTPILOT_URL}
        className="reviews-tp-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        See All On Trustpilot
      </a>
    </div>
  );
}
