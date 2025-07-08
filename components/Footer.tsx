"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border px-6 py-12 text-muted text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-base font-semibold mb-2">LuxHomes</h3>
          <p className="text-muted text-sm">
            Elevating real estate with prestige, modernity, and purpose.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-base mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/listings" className="hover:underline">Listings</Link></li>
            <li><Link href="/agents" className="hover:underline">Agents</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-base mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-base mb-2">Contact</h4>
          <p>Email: hello@luxhomes.com</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Location: Lagos | London | LA</p>
        </div>
      </div>

      <div className="text-center mt-12 text-muted text-xs">
        © {new Date().getFullYear()} LuxHomes. All rights reserved.
      </div>
    </footer>
  );
}
