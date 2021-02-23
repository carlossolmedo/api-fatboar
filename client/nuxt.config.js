export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FatBoar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/basis'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vuelidate.js', mode: 'client'},
    {src: '~/plugins/axios'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global
  router: {
    middleware: ['class', 'auth']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:4000'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: false
    },
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          type: 'JWT'
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'delete' },
          user: { url: '/user', method: 'get'}
        }
      }
    }
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: 'https://api.nuxtjs.dev'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
