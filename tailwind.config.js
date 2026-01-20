/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        deutschlander: ['Deutschlander', 'sans-serif'],
        monument: ['PP Monument Extended', 'sans-serif'],
      },
      letterSpacing: {
        deutschlander: '0.02em', // 2% letter spacing
      },
      colors: {
        // IslandDAO Brand Colors
        island: {
          // Brand palette (for reference/brand page)
          'light-mint': '#E2FFE7', // Light Mint
          'palm-green': '#BCEBC4', // Palm Green
          'deep-tide': '#0A3131', // Deep Tide
          'dark-teal': '#061E1E', // Dark Teal
          darkest: '#041616', // Darkest

          // Primary colors
          blue: '#0D4A4A', // Main teal (light mode)
          'light-blue': '#BCEBC4', // Mint green container
          'sky-blue': '#BCEBC4', // Mint green (dark mode primary)

          // Background colors
          'bg-light': '#EEF7F0', // Light mode background (more visible mint tint)
          'bg-dark': '#061E1E', // Dark Teal (brand)

          // Surface colors
          'surface-light': '#FFFFFF', // Light mode surface
          'surface-dark': '#0A3131', // Deep Tide (brand)
          'surface-variant-light': '#E8F5EC', // Light mint surface variant
          'surface-variant-dark': '#041616', // Darkest (brand)

          // Text colors
          'text-light': '#061E1E', // Dark teal text on light background
          'text-dark': '#E2FFE7', // Light Mint (brand)

          // Secondary colors
          secondary: '#1A5A5A', // Medium teal
          'secondary-light': '#D4F0DC', // Very light mint
          'secondary-dark': '#0A3131', // Deep Tide (brand)

          // Accent colors
          tertiary: '#3D5A5A', // Muted teal
          'tertiary-light': '#D4E8DC', // Light muted mint
          'tertiary-dark': '#041616', // Darkest (brand)

          // Error colors
          error: '#BA1A1A', // Error red
          'error-light': '#FFDAD6', // Light red
          'error-dark': '#93000A', // Dark red

          // Outline colors
          'outline-light': '#5A7A7A', // Muted teal outline
          'outline-dark': '#BCEBC4', // Palm Green (brand)
          'outline-variant-light': '#B8D4C8', // Light outline variant
          'outline-variant-dark': '#0A3131', // Deep Tide (brand)
        },
      },
      backgroundColor: {
        'backdrop-light': 'rgba(0, 28, 64, 0.4)',
        'backdrop-dark': 'rgba(10, 20, 40, 0.4)',
      },
    },
  },
  plugins: [],
};
