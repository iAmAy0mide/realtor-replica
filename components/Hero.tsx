"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background px-6 py-28 text-center">
      <motion.h1
        className="text-5xl font-heading text-base mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Find Your Next <span className="text-primary">Luxury Home</span>
      </motion.h1>
      <motion.p
        className="text-muted max-w-xl mx-auto mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Discover exclusive properties, expert agents, and unforgettable locations.
      </motion.p>
      <Link href="/listings">
        <motion.button
          className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Browse Listings
        </motion.button>
      </Link>
    </section>
  );
}
