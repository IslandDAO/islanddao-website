'use client';

import { MapPin, Calendar, Presentation, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface PastEventProps {
  event: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    country: string;
    heroImage: string;
    description: string;
    highlights: string[];
    stats: { label: string; value: string }[];
    galleryImages: string[];
  };
}

export function PastEventPageContent({ event }: PastEventProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? event.galleryImages.length - 1 : prev - 1
    );
  }, [event.galleryImages.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === event.galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [event.galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <div className="bg-island-bg dark:bg-island-bg-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={event.heroImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
          <p className="text-island-sky-blue font-medium mb-2">{event.subtitle}</p>
          <h1 className="font-brand-heading text-4xl md:text-6xl text-white mb-4 uppercase">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{event.location}, {event.country}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - commented out for now */}
      {/* <section className="bg-island-blue dark:bg-island-blue/90 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {event.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-brand-heading text-3xl md:text-4xl text-island-blue dark:text-island-text-dark uppercase mb-6">
              About the Event
            </h2>
            <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 leading-relaxed mb-12">
              {event.description}
            </p>

            {/* Highlights */}
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 p-8">
              <h3 className="text-xl font-bold text-island-text dark:text-white mb-6 flex items-center gap-3">
                <Presentation className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
                Event Highlights
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-island-blue dark:bg-island-sky-blue mt-2 flex-shrink-0" />
                    <span className="text-island-tertiary dark:text-island-text-dark/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - only show if there are images */}
      {event.galleryImages.length > 0 && (
        <section className="py-16 md:py-24 bg-white/30 dark:bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-brand-heading text-3xl md:text-4xl text-island-blue dark:text-island-text-dark uppercase mb-4">
                Event Gallery
              </h2>
              <p className="text-island-tertiary dark:text-island-text-dark/80 max-w-2xl mx-auto">
                Memories from {event.title}
              </p>
            </div>

            {/* Gallery Grid - 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-white/10 border border-gray-200 dark:border-white/10 cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`${event.title} gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Events CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && event.galleryImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={event.galleryImages[currentImageIndex]}
              alt={`${event.title} gallery image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {currentImageIndex + 1} / {event.galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
