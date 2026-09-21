export type PortalRole = "admin" | "family";

export type Profile = {
  id: string;
  role: PortalRole;
  display_name: string | null;
};

export type Player = {
  id: string;
  first_name: string;
  age: number | null;
  guardian_email: string;
  player_email: string | null;
  notes: string | null;
};

export type Lesson = {
  id: string;
  player_id: string;
  held_on: string;
  title: string | null;
  notes: string | null;
  video_path: string | null;
  created_at: string;
};

export type CoachClip = {
  id: string;
  title: string;
  notes: string | null;
  video_path: string;
  created_at: string;
};

export function todayInNaples() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function formatLessonDay(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function lessonCountLabel(count: number) {
  if (count === 1) return "1 lesson";
  return `${count} lessons`;
}

export type TrackerAccount = {
  id: string;
  name: string;
  sort_order: number;
};

export type TrackerPayment = {
  id: string;
  account_id: string;
  paid_on: string;
  amount: number;
};

export function formatMoney(amount: number) {
  const dollars = Number(amount);
  if (!Number.isFinite(dollars)) return "$0";
  const whole = Number.isInteger(dollars);
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  });
}
