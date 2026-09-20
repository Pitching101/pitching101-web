import Image from "next/image";

/** A few baseball cards, not lined up like a SaaS row. */
export default function BaseballCardFan() {
  return (
    <ul className="bb-fan" aria-label="Coach Nick baseball cards">
      <li className="bb-card bb-card-left">
        <p className="bb-card-kicker">Roster</p>
        <p className="bb-card-stat">8–14</p>
        <p className="bb-card-label">Ages</p>
        <p className="bb-card-note">Still learning the mound.</p>
      </li>
      <li className="bb-card bb-card-main">
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
      <li className="bb-card bb-card-right">
        <p className="bb-card-kicker">Parents</p>
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
