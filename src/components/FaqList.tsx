"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/siteCopy";

/** Tap a question — first one starts open, answers ease in and out. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="faq-list">
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
            <div className="faq-a-panel" id={panelId} role="region">
              <div className="faq-a-clip">
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
