const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://crmxeno.up.railway.app',
      changeOrigin: true,
      secure: true,
      credentials: 'include',
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying request to:', proxyReq.path);
      }
    })
  );
  
  app.use(
    '/oauth2',
    createProxyMiddleware({
      target: 'https://crmxeno.up.railway.app',
      changeOrigin: true,
      secure: true,
      credentials: 'include'
    })
  );
};
