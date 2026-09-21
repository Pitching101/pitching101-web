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
const GRAVITY = 980;
const BALL = 30;

type Pitch = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Call = "strike" | "ball";
type MissKind = "high" | "dirt" | "left" | "right" | "miss";

type Result = {
  call: Call | "";
  zone: number | null;
  kicker: string;
  text: string;
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

function strikeResult(zone: number, last: { current: string }): Result {
  return {
    call: "strike",
    zone,
    kicker: zone === 5 ? "Strike · Zone 5" : `Strike · Zone ${zone}`,
    text: pickLine(ZONE_CUES[zone], last),
  };
}

function missKindFromPoint(
  cx: number,
  cy: number,
  cells: Array<HTMLButtonElement | null>,
): MissKind {
  const first = cells[0];
  const last = cells[8];
  if (!first || !last) return "miss";
  const a = first.getBoundingClientRect();
  const b = last.getBoundingClientRect();
  const left = Math.min(a.left, b.left);
  const right = Math.max(a.right, b.right);
  const top = Math.min(a.top, b.top);
  const bottom = Math.max(a.bottom, b.bottom);
  if (cy < top) return "high";
  if (cy > bottom) return "dirt";
  if (cx < left) return "left";
  if (cx > right) return "right";
  return "miss";
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
  const pitchRef = useRef<Pitch | null>(null);
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
  const [result, setResult] = useState<Result>(IDLE);
  const [strikes, setStrikes] = useState(0);
  const [zoneFives, setZoneFives] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [armed, setArmed] = useState(false);

  const parkBall = useCallback(() => {
    const ball = ballRef.current;
    if (!ball) return;
    ball.style.opacity = "0";
    ball.style.transform = "translate3d(-80px, -80px, 0)";
  }, []);

  const finish = useCallback(
    (next: Result) => {
      pitchRef.current = null;
      parkBall();
      setResult(next);
      if (next.zone) {
        setStrikes((n) => n + 1);
        if (next.zone === 5) setZoneFives((n) => n + 1);
      }
      cellRefs.current.forEach((cell, i) => {
        if (!cell) return;
        cell.classList.toggle("is-hit", ZONES[i] === next.zone);
      });
    },
    [parkBall],
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
      const pitch = pitchRef.current;
      const ball = ballRef.current;
      const field = fieldRef.current;
      if (pitch && ball && field) {
        const last = ball.dataset.t ? Number(ball.dataset.t) : now;
        const dt = Math.min(0.032, Math.max(0.008, (now - last) / 1000));
        ball.dataset.t = String(now);
        pitch.vy += GRAVITY * dt;
        pitch.x += pitch.vx * dt;
        pitch.y += pitch.vy * dt;
        ball.style.opacity = "1";
        ball.style.transform = `translate3d(${pitch.x.toFixed(1)}px, ${pitch.y.toFixed(1)}px, 0) rotate(${((now / 4) % 360).toFixed(0)}deg)`;

        const fieldBox = field.getBoundingClientRect();
        const cx = fieldBox.left + pitch.x + BALL / 2;
        const cy = fieldBox.top + pitch.y + BALL / 2;
        const hit = cellRefs.current.findIndex((cell) => {
          if (!cell) return false;
          const box = cell.getBoundingClientRect();
          return cx >= box.left && cx <= box.right && cy >= box.top && cy <= box.bottom;
        });
        if (hit >= 0) {
          finish(strikeResult(ZONES[hit], lastCue));
        } else if (
          pitch.y > fieldBox.height - 8 ||
          pitch.x < -40 ||
          pitch.x > fieldBox.width + 8 ||
          pitch.y < -60
        ) {
          const kind = missKindFromPoint(cx, cy, cellRefs.current);
          finish({
            call: "ball",
            zone: null,
            kicker: "Ball",
            text: pickLine(MISS_CUES[kind], lastCue),
          });
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
  }, [finish, parkBall]);

  function fieldPoint(event: PointerEvent<HTMLDivElement>) {
    const field = fieldRef.current;
    if (!field) return { x: 0, y: 0 };
    const box = field.getBoundingClientRect();
    return { x: event.clientX - box.left, y: event.clientY - box.top };
  }

  function throwFrom(x: number, y: number, vx: number, vy: number) {
    const ball = ballRef.current;
    if (!ball) return;
    const speed = Math.hypot(vx, vy);
    if (speed < MIN_SPEED && vy > -120) return;
    const kick = Math.min(1180, Math.max(520, speed));
    const nx = vx / (speed || 1);
    const ny = vy / (speed || 1);
    pitchRef.current = {
      x: x - BALL / 2,
      y: y - BALL / 2,
      vx: nx * kick,
      vy: Math.min(-220, ny * kick),
    };
    ball.dataset.t = String(performance.now());
    cellRefs.current.forEach((cell) => cell?.classList.remove("is-hit"));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    if (reduceMotion) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    document.documentElement.classList.add("pitch-playing");
    pitchRef.current = null;
    const point = fieldPoint(event);
    dragRef.current = {
      ...point,
      vx: 0,
      vy: 0,
      t: performance.now(),
      startX: point.x,
      startY: point.y,
    };
    setArmed(true);
    const ball = ballRef.current;
    if (ball) {
      ball.style.opacity = "1";
      ball.style.transform = `translate3d(${point.x - BALL / 2}px, ${point.y - BALL / 2}px, 0)`;
    }
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const ball = ballRef.current;
    if (!drag || !ball) return;
    const now = performance.now();
    const point = fieldPoint(event);
    const dt = Math.max(0.008, (now - drag.t) / 1000);
    drag.vx = (point.x - drag.x) / dt;
    drag.vy = (point.y - drag.y) / dt;
    drag.x = point.x;
    drag.y = point.y;
    drag.t = now;
    ball.style.transform = `translate3d(${point.x - BALL / 2}px, ${point.y - BALL / 2}px, 0)`;
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
    throwFrom(x, y, vx, vy);
  }

  function onPointerLeave() {
    if (dragRef.current) return;
    document.documentElement.classList.remove("pitch-playing");
  }

  function placeZone(zone: number) {
    finish(strikeResult(zone, lastCue));
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
    throwFrom(field.clientWidth * 0.5, field.clientHeight * 0.82, 40, -820);
  }

  return (
    <div className="pitch-game">
      <p className="ui-chip px-3.5 py-1.5">Desktop · mouse glove</p>
      <h2 className="ui-title ui-title-md">Throw a pitch</h2>
      <p className="pitch-game-copy">
        {reduceMotion
          ? "Click a zone. I'll talk like we would in a lesson."
          : "The mouse is the glove. Flick toward the zone — I'll talk like a lesson."}
      </p>
      <div
        ref={fieldRef}
        className={`pitch-field${armed ? " is-armed" : ""}`}
        role="application"
        aria-label="Throw a pitch at the strike zone with the mouse"
        tabIndex={0}
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
        <p className="pitch-rubber" aria-hidden="true">
          Flick from here
        </p>
      </div>
      <p className={`pitch-call${result.call ? ` is-${result.call}` : ""}`} aria-live="polite">
        <span className="pitch-call-kicker">{result.kicker}</span>
        <span className="pitch-call-line">{result.text}</span>
      </p>
      <p className="pitch-game-score" aria-live="polite">
        Strikes {strikes}
        {zoneFives > 0 ? ` · Zone 5 × ${zoneFives}` : ""}
      </p>
    </div>
  );
}
