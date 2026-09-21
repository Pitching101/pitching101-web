"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { FaqItem } from "@/data/siteCopy";

/** Tap a question — one answer at a time, first one open by default. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const panels = useRef<Array<HTMLDivElement | null>>([]);
  const skipMotion = useRef(true);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panels.current.forEach((panel, index) => {
      if (!panel) return;
      const next = open === index ? panel.scrollHeight : 0;
      if (skipMotion.current || reduce) {
        const previous = panel.style.transition;
        panel.style.transition = "none";
        panel.style.height = `${next}px`;
        void panel.offsetHeight;
        panel.style.transition = previous;
      } else {
        panel.style.height = `${next}px`;
      }
    });
    skipMotion.current = false;
    rootRef.current?.classList.add("is-ready");
  }, [open, items]);

  function toggle(index: number) {
    setOpen((current) => (current === index ? null : index));
  }

  return (
    <div ref={rootRef} className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-a-${index}`;
        return (
          <div
            key={item.q}
            className={`faq-item${isOpen ? " is-open" : ""}`}
          >
            <h3 className="faq-item-heading">
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className="faq-q-text">{item.q}</span>
              </button>
            </h3>
            <div
              className="faq-a-panel"
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
              inert={!isOpen}
              ref={(node) => {
                panels.current[index] = node;
              }}
            >
              <p className="faq-a">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
