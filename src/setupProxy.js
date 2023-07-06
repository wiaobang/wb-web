const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/login',{
            target:'http://localhost:7001',
            changeOrigin:true,
            // pathRewrite:{'/login':''}
        }),
    )
}
