import Hero from "@/components/Hero";
import FeatureHighlight from "@/components/FeatureHighlight";
import PremiumListingsPreview from "@/components/PremiumListingsPreview";
import BrandsBar from "@/components/BrandsBar";
import FinalCTA from "@/components/FinalCTA";
import StoryFunnel from "@/components/StoryFunnel";
import Testimonials from "@/components/Testimonials";
import Script from "next/script";

export default function HomePage() {
  return (
    <main className="bg-background text-base">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "LuxHomes",
            url: "https://www.luxhomes.com",
            logo: "https://www.luxhomes.com/logo.png",
            sameAs: [
              "https://www.instagram.com/luxhomes",
              "https://www.linkedin.com/company/luxhomes",
              "https://www.twitter.com/luxhomes",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "12 Elite Drive",
              addressLocality: "Lagos",
              addressRegion: "LA",
              postalCode: "100001",
              addressCountry: "NG",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-800-000-0000",
              contactType: "Customer Service",
            },
          }),
        }}
      />
      <Hero />

      <BrandsBar />

      <FeatureHighlight />

      <PremiumListingsPreview />

      <StoryFunnel
        title="From Browsing to Belonging"
        story="Meet Claire. She searched for 6 months—scrolling endlessly through real estate platforms until LuxHomes changed the game. Within 3 days, we matched her with a modern duplex in a neighborhood she didn&apos;t even know she loved. Now, she hosts Sunday dinners on her rooftop and watches the city light up at night."
        ctaLabel="Let&apos;s Find Yours"
        ctaHref="/listings"
      />

      <Testimonials />

      <FinalCTA />
    </main>
  );
}
