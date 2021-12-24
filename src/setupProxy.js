// https://www.cnblogs.com/echolun/p/15173956.html

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(
      '/api', 
      {
        target: 'http://176.113.69.25:6208',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    )
  )
}
