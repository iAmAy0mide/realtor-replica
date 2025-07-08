import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | LuxHomes",
  description: "Review the terms and conditions that govern your use of the LuxHomes website, services, and content.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-background px-6 py-20 text-left max-w-3xl mx-auto">
      <h1 className="text-3xl font-heading text-base mb-6">Terms of Service</h1>
      <p className="text-muted mb-4">
        These terms govern your use of the LuxHomes website and services.
      </p>

      <h2 className="text-xl font-semibold text-base mt-8 mb-2">1. Use of Our Website</h2>
      <p className="text-muted text-sm">
        You agree not to misuse or attempt to disrupt the website. Listings and content are for personal or business evaluation only.
      </p>

      <h2 className="text-xl font-semibold text-base mt-8 mb-2">2. Intellectual Property</h2>
      <p className="text-muted text-sm">
        All branding, content, and designs are owned by LuxHomes and protected by applicable laws. Reproduction without permission is prohibited.
      </p>

      <h2 className="text-xl font-semibold text-base mt-8 mb-2">3. Limitation of Liability</h2>
      <p className="text-muted text-sm">
        We strive for accuracy, but LuxHomes is not liable for outdated listings or third-party errors.
      </p>

      <h2 className="text-xl font-semibold text-base mt-8 mb-2">4. Changes</h2>
      <p className="text-muted text-sm">
        We may update these terms from time to time. Continued use of our site constitutes acceptance of any changes.
      </p>

      <p className="text-muted text-sm mt-10">
        Last updated: July 2025
      </p>
    </main>
  );
}
