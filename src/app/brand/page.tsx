'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandGuidelinesPageContent } from "@/components/BrandGuidelinesPageContent";

export default function BrandPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <BrandGuidelinesPageContent />
      </main>

      <Footer />
    </div>
  );
}
