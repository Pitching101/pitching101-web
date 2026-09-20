import Link from "next/link";
import Image from "next/image";

/** Official Pitching101 mark — pick variant to match section background. */
export default function Logo({
  className = "",
  variant = "on-white",
  height = 40,
}: {
  className?: string;
  /** on-white: light-blue baseball on white (nav / light bands).
   *  on-blue: white baseball on bright blue (colored / blue headers). */
  variant?: "on-white" | "on-blue";
  height?: number;
}) {
  const src =
    variant === "on-blue"
      ? "/assets/logo-white-on-blue.png"
      : "/assets/logo-blue-on-white.png";

  const aspect = variant === "on-blue" ? 1240 / 874 : 1528 / 644;
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
        className="w-auto"
        style={{ height }}
        priority
      />
    </Link>
  );
}
