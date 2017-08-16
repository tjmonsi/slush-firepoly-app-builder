const fs = require('fs')
const through = require('through2')
const parse5 = require('parse5')
const path = require('path')

const prefixStream = (prefixText) => {
  var stream = through()
  stream.write(prefixText)
  return stream
}

const transform = (document, file, dest, newPath) => {
  var dependencyPath
  for (var i in document.childNodes) {
    var child = document.childNodes[i]
    if (child.tagName === 'link') {
      for (var j in child.attrs) {
        if (child.attrs[j].name === 'href' && child.attrs[j].value.indexOf('https://') < 0) {
          dependencyPath = path.resolve(path.dirname(file.path), child.attrs[j].value).replace(process.cwd(), '')
          // console.log(dependencyPath)
          if (dependencyPath.indexOf('/bower_components') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '').replace('/opts', '').replace('/shell', '') + dependencyPath
          } else if (dependencyPath.indexOf('/core') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '').replace('/opts', '').replace('/shell', '') + dependencyPath.replace('/core', '')
          } else if (dependencyPath.indexOf('/src') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '').replace('/opts', '').replace('/shell', '') + dependencyPath.replace('/src', '')
          }
          // console.log(newPath, dependencyPath, path.relative(path.dirname(newPath), dependencyPath))
          document.childNodes[i].attrs[j].value = path.relative(path.dirname(newPath), dependencyPath)
          // console.log(path.relative(file.path, process.cwd() + '/dist/public/bower_components'), file.path, process.cwd() + '/dist/public')
          //  = child.attrs[j].value.replace(new RegExp('../bower_components/', 'g'), 'bower_components/')
          // document.childNodes[i].attrs[j].value = child.attrs[j].value.replace(new RegExp('../../core/modules/', 'g'), '')
        }
      }
    } else if (child.tagName === 'script') {
      for (var k in child.attrs) {
        if (child.attrs[k].name === 'src' && child.attrs[k].value.indexOf('https://') < 0) {
          dependencyPath = path.resolve(path.dirname(file.path), child.attrs[k].value).replace(process.cwd(), '')
          if (dependencyPath.indexOf('/bower_components') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '').replace('/opts', '').replace('/shell', '') + dependencyPath
          } else if (dependencyPath.indexOf('/core/modules') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath.replace('/core', '')
          } else if (dependencyPath.indexOf('/src/modules') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath.replace('/src', '')
          } else if (dependencyPath.indexOf('/core/test') === 0) {
            dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '').replace('/shell', '') + dependencyPath.replace('/core', '').replace('/src', '')
          }
          document.childNodes[i].attrs[k].value = path.relative(path.dirname(newPath), dependencyPath)
        }
      }
    } else if (child.childNodes && child.childNodes.length > 0) {
      transform(child, file, dest, newPath)
    }
  }
}

const correctBowerPath = (dest) => {
  return through.obj((file, enc, cb) => {
    if (file.isNull()) {
      return cb(null, file)
    }

    if (!file.isDirectory()) {
      const newPath = process.cwd() + '/' + dest.replace('./', '') + file.path
        .replace(process.cwd(), '')
        .replace('/core/modules', '')
        .replace('/src/modules', '')
        .replace('/core/opts', '')
        .replace('/src/opts', '')
        .replace('/core/shell', '')
      var string = fs.readFileSync(file.path, enc)
      var document
      if (file.path.indexOf('.test.html') > 0) {
        document = parse5.parse(string)
      } else {
        document = parse5.parseFragment(string)
      }
      transform(document, file, dest, newPath)
      var newString = parse5.serialize(document)
      if (file.isBuffer()) {
        file.contents = Buffer.concat([Buffer.from(newString)])
      }

      if (file.isStream()) {
        file.contents = prefixStream(Buffer.from(newString))
      }
    }
    cb(null, file)
  })
}

module.exports = correctBowerPath
