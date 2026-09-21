import { startSteps } from "@/data/siteCopy";

/** What happens after a First Look — still no price talk. */
export default function StartSteps() {
  return (
    <ol className="start-steps">
      {startSteps.map((step, index) => (
        <li key={step.label} className="start-step">
          <span className="start-step-num" aria-hidden="true">
            {index + 1}
          </span>
          <div>
            <h3 className="start-step-title">{step.label}</h3>
            <p className="start-step-note">{step.note}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
