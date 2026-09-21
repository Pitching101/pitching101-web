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

type Result = {
  text: string;
  zone: number | null;
};

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
  const [result, setResult] = useState<Result>({
    text: "",
    zone: null,
  });
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
          const zone = ZONES[hit];
          finish({
            zone,
            text:
              zone === 5
                ? "Strike. Zone 5 — your best pitch is a strike."
                : `Strike. Zone ${zone}.`,
          });
        } else if (
          pitch.y > fieldBox.height - 8 ||
          pitch.x < -40 ||
          pitch.x > fieldBox.width + 8 ||
          pitch.y < -60
        ) {
          finish({ zone: null, text: "Ball. Missed the zone — toss another." });
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
    let { vx, vy, x, y } = drag;
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
    finish({
      zone,
      text:
        zone === 5
          ? "Strike. Zone 5 — your best pitch is a strike."
          : `Strike. Zone ${zone}.`,
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
    throwFrom(field.clientWidth * 0.5, field.clientHeight * 0.82, 40, -820);
  }

  return (
    <div className="pitch-game">
      <p className="ui-chip px-3.5 py-1.5">Desktop · mouse glove</p>
      <h2 className="ui-title ui-title-md">Throw a pitch</h2>
      <p className="pitch-game-copy">
        {reduceMotion
          ? "Click a zone to place a strike."
          : "The mouse is the glove. Flick toward the zone."}
      </p>
      <p className="pitch-game-note" aria-live="polite">
        {result.text}
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
      <p className="pitch-game-score" aria-live="polite">
        Strikes {strikes}
        {zoneFives > 0 ? ` · Zone 5 × ${zoneFives}` : ""}
      </p>
    </div>
  );
}
