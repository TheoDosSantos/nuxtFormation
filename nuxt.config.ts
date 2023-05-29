// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      categories : [
        { id: "head", title: "Head" },
        { id: "body", title: "Body" },
        { id: "other", title: "Other" },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})