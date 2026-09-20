import Link from "next/link";
import { readdirSync, existsSync } from "fs";
import { join } from "path";

const PLACEHOLDERS = [
  { title: "Arm Care Clip", note: "Short muted training clip — coming soon." },
  { title: "Strike Zone Clip", note: "Short muted training clip — coming soon." },
  { title: "Lower Half Clip", note: "Short muted training clip — coming soon." },
];

function listWebMp4s(): string[] {
  const dir = join(process.cwd(), "public", "videos");
  if (!existsSync(dir)) return [];
  try {
    return readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith(".mp4"))
      .sort()
      .slice(0, 3)
      .map((f) => `/videos/${f}`);
  } catch {
    return [];
  }
}

/**
 * Stadium-band training clips: prefer staged web mp4s in public/videos/.
 * Until those land, show 3 placeholder cards that link to Contact.
 * Does not pull large Drive MOVs.
 */
export default function TrainingClipsStrip() {
  const videos = listWebMp4s();

  if (videos.length > 0) {
    return (
      <div className="training-clips" aria-label="Training clips">
        <p className="training-clips-label">Training Clips</p>
        <ul className="training-clips-grid">
          {videos.map((src, i) => (
            <li key={src} className="training-clip-card">
              <video
                className="training-clip-video"
                src={src}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-label={`Training clip ${i + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="training-clips" aria-label="Training clips placeholders">
      <p className="training-clips-label">Training Clips</p>
      <ul className="training-clips-grid">
        {PLACEHOLDERS.map((card) => (
          <li key={card.title}>
            <Link href="/contact/" className="training-clip-card training-clip-placeholder">
              <span className="training-clip-play" aria-hidden="true">
                ▶
              </span>
              <span className="training-clip-title">{card.title}</span>
              <span className="training-clip-note">{card.note}</span>
              <span className="training-clip-cta">Contact to see clips →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
