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
        <main className="bg-gradient-to-br from-background via-slate-50 to-slate-200 min-h-screen">
            {/* Structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero Image with overlay */}
            <section className="relative h-[420px] w-full overflow-hidden shadow-lg">
                <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {listing.title}
                    </motion.h1>
                    <p className="text-lg md:text-xl font-medium">{listing.location}</p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Price and Details */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-primary drop-shadow-sm">
                            ${listing.price.toLocaleString()}
                        </span>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {listing.type}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-base text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M8 17v-1a4 4 0 0 1 8 0v1" /><circle cx="12" cy="7" r="4" /><rect width="20" height="12" x="2" y="10" rx="6" /></svg>
                            {listing.bedrooms} Bed
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0 1 10 0v3" /><rect width="18" height="8" x="3" y="10" rx="4" /></svg>
                            {listing.bathrooms} Bath
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="8" rx="4" /><path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" /></svg>
                            {listing.size}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <motion.p
                    className="text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {listing.description}
                </motion.p>

                {/* Highlights */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-base mb-4">Key Features</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base text-muted-foreground list-none">
                        {listing.highlights.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <motion.a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                >
                    Schedule a Tour
                </motion.a>
            </div>
        </main>
    );
}
