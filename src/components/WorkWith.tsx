import { workWith } from "@/data/siteCopy";

/** Who Nick works with — families, teams, coaches, schools. */
export default function WorkWith() {
  return (
    <ul className="work-with-row">
      {workWith.map((item) => (
        <li key={item.label} className="work-with-card">
          <h3 className="work-with-title">{item.label}</h3>
          <p className="work-with-note">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}
