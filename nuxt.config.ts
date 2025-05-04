// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  site: {
    url: 'https://jessedorsey.com',
    name: "Jesse Dorsey"
  },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Bebas Neue': true
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  }
})