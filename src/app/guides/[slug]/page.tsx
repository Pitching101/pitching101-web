import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadMagnetPage from "@/components/LeadMagnetPage";
import { getLeadMagnet, leadMagnets } from "@/data/leadMagnets";

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
  const images = magnet.ogImage ? [magnet.ogImage] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images } : {}),
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
