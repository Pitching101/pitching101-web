/** Quiet HUD chrome on dark navy — LVL / LIFE / score accents only. */
export default function HudBar({ className = "" }: { className?: string }) {
  return (
    <div className={`hud-bar ${className}`.trim()} aria-hidden="true">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-2.5 w-16 overflow-hidden border-2 border-blue-light">
          <span className="h-full w-1/2 bg-green-bright" />
          <span className="h-full w-1/2 bg-red" />
        </span>
        <span>LVL 2</span>
      </div>
      <div className="flex items-center gap-2">
        <span>LIFE</span>
        <span className="hud-heart">♥</span>
        <span className="hud-heart">♥</span>
        <span className="hud-heart">♥</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hud-score">101</span>
        <span className="flex items-center gap-1.5">
          <span className="hud-diamond" />
          <span className="hud-diamond" />
          <span className="hud-diamond empty" />
        </span>
      </div>
    </div>
  );
}
