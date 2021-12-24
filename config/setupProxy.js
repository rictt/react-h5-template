const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/api', 
    {
      "target": "https://getman.cn",
      "changeOrigin": true,
    }))
}
// module.exports = function (app) {
//   app.use(
//     '/api',
//     proxy({
//       target: 'http://176.113.69.25:6208',
//       secure: false,
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "/api"
//       }
//   }))
}