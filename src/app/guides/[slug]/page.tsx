import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd, { articleJsonLd, faqJsonLd } from "@/components/JsonLd";
import LeadMagnetPage from "@/components/LeadMagnetPage";
import { getLeadMagnet, guideFaqs, leadMagnets } from "@/data/leadMagnets";
import { pageTitle, shareImage } from "@/data/siteCopy";

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
  const imageAlt = magnet.ogImageAlt ?? magnet.title;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: magnet.ogTitle ?? pageTitle(title),
      description: magnet.ogDescription ?? description,
      url,
      siteName: "Pitching101",
      locale: "en_US",
      images: shareImage(image, imageAlt),
      authors: ["Coach Deising"],
    },
    twitter: {
      card: "summary_large_image",
      title: magnet.twitterTitle ?? pageTitle(title),
      description: magnet.twitterDescription ?? description,
      images: magnet.ogImageAlt ? shareImage(image, imageAlt) : [image],
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

  const faqs = guideFaqs(magnet);

  return (
    <>
      <JsonLd data={articleJsonLd(magnet)} />
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      <LeadMagnetPage magnet={magnet} />
    </>
  );
}
