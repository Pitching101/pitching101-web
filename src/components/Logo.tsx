import Link from "next/link";
import Image from "next/image";

/**
 * Transparent header wordmark — dark navy (~#181850) on clear PNG.
 * Intrinsic: logo-header-navy.png = 1040×220
 * Buttons / accents stay brand blue #3295fb.
 */
export default function Logo({
  className = "",
  height,
  width,
  variant: _variant = "primary",
  onClick,
  current,
}: {
  className?: string;
  /** primary / on-white / on-blue — kept for page-level compatibility. */
  variant?: "primary" | "on-white" | "on-blue";
  /** Display height in px. Ignored when `width` is set. */
  height?: number;
  /** Prefer width for a full readable wordmark (~140–180). */
  width?: number;
  onClick?: () => void;
  current?: boolean;
}) {
  void _variant;
  const src = "/assets/logo-header-navy.png";
  const aspect = 1040 / 220;
  const displayWidth = width ?? Math.round((height ?? 44) * aspect);
  const displayHeight = width
    ? Math.round(width / aspect)
    : (height ?? 44);

  return (
    <Link
      href="/"
      className={`site-logo inline-flex shrink-0 items-center ${className}`}
      aria-label="Pitching101 home"
      aria-current={current ? "page" : undefined}
      onClick={onClick}
    >
      <Image
        src={src}
        alt="Pitching101"
        width={displayWidth}
        height={displayHeight}
        className="h-auto w-auto max-w-none"
        style={{
          width: displayWidth,
          height: "auto",
          maxHeight: displayHeight,
        }}
        priority
      />
    </Link>
  );
}
