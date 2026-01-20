'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerkCardProps {
  name: string;
  perkTitle: string;
  perk: string;
  image: string;
}

export function PerkCard({ name, perkTitle, perk, image }: PerkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Lock body scroll when expanded (delayed to not interfere with animation)
  useEffect(() => {
    if (isExpanded) {
      // Small delay to let the layout animation start from correct position
      const timer = setTimeout(() => {
        // Calculate scrollbar width to prevent content jump
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        // Also adjust fixed header - use right position to keep centered nav aligned
        const header = document.querySelector('header');
        if (header) {
          (header as HTMLElement).style.right = `${scrollbarWidth}px`;
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const header = document.querySelector('header');
      if (header) {
        (header as HTMLElement).style.right = '';
      }
    }
  }, [isExpanded]);

  const handleClose = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    const header = document.querySelector('header');
    if (header) {
      (header as HTMLElement).style.right = '';
    }
    setIsExpanded(false);
  };

  return (
    <>
      {/* Card in grid */}
      <motion.div
        layoutId={`card-${name}`}
        className="group cursor-pointer rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 p-4 transition-colors hover:border-island-blue/50 dark:hover:border-island-sky-blue/50"
        onClick={() => setIsExpanded(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >

        {/* Perk image */}
        <motion.div layoutId={`image-${name}`} className="aspect-square rounded-xl mb-3 relative overflow-hidden">
          {/* Light mode background */}
          <img
            src="/assets/avatar-backgrounds/light-avatar-bg-green.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover dark:hidden"
          />
          {/* Dark mode background */}
          <img
            src="/assets/avatar-backgrounds/dark-avatar-bg-green.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover hidden dark:block"
          />
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Animal name */}
        <motion.h3
          layoutId={`name-${name}`}
          className="text-lg font-bold text-center text-island-text-light dark:text-island-text-dark"
        >
          {name}
        </motion.h3>
      </motion.div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={handleClose}
            />

            {/* Expanded card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
              <motion.div
                layoutId={`card-${name}`}
                className="relative w-full max-w-md rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Expanded image */}
                <motion.div layoutId={`image-${name}`} className="aspect-square rounded-2xl mb-4 relative overflow-hidden max-w-[280px] mx-auto">
                  {/* Light mode background */}
                  <img
                    src="/assets/avatar-backgrounds/light-avatar-bg-green.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover dark:hidden"
                  />
                  {/* Dark mode background */}
                  <img
                    src="/assets/avatar-backgrounds/dark-avatar-bg-green.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover hidden dark:block"
                  />
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Animal name */}
                <motion.h3
                  layoutId={`name-${name}`}
                  className="text-2xl font-bold text-center mb-4 text-island-text-light dark:text-island-text-dark"
                >
                  {name}
                </motion.h3>

                {/* Perk title */}
                <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center font-bold text-island-blue dark:text-island-sky-blue mb-2"
                >
                  {perkTitle}
                </motion.h4>

                {/* Perk description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-center leading-relaxed text-island-text-light/70 dark:text-island-text-dark/70"
                >
                  {perk}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
