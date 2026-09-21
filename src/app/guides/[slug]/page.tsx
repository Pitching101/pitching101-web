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

  return {
    title: magnet.title,
    description: `${magnet.note} Free from Coach Nick at Pitching101.`,
    alternates: { canonical: `/guides/${magnet.slug}/` },
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
