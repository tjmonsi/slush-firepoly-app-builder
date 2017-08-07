const fs = require('fs')
const through = require('through2')
const parse5 = require('parse5')
const path = require('path')

const prefixStream = (prefixText) => {
  var stream = through()
  stream.write(prefixText)
  return stream
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
      var string = fs.readFileSync(file.path, enc)
      var document = parse5.parseFragment(string)
      for (var i in document.childNodes) {
        var child = document.childNodes[i]
        if (child.tagName === 'link') {
          for (var j in child.attrs) {
            if (child.attrs[j].name === 'href') {
              var dependencyPath = path.resolve(path.dirname(file.path), child.attrs[j].value).replace(process.cwd(), '')
              if (dependencyPath.indexOf('/bower_components') === 0) {
                dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '').replace('/opts', '') + dependencyPath
              } else if (dependencyPath.indexOf('/core') === 0) {
                dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath.replace('/core', '')
              } else if (dependencyPath.indexOf('/src') === 0) {
                dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath.replace('/src', '')
              }
              console.log(newPath, dependencyPath)
              document.childNodes[i].attrs[j].value = path.relative(path.dirname(newPath), dependencyPath)
              // console.log(path.relative(file.path, process.cwd() + '/dist/public/bower_components'), file.path, process.cwd() + '/dist/public')
              //  = child.attrs[j].value.replace(new RegExp('../bower_components/', 'g'), 'bower_components/')
              // document.childNodes[i].attrs[j].value = child.attrs[j].value.replace(new RegExp('../../core/modules/', 'g'), '')
            }
          }
        } else if (child.tagName === 'script') {
          for (var k in child.attrs) {
            if (child.attrs[k].name === 'src') {
              var dependencyPath = path.resolve(path.dirname(file.path), child.attrs[k].value).replace(process.cwd(), '')
              if (dependencyPath.indexOf('/bower_components') === 0) {
                dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath
              } else if (dependencyPath.indexOf('/core/modules') === 0) {
                dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath.replace('/core', '')
              } else if (dependencyPath.indexOf('/src/modules') === 0) {
                dependencyPath = process.cwd() + '/' + dest.replace('./', '').replace('/modules', '') + dependencyPath.replace('/src', '')
              }
              document.childNodes[i].attrs[k].value = path.relative(path.dirname(newPath), dependencyPath)
            }
          }
        }
      }
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
