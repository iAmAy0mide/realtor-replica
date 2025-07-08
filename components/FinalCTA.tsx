"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-surface border-t border-border text-center">
      <motion.h2
        className="text-3xl font-heading text-base mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let’s Find Your Future Address
      </motion.h2>
      <motion.p
        className="text-muted text-lg max-w-xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our expert agents are ready to connect you to the property you’ve been dreaming of.
      </motion.p>
      <Link
        href="/listings"
        className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition"
      >
        Browse All Listings
      </Link>
    </section>
  );
} 
