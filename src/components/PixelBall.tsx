/** Full pixel-art baseball mark — dark brand, blue + lime accent. */
export default function PixelBall({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      style={{ imageRendering: "pixelated" }}
      shapeRendering="crispEdges"
    >
      {/* chunky outer frame — sports blue */}
      <rect x="1" y="1" width="14" height="14" fill="#2A7FD4" />
      <rect x="2" y="2" width="12" height="12" fill="#0C1424" />
      {/* ball body */}
      <rect x="3" y="3" width="10" height="10" fill="#EEF4FB" />
      <rect x="4" y="2" width="8" height="1" fill="#EEF4FB" />
      <rect x="4" y="13" width="8" height="1" fill="#EEF4FB" />
      <rect x="2" y="4" width="1" height="8" fill="#EEF4FB" />
      <rect x="13" y="4" width="1" height="8" fill="#EEF4FB" />
      {/* bold blue seams */}
      <rect x="7" y="3" width="1" height="1" fill="#2A7FD4" />
      <rect x="8" y="4" width="1" height="1" fill="#2A7FD4" />
      <rect x="9" y="5" width="1" height="1" fill="#2A7FD4" />
      <rect x="10" y="6" width="1" height="1" fill="#155A9E" />
      <rect x="10" y="7" width="1" height="1" fill="#155A9E" />
      <rect x="10" y="8" width="1" height="1" fill="#155A9E" />
      <rect x="9" y="9" width="1" height="1" fill="#2A7FD4" />
      <rect x="8" y="10" width="1" height="1" fill="#2A7FD4" />
      <rect x="7" y="11" width="1" height="1" fill="#2A7FD4" />
      <rect x="5" y="4" width="1" height="1" fill="#2A7FD4" />
      <rect x="4" y="5" width="1" height="1" fill="#2A7FD4" />
      <rect x="4" y="9" width="1" height="1" fill="#2A7FD4" />
      <rect x="5" y="10" width="1" height="1" fill="#2A7FD4" />
      {/* electric lime hard edge accent */}
      <rect x="12" y="5" width="1" height="6" fill="#D4FF00" />
      <rect x="5" y="12" width="6" height="1" fill="#D4FF00" />
    </svg>
  );
}
