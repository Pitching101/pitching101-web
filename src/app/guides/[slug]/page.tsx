import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadMagnetPage from "@/components/LeadMagnetPage";
import { getLeadMagnet, leadMagnets } from "@/data/leadMagnets";
import { shareImage } from "@/data/siteCopy";

export const dynamicParams = false;

export function generateStaticParams() {
  return leadMagnets.map((magnet) => ({ slug: magnet.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const magnet = getLeadMagnet(slug);
  if (!magnet) return {};

  const title = `${magnet.title} | Pitching101`;
  const description = `${magnet.note} Free from Coach Deising at Pitching101.`;
  const image = `/og/${magnet.slug}.png`;

  return {
    title: magnet.title,
    description,
    alternates: { canonical: `/guides/${magnet.slug}/` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/guides/${magnet.slug}/`,
      images: shareImage(image, magnet.title),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function GuideSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const magnet = getLeadMagnet(slug);
  if (!magnet) notFound();

  return <LeadMagnetPage magnet={magnet} />;
}
