/** HUD panel — Nick's arcade-baseball-hud art + pixel chrome overlay. */
export default function ArcadeHud() {
  return (
    <div
      className="arcade-hud pixel-scanlines relative overflow-hidden p-5 sm:p-7"
      role="img"
      aria-label="Pixel arcade baseball HUD with level, lives, and score"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/arcade-baseball-hud.jpg"
        alt=""
        className="arcade-hud-art"
        width={640}
        height={480}
        decoding="async"
      />
      <div className="arcade-hud-frame pointer-events-none absolute inset-2" aria-hidden="true" />
      <div className="arcade-grid absolute inset-x-0 bottom-0 h-[55%]" aria-hidden="true" />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 font-pixel-ui text-[1.05rem] leading-none text-yellow sm:text-lg">
        <span className="inline-flex items-center gap-1.5">
          <span className="text-cyan">LVL</span>
          <span className="text-ink">08</span>
        </span>
        <span className="inline-flex items-center gap-1" aria-hidden="true">
          <span className="text-ink-soft">LIFE</span>
          <span className="hud-heart text-red">♥</span>
          <span className="hud-heart text-red" style={{ animationDelay: "0.2s" }}>
            ♥
          </span>
          <span className="hud-heart text-red" style={{ animationDelay: "0.4s" }}>
            ♥
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-teal-soft">SCORE</span>
          <span className="hud-flicker text-yellow-hot">101000</span>
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-8 sm:py-10">
        <p className="mt-2 font-pixel text-sm font-semibold tracking-wide text-yellow sm:text-base">
          PLAYER LOADOUT
        </p>
        <div className="arcade-diamond mt-5" aria-hidden="true">
          <span className="base base-2" />
          <span className="base base-3" />
          <span className="base base-1" />
          <span className="base base-home" />
        </div>
      </div>

      <ul className="relative z-10 space-y-2.5 border-t-2 border-dashed border-yellow/50 pt-4 text-[0.95rem] leading-relaxed text-ink">
        <li className="flex gap-2.5">
          <span className="text-ball-lime" aria-hidden="true">
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
