"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amelia Rose",
    text: "From the moment I arrived, I felt the stress melt away. The ambiance, the stillness — it was exactly what I needed.",
    location: "Los Angeles, CA",
  },
  {
    name: "Dr. Kelechi Nwosu",
    text: "As a frequent traveler, I’ve stayed in many places — but Serein Stay is something else entirely. It felt like home, reimagined.",
    location: "Abuja, Nigeria",
  },
  {
    name: "Sophie & Luca",
    text: "We came here for our honeymoon and left with unforgettable memories. Everything was intentional and personal. Thank you!",
    location: "Milan, Italy",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-heading mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Guest Reflections
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
