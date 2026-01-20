'use client';

interface Testimonial {
  quote: string;
  logo: string;
  company: string;
  description: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="w-[400px] flex-shrink-0 p-6 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700">
      {/* Quote */}
      <div className="mb-6">
        <svg className="w-8 h-8 text-island-blue/20 dark:text-island-sky-blue/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-island-tertiary dark:text-island-text-dark/90 leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      {/* Company info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center overflow-hidden">
          <img
            src={testimonial.logo}
            alt={testimonial.company}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div>
          <p className="font-bold text-island-blue dark:text-island-sky-blue">
            {testimonial.company}
          </p>
          <p className="text-sm text-island-tertiary/70 dark:text-island-text-dark/60">
            {testimonial.description}
          </p>
        </div>
      </div>
    </div>
  );
}
