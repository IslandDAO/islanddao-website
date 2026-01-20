'use client';

export function Governance() {
  return (
    <section id="governance" className="py-32 bg-island-bg-light dark:bg-island-bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
                — DECENTRALIZED GOVERNANCE —
              </span>
            </div>
            <h2 className="font-brand-heading text-4xl md:text-5xl mb-6 leading-tight text-island-blue dark:text-island-text-dark uppercase">
              Shape the Future Together
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-island-text-light/70 dark:text-island-text-dark/70">
              IslandDAO is governed by its community through on-chain voting powered by Realms.
              Every member has a voice in decisions that shape our direction, from treasury
              allocation to event planning and strategic partnerships.
            </p>
          </div>

          {/* Image */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="aspect-[3/1] overflow-hidden relative">
                <img
                  src="/images/islanddao-realms-dark.jpg"
                  alt="IslandDAO x Realms Governance"
                  className="absolute inset-0 w-full h-full object-cover object-[center_33%]"
                />
              </div>
            </div>
          </div>

          {/* Feature cards - Centered grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-island-blue dark:bg-island-sky-blue">
                <svg
                  className="w-6 h-6 text-white dark:text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-semibold text-island-text-light dark:text-island-text-dark">
                On-chain voting with full transparency
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-island-blue dark:bg-island-sky-blue">
                <svg
                  className="w-6 h-6 text-white dark:text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-semibold text-island-text-light dark:text-island-text-dark">
                Community-driven proposals and initiatives
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-island-blue dark:bg-island-sky-blue">
                <svg
                  className="w-6 h-6 text-white dark:text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-semibold text-island-text-light dark:text-island-text-dark">
                Treasury management and fund allocation
              </span>
            </div>
          </div>

          {/* CTA - Centered */}
          <div className="text-center">
            <a
              href="/governance"
              className="inline-block px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
