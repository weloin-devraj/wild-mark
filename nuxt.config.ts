// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      Anton: true,
      'Edu NSW ACT Cursive': true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Inter': '200..700', // ✅ Keep this only
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },

  css: ['@/assets/main.css'] // ✅ This is correct if you created the file
});