/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#3C86E7',
        accent: '#67A5F7',
        description: '#000000',
        background: '#F1F5F6',
        backgroundGradientEnd: '#7DB5FF',
        danger: '#E26565',
      },
    },
  },
  plugins: ['react-native-reanimated/plugin'],
};
