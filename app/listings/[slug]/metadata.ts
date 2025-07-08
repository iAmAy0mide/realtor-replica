import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { data } from "./data";

type ListingKey = keyof typeof data

export async function generateListingMetadata(slug: string): Promise<Metadata> {
  const listing = data[slug as ListingKey];

  if (!listing) return notFound();

  const fullUrl = `https://luxhomes.vercel.app/listings/${slug}`;
  const title = `${listing.title} | LuxHomes`;
  const description = listing.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "LuxHomes",
      images: [
        {
          url: `https://luxhomes.vercel.app/${listing.image}`,
          width: 1200,
          height: 630,
          alt: listing.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://luxhomes.vercel.app/${listing.image}`],
    },
  };
}
