import Link from "next/link";
import PixelBall from "./PixelBall";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-ink ${className}`}
      aria-label="Pitching101 home"
    >
      <span className="pixel-icon-frame pixel-ball-bob inline-flex p-0.5" aria-hidden="true">
        <PixelBall size={32} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-pixel text-sm font-semibold text-blue-light sm:text-base">
          Pitching<span className="text-yellow">101</span>
        </span>
        <span className="mt-1 font-pixel-ui text-[0.85rem] tracking-wide text-ink-soft">
          Naples, FL
        </span>
      </span>
    </Link>
  );
}
