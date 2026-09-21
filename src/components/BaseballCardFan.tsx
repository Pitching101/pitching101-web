"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/** A few baseball cards, not lined up like a SaaS row. */
export default function BaseballCardFan() {
  const nickRef = useRef<HTMLLIElement>(null);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const el = nickRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setGlow(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGlow(true);
          io.disconnect();
        }
      },
      { threshold: 0.45, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul className="bb-fan" aria-label="Coach Nick baseball cards">
      <li className="bb-card bb-card-art bb-card-left" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-pitcher-card.png"
          alt=""
          width={542}
          height={685}
          className="bb-card-art-img"
        />
      </li>
      <li
        ref={nickRef}
        className={`bb-card bb-card-main bb-card-nick${glow ? " is-glow" : ""}`}
      >
        <div className="bb-card-photo">
          <Image
            src="/assets/nick-coach-card.png"
            alt="Coach Nick in his jersey and hat, pointing at a glove"
            fill
            sizes="(max-width: 560px) 42vw, 240px"
            className="bb-card-img"
            priority={false}
          />
        </div>
        <p className="bb-card-name">Nick</p>
        <p className="bb-card-role">Pitching coach · Naples, FL</p>
      </li>
      <li className="bb-card bb-card-art bb-card-right" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/pixel-pitching-card.png"
          alt=""
          width={523}
          height={666}
          className="bb-card-art-img"
        />
      </li>
    </ul>
  );
}
