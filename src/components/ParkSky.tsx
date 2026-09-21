import Image from "next/image";
import type { ReactNode } from "react";
import SkyFadeAnchor from "@/components/SkyFadeAnchor";

const skyClouds = [
  { src: "/assets/pixel-cloud-1-transparent.png", w: 279, h: 145 },
  { src: "/assets/pixel-cloud-2-transparent.png", w: 210, h: 99 },
  { src: "/assets/pixel-cloud-3-transparent.png", w: 200, h: 96 },
  { src: "/assets/pixel-cloud-4-transparent.png", w: 223, h: 99 },
];

/** Continuous park sky + drifting clouds. Home can use the same wash as Free guides. */
export default function ParkSky({
  children,
  tone = "home",
  clouds,
}: {
  children: ReactNode;
  tone?: "home" | "park";
  clouds?: number;
}) {
  const count = clouds ?? (tone === "home" ? 14 : 8);
  return (
    <div className={`home-sky-scene park-sky park-sky-${tone}`}>
      <div className="home-sky-layers" aria-hidden="true">
        <div className="home-sky-wash" />
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
              />
            );
          })}
        </div>
      </div>
      {tone === "home" ? <SkyFadeAnchor /> : null}
      {children}
    </div>
  );
}
