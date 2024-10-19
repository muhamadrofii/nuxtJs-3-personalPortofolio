// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon'],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // export default defineNuxtConfig({
  // })
  css: ['~/assets/css/main.css',
    '~/assets/css/font.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})