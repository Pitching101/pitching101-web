import { sessionBeats } from "@/data/siteCopy";

/** What a first session is — short, no prices. */
export default function SessionBeats() {
  return (
    <ol className="start-steps">
      {sessionBeats.map((beat, index) => (
        <li key={beat.label} className="start-step">
          <span className="start-step-num" aria-hidden="true">
            {index + 1}
          </span>
          <div>
            <h3 className="start-step-title">{beat.label}</h3>
            <p className="start-step-note">{beat.note}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
