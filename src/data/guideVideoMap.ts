import { getLeadMagnet, type LeadMagnetRoutine } from "@/data/leadMagnets";

export function videoMapFor(slug: string) {
  const magnet = getLeadMagnet(slug);
  const map: Record<string, string> = {};
  for (const routine of magnet?.routines ?? []) {
    for (const step of routine.steps) {
      if (step.video) map[`${routine.heading}::${step.label}`] = step.video;
    }
  }
  return map;
}

export function attachGuideVideos(
  routines: LeadMagnetRoutine[],
  map: Record<string, string>,
): LeadMagnetRoutine[] {
  return routines.map((routine) => ({
    ...routine,
    steps: routine.steps.map((step) => ({
      ...step,
      video: map[`${routine.heading}::${step.label}`],
    })),
  }));
}

export function stripGuideVideos(routines: LeadMagnetRoutine[]): LeadMagnetRoutine[] {
  return routines.map((routine) => ({
    ...routine,
    steps: routine.steps.map(({ label, note }) => ({ label, note })),
  }));
}
