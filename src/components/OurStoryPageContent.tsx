'use client';

import Link from 'next/link';
import {
  Grape,
  MessageSquare,
  Users,
  Globe,
  Palmtree,
  Vote,
  Rocket,
  Award,
  Lightbulb,
  Target,
  MapPin,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { Testimonials } from './Testimonials';

// ============================================
// ISLANDDAO TODAY SECTION - What We Are Now
// ============================================
const todayPillars = [
  {
    icon: Palmtree,
    title: 'Global Events',
    description:
      'Month-long coworking experiences bringing builders together in paradise locations around the world.',
  },
  {
    icon: Vote,
    title: 'On-Chain Governance',
    description:
      'Community-driven decisions using token-based voting, innovative governance experiments, and transparent treasury management.',
  },
  {
    icon: Users,
    title: 'Citizen Community',
    description:
      'A global network of Web3 builders, developers, and contributors committed to collaboration and growth.',
  },
  {
    icon: Target,
    title: 'Shared Mission',
    description:
      'Building the future of decentralized organizations through real-world collaboration and governance innovation.',
  },
];

function TodaySection() {
  return (
    <section className="pt-8 pb-12 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — TODAY —
            </span>
          </div>
          <h1 className="font-brand-heading text-3xl md:text-6xl mb-6 leading-tight uppercase">
            <span className="text-island-blue dark:text-island-text-dark">IslandDAO Today</span>
          </h1>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-3xl mx-auto mb-8">
            IslandDAO is a{' '}
            <span className="font-semibold text-island-blue dark:text-island-sky-blue">
              network state
            </span>
            . Our citizens span the globe, coming together both online and at in-person events to
            build, collaborate, and shape our collective future.
          </p>
        </div>

        {/* Network State Explainer */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 rounded-2xl bg-island-blue/5 dark:bg-island-sky-blue/10 border border-island-blue/20 dark:border-island-sky-blue/20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8 text-island-blue dark:text-island-sky-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-3">
                  What is a Network State?
                </h3>
                <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 leading-relaxed">
                  A network state is a digitally-native community with shared identity, governance,
                  and purpose. Unlike traditional organizations bound by borders, network states
                  exist wherever their citizens are. IslandDAO citizens live and work around the
                  world, connected through on-chain governance and united by periodic gatherings at
                  our coworking events.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {todayPillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
              </div>
              <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2">
                {pillar.title}
              </h3>
              <p className="text-lg text-island-tertiary dark:text-island-text-dark/80">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TIMELINE SECTION - Our History
// ============================================
function TimelineSection() {
  return (
    <section className="py-24 bg-island-bg-light dark:bg-island-bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — OUR HISTORY —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-4 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">The Journey</span>
          </h2>
          <p className="text-xl font-medium text-island-blue dark:text-island-sky-blue mb-4">
            From Dean&apos;s List to IslandDAO
          </p>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            How a community of Web3 power users evolved from providing feedback services into one of
            Solana&apos;s most active DAOs and network states.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline bar */}
          <div className="relative mb-8">
            {/* The line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-island-blue via-island-secondary to-island-sky-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue rounded-full"></div>

            {/* Year markers */}
            <div className="hidden md:flex justify-between items-start relative">
              {[
                { year: '2022', icon: Grape },
                { year: '2023', icon: Globe },
                { year: '2024', icon: Palmtree },
                { year: '2025', icon: Rocket },
                { year: '2026', icon: Calendar },
              ].map((item, index) => (
                <div key={item.year} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg ${
                      index === 4
                        ? 'bg-island-blue dark:bg-island-sky-blue'
                        : 'bg-white dark:bg-island-surface-dark border-2 border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        index === 4
                          ? 'text-white dark:text-gray-900'
                          : 'text-island-tertiary dark:text-island-text-dark/70'
                      }`}
                    />
                  </div>
                  <span
                    className={`mt-3 text-sm font-semibold ${
                      index === 4
                        ? 'text-island-blue dark:text-island-sky-blue'
                        : 'text-island-tertiary dark:text-island-text-dark/60'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Era Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Dean's List Era */}
            <div className="p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-island-tertiary dark:text-island-text-dark/70 uppercase tracking-wide">
                  2022-2023 · Historical
                </span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Grape className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    The Dean&apos;s List Era
                  </h3>
                  <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed mb-4">
                    Launched as a subDAO of Grape Protocol, bringing together Solana power users to
                    provide rigorous feedback to emerging protocols.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Feedback Reviews',
                      'Grant Management',
                      'Hackathon Judging',
                      'Live Sessions',
                    ].map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-island-tertiary dark:text-island-text-dark/70"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Global Expansion */}
            <div className="p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-island-tertiary dark:text-island-text-dark/70 uppercase tracking-wide">
                  2023 · Historical
                </span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    Global Expansion
                  </h3>
                  <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed">
                    Regional teams formed in Nigeria and Brazil, creating local chapters to bring
                    Web3 education and opportunities to their communities.
                  </p>
                </div>
              </div>
            </div>

            {/* First Events */}
            <div className="p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-island-tertiary dark:text-island-text-dark/70 uppercase tracking-wide">
                  2024 · Historical
                </span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center flex-shrink-0">
                  <Palmtree className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    The Evolution Begins
                  </h3>
                  <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed">
                    We realized the strongest bonds and best ideas emerged when members came
                    together in person. The first IslandDAO coworking events launched in Crete and
                    Ko Samui.
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 - Historical */}
            <div className="p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 relative">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-island-tertiary dark:text-island-text-dark/70 uppercase tracking-wide">
                  2025 · Historical
                </span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    Mykonos &amp; Perks NFT
                  </h3>
                  <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed">
                    Hosted our third coworking event in Mykonos, Greece, launched the Perks NFT
                    collection, and developed our own mobile app for on-chain event experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* 2026 - Present */}
            <div className="p-6 rounded-2xl bg-island-blue/5 dark:bg-island-sky-blue/10 border-2 border-island-blue/30 dark:border-island-sky-blue/30 relative md:col-span-2">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 rounded-full bg-island-blue dark:bg-island-sky-blue text-xs font-bold text-white dark:text-gray-900 uppercase tracking-wide">
                  2026 · Present
                </span>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-island-blue dark:bg-island-sky-blue flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white dark:text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    IslandDAO 2026
                  </h3>
                  <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed mb-4">
                    Two major events this year: IslandDAO Thailand in June and IslandDAO Brazil in
                    October-November. Continuing to grow our network state and bring builders
                    together across the globe.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/20 text-island-blue dark:text-island-sky-blue text-sm font-medium">
                      <MapPin className="w-3 h-3" />
                      Thailand · June
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/20 text-island-blue dark:text-island-sky-blue text-sm font-medium">
                      <MapPin className="w-3 h-3" />
                      Brazil · Oct-Nov
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy Stats */}
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
            <p className="text-center text-island-tertiary dark:text-island-text-dark/70 mb-6 text-sm uppercase tracking-wide font-semibold">
              Our Legacy from the Dean&apos;s List Era
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-island-blue dark:text-island-sky-blue mb-1">
                  200+
                </p>
                <p className="text-sm text-island-tertiary dark:text-island-text-dark/70">
                  Projects Reviewed
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-island-blue dark:text-island-sky-blue mb-1">
                  $500k+
                </p>
                <p className="text-sm text-island-tertiary dark:text-island-text-dark/70">
                  Community GDP
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-island-blue dark:text-island-sky-blue mb-1">
                  100+
                </p>
                <p className="text-sm text-island-tertiary dark:text-island-text-dark/70">
                  Citizens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// GLOBAL PRESENCE SECTION - Our Network
// ============================================
function GlobalPresenceSection() {
  return (
    <section className="py-24 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
                — GLOBAL NETWORK —
              </span>
            </div>
            <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
              <span className="text-island-blue dark:text-island-text-dark">Where We Are</span>
            </h2>
            <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-3xl mx-auto">
              IslandDAO citizens live around the world. Our events rotate through different
              locations, and our regional teams help grow the community locally.
            </p>
          </div>

          {/* Global vs Regional explanation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Global Events */}
            <div className="p-8 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center">
                  <Palmtree className="w-7 h-7 text-island-blue dark:text-island-sky-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue">
                    Global Events
                  </h3>
                  <p className="text-sm text-island-tertiary dark:text-island-text-dark/60">
                    Rotating Locations
                  </p>
                </div>
              </div>
              <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 mb-4">
                Our coworking events happen in different locations each time. Past and upcoming
                destinations include:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Greece', 'Thailand', 'Brazil'].map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/20 text-island-blue dark:text-island-sky-blue text-sm font-medium"
                  >
                    <MapPin className="w-3 h-3" />
                    {location}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-island-tertiary dark:text-island-text-dark/70 text-sm">
                  + more to come
                </span>
              </div>
            </div>

            {/* Online Community */}
            <div className="p-8 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center">
                  <Users className="w-7 h-7 text-island-blue dark:text-island-sky-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue">
                    Online Community
                  </h3>
                  <p className="text-sm text-island-tertiary dark:text-island-text-dark/60">
                    Always Connected
                  </p>
                </div>
              </div>
              <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 mb-4">
                Between events, our community stays connected through Discord, on-chain governance,
                and collaborative projects. Citizens participate from anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Discord', 'Governance', 'Working Groups'].map((channel) => (
                  <span
                    key={channel}
                    className="px-3 py-1 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/20 text-island-blue dark:text-island-sky-blue text-sm font-medium"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Regional Teams */}
          <div className="p-8 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-4 text-center">
              Regional Teams
            </h3>
            <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 text-center max-w-2xl mx-auto mb-8">
              Local chapters that help grow the IslandDAO community in their regions through
              meetups, education, and local events.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Nigeria */}
              <div className="p-6 rounded-xl bg-white dark:bg-island-surface-dark border border-green-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 dark:text-green-400">IslandDAO NG</h4>
                    <p className="text-xs text-island-tertiary dark:text-island-text-dark/60">
                      Nigeria
                    </p>
                  </div>
                </div>
                <p className="text-island-tertiary dark:text-island-text-dark/80">
                  Connecting with West Africa&apos;s vibrant Web3 community and fostering local
                  talent.
                </p>
              </div>

              {/* Brazil */}
              <div className="p-6 rounded-xl bg-white dark:bg-island-surface-dark border border-yellow-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-600 dark:text-yellow-400">IslandDAO BR</h4>
                    <p className="text-xs text-island-tertiary dark:text-island-text-dark/60">
                      Brazil
                    </p>
                  </div>
                </div>
                <p className="text-island-tertiary dark:text-island-text-dark/80">
                  Serving Latin America&apos;s growing crypto community and bridging language
                  barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <section className="py-24 bg-island-bg-light dark:bg-island-bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-brand-heading text-3xl md:text-4xl mb-6 uppercase text-island-blue dark:text-island-text-dark">
            Join Our Journey
          </h2>
          <p className="text-xl text-island-tertiary dark:text-island-text-dark/90 mb-8">
            From humble beginnings as a feedback DAO to becoming a thriving network state, our story
            continues with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity"
            >
              Explore Events
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/governance"
              className="inline-block px-8 py-4 rounded-xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 text-island-blue dark:text-island-sky-blue font-bold hover:border-island-blue/50 dark:hover:border-island-sky-blue/50 transition-colors"
            >
              Participate in Governance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export function OurStoryPageContent() {
  return (
    <>
      <TodaySection />
      <TimelineSection />
      <div className="hidden md:block">
        <Testimonials />
      </div>
      <GlobalPresenceSection />
      <CTASection />
    </>
  );
}
