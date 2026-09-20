import Link from "next/link";
import Image from "next/image";

/** Official Pitching101 mark — pick variant to match section background. */
export default function Logo({
  className = "",
  variant = "on-white",
  height = 40,
}: {
  className?: string;
  /** on-white: brand-blue mark on transparent/white (nav / light bands).
   *  on-blue: white mark on bright blue badge (colored / blue sections). */
  variant?: "on-white" | "on-blue";
  height?: number;
}) {
  const src =
    variant === "on-blue"
      ? "/assets/logo-white-on-blue.png"
      : "/assets/logo-blue-on-white.png";

  // Proper blue-on-white: 1458×392; white-on-blue badge: 1142×654
  const aspect = variant === "on-blue" ? 1142 / 654 : 1458 / 392;
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
        className="h-auto w-auto max-h-10"
        style={{ height, width: "auto" }}
        priority
      />
    </Link>
  );
}
