import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd, { articleJsonLd } from "@/components/JsonLd";
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

  const title = magnet.metaTitle || magnet.title;
  const description = magnet.metaDescription;
  const url = `/guides/${magnet.slug}/`;
  const image = magnet.ogImage || `/og/${magnet.slug}.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Pitching101",
      locale: "en_US",
      images: shareImage(image, magnet.title),
      authors: ["Coach Deising"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    authors: [{ name: "Coach Deising" }],
    category: magnet.topic,
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

  return (
    <>
      <JsonLd data={articleJsonLd(magnet)} />
      <LeadMagnetPage magnet={magnet} />
    </>
  );
}
