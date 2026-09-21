/** Decorative park scoreboard — pixel art only, not real Pitching101 stats. */
export default function PixelScoreboard() {
  return (
    <figure className="pixel-board" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/pixel-stat-board.png"
        alt=""
        width={1080}
        height={383}
        className="pixel-board-img"
      />
    </figure>
  );
}
