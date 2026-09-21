"use client";

import { useEffect, useRef } from "react";

const BALLS = 10;
const HOT_X = 22;
const HOT_Y = 20;
const MIN_GAP_MS = 95;
const MIN_SPEED = 0.42;

type Flight = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
  born: number;
  life: number;
};

/**
 * Fine-pointer only: the mouse is the glove, and moving it throws baseballs.
 * Hidden on phones. No extra gloves.
 */
export default function MouseGlove() {
  const gloveRef = useRef<HTMLImageElement>(null);
  const ballRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    const glove = gloveRef.current;
    const balls = ballRefs.current.filter((el): el is HTMLImageElement => Boolean(el));
    if (!glove || balls.length < BALLS) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const flights: Array<Flight | null> = Array.from({ length: BALLS }, () => null);
    let shown = false;
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;
    let lastThrow = 0;
    let raf = 0;

    const park = (el: HTMLImageElement) => {
      el.style.opacity = "0";
      el.style.transform = "translate3d(-80px, -80px, 0)";
    };
    balls.forEach(park);

    const paint = (now: number) => {
      flights.forEach((flight, i) => {
        const el = balls[i];
        if (!flight) {
          park(el);
          return;
        }
        const elapsed = (now - flight.born) / 1000;
        const t = Math.min(1, (now - flight.born) / flight.life);
        const x = flight.x + flight.vx * elapsed;
        const y = flight.y + flight.vy * elapsed + 520 * elapsed * elapsed;
        const fade = t < 0.1 ? t / 0.1 : 1 - Math.max(0, (t - 0.7) / 0.3);
        el.style.opacity = fade.toFixed(3);
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${(flight.spin * t).toFixed(1)}deg)`;
        if (t >= 1) flights[i] = null;
      });
      raf = window.requestAnimationFrame(paint);
    };
    raf = window.requestAnimationFrame(paint);

    const throwBall = (x: number, y: number, vx: number, vy: number, now: number) => {
      const slot = flights.findIndex((flight) => !flight);
      if (slot < 0) return;
      const speed = Math.hypot(vx, vy) || 1;
      const kick = 640 + Math.min(420, speed * 0.35);
      flights[slot] = {
        x: x - 16,
        y: y - 16,
        vx: (vx / speed) * kick,
        vy: (vy / speed) * kick - 140,
        spin: (vx >= 0 ? 1 : -1) * (220 + Math.random() * 200),
        born: now,
        life: 720 + Math.random() * 280,
      };
      lastThrow = now;
    };

    const place = (clientX: number, clientY: number, target: EventTarget | null, now: number) => {
      if (!shown) {
        shown = true;
        document.documentElement.classList.add("glove-cursor");
        glove.style.opacity = "1";
        lastX = clientX;
        lastY = clientY;
        lastT = now;
      }
      const ready =
        target instanceof Element &&
        Boolean(target.closest("a, button, [role='button'], input, textarea, select, label"));
      glove.style.transform = `translate3d(${clientX - HOT_X}px, ${clientY - HOT_Y}px, 0) scale(${ready ? 1.1 : 1})`;

      const dt = Math.max(0.008, (now - lastT) / 1000);
      const vx = (clientX - lastX) / dt;
      const vy = (clientY - lastY) / dt;
      const speed = Math.hypot(vx, vy) / 1000;
      if (
        !mq.matches &&
        shown &&
        now - lastThrow > MIN_GAP_MS &&
        speed > MIN_SPEED &&
        (Math.abs(clientX - lastX) > 10 || Math.abs(clientY - lastY) > 10)
      ) {
        throwBall(clientX, clientY, vx, vy, now);
      }
      lastX = clientX;
      lastY = clientY;
      lastT = now;
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      place(e.clientX, e.clientY, e.target, performance.now());
    };
    const onMouse = (e: MouseEvent) => {
      place(e.clientX, e.clientY, e.target, performance.now());
    };

    const leave = () => {
      shown = false;
      glove.style.opacity = "0";
      document.documentElement.classList.remove("glove-cursor");
      flights.fill(null);
      balls.forEach(park);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("glove-cursor");
    };
  }, []);

  return (
    <div className="mouse-throw" aria-hidden="true">
      {Array.from({ length: BALLS }, (_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          ref={(el) => {
            ballRefs.current[i] = el;
          }}
          className="mouse-throw-ball"
          src="/assets/pixel-baseball-solid.png"
          alt=""
          width={32}
          height={32}
          draggable={false}
        />
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={gloveRef}
        className="mouse-glove"
        src="/assets/pixel-glove-cursor.png"
        alt=""
        width={44}
        height={52}
        draggable={false}
      />
    </div>
  );
}
