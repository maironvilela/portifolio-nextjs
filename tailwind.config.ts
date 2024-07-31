import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      mono: ['var(--font-kode-mono)', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/images/hero-bg-sm.png')",
      },
    },
  },

  plugins: [],
}
export default config
