"use client";
import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Us | LuxHomes",
  description: "Learn about LuxHomes—our story, mission, and the values that guide our prestige-driven approach to real estate.",
};

export default function AboutPage() {
  return (
    <main className="bg-background px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-heading text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h1>

        <motion.p
          className="text-muted mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          At LuxHomes, we believe prestige is not just a look—it&apos;s an experience. 
          Our team has curated and marketed luxury properties for over a decade, 
          helping clients around the world secure the home—and lifestyle—they deserve.
        </motion.p>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/about-story.jpg"
            alt="Luxury living interior"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
            width={1200}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "auto", maxHeight: 500 }}
            priority
          />
        </motion.div>

        <motion.div
          className="text-left text-muted space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            Our mission is to redefine modern real estate with elegance, trust, and white-glove precision. 
            Every listing we take on receives bespoke positioning, world-class presentation, and concierge-level care.
          </p>
          <p>
            We&apos;ve worked with families, investors, celebrities, and global professionals—all unified by their expectation 
            for excellence. We understand that your home is more than a space—it&apos;s a story waiting to be told.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
