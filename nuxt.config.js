
export default {
  mode: 'universal',
  /* #4a4a4a
  ** Headers of the page
  */
  head: {
    title: 'Photomiracle',
    titleTemplate: '%s - Photomiracle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Photomiracle oferuje usługi fotograficzne na każdą okazję.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
        defer: true,
        type:"text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        defer: true,
        type:"text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        defer: true,
        type:"text/javascript"
      },
     
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/animate.css',
    '~/assets/css/jquery.fancybox.min.css',
    '~/assets/fonts/ionicons/css/ionicons.min.css',
    '~/assets/fonts/fontawesome/css/font-awesome.min.css',
    '~/assets/scss/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/jquery.waypoints.min.js', mode: 'client'},
    { src: '~/plugins/jquery.fancybox.min.js', mode: 'client'},
    { src: '~/plugins/element-animate.js', mode: 'client'},
    { src: '~/plugins/vue-carousel.js', mode: 'client', ssr: false},
    { src: '~/plugins/vue-owl-carousel.js', mode: 'client'},
    { src: '~/plugins/faviconswap.js', mode: 'client'},
    // { src: '~/plugins/tiny-slider.js', mode: 'client' },
    { src: '~plugins/ga.js', mode: 'client' },
    "@/plugins/google-maps"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  webfontloader: {
    google: {
      families: [
        'Montserrat:n4,n7',
        'Oxygen:n4,n7'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap',
        'https://fonts.googleapis.com/css?family=Oxygen:400,700&display=swap'
      ]
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa'],
    'nuxt-lazy-load',
    'nuxt-purgecss',
    'nuxt-webfontloader',
  ],
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['owl-theme','owl-nav','owl-prev','owl-next','owl-dots','owl-dot','.owl-theme .owl-dots .owl-dot span']
  },
  pwa: { 
    workbox: {},
    icon: {iconSrc: '/android-chrome-512x512.png', iconFileName: 'android-chrome-512x512.png'},
    meta: { 
      theme_color: '#ffffff', 
      lang: 'pl', 
      ogHost: 'https:/pwkonstal.pl/', 
      nativeUI: true }, 
      manifest: { 
        name: 'Photomiracle', 
        lang: 'pl', 
        display: 'standalone', 
        orientation: 'portrait', 
        short_name: 'Photomiracle'}
      },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      
    },

    vendor: [
      'vue-owl-carousel'
    ]
  }
}
