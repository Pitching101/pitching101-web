import Link from "next/link";
import Image from "next/image";

/** Primary mark: bold-blue card (white baseball + Pitching101). */
export default function Logo({
  className = "",
  height = 44,
  variant: _variant = "primary",
}: {
  className?: string;
  /** primary / on-white / on-blue — all use the bold-blue card mark. */
  variant?: "primary" | "on-white" | "on-blue";
  height?: number;
}) {
  void _variant;
  const src = "/assets/logo-bold-blue-white.png";
  // Intrinsic size of logo-bold-blue-white.png
  const aspect = 578 / 324;
  const width = Math.round(height * aspect);

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Pitching101 home"
    >
      <Image
        src={src}
        alt="Pitching101"
        width={width}
        height={height}
        className="h-auto w-auto"
        style={{ height, width: "auto", maxHeight: height }}
        priority
      />
    </Link>
  );
}
