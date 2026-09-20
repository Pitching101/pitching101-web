import PixelBall from "./PixelBall";

/** HUD-arcade baseball panel — red noisy screen, green grid, yellow bases, LVL/LIFE/score. */
export default function ArcadeHud() {
  return (
    <div className="arcade-hud pixel-scanlines relative overflow-hidden p-5 sm:p-7" role="img" aria-label="Pixel arcade baseball HUD with level, lives, and score">
      {/* dashed yellow frame */}
      <div className="arcade-hud-frame pointer-events-none absolute inset-2" aria-hidden="true" />

      {/* green perspective grid floor */}
      <div className="arcade-grid absolute inset-x-0 bottom-0 h-[55%]" aria-hidden="true" />

      {/* HUD chrome top bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 font-pixel-ui text-[1.05rem] leading-none text-yellow sm:text-lg">
        <span className="inline-flex items-center gap-1.5">
          <span className="text-cyan">LVL</span>
          <span className="text-ink">08</span>
        </span>
        <span className="inline-flex items-center gap-1" aria-hidden="true">
          <span className="text-ink-soft">LIFE</span>
          <span className="text-red">♥</span>
          <span className="text-red">♥</span>
          <span className="text-red">♥</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-teal">SCORE</span>
          <span className="hud-flicker text-yellow-hot">101000</span>
        </span>
      </div>

      {/* centered pixel baseball */}
      <div className="relative z-10 flex flex-col items-center justify-center py-8 sm:py-10">
        <span className="pixel-icon-frame pixel-ball-bob p-2" aria-hidden="true">
          <PixelBall size={72} />
        </span>
        <p className="mt-5 font-pixel text-sm font-semibold tracking-wide text-yellow sm:text-base">
          PLAYER LOADOUT
        </p>
        {/* diamond / bases — yellow base accents */}
        <div className="arcade-diamond mt-5" aria-hidden="true">
          <span className="base base-2" />
          <span className="base base-3" />
          <span className="base base-1" />
          <span className="base base-home" />
        </div>
      </div>

      {/* bottom checklist */}
      <ul className="relative z-10 space-y-2.5 border-t-2 border-dashed border-yellow/50 pt-4 text-[0.95rem] leading-relaxed text-ink-soft">
        <li className="flex gap-2.5">
          <span className="text-green-bright" aria-hidden="true">
            ▢
          </span>
          <span>Plain-English feedback after every look</span>
        </li>
        <li className="flex gap-2.5">
          <span className="text-yellow" aria-hidden="true">
            ▢
          </span>
          <span>Age-right progress for youth &amp; elite arms</span>
        </li>
        <li className="flex gap-2.5">
          <span className="text-cyan" aria-hidden="true">
            ▢
          </span>
          <span>Local Naples focus + flexible remote options</span>
        </li>
        <li className="flex gap-2.5">
          <span className="text-red" aria-hidden="true">
            ▢
          </span>
          <span>Camps &amp; clinics energy — serious, still fun</span>
        </li>
      </ul>
    </div>
  );
}
