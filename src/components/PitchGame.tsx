"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

const ZONES = [7, 8, 9, 4, 5, 6, 1, 2, 3] as const;
const MIN_SPEED = 280;
const BALL = 30;
const KICK_LO = 520;
const KICK_HI = 1180;

function nowMs() {
  return performance.now();
}

type CellBox = {
  zone: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
};

type MissKind = "high" | "dirt" | "left" | "right" | "miss";

type Landing = {
  x: number;
  y: number;
  zone: number | null;
  miss: MissKind | null;
};

type Flight = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  t0: number;
  dur: number;
  landing: Landing;
};

type Card = "" | "looking" | "walk";

type Book = {
  balls: number;
  strikes: number;
  looking: number;
  walks: number;
  card: Card;
};

type Call = "strike" | "ball" | "looking" | "walk" | "";

type Result = {
  call: Call;
  zone: number | null;
  kicker: string;
  text: string;
};

const EMPTY_BOOK: Book = {
  balls: 0,
  strikes: 0,
  looking: 0,
  walks: 0,
  card: "",
};

const IDLE: Result = {
  call: "",
  zone: null,
  kicker: "Lesson",
  text: "Flick one in. I'll talk like we would on the mound.",
};

/** Same cues as a lesson — hunt the middle, one thought, don't get cute. */
const ZONE_CUES: Record<number, string[]> = {
  5: [
    "That's the one. Hunt the middle before you get cute.",
    "Zone 5. Your best pitch is a strike.",
    "Middle of the nine-box. That's the plan.",
  ],
  8: [
    "Up a little. Finish it and it's still a strike.",
    "High middle. Easy — don't climb from here.",
    "That's up. We can live there if you stay on top of it.",
  ],
  2: [
    "Down in the zone. Don't try to bury it.",
    "Low middle. Plenty. Let it be a strike.",
    "That's down. Nice. Save the nasty stuff.",
  ],
  4: [
    "Left side. Fine — now find 5 again.",
    "That's a corner. We'll use it once the middle is easy.",
    "Glove-side middle. Strike. Don't live here yet.",
  ],
  6: [
    "Right side. Strike. Come back through the middle.",
    "That's a corner. We'll get cute after zone 5 is easy.",
    "Arm-side middle. Good. Next one, hunt 5.",
  ],
  7: [
    "Up and in. We don't live here yet.",
    "High and left. That's getting cute — find the middle.",
    "Strike, but that's a tough one. Hunt 5 first.",
  ],
  9: [
    "Up and away. Fine for later. Middle first.",
    "High and right. Don't chase that as the plan.",
    "Strike. Now come back through zone 5.",
  ],
  1: [
    "Down and in. Easy. Don't bury it.",
    "Low and left. Strike — next one, middle.",
    "That's down there. We can use it. Don't live there.",
  ],
  3: [
    "Down and away. Strike. Come back through 5.",
    "Low and right. Fine. Middle is still the plan.",
    "That's a corner. We'll get there. Hunt the middle.",
  ],
};

const MISS_CUES: Record<MissKind, string[]> = {
  high: [
    "Up. Stay on top of it — don't climb.",
    "That's high. Easy toss. Finish to the plate.",
    "Ball, up. Slow it down. Strikes first.",
  ],
  dirt: [
    "In the dirt. Don't bury it. A strike is plenty.",
    "Bounced. Easy catch energy — then you earn the juice.",
    "Ball, down. Finish it. Don't aim at the ground.",
  ],
  left: [
    "Missed left. Slow it down. Hunt the middle.",
    "Ball, glove side. One cue: zone 5.",
    "Pulled it. Easy. Come back through the middle.",
  ],
  right: [
    "Missed right. Don't spray it. Middle first.",
    "Ball, arm side. One cue: hunt 5.",
    "Sailed. Slow it down. Strikes first.",
  ],
  miss: [
    "Ball. Missed the zone — toss another.",
    "Outside. Slow it down. Easy catch, then a strike.",
    "Spraying a bit. One cue. Hunt the middle.",
  ],
};

function pickLine(pool: string[], last: { current: string }) {
  const choices = pool.filter((line) => line !== last.current);
  const source = choices.length ? choices : pool;
  const line = source[Math.floor(Math.random() * source.length)];
  last.current = line;
  return line;
}

/** Harder flick flies farther up the nine-box — not through 1-2-3 on the way. */
function throwReach(speed: number) {
  const t = Math.min(1, Math.max(0, (speed - KICK_LO) / (KICK_HI - KICK_LO)));
  return 300 + t * 220;
}

function landingForThrow(
  startX: number,
  startY: number,
  vx: number,
  vy: number,
  cells: CellBox[],
): Landing {
  const speed = Math.hypot(vx, vy) || 1;
  const reach = throwReach(speed);
  const lx = startX + (vx / speed) * reach;
  const ly = startY + (vy / speed) * reach;
  if (!cells.length) {
    return { x: lx, y: ly, zone: null, miss: "miss" };
  }
  const hit = cells.find(
    (cell) => lx >= cell.left && lx <= cell.right && ly >= cell.top && ly <= cell.bottom,
  );
  if (hit) {
    return {
      x: (hit.left + hit.right) / 2,
      y: (hit.top + hit.bottom) / 2,
      zone: hit.zone,
      miss: null,
    };
  }

  const left = Math.min(...cells.map((c) => c.left));
  const right = Math.max(...cells.map((c) => c.right));
  const top = Math.min(...cells.map((c) => c.top));
  const bottom = Math.max(...cells.map((c) => c.bottom));
  let miss: MissKind = "miss";
  if (ly < top) miss = "high";
  else if (ly > bottom) miss = "dirt";
  else if (lx < left) miss = "left";
  else if (lx > right) miss = "right";
  return { x: lx, y: ly, zone: null, miss };
}

function cellsFromField(
  field: HTMLElement,
  nodes: Array<HTMLButtonElement | null>,
): CellBox[] {
  const box = field.getBoundingClientRect();
  return ZONES.map((zone, i) => {
    const cell = nodes[i];
    if (!cell) {
      return { zone, left: 0, top: 0, right: 0, bottom: 0 };
    }
    const r = cell.getBoundingClientRect();
    return {
      zone,
      left: r.left - box.left,
      top: r.top - box.top,
      right: r.right - box.left,
      bottom: r.bottom - box.top,
    };
  });
}

/**
 * Desktop only: flick the mouse glove at the nine-box.
 * Hidden on phones. Reduced motion places a pitch on click.
 */
export default function PitchGame() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!desktop) return null;
  return <PitchGameField />;
}

function PitchGameField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLImageElement>(null);
  const cellRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const flightRef = useRef<Flight | null>(null);
  const dragRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    t: number;
    startX: number;
    startY: number;
  } | null>(null);
  const rafRef = useRef(0);
  const lastCue = useRef("");
  const bookRef = useRef<Book>(EMPTY_BOOK);
  const [result, setResult] = useState<Result>(IDLE);
  const [book, setBook] = useState<Book>(EMPTY_BOOK);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [armed, setArmed] = useState(false);

  const parkBall = useCallback(() => {
    const ball = ballRef.current;
    if (!ball) return;
    ball.style.opacity = "0";
    ball.style.transform = "translate3d(-80px, -80px, 0)";
  }, []);

  const paintBall = useCallback((x: number, y: number, angle = 0) => {
    const ball = ballRef.current;
    if (!ball) return;
    ball.style.opacity = "1";
    ball.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${angle.toFixed(0)}deg)`;
  }, []);

  const finish = useCallback(
    (landing: Landing) => {
      flightRef.current = null;
      paintBall(landing.x - BALL / 2, landing.y - BALL / 2, 0);

      const prev = bookRef.current;
      let next: Book;
      let nextResult: Result;
      if (landing.zone) {
        const strikes = prev.strikes + 1;
        if (strikes >= 3) {
          next = {
            balls: 0,
            strikes: 0,
            looking: prev.looking + 1,
            walks: prev.walks,
            card: "looking",
          };
          nextResult = {
            call: "looking",
            zone: landing.zone,
            kicker: "Looking",
            text: "That's three looking.",
          };
        } else {
          next = { ...prev, strikes, card: "" };
          nextResult = {
            call: "strike",
            zone: landing.zone,
            kicker: landing.zone === 5 ? "Strike · Zone 5" : `Strike · Zone ${landing.zone}`,
            text: pickLine(ZONE_CUES[landing.zone], lastCue),
          };
        }
      } else {
        const balls = prev.balls + 1;
        if (balls >= 4) {
          next = {
            balls: 0,
            strikes: 0,
            looking: prev.looking,
            walks: prev.walks + 1,
            card: "walk",
          };
          nextResult = {
            call: "walk",
            zone: null,
            kicker: "Walk",
            text: "That's a walk. Next hitter.",
          };
        } else {
          next = { ...prev, balls, card: "" };
          const kind = landing.miss ?? "miss";
          nextResult = {
            call: "ball",
            zone: null,
            kicker: "Ball",
            text: pickLine(MISS_CUES[kind], lastCue),
          };
        }
      }
      bookRef.current = next;
      setBook(next);
      setResult(nextResult);

      cellRefs.current.forEach((cell, i) => {
        if (!cell) return;
        cell.classList.toggle("is-hit", ZONES[i] === landing.zone);
      });
    },
    [paintBall],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const tick = (now: number) => {
      const flight = flightRef.current;
      if (flight) {
        const t = Math.min(1, (now - flight.t0) / flight.dur);
        const eased = 1 - (1 - t) ** 3;
        const arc = Math.sin(Math.PI * t) * 36;
        const x = flight.x0 + (flight.x1 - flight.x0) * eased;
        const y = flight.y0 + (flight.y1 - flight.y0) * eased - arc;
        paintBall(x, y, (now / 4) % 360);
        if (t >= 1) {
          flightRef.current = null;
          finish(flight.landing);
        }
      }
      rafRef.current = window.requestAnimationFrame(tick);
    };
    rafRef.current = window.requestAnimationFrame(tick);
    parkBall();
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("pitch-playing");
    };
  }, [finish, paintBall, parkBall]);

  function fieldPoint(event: PointerEvent<HTMLDivElement>) {
    const field = fieldRef.current;
    if (!field) return { x: 0, y: 0 };
    const box = field.getBoundingClientRect();
    return { x: event.clientX - box.left, y: event.clientY - box.top };
  }

  function throwFrom(
    originX: number,
    originY: number,
    x: number,
    y: number,
    vx: number,
    vy: number,
  ) {
    const ball = ballRef.current;
    const field = fieldRef.current;
    if (!ball || !field) return;
    const speed = Math.hypot(vx, vy);
    if (speed < MIN_SPEED && vy > -120) return;
    const kick = Math.min(KICK_HI, Math.max(KICK_LO, speed));
    const nx = vx / (speed || 1);
    const ny = vy / (speed || 1);
    const cells = cellsFromField(field, cellRefs.current);
    const releaseHit = cells.find(
      (cell) => x >= cell.left && x <= cell.right && y >= cell.top && y <= cell.bottom,
    );
    const landing = releaseHit
      ? {
          x: (releaseHit.left + releaseHit.right) / 2,
          y: (releaseHit.top + releaseHit.bottom) / 2,
          zone: releaseHit.zone,
          miss: null,
        }
      : landingForThrow(originX, originY, nx * kick, ny * kick, cells);
    if (!landing.zone) {
      landing.x = Math.min(field.clientWidth - 18, Math.max(18, landing.x));
      landing.y = Math.min(field.clientHeight - 18, Math.max(18, landing.y));
    }
    const t = Math.min(1, Math.max(0, (kick - KICK_LO) / (KICK_HI - KICK_LO)));
    flightRef.current = {
      x0: x - BALL / 2,
      y0: y - BALL / 2,
      x1: landing.x - BALL / 2,
      y1: landing.y - BALL / 2,
      t0: nowMs(),
      dur: 520 - t * 160,
      landing,
    };
    cellRefs.current.forEach((cell) => cell?.classList.remove("is-hit"));
    if (bookRef.current.card) {
      const cleared = { ...bookRef.current, card: "" as Card };
      bookRef.current = cleared;
      setBook(cleared);
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    if (reduceMotion) return;
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      /* synthetic events and some browsers skip capture */
    }
    document.documentElement.classList.add("pitch-playing");
    flightRef.current = null;
    const point = fieldPoint(event);
    dragRef.current = {
      ...point,
      vx: 0,
      vy: 0,
      t: nowMs(),
      startX: point.x,
      startY: point.y,
    };
    setArmed(true);
    if (bookRef.current.card) {
      const cleared = { ...bookRef.current, card: "" as Card };
      bookRef.current = cleared;
      setBook(cleared);
    }
    paintBall(point.x - BALL / 2, point.y - BALL / 2);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    const now = nowMs();
    const point = fieldPoint(event);
    const dt = Math.max(0.008, (now - drag.t) / 1000);
    drag.vx = (point.x - drag.x) / dt;
    drag.vy = (point.y - drag.y) / dt;
    drag.x = point.x;
    drag.y = point.y;
    drag.t = now;
    paintBall(point.x - BALL / 2, point.y - BALL / 2);
  }

  function onPointerUp() {
    const drag = dragRef.current;
    dragRef.current = null;
    setArmed(false);
    if (!drag) return;
    let { vx, vy } = drag;
    const { x, y } = drag;
    if (Math.hypot(vx, vy) < MIN_SPEED) {
      vx = (x - drag.startX) * 8;
      vy = (y - drag.startY) * 8;
    }
    throwFrom(drag.startX, drag.startY, x, y, vx, vy);
  }

  function onPointerLeave() {
    if (dragRef.current) return;
    document.documentElement.classList.remove("pitch-playing");
  }

  function placeZone(zone: number) {
    const field = fieldRef.current;
    const cell = cellRefs.current[ZONES.indexOf(zone as (typeof ZONES)[number])];
    if (!field || !cell) {
      finish({ x: 0, y: 0, zone, miss: null });
      return;
    }
    const box = field.getBoundingClientRect();
    const r = cell.getBoundingClientRect();
    finish({
      x: r.left - box.left + r.width / 2,
      y: r.top - box.top + r.height / 2,
      zone,
      miss: null,
    });
  }

  function onKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
    if (reduceMotion) {
      placeZone(5);
      return;
    }
    const field = fieldRef.current;
    if (!field) return;
    const x = field.clientWidth * 0.5;
    const y = field.clientHeight * 0.82;
    throwFrom(x, y, x, y, 0, -560);
  }

  return (
    <div className="pitch-game">
      <p className="ui-chip px-3.5 py-1.5">Desktop · mouse glove</p>
      <h2 className="ui-title ui-title-md">Throw a pitch</h2>
      <p className="pitch-game-copy">
        {reduceMotion
          ? "Click a zone. I'll talk like we would in a lesson."
          : "The mouse is the glove. Flick at the box you want — 1 through 9."}
      </p>
      <div
        ref={fieldRef}
        className={`pitch-field${armed ? " is-armed" : ""}${book.card ? ` is-${book.card}` : ""}`}
        role="application"
        aria-label="Throw a pitch at the strike zone with the mouse"
        tabIndex={0}
        data-pitch-zone={result.zone ?? ""}
        data-pitch-card={book.card}
        data-pitch-note={result.text}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          dragRef.current = null;
          setArmed(false);
        }}
        onPointerEnter={() => document.documentElement.classList.add("pitch-playing")}
        onPointerLeave={onPointerLeave}
        onKeyDown={onKey}
      >
        <div className="pitch-zone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/pixel-strike-zone.png"
            alt="Nine-box strike zone with zone 5, the middle, highlighted"
            width={900}
            height={670}
            draggable={false}
          />
          <div className="pitch-grid">
            {ZONES.map((zone, i) => (
              <button
                key={zone}
                type="button"
                ref={(node) => {
                  cellRefs.current[i] = node;
                }}
                className="pitch-cell"
                aria-label={`Zone ${zone}`}
                tabIndex={reduceMotion ? 0 : -1}
                onClick={() => {
                  if (reduceMotion) placeZone(zone);
                }}
              />
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ballRef}
          className="pitch-ball"
          src="/assets/pixel-baseball-solid.png"
          alt=""
          width={BALL}
          height={BALL}
          draggable={false}
        />
        {book.card === "looking" ? (
          <p className="pitch-k-mark" role="img" aria-label="Strikeout looking">
            <span className="pitch-k-flip">
              <span className="pitch-k-glyph">K</span>
            </span>
            <span className="pitch-k-caption">Looking</span>
          </p>
        ) : null}
        {book.card === "walk" ? (
          <p className="pitch-k-mark is-walk" role="img" aria-label="Walk">
            <span className="pitch-k-walk">BB</span>
            <span className="pitch-k-caption">Take your base</span>
          </p>
        ) : null}
        <p className="pitch-rubber" aria-hidden="true">
          Flick from here
        </p>
      </div>
      <p className={`pitch-call${result.call ? ` is-${result.call}` : ""}`} aria-live="polite">
        <span className="pitch-call-kicker">{result.kicker}</span>
        <span className="pitch-call-line">{result.text}</span>
      </p>
      <div
        className="pitch-count"
        aria-live="polite"
        aria-label={`Balls ${book.balls}, strikes ${book.strikes}`}
      >
        <CountRow label="B" filled={book.balls} total={4} />
        <CountRow label="S" filled={book.strikes} total={3} strike />
      </div>
      <p
        className="pitch-game-score"
        aria-label={`Strikeouts looking ${book.looking}${book.walks > 0 ? `, walks ${book.walks}` : ""}`}
      >
        <span className="pitch-k-flip pitch-k-inline" aria-hidden="true">
          K
        </span>
        {` ${book.looking}`}
        {book.walks > 0 ? ` · BB ${book.walks}` : ""}
      </p>
    </div>
  );
}

function CountRow({
  label,
  filled,
  total,
  strike = false,
}: {
  label: string;
  filled: number;
  total: number;
  strike?: boolean;
}) {
  return (
    <span className="pitch-count-row">
      <span className="pitch-count-label">{label}</span>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={`${label}-${i}`}
          className={`pitch-dot${strike ? " is-strike" : ""}${i < filled ? " is-on" : ""}`}
        />
      ))}
    </span>
  );
}
