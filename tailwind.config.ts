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
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'hero-image': "url('/assets/images/bg-code.png')",
        'education-image': "url('/assets/images/cap.svg')",
        'hero-code': "url('/assets/images/code.png')",
        'hero-bg-sm': "url('/assets/images/hero-bg-sm.png')",
        'posts-page': "url('/assets/images/posts-page 1.svg')",
      },
    },
    boxShadow: {
      teste: '0px 0px 68px 7px rgba(5, 150, 105, 0.4)',
    },
  },

  plugins: [],
}
export default config
