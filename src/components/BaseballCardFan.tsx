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
    <ul className="bb-fan" aria-label="Coach Deising baseball cards">
      <li className="bb-card bb-card-left">
        <p className="bb-card-kicker">Roster</p>
        <p className="bb-card-stat">8–16</p>
        <p className="bb-card-label">Ages</p>
        <p className="bb-card-note">Youth pitchers on the mound.</p>
      </li>
      <li
        ref={nickRef}
        className={`bb-card bb-card-main bb-card-nick${glow ? " is-glow" : ""}`}
      >
        <div className="bb-card-photo">
          <Image
            src="/assets/nick-coach-card.png"
            alt="Coach Deising in his jersey and hat, pointing at a glove"
            fill
            sizes="(max-width: 560px) 42vw, 240px"
            className="bb-card-img"
            priority={false}
          />
        </div>
        <p className="bb-card-name">Coach Deising</p>
        <p className="bb-card-role">Gulfshore JV head coach</p>
      </li>
      <li className="bb-card bb-card-right">
        <p className="bb-card-kicker">People</p>
        <p className="bb-card-stars" aria-label="5 out of 5 stars">
          ★★★★★
        </p>
        <p className="bb-card-quote">
          “He takes the time to teach the kids proper warm up.”
        </p>
        <p className="bb-card-attr">Eric · Trustpilot</p>
      </li>
    </ul>
  );
}
