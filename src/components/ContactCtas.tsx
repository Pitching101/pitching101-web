/** Shared Text / Call / Email CTAs — tel + sms + mailto. */
export default function ContactCtas({
  className = "",
  compact = false,
  mailtoSubject,
}: {
  className?: string;
  compact?: boolean;
  mailtoSubject?: string;
}) {
  const mailHref = mailtoSubject
    ? `mailto:nickdeisng@gmail.com?subject=${encodeURIComponent(mailtoSubject)}`
    : "mailto:nickdeisng@gmail.com";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      <a href="sms:8457682211" className="btn">
        {compact ? "Text 845-768-2211" : "Text 845-768-2211"}
      </a>
      <a href="tel:8457682211" className="btn">
        {compact ? "Call 845-768-2211" : "Call 845-768-2211"}
      </a>
      <a href={mailHref} className="btn-ghost">
        {compact ? "Email Coach Deising" : "Email nickdeisng@gmail.com"}
      </a>
    </div>
  );
}
