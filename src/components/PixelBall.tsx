/** Compact pixel baseball for logo chrome (gifted GIFs used for hero/scroll). */
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
      <rect x="1" y="1" width="14" height="14" fill="#1A6FD4" />
      <rect x="2" y="2" width="12" height="12" fill="#070B14" />
      <rect x="3" y="3" width="10" height="10" fill="#FFFEF5" />
      <rect x="4" y="2" width="8" height="1" fill="#FFFEF5" />
      <rect x="4" y="13" width="8" height="1" fill="#FFFEF5" />
      <rect x="2" y="4" width="1" height="8" fill="#FFFEF5" />
      <rect x="13" y="4" width="1" height="8" fill="#FFFEF5" />
      <rect x="7" y="3" width="1" height="1" fill="#C41E2A" />
      <rect x="8" y="4" width="1" height="1" fill="#C41E2A" />
      <rect x="9" y="5" width="1" height="1" fill="#C41E2A" />
      <rect x="10" y="6" width="1" height="1" fill="#C41E2A" />
      <rect x="10" y="7" width="1" height="1" fill="#C41E2A" />
      <rect x="10" y="8" width="1" height="1" fill="#C41E2A" />
      <rect x="9" y="9" width="1" height="1" fill="#C41E2A" />
      <rect x="8" y="10" width="1" height="1" fill="#C41E2A" />
      <rect x="7" y="11" width="1" height="1" fill="#C41E2A" />
      <rect x="5" y="4" width="1" height="1" fill="#C41E2A" />
      <rect x="4" y="5" width="1" height="1" fill="#C41E2A" />
      <rect x="4" y="9" width="1" height="1" fill="#C41E2A" />
      <rect x="5" y="10" width="1" height="1" fill="#C41E2A" />
      <rect x="12" y="5" width="1" height="6" fill="#C8F542" />
    </svg>
  );
}
