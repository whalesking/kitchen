const webpack = require('webpack');
const Timestamp = new Date().getTime();
let HTTP_URL,BASE_URL;
if(process.env.NODE_ENV == "production"){
    HTTP_URL = "https://h5.iusns.com/api/"
    BASE_URL = "https://h5.iusns.com/mobileapp/"
    // HTTP_URL = "http://h5.iusns.com/api/"
    // BASE_URL = "http://h5.iusns.com/mobileapp/"
}else if(process.env.NODE_ENV == "test"){
    HTTP_URL = "http://h5.iusns.com/api/"
    BASE_URL = "http://h5.iusns.com/mobileapp/"
}else {
    // HTTP_URL = "http://api.iusns.cn"
    BASE_URL = "http://h5.iusns.com/mobileapp/"
    HTTP_URL = "http://h5.iusns.com/api/"
    // BASE_URL = "https://h5.iusns.com/mobileapp/"
}
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? '/' : "/",
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
           })
        ],
        output: {
            filename: `js/[name].[hash].js`,
            chunkFilename: `js/[name].[hash].js`
        }
    },
    chainWebpack: config => {
        config.plugins.delete("prefetch");
        // 这里是对环境的配置，不同环境对应不同的REQUEST_URL，以便axios的请求地址不同
        config.plugin('define').tap(args => {
            args[0]['process.env'].HTTP_URL = JSON.stringify(process.env.HTTP_URL)
            args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
            return args
        });
    },
    devServer: {
        open: true, //配置自动启动浏览器
        proxy: {
            '/v1': {
                target:HTTP_URL, // 你请求的第三方接口
                changeOrigin:true // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            },
        }
	}
}
