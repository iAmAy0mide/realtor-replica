import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "LuxHomes | Prestige Real Estate & Luxury Living",
  description:
    "Discover, explore, and secure your dream property with LuxHomes. We specialize in modern, elegant real estate experiences built on trust, prestige, and personal connection.",
  metadataBase: new URL("https://luxhomes.vercel.app"),

  openGraph: {
    title: "LuxHomes | Prestige Real Estate & Luxury Living",
    description:
      "Explore luxurious listings and schedule private tours with trusted agents. A refined real estate experience awaits.",
    url: "https://luxhomes.vercel.app",
    siteName: "LuxHomes",
    images: [
      {
        url: "https://luxhomes.vercel.app/og-image.jpg", // Use your actual OG image
        width: 1200,
        height: 630,
        alt: "LuxHomes Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LuxHomes | Prestige Real Estate & Luxury Living",
    description:
      "LuxHomes delivers modern elegance in real estate. Discover stunning homes and work with agents who value trust and prestige.",
    images: ["https://luxhomes.vercel.app/og-image.jpg"], // Same as Open Graph
    site: "@luxhomes", // a Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-base antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
