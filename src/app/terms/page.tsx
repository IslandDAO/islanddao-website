import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TermsPageContent } from '@/components/TermsPageContent';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for IslandDAO — governing use of our website, mobile application, events, NFTs, and community services.',
  openGraph: {
    title: 'Terms of Service | IslandDAO',
    description: 'Read the Terms of Service for IslandDAO LLC.',
  },
  twitter: {
    title: 'Terms of Service | IslandDAO',
    description: 'Read the Terms of Service for IslandDAO LLC.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <TermsPageContent />
      </main>

      <Footer />
    </div>
  );
}
