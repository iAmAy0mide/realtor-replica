"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // click outside to close mobile nav
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md bg-surface/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading text-primary">
          LuxHomes<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-muted text-sm font-medium">
          <Link href="/listings" className="hover:text-base transition">Listings</Link>
          <Link href="/agents" className="hover:text-base transition">Our Agents</Link>
          <Link href="/about" className="hover:text-base transition">About</Link>
          <Link href="/contact" className="hover:text-base transition">Contact</Link>
          <Link
            href="/book"
            className="ml-4 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-hover transition"
          >
            Book a Tour
          </Link>
        </nav>

        <button className="md:hidden text-base" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute inset-x-4 top-[70px] mx-auto z-40 bg-surface border border-border rounded-xl shadow-xl p-6 text-muted text-sm font-medium space-y-4 animate-fade-in"
        >
          <div className="flex flex-col space-y-2 ">
            <Link href="/listings" onClick={() => setIsOpen(false)}>
              Listings
            </Link>
            <Link href="/agents" onClick={() => setIsOpen(false)}>
              Our Agents
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
          <Link
            href="/book"
            className="inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-hover transition text-[1.1rem]"
            onClick={() => setIsOpen(false)}
          >
            Book a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
