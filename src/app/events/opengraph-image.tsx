import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const alt = 'IslandDAO Events';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Load the logo
  const logoData = await readFile(join(process.cwd(), 'public/branding/islanddao-logo-light.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

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
            width={80}
            height={80}
            style={{
              marginBottom: 24,
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#E2FFE7', // Light Mint
              letterSpacing: '-1px',
              marginBottom: 16,
              display: 'flex',
            }}
          >
            Global Events
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: '#BCEBC4', // Palm Green
              fontWeight: 600,
              marginBottom: 40,
              display: 'flex',
            }}
          >
            Coworking in Paradise
          </div>

          {/* Locations */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              fontSize: 22,
              color: 'rgba(226, 255, 231, 0.8)',
            }}
          >
            <span style={{ display: 'flex' }}>Greece</span>
            <span style={{ display: 'flex', color: '#BCEBC4' }}>•</span>
            <span style={{ display: 'flex' }}>Thailand</span>
            <span style={{ display: 'flex', color: '#BCEBC4' }}>•</span>
            <span style={{ display: 'flex' }}>Brazil</span>
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
