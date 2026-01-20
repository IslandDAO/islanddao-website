'use client';

import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    quote:
      "The improved user experience and accessible technical information have made a noticeable difference. The site redesign made exploring DeansListDAO's resources enjoyable and straightforward.",
    logo: '/images/logo/lulo.png',
    company: 'Lulo',
    description: 'The modern way to grow your wealth.',
  },
  {
    quote:
      "All the feedback provided was incredibly valuable from both the engineering and design perspectives. Many of the actionable points are already being addressed, and we'll have a lot of them fixed in the next update!",
    logo: '/images/logo/tensor.png',
    company: 'Tensor',
    description: "Solana's Leading NFT Marketplace",
  },
  {
    quote:
      'This service has far exceeded our expectations with its outstanding delivery. We are thoroughly impressed by the exceptional quality and attention to detail! Outstanding work, kudos to the deanslistDAO team!',
    logo: '/images/logo/streamflow.png',
    company: 'Streamflow',
    description: 'Infrastructure for new Value Creation and Distribution.',
  },
  {
    quote:
      "We've seen a noticeable improvement in the website's usability and the easy access to technical details, making it much easier to navigate and make informed decisions.",
    logo: '/images/logo/gip.png',
    company: 'Gib.Work',
    description: 'Web3 platform connecting businesses with freelance talent.',
  },
  {
    quote:
      "We've taken your feedback to heart and introduced key UI/UX improvements for a smoother experience. Plus, we're excited to announce support for minting and trading, unlocking even more possibilities!",
    logo: '/images/logo/dreader.png',
    company: 'dReader',
    description: 'Discovering, reading, trading and collecting digital comics.',
  },
  {
    quote:
      'With improved accessibility to technical information, DeansListDAO has streamlined our workflow, allowing us to find exactly what we need without any hassle.',
    logo: '/images/logo/meme.png',
    company: 'Meme Royale',
    description: 'The modern way to grow your wealth.',
  },
];

export function Testimonials() {
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3);

  return (
    <section className="py-32 overflow-hidden bg-white dark:bg-island-surface-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — TESTIMONIALS —
            </span>
          </div>
          <h2 className="font-brand-heading text-4xl md:text-5xl text-island-blue dark:text-island-text-dark mb-6 leading-tight uppercase">
            They Say It Better Than We Do
          </h2>
          <p className="text-lg text-island-text-light/70 dark:text-island-text-dark/70 max-w-2xl mx-auto">
            We&apos;re proud to have worked with these incredible projects during our Dean&apos;s
            List era, and thankful for their feedback and support.
          </p>
        </div>
      </div>

      {/* Scrolling testimonials - Top row (left to right) */}
      <div className="relative mb-6">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-island-surface-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-island-surface-dark to-transparent z-10"></div>

        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-testimonials hover:[animation-play-state:paused]">
            {/* Triple the cards for seamless loop */}
            {[...topRow, ...topRow, ...topRow].map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling testimonials - Bottom row (right to left) */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-island-surface-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-island-surface-dark to-transparent z-10"></div>

        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-testimonials-reverse hover:[animation-play-state:paused]">
            {/* Triple the cards for seamless loop */}
            {[...bottomRow, ...bottomRow, ...bottomRow].map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
