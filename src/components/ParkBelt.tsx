const MARKS = [
  { src: "/assets/logo-header-navy.png", label: "Pitching101", kind: "logo" },
  { src: "/assets/pixel-baseball-solid.png", label: "Naples, FL", kind: "icon" },
  { src: "/assets/icons/icon-strikes.png", label: "Ages 8–16", kind: "icon" },
  { src: "/assets/icons/icon-arm-care-v2.png", label: "Arm care", kind: "icon" },
  { src: "/assets/pixel-glove-cursor.png", label: "Gulfshore JV", kind: "icon" },
  { src: "/assets/icons/icon-plan-checklist.png", label: "Travel teams", kind: "icon" },
  { src: "/assets/pixel-baseball-solid.png", label: "Parents", kind: "icon" },
  { src: "/assets/icons/icon-strikes.png", label: "Strikes", kind: "icon" },
  { src: "/assets/pixel-glove-cursor.png", label: "Schools", kind: "icon" },
] as const;

function BeltRow() {
  return (
    <ul className="park-belt-row">
      {MARKS.map((mark) => (
        <li key={`${mark.label}-${mark.src}`} className="park-belt-mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mark.src}
            alt=""
            width={mark.kind === "logo" ? 120 : 28}
            height={mark.kind === "logo" ? 25 : 28}
            className={`park-belt-art${mark.kind === "logo" ? " is-logo" : ""}`}
          />
          <span>{mark.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Stadium ticker of real Pitching101 marks — not invented press logos. */
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
