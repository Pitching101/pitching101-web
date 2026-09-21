const MARKS = [
  "Pitching101",
  "Naples, FL",
  "Ages 8–16",
  "Arm care",
  "Head coach",
  "Travel teams",
  "Parents",
  "Strikes",
  "Schools",
] as const;

function BeltRow() {
  return (
    <ul className="park-belt-row">
      {MARKS.map((mark) => (
        <li key={mark} className="park-belt-mark">
          <span>{mark}</span>
        </li>
      ))}
    </ul>
  );
}

/** Quiet ticker under the hero — text and bullets, no pixel icons. */
export default function ParkBelt() {
  return (
    <div className="park-belt" aria-hidden="true">
      <div className="park-belt-track">
        <BeltRow />
        <BeltRow />
      </div>
    </div>
  );
}
