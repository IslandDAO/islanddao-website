import Link from 'next/link';

export default function NewsletterUnsubscribedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/10 p-8 shadow-xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-island-blue/20 dark:bg-island-sky-blue/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-island-blue dark:text-island-sky-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold gradient-text mb-4">Unsubscribed</h1>

          <p className="text-island-tertiary dark:text-island-text-dark/80 mb-6">
            You&apos;ve been unsubscribed from the IslandDAO newsletter. We&apos;re sorry to see you
            go! You can always resubscribe if you change your mind.
          </p>

          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
