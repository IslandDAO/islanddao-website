'use client';

import { useState } from 'react';
import {
  Palmtree,
  Users,
  Lightbulb,
  Trophy,
  Heart,
  Vote,
  Wrench,
  Rocket,
  Sparkles,
  Presentation,
  Zap,
  Megaphone,
} from 'lucide-react';

// ============================================
// HERO SECTION - "What is it"
// ============================================
function HeroSection() {
  return (
    <section className="pt-8 pb-12 bg-white dark:bg-island-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — ISLANDDAO EVENTS —
            </span>
          </div>

          {/* Title */}
          <h1 className="font-brand-heading text-3xl md:text-6xl mb-6 leading-tight uppercase">
            <span className="text-island-blue dark:text-island-text-dark">IslandDAO Events</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-island-tertiary dark:text-island-text-dark/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Where our network state comes to life. Throughout the year, we host month-long coworking
            events where Solana&apos;s most dedicated builders gather to work and collaborate,
            transforming villas around the world into temporary hubs of governance, innovation, and
            community.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MEDIA CAROUSEL SECTION - "Photo carousel or video"
// ============================================
const mediaItems = [
  { type: 'image', src: '/images/hero-images/slide-00.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-01.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-02.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-03.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-04.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-05.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-06.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-07.jpg', alt: 'IslandDAO Event' },
  { type: 'image', src: '/images/hero-images/slide-08.jpg', alt: 'IslandDAO Event' },
];

function MediaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <section className="py-8 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 shadow-xl">
            {/* Image slides */}
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-island-blue dark:bg-island-sky-blue w-8'
                    : 'bg-island-tertiary/30 dark:bg-white/20 hover:bg-island-tertiary/50'
                }`}
              />
            ))}
          </div>

          {/* Caption */}
          <p className="text-center text-lg text-island-tertiary dark:text-island-text-dark/90 mt-6 max-w-2xl mx-auto font-medium">
            If you want to build, grow, contribute, and connect with some of Solana&apos;s most
            committed creators, there is no better place to be.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// WORKSHOPS & HACKATHON SECTION
// ============================================
function WorkshopsHackathonSection() {
  return (
    <section className="py-24 bg-island-bg-light dark:bg-island-bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Workshops Column */}
            <div className="p-8 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center mb-6">
                <Presentation className="w-7 h-7 text-island-blue dark:text-island-sky-blue" />
              </div>

              <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-4">
                Citizen-Led Workshops
              </h3>

              <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 leading-relaxed mb-6">
                Every event features workshops led by citizens: founders, developers, designers, and
                contributors building across the Solana ecosystem.
              </p>

              <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed">
                Sessions cover new protocols, tooling, design patterns, governance mechanisms, and
                technical deep-dives, with space for anyone to host their own workshop.
              </p>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <blockquote className="relative px-8 py-2">
                  <svg
                    className="absolute top-0 left-0 w-6 h-6 text-island-blue/20 dark:text-island-sky-blue/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <svg
                    className="absolute bottom-0 right-0 w-6 h-6 text-island-blue/20 dark:text-island-sky-blue/20 rotate-180"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-island-blue dark:text-island-sky-blue font-medium italic">
                    It&apos;s been a better learning experience than any conference I&apos;ve been
                    to this year.
                  </p>
                  <cite className="block mt-2 text-sm text-island-tertiary dark:text-island-text-dark/60 not-italic">
                    2025 attendee
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* Hackathon Column */}
            <div className="p-8 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-island-blue dark:text-island-sky-blue" />
              </div>

              <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-4">
                On-Site Hackathon
              </h3>

              <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 leading-relaxed mb-6">
                IslandDAO hosts an on-site hackathon each year with prize pools supported by
                ecosystem partners. Teams build throughout the residency, supported by domain
                experts at the villa who offer mentorship, code reviews, design feedback, and
                strategic guidance.
              </p>

              <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed">
                The hackathon is intentionally integrated into the rhythm of the event, giving
                residents the time, space, and support to take ideas from idea to prototype to
                launch.
              </p>

              {/* Visual element */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-island-blue/20 dark:bg-island-sky-blue/20 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-island-blue dark:text-island-sky-blue" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-island-secondary/20 dark:bg-island-blue/20 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-island-blue dark:text-island-sky-blue" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-island-light-blue/20 dark:bg-island-light-blue/20 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-island-blue dark:text-island-sky-blue" />
                    </div>
                  </div>
                  <span className="text-sm text-island-tertiary dark:text-island-text-dark/70">
                    From idea → prototype → launch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Launchathon - Full width section */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center flex-shrink-0">
                <Megaphone className="w-8 h-8 text-island-blue dark:text-island-sky-blue" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-island-blue dark:text-island-sky-blue mb-4">
                  The Launchathon
                </h3>

                <p className="text-island-tertiary dark:text-island-text-dark/90 leading-relaxed mb-4 text-lg">
                  Unique to IslandDAO, the Launchathon is a community-driven moment where projects
                  go live with the support of the entire villa.
                </p>

                <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed">
                  Builders share what they&apos;ve created, receive immediate feedback, and use the
                  momentum and visibility generated by the event to launch tokens, apps, tools, or
                  updates directly into the ecosystem.
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
// WHY ATTEND SECTION
// ============================================
const whyAttendReasons = [
  {
    icon: Palmtree,
    title: 'Paradise Locations',
    description:
      'Work from stunning luxury villas in the most beautiful locations around the world.',
  },
  {
    icon: Users,
    title: 'Network with Builders',
    description:
      'Connect with top Solana developers, founders, and thought leaders in the ecosystem.',
  },
  {
    icon: Lightbulb,
    title: 'Learn & Collaborate',
    description:
      'Participate in workshops, hackathons, and collaborative sessions with industry experts.',
  },
  {
    icon: Trophy,
    title: 'Win Prizes',
    description:
      'Compete in hackathons with substantial prize pools and gain recognition for your work.',
  },
  {
    icon: Heart,
    title: 'Wellness Activities',
    description:
      'Balance work with yoga, meditation, fitness activities, and healthy lifestyle experiences.',
  },
  {
    icon: Vote,
    title: 'Governance Participation',
    description:
      'Participate in on-chain governance voting to help shape event decisions and activities.',
  },
];

function WhyAttendSection() {
  return (
    <section className="py-24 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — THE EXPERIENCE —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">Why Attend?</span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            IslandDAO events offer a unique blend of productivity, networking, and adventure.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyAttendReasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700 hover:border-island-blue/50 dark:hover:border-island-sky-blue/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
              </div>
              <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2">
                {reason.title}
              </h3>
              <p className="text-lg text-island-tertiary dark:text-island-text-dark/80">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// HACKATHON WINNERS SECTION
// ============================================
const hackathonWinners = [
  // 2025 Cypherpunk Hackathon
  {
    project: 'Unruggable',
    category: 'Grand Champion ($30K)',
    description: 'Hardware wallet and companion app built for Solana',
    event: '2025 Cypherpunk Hackathon',
    logo: '/assets/hackerthon-logos/unruggable-logo.jpg',
  },
  {
    project: 'Samui Wallet',
    category: 'Public Good Award ($10K)',
    description: 'Open-source project that benefits developers across the ecosystem',
    event: '2025 Cypherpunk Hackathon',
    logo: '/assets/hackerthon-logos/samui-wallet-logo.jpg',
  },
  {
    project: 'Cloak',
    category: '3rd Place - Stablecoin ($25K)',
    description: 'Private payments product on Solana',
    event: '2025 Cypherpunk Hackathon',
    logo: '/assets/hackerthon-logos/cloak-logo.jpg',
  },
  {
    project: 'Pine Analytics',
    category: '4th Place - Infrastructure',
    description: 'Data analytics infrastructure and querying platform',
    event: '2025 Cypherpunk Hackathon',
    logo: '/assets/hackerthon-logos/pine-analytics-logo.jpg',
  },
  // Radar Hackathon 2024
  {
    project: 'Reflect',
    category: 'Grand Champion ($50K)',
    description: 'Decentralized currency exchange based on hedge-backed stablecoins',
    event: 'Radar Hackathon 2024',
    logo: '/assets/hackerthon-logos/reflec-money-logo.svg',
  },
  {
    project: 'Supersize',
    category: '1st Place - Gaming ($25K)',
    description: 'Fully onchain high-stakes multiplayer game',
    event: 'Radar Hackathon 2024',
    logo: '/assets/hackerthon-logos/supersize-logo.png',
  },
  {
    project: 'Boost',
    category: '2nd Place - DePIN ($15K)',
    description: 'Decentralized advertising protocol connecting brands with creators',
    event: 'Radar Hackathon 2024',
    logo: '/assets/hackerthon-logos/boost-space-logo.png',
  },
  {
    project: 'Marshmallow',
    category: '2nd Place - DAOs & Network States ($15K)',
    description: 'DAO tooling for governance and community coordination',
    event: 'Radar Hackathon 2024',
    logo: '/assets/hackerthon-logos/marshmallow-logo.jpg',
  },
];

function HackathonWinnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % hackathonWinners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + hackathonWinners.length) % hackathonWinners.length);
  };

  return (
    <section className="py-24 bg-island-bg-light dark:bg-island-bg-dark relative no-format-detection">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — SUCCESS STORIES —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">Hackathon Winners</span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto mb-8">
            Projects built and launched at IslandDAO events
          </p>
          {/* Total prizes stat */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-island-blue/5 dark:bg-island-sky-blue/10 border border-island-blue/20 dark:border-island-sky-blue/20">
            <span className="text-3xl md:text-4xl font-bold text-island-blue dark:text-island-sky-blue">
              $200K+
            </span>
            <span className="text-island-tertiary dark:text-island-text-dark/80 text-left text-sm">
              in prizes won by
              <br />
              IslandDAO projects
            </span>
          </div>
        </div>

        {/* Winners carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Winner logo */}
              <div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-island-blue/10 to-island-secondary/10 dark:from-island-surface-variant-dark dark:to-island-surface-dark flex items-center justify-center p-6">
                <img
                  src={hackathonWinners[activeIndex].logo}
                  alt={`${hackathonWinners[activeIndex].project} logo`}
                  className="w-32 h-32 object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>

              {/* Winner details */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/20 text-island-blue dark:text-island-sky-blue text-sm font-semibold mb-3">
                  {hackathonWinners[activeIndex].category}
                </div>
                <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                  {hackathonWinners[activeIndex].project}
                </h3>
                <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 mb-3">
                  {hackathonWinners[activeIndex].description}
                </p>
                <p className="text-sm text-island-tertiary/70 dark:text-island-text-dark/60">
                  {hackathonWinners[activeIndex].event}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-island-blue dark:text-island-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {hackathonWinners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-island-blue dark:bg-island-sky-blue'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-island-blue dark:text-island-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// APPLYING TO EVENT SECTION
// ============================================
const applicationSteps = [
  {
    step: 1,
    title: 'Get Your NFT',
    description: 'Your IslandDAO NFT is your gateway to the community and events.',
  },
  {
    step: 2,
    title: 'Apply When Applications Open',
    description:
      'We post a call for applications before each event. Apply through the official form to tell us about yourself and your goals.',
  },
  {
    step: 3,
    title: 'Get Approved',
    description: 'Our team reviews applications and notifies accepted participants.',
  },
  {
    step: 4,
    title: 'Book & Attend',
    description:
      'Secure your spot, book your own travel and accommodation, and join us for an unforgettable experience.',
  },
];

function ApplyingSection() {
  return (
    <section className="py-24 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — HOW TO JOIN —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">
              Applying to an Event
            </span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            Follow these steps to secure your spot at an upcoming IslandDAO event.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-[3.5rem] bottom-[5rem] w-0.5 bg-gradient-to-b from-island-blue via-island-secondary to-island-light-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue"></div>

            {applicationSteps.map((step) => (
              <div key={step.step} className="relative flex items-center gap-6 mb-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>

                {/* Step content */}
                <div className="flex-1 p-6 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-island-tertiary dark:text-island-text-dark/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA - Uncomment when registration opens */}
          {/* <div className="text-center mt-12">
            <button className="px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Apply for Next Event
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PAST & UPCOMING EVENTS SECTION
// ============================================
interface EventItem {
  id: number;
  title: string;
  location: string;
  date: string;
  image?: string;
  isPast: boolean;
  slug?: string;
  stats?: {
    attendees?: number;
    projects?: number;
  };
}

const allEvents: EventItem[] = [
  {
    id: 1,
    title: 'IslandDAO Thailand',
    location: 'Koh Samui, Thailand',
    date: 'June 2026',
    image: '/images/thailand-sm.jpg',
    isPast: false,
  },
  {
    id: 2,
    title: 'IslandDAO Brazil',
    location: 'Florianópolis, Brazil',
    date: 'Oct-Nov 2026',
    image: '/images/brazil-sm.jpg',
    isPast: false,
  },
  {
    id: 3,
    title: 'IslandDAO Mykonos',
    location: 'Mykonos, Greece',
    date: 'Sept-Oct 2025',
    image: '/images/hero-images/v3-003.jpg',
    isPast: true,
    slug: '2025-mykonos',
  },
  {
    id: 4,
    title: 'IslandDAO Koh Samui',
    location: 'Koh Samui, Thailand',
    date: 'Sept-Oct 2024',
    image: '/images/hero-images/v2-group.jpg',
    isPast: true,
    slug: '2024-thailand',
  },
  {
    id: 5,
    title: 'IslandDAO Crete',
    location: 'Crete, Greece',
    date: 'May-June 2024',
    image: '/images/hero-images/v1-001.jpg',
    isPast: true,
    slug: '2024-crete',
  },
];

function EventCard({ event }: { event: EventItem }) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (event.isPast && event.slug) {
      return (
        <a href={`/events/${event.slug}`} className="block group">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <div>
        {/* Card */}
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg">
          {/* Image */}
          <div className="aspect-[4/3] relative overflow-hidden">
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-island-blue/20 to-island-secondary/20 dark:from-island-surface-variant-dark dark:to-island-surface-dark">
                <Palmtree className="w-16 h-16 text-island-blue dark:text-island-sky-blue" />
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Status badge */}
            <div
              className={`absolute top-3 right-3 px-3 py-1.5 rounded-full shadow-lg ${
                event.isPast
                  ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600'
                  : 'bg-island-blue dark:bg-island-sky-blue'
              }`}
            >
              <span
                className={`text-sm font-semibold ${
                  event.isPast
                    ? 'text-island-tertiary dark:text-island-text-dark/80'
                    : 'text-white dark:text-gray-900'
                }`}
              >
                {event.isPast ? 'Past Event' : 'Upcoming'}
              </span>
            </div>

            {/* Date badge */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg">
              <span className="text-sm font-semibold text-island-blue dark:text-island-sky-blue">
                {event.date}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-1">
              {event.title}
            </h3>
            <div className="flex items-center text-island-tertiary dark:text-island-text-dark/80 text-sm mb-3">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {event.location}
            </div>

            {/* Stats for past events */}
            {event.isPast && event.stats && (
              <div className="flex gap-4 text-sm">
                {event.stats.attendees && (
                  <div className="flex items-center text-island-tertiary dark:text-island-text-dark/80">
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.stats.attendees} attendees
                  </div>
                )}
                {event.stats.projects && (
                  <div className="flex items-center text-island-tertiary dark:text-island-text-dark/80">
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    {event.stats.projects} projects
                  </div>
                )}
              </div>
            )}

            {/* View details link for past events */}
            {event.isPast && event.slug && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                <span className="text-sm font-semibold text-island-blue dark:text-island-sky-blue group-hover:underline flex items-center">
                  View Event Details & Gallery
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

function EventsListSection() {
  const upcomingEvents = allEvents.filter((e) => !e.isPast);
  const pastEvents = allEvents.filter((e) => e.isPast);

  return (
    <section className="py-24 bg-island-bg-light dark:bg-island-bg-dark relative no-format-detection">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — ALL EVENTS —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">
              Upcoming & Past Events
            </span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            Explore upcoming adventures and relive past experiences through stats, photos, and
            videos.
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-8 text-center md:text-left">
              Upcoming Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-8 text-center md:text-left">
              Past Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export function EventsPageContent() {
  return (
    <>
      <HeroSection />
      <MediaCarousel />
      <WorkshopsHackathonSection />
      <WhyAttendSection />
      <HackathonWinnersSection />
      <ApplyingSection />
      <EventsListSection />
    </>
  );
}
