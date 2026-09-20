import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-semibold tracking-tight text-blue-dark ${className}`}
      aria-label="Pitching101 home"
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue text-lg text-white shadow-sm"
        aria-hidden="true"
      >
        ⚾
      </span>
      <span className="text-xl">
        Pitching<span className="text-blue">101</span>
      </span>
    </Link>
  );
}
