import { notFound } from "next/navigation";
import { Metadata } from "next";
import ListingDetailPageContent from "@/components/Pages/ListingDetailPageContent";

const data = {
    "skyline-penthouse": {
        title: "Skyline Penthouse",
        location: "Los Angeles, California",
        price: 2500000,
        type: "Condo",
        size: "3,200 sqft",
        bedrooms: 3,
        bathrooms: 2,
        image: "/images/skyline-penthouse.jpg",
        description:
        "This iconic penthouse offers sweeping skyline views and curated modern luxury, with a spacious open-plan interior designed for elevated city living.",
        highlights: ["Private rooftop deck", "Smart home automation", "Infinity pool access"],
    },
    "oceanfront-villa": {
        title: "Oceanfront Villa",
        location: "Miami, Florida",
        price: 4500000,
        type: "Villa",
        size: "5,000 sqft",
        bedrooms: 5,
        bathrooms: 6,
        image: "/images/oceanfront-villa.jpg",
        description:
        "Experience coastal elegance in this stunning villa with panoramic ocean views, private beach access, and luxurious amenities throughout.",
        highlights: ["Infinity pool", "Private beach access", "Home theater"],
    },
    "garden-villa": {
        title: "Garden Villa",
        location: "Lagos, Nigeria",
        price: 1400000,
        type: "House",
        size: "4,500 sqft",
        bedrooms: 4,
        bathrooms: 5,
        image: "/images/garden-villa.jpg",
        description:
        "Nestled in lush gardens, this villa combines modern luxury with serene outdoor spaces, perfect for family living and entertaining.",
        highlights: ["Expansive garden", "Outdoor kitchen", "Private gym"],
    },
    "beach-bungalow": {
        title: "Beach Bungalow",
        location: "Miami, Florida",
        price: 1800000,
        type: "House",
        size: "2,800 sqft",
        bedrooms: 3,
        bathrooms: 2,
        image: "/images/beach-bungalow.jpg",
        description:
        "A charming beachfront bungalow with a relaxed coastal vibe, featuring open spaces and direct access to the sandy shores.",
        highlights: ["Direct beach access", "Spacious deck", "Coastal decor"],
    },
    "luxury-condo": {
        title: "Luxury Condo",
        location: "New York City, New York",
        price: 3200000,
        type: "Condo",
        size: "2,500 sqft",
        bedrooms: 2,
        bathrooms: 3,
        image: "/images/luxury-condo.jpg",
        description:
        "This upscale condo in the heart of NYC offers modern elegance with stunning city views, high-end finishes, and exclusive amenities.",
        highlights: ["Rooftop terrace", "24/7 concierge", "Private parking"],
    },
    "modern-house": {
        title: "Modern House",
        location: "San Francisco, California",
        price: 2800000,
        type: "House",
        size: "3,800 sqft",
        bedrooms: 4,
        bathrooms: 4,
        image: "/images/modern-house.jpg",
        description:
        "A sleek modern home with an open layout, floor-to-ceiling windows, and eco-friendly features in a prime SF neighborhood.",
        highlights: ["Solar panels", "Smart home tech", "Rooftop garden"],
    },
    "coastal-retreat": {
        title: "Coastal Retreat",
        location: "Los Angeles, California",
        price: 3600000,
        type: "Villa",
        size: "4,200 sqft",
        bedrooms: 5,
        bathrooms: 5,
        image: "/images/coastal-retreat.jpg",
        description:
        "This luxurious coastal villa offers breathtaking ocean views, expansive living spaces, and a private pool for ultimate relaxation.",
        highlights: ["Infinity pool", "Ocean views", "Private spa"],
    },
    "city-loft": {
        title: "City Loft",
        location: "Chicago, Illinois",
        price: 2200000,
        type: "Condo",
        size: "2,900 sqft",
        bedrooms: 3,
        bathrooms: 2,
        image: "/images/city-loft.jpg",
        description:
        "A stylish urban loft with high ceilings, modern finishes, and a vibrant city lifestyle at your doorstep.",
        highlights: ["Exposed brick", "Open floor plan", "Rooftop access"],
    },
};

type ListingKey = keyof typeof data;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const slug = await awaitedParams.slug as ListingKey;
  const listing = data[slug];

  if (!listing) return notFound();

  const fullUrl = `https://www.luxhomes.com/listings/${slug}`;
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
          url: `https://www.luxhomes.com${listing.image}`,
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
      images: [`https://www.luxhomes.com${listing.image}`],
    },
  };
}

export default async function ListingDetailPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const slug = await awaitedParams.slug as ListingKey;
  const listing = data[slug];
  if (!listing) return notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: listing.title,
    description: listing.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: listing.location,
      addressCountry: "US",
    },
    image: `https://www.luxhomes.com${listing.image}`,
    numberOfRooms: listing.bedrooms,
    numberOfBathroomsTotal: listing.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: parseInt(listing.size),
      unitCode: "FTK",
    },
    price: {
      "@type": "MonetaryAmount",
      value: listing.price,
      currency: "USD",
    },
    url: `https://www.luxhomes.com/listings/${slug}`,
  };

  return <ListingDetailPageContent listing={listing} structuredData={structuredData} />; // Assuming you have a component to render the listing details
}