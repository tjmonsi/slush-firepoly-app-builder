const gulp = require('gulp')
const fs = require('fs')
const data = require('../../utils/build')

gulp.task('build-manifest', (done) => {
  const theme = data.theme
  const config = data.config
  const manifest = {
    name: config.app.title,
    short_name: config.app.shortTitle,
    start_url: theme.startUrl,
    display: theme.display,
    theme_color: theme.themeColor,
    background_color: theme.backgroundColor,
    icons: theme.icons
  }
  fs.writeFileSync(`${data.buildDest}/manifest.json`, JSON.stringify(manifest, null, 2), 'utf8')
  done()
})
