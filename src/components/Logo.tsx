import Link from "next/link";
import Image from "next/image";

/**
 * Full Pitching101 wordmark for the white site header.
 * Intrinsic: logo-proper-blue-on-white.png = 1458×392
 */
export default function Logo({
  className = "",
  height,
  width,
  variant: _variant = "primary",
}: {
  className?: string;
  /** primary / on-white / on-blue — kept for page-level compatibility. */
  variant?: "primary" | "on-white" | "on-blue";
  /** Display height in px. Ignored when `width` is set. */
  height?: number;
  /** Prefer width for a full readable wordmark (~140–180). */
  width?: number;
}) {
  void _variant;
  const src = "/assets/logo-proper-blue-on-white.png";
  const aspect = 1458 / 392;
  const displayWidth = width ?? Math.round((height ?? 56) * aspect);
  const displayHeight = width
    ? Math.round(width / aspect)
    : (height ?? 56);

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Pitching101 home"
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
