"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const listings = [
    { title: "Skyline Penthouse", location: "LA", price: 2500000, type: "Condo" },
    { title: "Garden Villa", location: "Lagos", price: 1400000, type: "House" },
    { title: "Beach Bungalow", location: "Miami", price: 1800000, type: "House" },
    { title: "Oceanfront Villa", location: "Miami", price: 4500000, type: "Villa" },
    { title: "Luxury Condo", location: "NYC", price: 3200000, type: "Condo" },
    { title: "Modern House", location: "SF", price: 2800000, type: "House" },
    { title: "Coastal Retreat", location: "LA", price: 3600000, type: "Villa" },
    { title: "City Loft", location: "Chicago", price: 2200000, type: "Condo" },
];

export default function ListingsPage() {
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered =
    typeFilter === "All"
      ? listings
      : listings.filter((l) => l.type === typeFilter);

  return (
    <main className="bg-background px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-heading text-base mb-4">
          Explore Our Listings
        </h1>

        <div className="mb-8 flex gap-4 text-sm text-muted">
          {["All", "House", "Condo", "Villa"].map((t) => (
            <button
              key={t}
              className={`px-4 py-2 border border-border rounded-full transition ${
                typeFilter === t ? "bg-primary text-white" : "hover:bg-muted/10"
              }`}
              onClick={() => setTypeFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <Link href={`/listings/${item.title.toLowerCase().replace(/\s/g, "-")}`} key={i}>
              <motion.div
                className="bg-surface border border-border p-6 rounded-xl shadow-sm cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm mb-1">{item.location}</p>
                <p className="text-primary font-medium">
                  ${item.price.toLocaleString()}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
