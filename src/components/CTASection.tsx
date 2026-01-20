'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-32 bg-island-blue dark:bg-island-bg-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-brand-heading text-4xl md:text-5xl text-white dark:text-island-text-dark mb-6 leading-tight uppercase">
          Ready to Join IslandDAO?
        </h2>
        <p className="text-lg text-white/80 dark:text-island-text-dark/70 mb-10 max-w-2xl mx-auto">
          Explore our events and/or participate in governance to become part of the IslandDAO
          community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/events"
            className="px-8 py-4 rounded-xl bg-white dark:bg-island-sky-blue text-island-blue dark:text-gray-900 font-bold hover:opacity-90 transition-opacity"
          >
            Explore Events
          </Link>
          <Link
            href="/governance"
            className="px-8 py-4 rounded-xl bg-white/20 dark:bg-white/10 text-white dark:text-island-text-dark font-bold border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-colors"
          >
            Participate in Governance
          </Link>
        </div>
      </div>
    </section>
  );
}
