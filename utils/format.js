module.exports = (string) => {
  var username = string.toLowerCase()
  return username.replace(/\s/g, '')
}
