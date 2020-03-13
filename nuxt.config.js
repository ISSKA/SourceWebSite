import excursionData from './assets/script.js'
import translations from './scripts/translations.js'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://api3.geo.admin.ch/loader.js?version=4.4.2' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-gallery.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-32430893-2'
      }
    ]
  ],
  generate: {
    // routes: ['/excursions/1', '/excursions/2', '/excursions/3']
    routes: _getRoutes()
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  /*
   ** i18n configuration
   */
  i18n: {
    locales: ['fr', 'de'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: translations.getTranslations()
    }
    // differentDomains: process.env.NODE_ENV === 'production'
  },
  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: 'https://www.randosources.ch',
    routes: _getRoutes(),
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

/**
 * Generate dynamic routes
 */
function _getRoutes() {
  const routes = []

  for (let idx = 1; idx <= excursionData.getExcursionsCount(); idx++) {
    routes.push('/excursions/' + idx)
    routes.push('/de/excursions/' + idx)

    for (let idy = 1; idy <= excursionData.getExtrasCount(idx); idy++) {
      routes.push('/excursions/' + idx + '/extras/' + idy)
      routes.push('/de/excursions/' + idx + '/extras/' + idy)
    }
  }

  return routes
}
