/** Full pixel-art baseball — red seams, yellow accents, arcade HUD energy. */
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
      {/* chunky outer frame — game red stadium energy */}
      <rect x="1" y="1" width="14" height="14" fill="#E6392B" />
      <rect x="2" y="2" width="12" height="12" fill="#0C1422" />
      {/* ball body */}
      <rect x="3" y="3" width="10" height="10" fill="#F5F9FC" />
      <rect x="4" y="2" width="8" height="1" fill="#F5F9FC" />
      <rect x="4" y="13" width="8" height="1" fill="#F5F9FC" />
      <rect x="2" y="4" width="1" height="8" fill="#F5F9FC" />
      <rect x="13" y="4" width="1" height="8" fill="#F5F9FC" />
      {/* classic game-red seams */}
      <rect x="7" y="3" width="1" height="1" fill="#E6392B" />
      <rect x="8" y="4" width="1" height="1" fill="#E6392B" />
      <rect x="9" y="5" width="1" height="1" fill="#B71C1C" />
      <rect x="10" y="6" width="1" height="1" fill="#B71C1C" />
      <rect x="10" y="7" width="1" height="1" fill="#E6392B" />
      <rect x="10" y="8" width="1" height="1" fill="#B71C1C" />
      <rect x="9" y="9" width="1" height="1" fill="#E6392B" />
      <rect x="8" y="10" width="1" height="1" fill="#E6392B" />
      <rect x="7" y="11" width="1" height="1" fill="#B71C1C" />
      <rect x="5" y="4" width="1" height="1" fill="#E6392B" />
      <rect x="4" y="5" width="1" height="1" fill="#B71C1C" />
      <rect x="4" y="9" width="1" height="1" fill="#E6392B" />
      <rect x="5" y="10" width="1" height="1" fill="#B71C1C" />
      {/* yellow hard-edge accents */}
      <rect x="12" y="5" width="1" height="6" fill="#FFE566" />
      <rect x="5" y="12" width="6" height="1" fill="#FFD100" />
      {/* teal corner ping */}
      <rect x="3" y="3" width="1" height="1" fill="#2EC4B6" />
    </svg>
  );
}
