"use strict"

const fs = require('fs')

function parsePlugin(src) {
  return Function('"use strict"; return (' + src + ')')()
}

function readPlugin(fn) {
  if (fs.existsSync(fn)) {
    const pluginSrc = fs.readFileSync(fn, 'utf8')
    return parsePlugin(pluginSrc)
  }
  return {}
}

module.exports = readPlugin
