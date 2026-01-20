'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  image: string;
  tripName: string;
  country: string;
  position?: string; // e.g., 'center', 'top', 'bottom', '50% 30%'
}

const slides: HeroSlide[] = [
  {
    image: '/images/hero-images/v1-001.jpg',
    tripName: 'IslandDAO v1',
    country: 'Crete, Greece',
    position: 'center 50%',
  },
  {
    image: '/images/hero-images/v2-group.jpg',
    tripName: 'IslandDAO v2',
    country: 'Koh Samui, Thailand',
    position: 'center 60%',
  },
  {
    image: '/images/hero-images/v2-001.jpg',
    tripName: 'IslandDAO v2',
    country: 'Koh Samui, Thailand',
  },
  {
    image: '/images/hero-images/v2-002.jpg',
    tripName: 'IslandDAO v2',
    country: 'Koh Samui, Thailand',
  },
  {
    image: '/images/hero-images/v3-001.jpg',
    tripName: 'IslandDAO v3',
    country: 'Mykonos, Greece',
    position: 'center 80%',
  },
  {
    image: '/images/hero-images/v3-002.jpg',
    tripName: 'IslandDAO v3',
    country: 'Mykonos, Greece',
    position: 'center 70%',
  },
  {
    image: '/images/hero-images/v3-003.jpg',
    tripName: 'IslandDAO v3',
    country: 'Mykonos, Greece',
    position: 'center 55%',
  },
];

interface HeroOverlayProps {
  topOffset: number;
}

export function HeroOverlay({ topOffset }: HeroOverlayProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      id="home-hero-overlay"
      className="relative flex flex-col items-center"
      style={{ height: `calc(100vh - ${topOffset}px)` }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-container)] to-[var(--color-surface-variant)] opacity-10 animate-gradient"></div>

      {/* Floating orbs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-float"
        style={{ backgroundColor: 'var(--color-primary)' }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float delay-100"
        style={{ backgroundColor: 'var(--color-primary-container)' }}
      ></div>

      {/* Slideshow container */}
      <div className="inset-0 max-w-[1920px] w-full mx-auto p-6 md:p-12 max-h-[800px] h-full relative">
        <div className="container mx-auto z-10 rounded-3xl max-h-[600px] h-full overflow-hidden shadow-2xl relative">
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slide.image}
              alt={`${slide.tripName} - ${slide.country}`}
              className="w-full h-full object-cover absolute inset-0"
              style={{ objectPosition: slide.position || 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Trip info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{slide.tripName}</h2>
                <p className="text-white/80 text-lg flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  {slide.country}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide indicator */}
          {slides.length > 1 && (
            <div className="absolute bottom-6 right-6 md:right-8 flex items-center gap-3">
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                }
                className="text-white/70 hover:text-white transition-colors text-lg font-medium"
                aria-label="Previous slide"
              >
                &lt;
              </button>
              <span className="text-white font-mono text-sm">
                {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="text-white/70 hover:text-white transition-colors text-lg font-medium"
                aria-label="Next slide"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main heading with gradient */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center px-4">
        <span className="block">
          Web3 Native <span className="italic font-light gradient-text">Network State,</span>
        </span>
        <span className="block gradient-text">Solana&rsquo;s Most Dedicated Power Users.</span>
      </h1>
    </section>
  );
}
