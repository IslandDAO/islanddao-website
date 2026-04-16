'use client';

import { Header } from '@/components/Header';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';
import { VideoHero } from '@/components/VideoHero';
import { EventsTeaser } from '@/components/EventsTeaser';
import { PerksNFT } from '@/components/PerksNFT';
import { Governance } from '@/components/Governance';
// import { MobileApp } from "@/components/MobileApp";
import { Partners } from '@/components/Partners';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const headerHeight = 81;
  const topOffset = headerHeight;

  return (
    <div className="min-h-screen">
      <Header />
      <AnnouncementBanner />

      {/* Hero Section */}
      <main style={{ paddingTop: `${topOffset}px` }}>
        <VideoHero topOffset={topOffset} />

        {/* Events Teaser Section */}
        <EventsTeaser />

        {/* Perks NFT Section */}
        <PerksNFT />

        {/* Governance Section */}
        <Governance />

        {/* Mobile App Section - Uncomment when live in app stores */}
        {/* <MobileApp /> */}

        {/* Partners Section */}
        <Partners />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
