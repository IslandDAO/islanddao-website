import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrivacyPageContent } from '@/components/PrivacyPageContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for IslandDAO — how we collect, use, and protect your information across our website and mobile application.',
  openGraph: {
    title: 'Privacy Policy | IslandDAO',
    description: 'Read the Privacy Policy for IslandDAO LLC.',
  },
  twitter: {
    title: 'Privacy Policy | IslandDAO',
    description: 'Read the Privacy Policy for IslandDAO LLC.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <PrivacyPageContent />
      </main>

      <Footer />
    </div>
  );
}
