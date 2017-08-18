const gulp = require('gulp')
const gutil = require('gulp-util')
const fs = require('fs')
const data = require('../../utils/build')
const wbBuild = require('workbox-build')

gulp.task('build-service-worker', (done) => {
  const config = data.config
  if (data.build === 'prod') {
    wbBuild.generateSW({
      cacheId: config.app.shortTitle,
      swDest: `${data.buildDest}/build/sw.js`,
      globPatterns: ['**/*.{js,css,html}', 'images/**.{png,jpg,ico}', 'images/**/*.{png,jpg,ico}', '**/*.json'].concat(data.config.serviceWorker.globPatterns),
      globDirectory: `${data.buildDest}/build`,
      navigateFallback: '/index.html',
      navigateFallbackWhitelist: [
        [/^(?!(\/__)|(\/service-worker\.js))/]
      ],
      globIgnores: [
        '404.html',
        'service-worker.js',
        'sw.js',
        'routing-sw.js',
        'routing-sw-src.js',
        'workbox-sw.prod.v1.1.0.js',
        'workbox-sw.prod.v1.1.0.js.map',
        'workbox-routing.v1.1.0.js'
      ].concat(data.config.serviceWorker.globIgnores),
      skipWaiting: true,
      handleFetch: data.build === 'prod',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/maps.googleapis.com\/.*/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/fonts.googleapis.com\/.*/,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /^https:\/\/fonts.gstatic.com\/.*/,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /^https:\/\/cdn.ravenjs.com\/.*/,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /^https:\/\/www.gstatic.com\/firebasejs\/.*/,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /^https:\/\/www.google-analytics.com\/analytics.js/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/polyfill.io/,
          handler: 'networkFirst'
        }
      ].concat(data.config.serviceWorker.runtimeCaching)
    }).then(() => {
      gutil.log('Automated Service worker generated.')

      var str =`
        importScripts("sw.js")
        importScripts("workbox-routing.js")
        const router = new workbox.routing.Router()
        var app = JSON.parse('${JSON.stringify(config.app)}')
        var random = "${new Date().toString()}"
        importScripts("routing-sw.js")
        importScripts("routing-sw-src.js")`

      if (fs.existsSync('node_modules/workbox-routing/build/importScripts/')) {
        var dir = fs.readdirSync('node_modules/workbox-routing/build/importScripts/')
        if (dir.length > 0) {
          var version = dir[0].replace('workbox-routing.dev.', '').replace('.js', '').replace('workbox-routing.prod.', '')
          fs.writeFileSync(
            `${data.buildDest}/build/workbox-routing.js`,
            fs.readFileSync(`node_modules/workbox-routing/build/importScripts/workbox-routing.${data.build === 'prod' ? 'prod' : 'dev'}.${version}.js`,
            'utf8'), 'utf8')
        }
      }

      fs.writeFileSync(
        `${data.buildDest}/build/routing-sw.js`,
        fs.readFileSync('core/service-worker/routing.js',
        'utf8'), 'utf8')

      fs.writeFileSync(
        `${data.buildDest}/build/routing-sw-src.js`,
        fs.readFileSync('src/service-worker/routing.js',
        'utf8'), 'utf8')

      fs.writeFileSync(`${data.buildDest}/build/service-worker.js`, str, 'utf8')

      done()
    })
  } else {
    var str = 'console.log("Development version. Will not cache files")'
    fs.writeFileSync(`${data.buildDest}/service-worker.js`, str, 'utf8')
    done()
  }

})
