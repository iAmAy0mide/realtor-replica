"use client";

import Button from "./Button";

export default function Hero({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta?: { label: string; onClick: () => void };
}) {
  return (
    <section className="relative bg-surface text-center px-4 pt-28 pb-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        {/* Replace with hotel hero image */}
        <div className="w-full h-full bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-6xl font-heading text-base mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-8 text-shadow-2xs">{subtitle}</p>
        {cta && (
          <Button className="text-lg px-8 py-4 shadow-md" onClick={cta.onClick}>
            {cta.label}
          </Button>
        )}
      </div>
    </section>
  );
}
