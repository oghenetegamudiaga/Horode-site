import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fefefe',
        foreground: '#111111',
        muted: '#6b6b6b',
        border: '#e5e5e5',
        accent: '#111111',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      borderRadius: {
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
