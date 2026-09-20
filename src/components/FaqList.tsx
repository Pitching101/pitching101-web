import type { FaqItem } from "@/data/siteCopy";

/** Tap a question — no wall of answers. JSON-LD still carries the full FAQ. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary className="faq-q">{item.q}</summary>
          <p className="faq-a">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
