export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FatBoar',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Les meilleurs burgers des viandes de gibiers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/basis'
  ],

  loading: {
    color: '#f7bc06',
    failedColor: 'red',
    height: '2px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vuelidate.js', '~/plugins/vue-charts.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global
  router: {
    middleware: ['class', 'auth', '404']
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
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/sitemap'
  ],

  toast: {
    position: 'top-right'
  },

  axios: {
    baseURL: process.env.API_URL
  },

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: '/game',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Sitemap for SEO
  sitemap: {
    hostname: process.env.BASE_URL, // https://www.yoursite.com
    gzip: false,
    exclude: [
      '/admin/**'
    ]
  },
}
