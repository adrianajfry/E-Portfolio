/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#12151C',
        panel: '#181C26',
        bronze: '#B87333',
        'bronze-dim': '#7A4E24',
        silver: '#C7CDD6',
        'silver-dim': '#8B93A0',
        gold: '#D4AF6A',
        'gold-dim': '#9C7F49',
        ink: '#EDEEF2',
        muted: '#9BA1AE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Caveat"', 'cursive'],
        bubbly: ['"Alex Brush"', 'cursive'],
      },
    },
  },
  plugins: [],
}
