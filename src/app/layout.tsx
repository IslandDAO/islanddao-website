import type { Metadata } from 'next';
import './globals.css';

// Returns the appropriate site URL based on deployment environment
function getSiteUrl() {
  if (process.env.VERCEL_URL) {
    const vercelUrl = process.env.VERCEL_URL;
    // Preview/branch deployments have URLs containing 'git-' (e.g., project-git-branch-user.vercel.app)
    // These should always use their own URL for OG images to work correctly
    if (vercelUrl.includes('git-')) {
      return `https://${vercelUrl}`;
    }
    // Production deployment - use the custom domain
    if (process.env.VERCEL_ENV === 'production') {
      return 'https://islanddao.org';
    }
    // Other Vercel deployments (e.g., development)
    return `https://${vercelUrl}`;
  }
  // Local development
  return 'http://localhost:3000';
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'IslandDAO | A Solana Network State',
    template: '%s | IslandDAO',
  },
  description:
    'IslandDAO is a Solana network state bringing together Web3 builders through global coworking events, on-chain governance, and citizen collaboration.',
  keywords: [
    'IslandDAO',
    'Solana',
    'Network State',
    'DAO',
    'Web3',
    'Coworking',
    'Governance',
    'Blockchain',
    'Community',
    'Decentralized',
  ],
  authors: [{ name: 'IslandDAO' }],
  creator: 'IslandDAO',
  publisher: 'IslandDAO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'IslandDAO',
    title: 'IslandDAO | A Solana Network State',
    description:
      'Join a global community of Web3 builders. Experience month-long coworking events, participate in on-chain governance, and help shape the future of decentralized organizations.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IslandDAO',
    creator: '@IslandDAO',
    title: 'IslandDAO | A Solana Network State',
    description:
      'Join a global community of Web3 builders. Experience month-long coworking events, participate in on-chain governance, and help shape the future of decentralized organizations.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
