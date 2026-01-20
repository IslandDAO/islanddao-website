import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about IslandDAO, our events, governance, citizenship, and how to get involved in our Solana network state community.",
  openGraph: {
    title: "FAQ | IslandDAO",
    description: "Frequently asked questions about IslandDAO, our events, governance, citizenship, and how to get involved.",
  },
  twitter: {
    title: "FAQ | IslandDAO",
    description: "Get answers to common questions about IslandDAO and our community.",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
