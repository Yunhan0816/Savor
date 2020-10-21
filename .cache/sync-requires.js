const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/huangyunhan/Documents/Projects/Savor/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/huangyunhan/Documents/Projects/Savor/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/huangyunhan/Documents/Projects/Savor/src/pages/login.js"))),
  "component---src-pages-signup-js": hot(preferDefault(require("/Users/huangyunhan/Documents/Projects/Savor/src/pages/signup.js")))
}

