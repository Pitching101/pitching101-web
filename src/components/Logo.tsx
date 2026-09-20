import Link from "next/link";
import PixelBall from "./PixelBall";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-semibold tracking-tight text-ink ${className}`}
      aria-label="Pitching101 home"
    >
      <span className="pixel-icon-frame inline-flex p-0.5" aria-hidden="true">
        <PixelBall size={32} />
      </span>
      <span className="text-xl leading-none">
        Pitching<span className="text-blue">101</span>
      </span>
    </Link>
  );
}
