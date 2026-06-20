/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'deep-espresso': '#2A2A28',
        // Secondary
        'muted-taupe': '#A89F96',
        // Accent
        'soft-clay': '#C5BDB6',
        // Background
        'warm-cream': '#F7F5F0',
        // Surface
        'ivory': '#FCFBF9',
        // Text
        'text-primary': '#1C1C1C',
        'text-secondary': '#6E6862',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['72px', { lineHeight: '1.1' }],
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['36px', { lineHeight: '1.3' }],
        h3: ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-large': ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
        caption: ['14px', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '80px',
        '2xl': '160px',
      },
      borderRadius: {
        button: '9999px',
        card: '24px',
        hero: '32px',
      },
      boxShadow: {
        soft: '0 10px 30px -5px rgba(42,42,40,0.05)',
        floating: '0 4px 20px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}