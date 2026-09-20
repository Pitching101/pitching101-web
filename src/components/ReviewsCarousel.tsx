"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  TRUSTPILOT_URL,
  trustpilotReviews,
  type TrustpilotReview,
} from "@/data/trustpilotReviews";

const FADE_MS = 480;

function Stars({ n }: { n: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(n)));
  return (
    <p className="reviews-stars" aria-label={`${filled} out of 5 stars`}>
      {"★".repeat(filled)}
      <span className="text-ink-soft/30">{"★".repeat(5 - filled)}</span>
    </p>
  );
}

function ReviewCard({ r }: { r: TrustpilotReview }) {
  return (
    <div className="reviews-card-inner">
      <Stars n={r.stars} />
      {r.title ? (
        <p className="reviews-card-title">{r.title}</p>
      ) : null}
      <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
        “{r.quote}”
      </blockquote>
      <footer className="text-sm font-semibold text-ink-soft">— {r.name}</footer>
    </div>
  );
}

/** Auto-rotating Trustpilot reviews. The whole card fades out, then the next fades in. */
export default function ReviewsCarousel({ className = "" }: { className?: string }) {
  const reviews = trustpilotReviews;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [fade, setFade] = useState<"in" | "out">("in");
  const [busy, setBusy] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    for (const id of timers.current) window.clearTimeout(id);
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (reviews.length === 0) return;
      const next = ((i % reviews.length) + reviews.length) % reviews.length;
      if (next === index || busy) return;

      if (reduceMotion) {
        setIndex(next);
        return;
      }

      setBusy(true);
      setFade("out");
      const showNext = window.setTimeout(() => {
        setIndex(next);
        setFade("in");
        const unlock = window.setTimeout(() => {
          setBusy(false);
        }, FADE_MS);
        timers.current.push(unlock);
      }, FADE_MS);
      timers.current.push(showNext);
    },
    [busy, index, reduceMotion, reviews.length],
  );

  useEffect(() => {
    if (reduceMotion || paused || reviews.length === 0 || busy) return;
    const id = window.setInterval(() => {
      goTo(index + 1);
    }, 5600);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, reviews.length, busy, goTo, index]);

  if (reviews.length === 0) {
    return (
      <div className={`reviews-wrap ${className}`.trim()}>
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
        <p className="reviews-verified">Verified On Trustpilot</p>
        <ul className="space-y-4">
          {reviews.map((r) => (
            <li key={`${r.name}-${r.title}`} className="reviews-carousel">
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
      className={`reviews-wrap ${className}`.trim()}
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
      <p className="reviews-verified">Verified On Trustpilot</p>

      <div className="reviews-stage">
        <article
          className={`reviews-carousel reviews-card is-${fade}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <ReviewCard r={current} />
        </article>
      </div>

      <div className="reviews-controls">
        <div className="reviews-dots" role="tablist" aria-label="Choose review">
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
        <div className="reviews-arrows">
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
