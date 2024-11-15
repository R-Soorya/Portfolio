module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this is correctly pointing to your React files
  ],
  theme: {
    extend: {},
    fontFamily: {
      'hero-font': 'Anton', // You already have this for hero
      'kanit-font': 'Kanit', // Add Kanit font here
    },
  },
  plugins: [],
};
