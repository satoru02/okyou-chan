export default {
  target: 'static',
  ssr: 'false',
  spa: 'true',
  head: {
    title: 'お経ちゃん | 心を鎮める写経アプリ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'twitter:card', property:'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:url', property: 'twitter:card', content: 'https://okyou-chan.com'},
      { hid: 'twitter:site', property: 'twitter:site', content: '@okyouchan'},
      { hid: 'twitter:creator', property: 'twitter:creator', content: '@okyouchan'},
      { hid: 'twitter:description', property: 'twitter:description', content: '主に仏教宗派で使われる様々なお経をタイピング操作で写経する事が出来ます。今後、写経できるお経は随時追加される予定です。'},
      { hid: 'twitter:title', property: 'twitter:title', content: 'お経ちゃん'},
      { hid: 'twitter:image', property: 'twitter:image', content: ''},
      { hid: 'og:url', property: 'og:url', content: 'https://okyou-chan.com'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'お経ちゃん'},
      { hid: 'og:description', property: 'og:description', content: '主に仏教宗派で使われる様々なお経をタイピング操作で写経する事が出来ます。今後、写経できるお経は随時追加される予定です。'},
      { hid: 'og:image', property: 'og:image', content: ''},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  env: {
    API_TOKEN: process.env.API_TOKEN,
    API_GATEWAY: process.env.API_GATEWAY,
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  plugins: [
    '~plugins/vue-pagination.js',
    '~/plugins/axios',
    '~plugins/vue-js-modal.js',
    '~plugins/fontAwesome.js',
    '~plugins/globalMixin.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  axios: {
    baseURL: 'http://localhost:3000',
    credentials: false,
  },

  pwa: {
    manifest: {
      lang: 'ja'
    }
  },
  content: {},

  build: {
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }
  }
}
