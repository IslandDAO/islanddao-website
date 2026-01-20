import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const alt = 'IslandDAO Governance';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public/branding/islanddao-logo-light.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        background: '#0A3131',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle at 30% 70%, rgba(188, 235, 196, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(226, 255, 231, 0.05) 0%, transparent 50%)',
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <img src={logoBase64} alt="IslandDAO" width={80} height={80} style={{ marginBottom: 32 }} />

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#E2FFE7',
            letterSpacing: '-1px',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          Governance
        </div>

        <div
          style={{
            fontSize: 28,
            color: '#BCEBC4',
            fontWeight: 600,
            marginBottom: 24,
            display: 'flex',
          }}
        >
          On-Chain Decision Making
        </div>

        <div
          style={{
            fontSize: 22,
            color: 'rgba(226, 255, 231, 0.8)',
            maxWidth: 700,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Shape the future of IslandDAO through transparent, token-based voting
        </div>
      </div>

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
    </div>,
    { ...size }
  );
}
