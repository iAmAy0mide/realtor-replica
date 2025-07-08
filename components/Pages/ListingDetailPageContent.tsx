"use client";

import { motion } from "framer-motion";

type Listing = {
    image: string;
    title: string;
    location: string;
    price: number;
    size: string;
    bedrooms: number;
    bathrooms: number;
    type: string;
    description: string;
    highlights: string[];
};

type ListingDetailPageContentProps = {
    listing: Listing;
    structuredData: object;
};

export default function ListingDetailPageContent({
    listing,
    structuredData,
}: ListingDetailPageContentProps) {
    return (
        <main className="bg-background min-h-screen">
            {/* Structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <section className="h-96 w-full overflow-hidden">
                <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                />
            </section>

            <div className="max-w-6xl mx-auto px-6 py-12">
                <motion.h1
                    className="text-3xl font-heading text-base mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {listing.title}
                </motion.h1>
                <p className="text-muted text-sm mb-4">{listing.location}</p>

                <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <span className="font-medium text-primary">
                        ${listing.price.toLocaleString()}
                    </span>
                    <span className="text-muted">{listing.size}</span>
                    <span className="text-muted">{listing.bedrooms} Bed</span>
                    <span className="text-muted">{listing.bathrooms} Bath</span>
                    <span className="text-muted">Type: {listing.type}</span>
                </div>

                <motion.p
                    className="text-muted mb-8 max-w-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {listing.description}
                </motion.p>

                <h2 className="text-xl font-semibold text-base mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-muted mb-8">
                    {listing.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <motion.a
                    href="/contact"
                    className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition"
                    whileHover={{ scale: 1.03 }}
                >
                    Schedule a Tour
                </motion.a>
            </div>
        </main>
    );
}
