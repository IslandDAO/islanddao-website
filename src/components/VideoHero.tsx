'use client';

import Image from 'next/image';

interface VideoHeroProps {
  topOffset?: number;
  videoId?: string;
}

export function VideoHero({
  topOffset = 81,
  videoId = 'CKJ5Eg-ivLc'
}: VideoHeroProps) {
  // YouTube embed parameters for autoplay, muted, looping video
  const embedParams = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId, // Required for loop to work
    controls: '0',
    showinfo: '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    enablejsapi: '1',
  });

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${embedParams.toString()}`;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: `calc(100vh - ${topOffset}px)` }}
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={embedUrl}
          title="IslandDAO Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
          style={{
            aspectRatio: '16/9',
            pointerEvents: 'none',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        {/* Logo */}
        <Image
          src="/images/logo-white.png"
          alt="IslandDAO"
          width={200}
          height={200}
          className="h-auto mb-4"
          style={{ width: 'clamp(5rem, 12vh, 9rem)' }}
          priority
        />

        {/* IslandDAO name */}
        <h1
          className="font-deutschlander tracking-deutschlander mb-4 text-center text-white uppercase"
          style={{ fontSize: 'clamp(2rem, 6vh, 5rem)' }}
        >
          IslandDAO
        </h1>

        {/* Tagline - fluid scaling with viewport height */}
        <p
          className="font-brand-heading mb-4 leading-tight text-center text-white uppercase"
          style={{ fontSize: 'clamp(1rem, 3vh, 2.5rem)' }}
        >
          <span className="block">
            <span className="text-island-light-blue">Web3 Native</span> Network State,
          </span>
          <span className="block text-island-light-blue">
            Solana&rsquo;s Most Dedicated Power Users.
          </span>
        </p>

        {/* Mission statement */}
        <p
          className="text-center text-white/80 max-w-2xl"
          style={{ fontSize: 'clamp(0.875rem, 2vh, 1.25rem)' }}
        >
          Fostering worldwide participation and building the future of decentralized organizations.
        </p>
      </div>

      {/* Bouncing scroll indicator */}
      <button
        onClick={() => {
          const nextSection = document.getElementById('events');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
      >
        <svg
          className="w-8 h-8 text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
