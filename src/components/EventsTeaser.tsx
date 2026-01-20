'use client';

import { useState } from 'react';
import { API_URL } from '@/lib/config';

interface Event {
  id: number;
  title?: string;
  location?: string;
  date?: string;
  image?: string;
  announced: boolean;
}

// Configure your events here - set announced: true when ready to reveal
const events: Event[] = [
  {
    id: 1,
    title: 'IslandDAO Thailand',
    location: 'Koh Samui, Thailand',
    date: '1st June -  1st July 2026',
    image: '/images/thailand-sm.jpg', // Add your event image here
    announced: false, // Change to true when you want to reveal this event
  },
  {
    id: 2,
    title: 'IslandDAO Brazil',
    location: 'Florianópolis, Brazil',
    date: 'Oct-Nov 2026',
    image: '/images/brazil-sm.jpg',
    announced: false,
  }
];

function EventCard({ event }: { event: Event }) {
  if (!event.announced) {
    // Teaser/Coming Soon card
    return (
      <div>
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 p-6">
          {/* Image container */}
          <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
            {event.image ? (
              <img
                src={event.image}
                alt={event.title || 'Event'}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-island-blue/10 dark:bg-island-sky-blue/10 rounded-xl">
                <span className="text-7xl">🏝️</span>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl"></div>
          </div>

          {/* Content */}
          <div className="pt-4">
            <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
              {event.title || 'Event'}
            </h3>
            {event.location && (
              <p className="text-sm text-island-text-light/70 dark:text-island-text-dark/70 mb-1">
                {event.location}
              </p>
            )}
            {event.date && (
              <p className="text-sm text-island-text-light/70 dark:text-island-text-dark/70">
                {event.date}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Announced event card
  return (
    <div className="group">
      <div className="overflow-hidden rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-island-blue/50 dark:hover:border-island-sky-blue/50 p-6">
        {/* Event image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title || 'Event'}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-island-blue/10 dark:bg-island-sky-blue/10 rounded-xl">
              <span className="text-7xl">🏝️</span>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl"></div>

          {/* Date badge */}
          {event.date && (
            <div className="absolute top-3 right-3 bg-white dark:bg-island-surface-dark px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
              <span className="text-sm font-semibold text-island-blue dark:text-island-sky-blue">
                {event.date}
              </span>
            </div>
          )}
        </div>

        {/* Event details */}
        <div className="pt-4">
          <h3 className="text-xl font-bold text-island-blue dark:text-island-sky-blue mb-3">
            {event.title}
          </h3>
          {event.location && (
            <div className="flex items-center text-island-text-light/70 dark:text-island-text-dark/70 mb-4">
              <div className="w-7 h-7 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/10 flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-4 h-4 text-island-blue dark:text-island-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">{event.location}</span>
            </div>
          )}

          <button className="w-full px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export function EventsTeaser() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'website',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Please check your email to confirm your subscription.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="events" className="py-32 bg-island-bg-light dark:bg-island-bg-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — 2026 EVENTS —
            </span>
          </div>
          <h2 className="font-brand-heading text-4xl md:text-5xl mb-6 leading-tight text-island-blue dark:text-island-text-dark uppercase">
            Upcoming IslandDAO Events
          </h2>
          <p className="text-lg text-island-text-light/70 dark:text-island-text-dark/70 max-w-2xl mx-auto">
            Join us at exclusive gatherings around the world in 2026.
          </p>
        </div>

        {/* Events grid - dynamic columns based on event count, max 4 */}
        <div className={`grid gap-8 max-w-5xl mx-auto ${
          events.length === 1 ? 'max-w-md' :
          events.length === 2 ? 'md:grid-cols-2' :
          events.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3 max-w-6xl' :
          'md:grid-cols-2 lg:grid-cols-4 max-w-7xl'
        }`}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Register Interest CTA */}
        <div className="text-center mt-16">
          <div className="inline-block w-full max-w-xl">
            <div className="bg-white dark:bg-island-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-2">Register Your Interest</h3>
              <p className="text-lg text-island-text-light/70 dark:text-island-text-dark/70 mb-6">
                Be the first to know when registrations open
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-2 text-green-600 dark:text-green-400 font-medium py-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thanks for subscribing!</span>
                  </div>
                  <p className="text-sm text-island-text-light/70 dark:text-island-text-dark/70">
                    {message}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-4 rounded-xl bg-gray-50 dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700 text-island-text-light dark:text-island-text-dark placeholder:text-island-text-light/50 dark:placeholder:text-island-text-dark/50 focus:outline-none focus:ring-2 focus:ring-island-blue dark:focus:ring-island-sky-blue transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Notify Me'}
                  </button>
                </form>
              )}

              {status === 'error' && (
                <p className="text-red-500 dark:text-red-400 mt-3 text-sm">
                  {message || 'Something went wrong. Please try again.'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
