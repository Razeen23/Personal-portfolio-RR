module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display', // Luxury serif for headings
      secondary: 'Inter', // Clean sans-serif for body
      tertiary: 'Cormorant Garamond', // Elegant serif for accents
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      center: true,
    },
    screens: {
      sm: '320px',
      md: '425px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a', // Deep black
        accent: '#d4af37', // Luxury gold
        accentDark: '#b8941f', // Darker gold for hover
        text: '#1a1a1a', // Soft black
        textLight: '#6b7280', // Gray for secondary text
        bgLuxury: '#fafafa', // Off-white background
        bgDark: '#0f0f0f', // Deep dark for contrast
      },
      backgroundImage: {
        site: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 50%, #fafafa 100%)', // Clean subtle gradient
        siteDark: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)', // Dark luxury variant
        luxury: 'radial-gradient(ellipse at top, #fafafa 0%, #f5f5f5 100%)', // Subtle radial
        about: "url('./assets2/3d1.webp')",
        services: "url('./assets/services.webp')",
        services2: "url('./assets2/services.webp')",
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.1em',
      },
      boxShadow: {
        luxury: '0 10px 40px rgba(0, 0, 0, 0.08)',
        luxuryHover: '0 15px 50px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
