"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nora Okezie",
    text: "LuxHomes didn’t just find me a property — they found me a home. I was guided with clarity and empathy throughout.",
    location: "Abuja, Nigeria",
  },
  {
    name: "Darnell W." ,
    text: "I used to think buying a home was overwhelming. This team changed everything. Professional, transparent, and human.",
    location: "Atlanta, USA",
  },
  {
    name: "Tiana & Mo",
    text: "We were relocating from abroad. Every tour felt like a luxury concierge experience. We found the perfect spot.",
    location: "London > Lagos",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-heading mb-10 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Client Stories
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-background border border-border p-6 rounded-xl shadow-sm text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-muted italic mb-4">“{t.text}”</p>
              <div className="mt-auto">
                <p className="text-base font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}