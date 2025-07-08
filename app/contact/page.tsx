"use client";

export default function ContactPage() {
  return (
    <main className="bg-background px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-heading text-base mb-8">Let’s Talk</h1>

        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm text-muted">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-base"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-muted">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-base"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-muted">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-base"
              placeholder="Tell us what you're looking for..."
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
