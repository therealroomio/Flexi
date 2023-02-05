module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      colors: {
        'flexi': {
          '50': '#ecfffc',
          '100': '#bdfffb',
          '200': '#7bfff9',
          '300': '#31fff7',
          '400': '#00ffec',
          '500': '#00edd4',
          '600': '#00bfb0',
          '700': '#00978d',
          '800': '#007771',
          '900': '#005450',
        }
      },
    },
  },
};
