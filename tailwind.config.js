export default {
  content: [
    './index.html',
    './*.{tsx,ts}',
    './components/**/*.{tsx,ts}',
    './pages/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        offWhite: '#F0F0F0',
        grey: '#999999',
        electricBlue: '#007BFF',
        electricBlueDark: '#0062CC',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
