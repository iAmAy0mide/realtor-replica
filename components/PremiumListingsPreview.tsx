"use client";

import { motion } from "framer-motion";

const listings = [
  {
    title: "Skyline Penthouse",
    location: "Downtown LA",
    image: "/images/skyline-penthouse.jpg",
  },
  {
    title: "Modern Suburban Estate",
    location: "Palo Alto",
    image: "/images/placeholder-suburban.jpg",
  },
  {
    title: "Coastal Glass Villa",
    location: "Malibu Beach",
    image: "/images/coastal-glass-villa.jpg",
  },
];

export default function PremiumListingsPreview() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[2rem] font-heading text-base mb-12">
          Featured Luxury Listings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-md border border-border bg-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-muted/10 flex items-center justify-center text-muted text-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-base">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}