export default function PortalLessonClip({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="portal-clip-wrap">
      <p className="portal-clip-label">{label}</p>
      <video className="portal-clip" controls playsInline src={src} aria-label={label} />
    </div>
  );
}
