//////////////////////////////////////////////////////////////
//
// Load, parse, and return a plugin object.
//
// Seems like in the past, 'require' worked in a dynamic context,
// but no more, especially in a webpack environment.
//
// So.  Is this a security issue?  Might be in a web context,
// not sure about electron context.
//
// Alternative is to load all import all plugins at once into an
// indexed group and select from the group.  Might do that if
// using beyond the initial context.  This gets me going.
//
// 16-Mar-2019 - rickb

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