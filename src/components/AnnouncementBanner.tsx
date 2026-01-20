'use client';

import { useState } from 'react';

interface AnnouncementBannerProps {
  message?: string;
  link?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function AnnouncementBanner({
  message = "🎉 New events coming soon! Stay tuned for exciting announcements in 2025.",
  link = "#events",
  dismissible = true,
  onDismiss
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const handleClick = () => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="fixed top-[81px] left-0 right-0 z-40 overflow-hidden bg-gradient-to-r from-island-blue via-island-secondary to-island-blue dark:from-island-surface-dark dark:via-island-surface-variant-dark dark:to-island-surface-dark border-b border-island-outline-variant-light dark:border-island-outline-variant-dark">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 py-3 relative flex items-center min-h-[48px]">
        <div className="flex items-center justify-between flex-1">
          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="group flex items-center space-x-2 text-white dark:text-island-light-blue hover:opacity-80 transition-opacity"
            >
              <span className="text-sm md:text-base font-medium">{message}</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {dismissible && (
            <button
              onClick={handleDismiss}
              className="text-white dark:text-island-light-blue hover:opacity-80 transition-opacity p-1"
              aria-label="Dismiss announcement"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
