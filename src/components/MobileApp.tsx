'use client';

const stores = [
  {
    name: 'App Store',
    platform: 'iOS',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
    ),
    link: '#', // Replace with actual App Store link
  },
  {
    name: 'Google Play',
    platform: 'Android',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
    ),
    link: '#', // Replace with actual Google Play link
  },
  {
    name: 'Solana dApp Store',
    platform: 'Web3',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 397.7 311.7" fill="currentColor">
        <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" />
        <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" />
        <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
      </svg>
    ),
    link: '#', // Replace with actual Solana dApp Store link
  },
];

export function MobileApp() {
  return (
    <section id="mobile-app" className="py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-island-blue/5 via-island-secondary/5 to-island-light-blue/5 dark:from-island-blue/10 dark:via-island-sky-blue/10 dark:to-island-light-blue/10"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-island-blue dark:bg-island-sky-blue rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-island-secondary dark:bg-island-light-blue rounded-full blur-3xl opacity-20 animate-float delay-100"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="px-6 py-2.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg">
                <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-wide">
                  DOWNLOAD THE APP
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text drop-shadow-lg">Take IslandDAO With You</span>
            </h2>

            <p className="text-xl text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto font-medium">
              Download our mobile app and stay connected wherever you go. Available on iOS, Android,
              and the Solana dApp Store.
            </p>
          </div>

          {/* Store badges grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {stores.map((store) => (
              <a key={store.name} href={store.link} className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-island-blue via-island-secondary to-island-light-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Glass card */}
                <div className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-8 hover:scale-105 transition-transform shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-4 text-island-blue dark:text-island-sky-blue">
                      {store.icon}
                    </div>

                    {/* Store name */}
                    <h3 className="text-xl font-bold text-island-text-light dark:text-island-text-dark mb-2">
                      {store.name}
                    </h3>

                    {/* Platform */}
                    <span className="text-sm text-island-tertiary dark:text-island-text-dark/70 mb-4">
                      {store.platform}
                    </span>

                    {/* Download button */}
                    <div className="px-6 py-2 rounded-xl bg-gradient-to-r from-island-blue to-island-secondary dark:from-island-sky-blue dark:to-island-light-blue text-white text-sm font-bold shadow-lg group-hover:shadow-xl transition-all">
                      Download
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Features grid */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-island-blue via-island-secondary to-island-light-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

            {/* Glass container */}
            <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-island-blue dark:bg-island-sky-blue flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-island-text-light dark:text-island-text-dark mb-2">
                      Mobile-First Experience
                    </h4>
                    <p className="text-island-tertiary dark:text-island-text-dark/90">
                      Check into events, manage your passport, and participate in governance from
                      your phone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-island-blue dark:bg-island-sky-blue flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-island-text-light dark:text-island-text-dark mb-2">
                      Secure Wallet Integration
                    </h4>
                    <p className="text-island-tertiary dark:text-island-text-dark/90">
                      Connect your Solana wallet seamlessly with enterprise-grade security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-island-blue dark:bg-island-sky-blue flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-island-text-light dark:text-island-text-dark mb-2">
                      Real-Time Notifications
                    </h4>
                    <p className="text-island-tertiary dark:text-island-text-dark/90">
                      Get instant updates about events, proposals, and community activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-island-blue dark:bg-island-sky-blue flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-island-text-light dark:text-island-text-dark mb-2">
                      Event Photo Sharing
                    </h4>
                    <p className="text-island-tertiary dark:text-island-text-dark/90">
                      Capture memories and share photos from events directly in the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
