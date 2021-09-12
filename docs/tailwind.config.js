// tailwind.config.js
module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
      '../daisyui-vue/**/*.{js,ts,tsx}',
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
  },
};
