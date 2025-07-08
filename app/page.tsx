import Hero from "@/components/Hero";
import FeatureHighlight from "@/components/FeatureHighlight";
import PremiumListingsPreview from "@/components/PremiumListingsPreview";
import BrandsBar from "@/components/BrandsBar";
import FinalCTA from "@/components/FinalCTA";
import StoryFunnel from "@/components/StoryFunnel";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="bg-background text-base">
      <Hero />

      <BrandsBar />

      <FeatureHighlight />

      <PremiumListingsPreview />

      <StoryFunnel
        title="From Browsing to Belonging"
        story="Meet Claire. She searched for 6 months—scrolling endlessly through real estate platforms until LuxHomes changed the game. Within 3 days, we matched her with a modern duplex in a neighborhood she didn’t even know she loved. Now, she hosts Sunday dinners on her rooftop and watches the city light up at night."
        ctaLabel="Let’s Find Yours"
        ctaHref="/listings"
      />

      <Testimonials />

      <FinalCTA />
    </main>
  );
}
