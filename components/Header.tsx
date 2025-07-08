"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md bg-surface/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-heading text-primary">
          LuxHomes<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-muted text-sm font-medium">
          <Link href="/listings">Listings</Link>
          <Link href="/agents">Our Agents</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/booking"
            className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-hover transition"
          >
            Book a Tour
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-surface border-t border-border space-y-4 text-muted text-sm">
          <Link href="/listings">Listings</Link>
          <Link href="/agents">Our Agents</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/book"
            className="inline-block bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-hover transition"
          >
            Book a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
