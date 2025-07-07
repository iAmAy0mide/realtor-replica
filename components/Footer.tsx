import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20 text-sm text-muted">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* Placeholder for logo */}
          <h2 className="text-xl font-heading text-base mb-2">Serein Stay</h2>
          <p className="text-muted max-w-sm">
            A boutique experience nestled in elegance. Where every stay feels like a return to self.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/rooms" className="hover:text-base">Rooms</Link></li>
            <li><Link href="/about" className="hover:text-base">About</Link></li>
            <li><Link href="/contact" className="hover:text-base">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Stay in Touch</h3>
          <p className="mb-2">123 Serein Way, Tranquil Hills</p>
          <p>Email: <a href="mailto:hello@sereinstay.com" className="hover:text-base">hello@sereinstay.com</a></p>
          <p>Phone: +1 (800) 123–4567</p>
        </div>
      </div>

      <div className="text-center py-4 text-xs border-t border-border">
        © {new Date().getFullYear()} Serein Stay. All rights reserved.
      </div>
    </footer>
  );
}
