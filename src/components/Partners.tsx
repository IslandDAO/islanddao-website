'use client';

const partners = [
  { img: '/images/partners/realms.png', name: 'Realms', link: 'https://www.realms.today' },
  { img: '/images/partners/solana.png', name: 'Solana Foundation', link: 'https://solana.com' },
  { img: '/images/partners/metaplex.png', name: 'Metaplex', link: 'https://www.metaplex.com/' },
  { img: '/images/partners/solfare.png', name: 'Solflare', link: 'https://www.solflare.com/' },
  { img: '/images/partners/pubkey.png', name: 'Pubkey', link: 'https://pubkey.islanddao.org' },
  { img: '/images/partners/monkedao.png', name: 'MonkeDAO', link: 'https://monkedao.io/' },
];

export function Partners() {
  return (
    <section className="py-32 overflow-hidden bg-white dark:bg-island-surface-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — PARTNERS & COMMUNITY —
            </span>
          </div>
          <h2 className="font-brand-heading text-4xl md:text-5xl text-island-blue dark:text-island-text-dark mb-6 leading-tight uppercase">
            Building with the Best
          </h2>
          <p className="text-lg text-island-text-light/70 dark:text-island-text-dark/70 max-w-2xl mx-auto">
            Proud to collaborate with leading projects and communities in the Solana ecosystem
          </p>
        </div>

        {/* Mobile: Logo grid with names */}
        <div className="md:hidden grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white dark:bg-island-surface-dark shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              <img src={partner.img} alt={partner.name} className="w-10 h-10 object-contain" />
              <span className="text-xs font-medium text-island-text-light dark:text-island-text-dark text-center leading-tight">
                {partner.name}
              </span>
            </a>
          ))}
        </div>

        {/* Desktop: Infinite scroll animation */}
        <div className="relative hidden md:block">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-island-surface-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-island-surface-dark to-transparent z-10"></div>

          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll-partners hover:[animation-play-state:paused]">
              {/* First set */}
              <div className="flex items-center gap-16 pr-16">
                {partners.map((partner, index) => (
                  <a
                    key={`first-${index}`}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:scale-110 transition-transform group flex-shrink-0"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-island-surface-dark p-2">
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                    <span className="text-xl font-semibold text-island-text-light dark:text-island-text-dark group-hover:text-island-blue dark:group-hover:text-island-sky-blue transition-colors whitespace-nowrap">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16 pr-16">
                {partners.map((partner, index) => (
                  <a
                    key={`second-${index}`}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:scale-110 transition-transform group flex-shrink-0"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-island-surface-dark p-2">
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                    <span className="text-xl font-semibold text-island-text-light dark:text-island-text-dark group-hover:text-island-blue dark:group-hover:text-island-sky-blue transition-colors whitespace-nowrap">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Third set for extra seamless loop */}
              <div className="flex items-center gap-16">
                {partners.map((partner, index) => (
                  <a
                    key={`third-${index}`}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:scale-110 transition-transform group flex-shrink-0"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-island-surface-dark p-2">
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="absolute inset-0 w-full h-full object-contain p-1"
                      />
                    </div>
                    <span className="text-xl font-semibold text-island-text-light dark:text-island-text-dark group-hover:text-island-blue dark:group-hover:text-island-sky-blue transition-colors whitespace-nowrap">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
