"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StoryFunnel({
  title,
  story,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  story: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="py-20 px-6 bg-surface border-t border-border text-center">
      <motion.h2
        className="text-[2rem] font-heading text-base mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-muted max-w-2xl mx-auto mb-8 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {story}
      </motion.p>

      <Link
        href={ctaHref}
        className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
