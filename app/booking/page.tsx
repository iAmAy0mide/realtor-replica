"use client";

import TinyCalWidget from "@/components/TinyCalWidget";

export default function BookPage() {
  return (
    <main className="bg-background px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-heading text-base mb-4">Schedule a Private Consultation</h1>
        <p className="text-muted mb-8">
          Choose a convenient time to speak with one of our senior property advisors.
        </p>

        <div className="bg-surface border border-border rounded-xl shadow-sm p-6">
          <TinyCalWidget url={"https://tinycal.com/luxhomes"} />
        </div>
      </div>
    </main>
  );
}
