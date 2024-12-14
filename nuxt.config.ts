// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/styles/global.less"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/assets/styles/global.less";`,
        },
      },
    },
  },
  app: {
    head: {
      title: "Fastrack Quiz",
      meta: [{ name: "description", content: "Short quiz about Fastrack" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      "postcss-purgecss": {
        content: [
          "./pages/**/*.{vue,js,ts}",
          "./components/**/*.{vue,js,ts}",
          "./layouts/**/*.{vue,js,ts}",
          "./plugins/**/*.{js,ts}",
        ],
        safelist: ["body", "html"],
      },
      autoprefixer: {},
      cssnano: { preset: "default" },
    },
  },
});
