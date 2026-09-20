import Link from "next/link";
import PixelBall from "./PixelBall";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-ink ${className}`}
      aria-label="Pitching101 home"
    >
      <span className="pixel-icon-frame inline-flex p-0.5" aria-hidden="true">
        <PixelBall size={32} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-pixel text-[9px] text-blue-dark sm:text-[10px]">
          Pitching<span className="text-blue">101</span>
        </span>
        <span className="mt-1.5 text-[10px] font-medium tracking-wide text-ink-soft">
          Naples, FL
        </span>
      </span>
    </Link>
  );
}
