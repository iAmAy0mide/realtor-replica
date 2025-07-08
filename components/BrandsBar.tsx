"use client";

const brands = [
  "Forbes",
  "Architectural Digest",
  "Zillow Premier",
  "Luxury Presence",
  "NYT Real Estate",
];

export default function BrandsBar() {
  return (
    <section className="py-8 px-6 bg-surface border-t border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
        {brands.map((brand, i) => (
          <span
            key={i}
            className="text-muted text-sm md:text-base font-medium opacity-70 hover:opacity-100 transition"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}