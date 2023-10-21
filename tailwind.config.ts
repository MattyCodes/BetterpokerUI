import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#BD93F9',
      secondary: '#FFB86C',
      tertiary: '#FF79C6',
      success: '#50FA7B',
      warning: '#F1FA8C',
      danger: '#FF5555',
      foreground: '#F8F8F2',
      charcoal: '#4E4E4E',
    },
  },
  plugins: [],
}
export default config
