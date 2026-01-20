import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const alt = 'IslandDAO Event';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Event data matching page.tsx
const pastEvents: Record<string, {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  country: string;
}> = {
  '2024-crete': {
    title: 'IslandDAO Crete',
    subtitle: 'Where it all began',
    date: 'June 2024',
    location: 'Crete',
    country: 'Greece',
  },
  '2024-thailand': {
    title: 'IslandDAO Ko Samui',
    subtitle: 'Expanding horizons',
    date: 'October 2024',
    location: 'Ko Samui',
    country: 'Thailand',
  },
  '2025-mykonos': {
    title: 'IslandDAO Mykonos',
    subtitle: 'The flagship event',
    date: 'September 2025',
    location: 'Mykonos',
    country: 'Greece',
  },
};


export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = pastEvents[slug];

  // Load the logo
  const logoData = await readFile(join(process.cwd(), 'public/branding/islanddao-logo-light.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  if (!event) {
    // Fallback for unknown events
    return new ImageResponse(
      (
        <div
          style={{
            background: '#0A3131',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={logoBase64} alt="IslandDAO" width={120} height={120} />
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A3131', // Deep Tide
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 70%, rgba(188, 235, 196, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(226, 255, 231, 0.05) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <img
            src={logoBase64}
            alt="IslandDAO"
            width={64}
            height={64}
            style={{
              marginBottom: 24,
            }}
          />

          {/* Event title */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: '#E2FFE7', // Light Mint
              letterSpacing: '-1px',
              marginBottom: 12,
              display: 'flex',
            }}
          >
            {event.title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: '#BCEBC4', // Palm Green
              fontWeight: 600,
              marginBottom: 32,
              display: 'flex',
            }}
          >
            {event.subtitle}
          </div>

          {/* Date and location */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 22,
              color: 'rgba(226, 255, 231, 0.8)',
            }}
          >
            <span style={{ display: 'flex' }}>{event.date}</span>
            <span style={{ display: 'flex', color: '#BCEBC4' }}>•</span>
            <span style={{ display: 'flex' }}>{event.location}, {event.country}</span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #061E1E, #BCEBC4, #061E1E)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
