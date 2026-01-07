module.exports = {
  content: [
    './**/*.{js,jsx,ts,tsx,html}',
    './app/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-blue)',
        },
        accent: {
          gold: 'var(--accent-gold)'
        },
        muted: 'var(--muted)',
        card: 'var(--card-bg)',
        site: 'var(--bg)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        heading: ['Merriweather', 'Georgia', 'serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '4rem'
        }
      }
    },
  },
  plugins: [],
};
