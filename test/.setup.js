// Set NODE_ENV to production to prevent warning logs in the console
process.env.NODE_ENV = 'production'

require('browser-env')()

var hooks = require('require-extension-hooks')

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()
