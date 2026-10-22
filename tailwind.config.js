/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6500',
          'orange-hover': '#e55a00',
          'orange-light': '#FFF0E6',
          'orange-glow': 'rgba(255, 101, 0, 0.25)',
          navy: '#071827',
          'navy-surface': '#0D2235',
          'navy-card': '#122B43',
          'navy-border': '#1E3A57',
          gray: '#F5F6F8',
          'gray-dark': '#64748B',
          'gray-light': '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(7, 24, 39, 0.06), 0 2px 6px -1px rgba(7, 24, 39, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(7, 24, 39, 0.1), 0 4px 12px -2px rgba(7, 24, 39, 0.06)',
        'orange-glow': '0 8px 25px -4px rgba(255, 101, 0, 0.4)',
        'card-hover': '0 12px 30px -4px rgba(7, 24, 39, 0.12)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      }
    },
  },
  plugins: [],
}
