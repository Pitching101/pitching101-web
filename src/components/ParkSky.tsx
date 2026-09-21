import Image from "next/image";
import type { ReactNode } from "react";
import SkyFadeAnchor from "@/components/SkyFadeAnchor";

const skyClouds = [
  { src: "/assets/pixel-cloud-1-transparent.png", w: 279, h: 145 },
  { src: "/assets/pixel-cloud-2-transparent.png", w: 210, h: 99 },
  { src: "/assets/pixel-cloud-3-transparent.png", w: 200, h: 96 },
  { src: "/assets/pixel-cloud-4-transparent.png", w: 223, h: 99 },
];

/** Two high-sky clouds only — mid-screen pins read like extra type. */
const pinnedClouds = [
  { src: skyClouds[0], className: "float-cloud-pin-1" },
  { src: skyClouds[2], className: "float-cloud-pin-2" },
];

/** Continuous park sky + drifting clouds. Home measures the fade at #your-guy. */
export default function ParkSky({
  children,
  tone = "home",
}: {
  children: ReactNode;
  tone?: "home" | "park";
}) {
  const count = 8;
  return (
    <div className={`home-sky-scene park-sky park-sky-${tone}`}>
      <div className="home-sky-layers" aria-hidden="true">
        <div className="home-sky-wash" />
        <div className="home-sky-weather">
          <div className="home-sky-stars" />
          <div className="home-sky-sun" />
          <div className="home-sky-rain" />
          <div className="cloud-decor home-sky-clouds">
            {Array.from({ length: count }, (_, index) => {
              const cloud = skyClouds[index % skyClouds.length];
              return (
                <Image
                  key={`${cloud.src}-${index}`}
                  src={cloud.src}
                  alt=""
                  width={cloud.w}
                  height={cloud.h}
                  className={`float-cloud float-cloud-${index + 1}`}
                  loading={index < 4 ? "eager" : "lazy"}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="home-sky-clouds-fixed" aria-hidden="true">
        {pinnedClouds.map((pin) => (
          <Image
            key={pin.className}
            src={pin.src.src}
            alt=""
            width={pin.src.w}
            height={pin.src.h}
            className={`float-cloud ${pin.className}`}
            loading="lazy"
          />
        ))}
      </div>
      {tone === "home" ? <SkyFadeAnchor /> : null}
      {children}
    </div>
  );
}
