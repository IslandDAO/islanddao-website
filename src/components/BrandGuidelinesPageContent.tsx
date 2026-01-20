'use client';

import { Check, Download } from 'lucide-react';
import { useState } from 'react';

// Color data from brand guidelines
const brandColors = [
  {
    name: 'Light Mint',
    hex: '#E2FFE7',
    row: 1,
  },
  {
    name: 'Palm Green',
    hex: '#BCEBC4',
    row: 1,
  },
  {
    name: 'Deep Tide',
    hex: '#0A3131',
    row: 1,
  },
  {
    name: 'Dark Teal',
    hex: '#061E1E',
    row: 2,
  },
  {
    name: 'Darkest',
    hex: '#041616',
    row: 2,
  },
];

function ColorCard({ color }: { color: (typeof brandColors)[0] }) {
  const [copied, setCopied] = useState(false);
  const isLight = color.hex === '#E2FFE7' || color.hex === '#BCEBC4';

  const copyHex = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyHex}
      className="aspect-[4/3] rounded-xl border border-gray-200 dark:border-gray-700 flex items-end justify-around p-4 transition-transform hover:scale-[1.02] cursor-pointer"
      style={{ backgroundColor: color.hex }}
    >
      <div className="flex items-center gap-2">
        <span
          className={`font-mono text-sm font-bold ${isLight ? 'text-island-blue' : 'text-white'}`}
        >
          {color.hex}
        </span>
        {copied && <Check className={`w-4 h-4 ${isLight ? 'text-green-600' : 'text-green-400'}`} />}
      </div>
    </button>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
      <div className="py-4">
        <h2 className="font-brand-heading text-2xl text-island-blue dark:text-island-text-dark uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
}

function DownloadButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-island-blue/10 dark:bg-island-sky-blue/10 text-island-blue dark:text-island-sky-blue text-sm font-medium hover:bg-island-blue/20 dark:hover:bg-island-sky-blue/20 transition-colors"
    >
      <Download className="w-4 h-4" />
      {label}
    </a>
  );
}

export function BrandGuidelinesPageContent() {
  return (
    <div className="bg-island-bg-light dark:bg-island-bg-dark">
      {/* Hero Section */}
      <section className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Card */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Light side - uses dark logo */}
              <div className="bg-[#E2FFE7] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
                <img
                  src="/branding/islanddao-logo-dark.png"
                  alt="IslandDAO"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="font-brand-heading text-3xl md:text-4xl text-island-blue uppercase mb-2">
                    Brand Identity Guidelines
                  </h1>
                  <p className="text-island-blue/70 font-medium">For IslandDAO</p>
                </div>
                <p className="font-brand-heading text-sm text-island-blue uppercase tracking-wide">
                  Symbol, Logo, Typography, Color Palette and More.
                </p>
              </div>
              {/* Dark side - uses light logo */}
              <div className="bg-[#0A3131] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
                <img
                  src="/branding/islanddao-logo-light.png"
                  alt="IslandDAO"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="font-brand-heading text-3xl md:text-4xl text-[#E2FFE7] uppercase mb-2">
                    Brand Identity Guidelines
                  </h1>
                  <p className="text-[#E2FFE7]/70 font-medium">For IslandDAO</p>
                </div>
                <p className="font-brand-heading text-sm text-[#E2FFE7] uppercase tracking-wide">
                  Symbol, Logo, Typography, Color Palette and More.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symbol Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Symbol" />

            {/* Symbol display */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-[#E2FFE7] p-12 flex items-center justify-around min-h-[300px]">
                <img
                  src="/branding/islanddao-logo-dark.png"
                  alt="IslandDAO Symbol"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="bg-[#0A3131] p-12 flex items-center justify-around min-h-[300px]">
                <img
                  src="/branding/islanddao-logo-light.png"
                  alt="IslandDAO Symbol"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3 mt-6 justify-around">
              <DownloadButton href="/branding/islanddao-logo-dark.png" label="Dark Symbol" />
              <DownloadButton href="/branding/islanddao-logo-light.png" label="Light Symbol" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Logo" />

            {/* Horizontal Logo display */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-[#E2FFE7] p-12 flex items-center justify-around min-h-[200px]">
                <img
                  src="/branding/islanddao-wordmark-dark.png"
                  alt="IslandDAO Logo"
                  className="h-16 object-contain"
                />
              </div>
              <div className="bg-[#0A3131] p-12 flex items-center justify-around min-h-[200px]">
                <img
                  src="/branding/islanddao-wordmark-light.png"
                  alt="IslandDAO Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3 mt-6 mb-8 justify-around">
              <DownloadButton href="/branding/islanddao-wordmark-dark.png" label="Dark Logo" />
              <DownloadButton href="/branding/islanddao-wordmark-light.png" label="Light Logo" />
            </div>

            <SectionHeader title="Logo (Stacked)" />

            {/* Stacked Logo display */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-[#E2FFE7] p-12 flex items-center justify-around min-h-[300px]">
                <img
                  src="/branding/islanddao-wordmark-tall-dark.png"
                  alt="IslandDAO Logo Stacked"
                  className="h-40 object-contain"
                />
              </div>
              <div className="bg-[#0A3131] p-12 flex items-center justify-around min-h-[300px]">
                <img
                  src="/branding/islanddao-wordmark-tall-light.png"
                  alt="IslandDAO Logo Stacked"
                  className="h-40 object-contain"
                />
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3 mt-6 justify-around">
              <DownloadButton
                href="/branding/islanddao-wordmark-tall-dark.png"
                label="Dark Stacked Logo"
              />
              <DownloadButton
                href="/branding/islanddao-wordmark-tall-light.png"
                label="Light Stacked Logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Typography" />

            {/* Typography display */}
            <div className="space-y-6">
              {/* Deutschlander */}
              <div className="p-8 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div>
                    <h3 className="font-brand-heading text-lg text-island-blue dark:text-island-sky-blue uppercase">
                      Deutschlander
                    </h3>
                    <p className="text-sm text-island-tertiary dark:text-island-text-dark/60">
                      (2% Letter Spacing)
                    </p>
                  </div>
                  <div className="space-y-2 font-deutschlander tracking-deutschlander text-island-blue dark:text-island-text-dark">
                    <p className="text-lg">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                    <p className="text-lg">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <p className="text-lg">0 1 2 3 4 5 6 7 8 9</p>
                    <p className="text-lg">
                      $ ? @ ! # % &amp; ( ) = + &quot; : &apos; | / \ &#123; &#125; , . ^
                    </p>
                  </div>
                </div>
              </div>

              {/* PP Monument Extended */}
              <div className="p-8 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div>
                    <h3 className="text-lg text-island-blue dark:text-island-sky-blue font-bold">
                      PP Monument
                    </h3>
                    <h3 className="text-lg text-island-blue dark:text-island-sky-blue font-bold">
                      Extended (Black)
                    </h3>
                  </div>
                  <div className="space-y-2 font-brand-heading text-island-blue dark:text-island-text-dark">
                    <p className="text-lg">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                    <p className="text-lg">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <p className="text-lg">0 1 2 3 4 5 6 7 8 9</p>
                    <p className="text-lg">
                      $ ? @ ! # % &amp; ( ) = + &quot; : &apos; | / \ &#123; &#125; , . ^
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Color Palette" />

            {/* Color grid */}
            <div className="space-y-4">
              {/* Row 1 - 3 colors */}
              <div className="grid grid-cols-3 gap-4">
                {brandColors
                  .filter((c) => c.row === 1)
                  .map((color) => (
                    <ColorCard key={color.hex} color={color} />
                  ))}
              </div>
              {/* Row 2 - 2 colors */}
              <div className="grid grid-cols-3 gap-4">
                {brandColors
                  .filter((c) => c.row === 2)
                  .map((color) => (
                    <ColorCard key={color.hex} color={color} />
                  ))}
                <div></div> {/* Empty cell for alignment */}
              </div>
            </div>

            <p className="text-center text-sm text-island-tertiary dark:text-island-text-dark/60 mt-4">
              Click any color to copy the hex code
            </p>
          </div>
        </div>
      </section>

      {/* Brand Applications Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="p-8 bg-white dark:bg-island-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-island-blue dark:text-island-sky-blue mb-4 uppercase text-sm tracking-wider">
                Brand Applications
              </h3>
              <p className="text-island-tertiary dark:text-island-text-dark/80 leading-relaxed mb-6">
                The IslandDAO identity is designed to scale across digital platforms, social media,
                event materials, presentations, and community assets. Whether applied to social
                headers, DAO proposals, merchandise, or interfaces, the system maintains visual
                coherence while adapting to different contexts, ensuring a consistent and
                recognizable presence wherever IslandDAO appears.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discord.gg/dvHrj9SXQS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Need Help? Contact Us on Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
