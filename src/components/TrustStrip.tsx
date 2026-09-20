/** Parent trust strip — short ELI5 points */
export default function TrustStrip({ className = "" }: { className?: string }) {
  const items = [
    { label: "Arm care first", body: "Healthy mechanics before velocity." },
    { label: "Clear next reps", body: "Always know what to practice." },
    { label: "Text before you drive", body: "No street address — reach out first." },
  ];

  return (
    <aside
      className={`trust-strip ${className}`}
      aria-label="Parent trust highlights"
    >
      <ul className="grid gap-0 sm:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="trust-strip-item border-b border-blue/15 px-5 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:py-6"
          >
            <p className="text-sm font-semibold leading-snug text-blue-dark">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
