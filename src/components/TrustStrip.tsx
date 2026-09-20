/** Parent trust strip — arm care / plain feedback / no street—call first */
export default function TrustStrip({ className = "" }: { className?: string }) {
  const items = [
    {
      label: "Arm care first",
      body: "Healthy mechanics before velocity talk.",
    },
    {
      label: "Plain feedback",
      body: "You always know what to practice next.",
    },
    {
      label: "Call before you drive",
      body: "No street address listed — call or email first.",
    },
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
            className="trust-strip-item border-b border-blue-light px-5 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:py-6"
          >
            <p className="font-pixel text-[0.55rem] leading-snug text-blue-dark">
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
