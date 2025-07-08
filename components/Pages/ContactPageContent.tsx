"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LuxHomes",
  description: "Have questions or want to connect with us? Reach out to LuxHomes through our secure contact form or by phone.",
};


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background px-6 py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {!submitted ? (
          <>
            <h1 className="text-[2rem] font-heading text-base mb-8 text-center">Let&apos;s Talk</h1>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block mb-1 text-sm text-muted">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-base"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-muted">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-base"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-muted">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-base"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition w-full"
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center bg-surface p-12 rounded-xl border border-border shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-green-600 text-5xl mb-4"
            >
              ✅
            </motion.div>
            <h2 className="text-2xl font-semibold text-base mb-2">Message Sent</h2>
            <p className="text-muted max-w-md mx-auto">
              Thank you for reaching out. A member of our team will be in touch shortly.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
