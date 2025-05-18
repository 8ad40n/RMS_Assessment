import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // Covers everything in /src already
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
