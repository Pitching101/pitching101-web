"use client";

import { useEffect, useRef } from "react";

/**
 * Fine-pointer only: the mouse becomes the pixel glove.
 * Pocket sits on the click point. Hidden on phones.
 */
export default function MouseGlove() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let shown = false;
    const hotX = 22;
    const hotY = 20;

    const place = (clientX: number, clientY: number, target: EventTarget | null) => {
      if (!shown) {
        shown = true;
        document.documentElement.classList.add("glove-cursor");
        el.style.opacity = "1";
      }
      const ready =
        target instanceof Element &&
        Boolean(target.closest("a, button, [role='button'], input, textarea, select, label"));
      el.style.transform = `translate3d(${clientX - hotX}px, ${clientY - hotY}px, 0) scale(${ready ? 1.1 : 1})`;
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      place(e.clientX, e.clientY, e.target);
    };
    const onMouse = (e: MouseEvent) => {
      place(e.clientX, e.clientY, e.target);
    };

    const leave = () => {
      shown = false;
      el.style.opacity = "0";
      document.documentElement.classList.remove("glove-cursor");
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("glove-cursor");
    };
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className="mouse-glove"
      src="/assets/pixel-glove-cursor.png"
      alt=""
      width={44}
      height={52}
      draggable={false}
      aria-hidden="true"
    />
  );
}
