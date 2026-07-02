/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { gold: { primary: '#C9A84C', light: '#E8D5A3', dark: '#8B7355' }, brand: { black: '#0A0A0A', 'black-light': '#1A1A1A', 'black-lighter': '#2A2A2A', white: '#F5F0E8', 'white-muted': '#A89B8C', marble: '#E8E0D5' } },
    fontFamily: { arabic: ['Cairo', 'sans-serif'], heading: ['Playfair Display', 'Cairo', 'serif'], body: ['Inter', 'Cairo', 'sans-serif'] },
    backgroundImage: { 'gold-gradient': 'linear-gradient(135deg,#C9A84C 0%,#E8D5A3 50%,#C9A84C 100%)' },
    animation: { 'fade-up': 'fadeUp .8s ease-out both', 'slow-pulse': 'slowPulse 3s ease-in-out infinite' },
    keyframes: { fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }, slowPulse: { '0%,100%': { opacity: .45 }, '50%': { opacity: 1 } } }
  }}, plugins: []
}
