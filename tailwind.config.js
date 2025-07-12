/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        cedarville: ['Edu NSW ACT Cursive', 'cursive'],
        magnite: ['MagniteLavingo', 'sans-serif'],
        gabarito:['Gabarito','sans-serif']

      },
    },
  },
  plugins: [],
};

