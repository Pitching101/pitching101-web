"use client";

export default function GuideClip({ src, label }: { src: string; label: string }) {
  return (
    <video
      className="guide-clip"
      controls
      playsInline
      preload="metadata"
      src={src}
      aria-label={label}
      onPlay={(event) => {
        const playing = event.currentTarget;
        document.querySelectorAll<HTMLVideoElement>("video.guide-clip").forEach((clip) => {
          if (clip !== playing) clip.pause();
        });
      }}
    />
  );
}
