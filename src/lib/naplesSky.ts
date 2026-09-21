export type SkyTod = "morning" | "day" | "evening" | "night";

export const NAPLES_TZ = "America/New_York";
export const NAPLES_LAT = 26.1423;
export const NAPLES_LON = -81.7948;

const OPEN_METEO =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${NAPLES_LAT}&longitude=${NAPLES_LON}` +
  `&current=precipitation,weather_code` +
  `&timezone=${encodeURIComponent(NAPLES_TZ)}`;

/** Morning 6–9, day 10–16, evening 17–19, night 20–5. Naples, not the visitor's clock. */
export function hourToTod(hour: number): SkyTod {
  if (hour >= 6 && hour <= 9) return "morning";
  if (hour >= 10 && hour <= 16) return "day";
  if (hour >= 17 && hour <= 19) return "evening";
  return "night";
}

export function naplesHour(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: NAPLES_TZ,
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "12");
  return hour === 24 ? 0 : hour;
}

export function naplesTod(now = new Date()): SkyTod {
  return hourToTod(naplesHour(now));
}

export function applyNaplesTod(
  root: HTMLElement = document.documentElement,
  now = new Date(),
) {
  root.dataset.tod = naplesTod(now);
}

/** Drizzle, rain, freezing rain, showers, thunderstorms. */
export function isNaplesRain(precipMm: number, weatherCode: number): boolean {
  if (precipMm > 0.1) return true;
  const code = weatherCode;
  return (
    (code >= 51 && code <= 67) ||
    (code >= 80 && code <= 82) ||
    (code >= 95 && code <= 99)
  );
}

export function applyNaplesWx(
  raining: boolean,
  root: HTMLElement = document.documentElement,
) {
  if (raining) root.dataset.wx = "rain";
  else delete root.dataset.wx;
}

export async function fetchNaplesRain(signal?: AbortSignal): Promise<boolean> {
  const res = await fetch(OPEN_METEO, { signal, cache: "no-store" });
  if (!res.ok) return false;
  const data = (await res.json()) as {
    current?: { precipitation?: number; weather_code?: number };
  };
  return isNaplesRain(
    Number(data.current?.precipitation ?? 0),
    Number(data.current?.weather_code ?? 0),
  );
}

/**
 * FOUC-free boot for the root layout. Bands match hourToTod.
 * beforeInteractive Script injects this into <head>.
 */
export const NAPLES_SKY_BOOT =
  '(function(){try{var p=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",hourCycle:"h23"}).formatToParts(new Date());var h=Number((p.find(function(x){return x.type==="hour"})||{}).value);if(h===24)h=0;document.documentElement.dataset.tod=h>=6&&h<=9?"morning":h>=10&&h<=16?"day":h>=17&&h<=19?"evening":"night";}catch(e){}})();';
