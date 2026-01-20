import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OurStoryPageContent } from '@/components/OurStoryPageContent';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    "From Dean's List to IslandDAO: how a community of Web3 power users evolved from providing feedback services into one of Solana's most active DAOs and network states.",
  openGraph: {
    title: 'Our Story | IslandDAO',
    description:
      "From Dean's List to IslandDAO: how a community of Web3 power users evolved from providing feedback services into one of Solana's most active DAOs and network states.",
  },
  twitter: {
    title: 'Our Story | IslandDAO',
    description:
      "From Dean's List to IslandDAO: discover the journey of Solana's most active network state.",
  },
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <OurStoryPageContent />
      </main>

      <Footer />
    </div>
  );
}
