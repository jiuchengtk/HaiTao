const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/api', {
      target: 'https://list.mogu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
  app.use(
    proxy('/a', {
      target: 'https://movie.douban.com',
      changeOrigin: true,
      pathRewrite: {
        '^/a': ''
      }
    })
  );
}