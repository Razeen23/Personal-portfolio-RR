module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '5px',
      },
    },
    screens: {
      sm: '320px',
      md: '425px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#e20f1a',
        text: '#191818'
      },
      backgroundImage: {
         //site: "url('./assets/site-bg7.jpg')",
          //site: 'linear-gradient(to right, #434343 0%, black 100%);',
         //site: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);',
        site: 'linear-gradient(90deg, rgba(181,132,88,0.9038209033613446) 0%, rgba(13,19,25,1) 0%, rgba(15,22,91,1) 0%, rgba(22,22,32,1) 15%, rgba(0,0,0,1) 50%, rgba(22,22,32,1) 85%, rgba(15,22,91,1) 100%)',
        site2: 'linear-gradient(to right, #c9d6ff, #e2e2e2);',
        light: 'linear-gradient(135deg, #f5f3f0 0%, #e8e6e1 100%)',

        about: "url('./assets2/3d1.webp')",
        services: "url('./assets/services.webp')",
        services2: "url('./assets2/services.webp')",

        },
    },
  },
  plugins: [],
};
