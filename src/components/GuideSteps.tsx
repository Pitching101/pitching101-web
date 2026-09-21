import GuideClip from "@/components/GuideClip";
import type { LeadMagnetStep } from "@/data/leadMagnets";

export default function GuideSteps({
  steps,
  numbered = true,
  titleTag = "h2",
}: {
  steps: LeadMagnetStep[];
  numbered?: boolean;
  titleTag?: "h2" | "h3";
}) {
  const List = numbered ? "ol" : "ul";
  const Title = titleTag;
  return (
    <List className="magnet-template">
      {steps.map((step, index) => (
        <li key={step.label} className="magnet-step">
          {numbered ? (
            <span className="magnet-step-num" aria-hidden="true">
              {index + 1}
            </span>
          ) : null}
          <div>
            <Title className="magnet-step-title">{step.label}</Title>
            <p className="magnet-step-note">{step.note}</p>
            {step.video ? <GuideClip src={step.video} label={step.label} /> : null}
          </div>
        </li>
      ))}
    </List>
  );
}
