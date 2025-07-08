"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Prime Locations",
    desc: "Hand-picked properties in elite, high-growth neighborhoods.",
  },
  {
    title: "Expert Agents",
    desc: "Work with professionals who understand both luxury and lifestyle.",
  },
  {
    title: "Tailored Showings",
    desc: "Private, personal, and on your schedule — every time.",
  },
];

export default function FeatureHighlight() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-heading mb-10 text-base">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 border border-border rounded-xl shadow-sm bg-background"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
