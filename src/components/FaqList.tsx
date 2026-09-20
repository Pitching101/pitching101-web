import type { FaqItem } from "@/data/siteCopy";

/** Question-and-answer list answer engines can quote. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <dl className="faq-list">
      {items.map((item) => (
        <div key={item.q} className="faq-item">
          <dt>
            <h3 className="faq-q">{item.q}</h3>
          </dt>
          <dd className="faq-a">{item.a}</dd>
        </div>
      ))}
    </dl>
  );
}
