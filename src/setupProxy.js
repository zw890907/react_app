const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/v2',
        createProxyMiddleware({
            target: 'http://spidercms.wjdev.chinamcloud.cn/',
            // target: 'http://cmsfront.wjtest.chinamcloud.cn/v2',
            changeOrigin: true,
            pathRewrite: {
                '^/v2': ''
            }
        })
    )
}
