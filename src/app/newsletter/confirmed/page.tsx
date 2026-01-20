import Link from 'next/link';

export default function NewsletterConfirmedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/10 p-8 shadow-xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold gradient-text mb-4">Subscription Confirmed!</h1>

          <p className="text-island-tertiary dark:text-island-text-dark/80 mb-6">
            You&apos;re now subscribed to the IslandDAO newsletter. We&apos;ll keep you updated on
            upcoming events, governance updates, and community news.
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
