"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { FaqItem } from "@/data/siteCopy";

/** Tap a question — first one starts open, answers ease in and out. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set([0]));
  const [ready, setReady] = useState(false);
  const panels = useRef<Array<HTMLDivElement | null>>([]);
  const skipMotion = useRef(true);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panels.current.forEach((panel, index) => {
      if (!panel) return;
      const next = open.has(index) ? panel.scrollHeight : 0;
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
    setReady(true);
  }, [open, items]);

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className={`faq-list${ready ? " is-ready" : ""}`}>
      {items.map((item, index) => {
        const isOpen = open.has(index);
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
                {item.q}
              </button>
            </h3>
            <div
              className="faq-a-panel"
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
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
