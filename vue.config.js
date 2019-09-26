const path = require('path')
 
module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://www.gostephen.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': '/apis'
                }
            }
        }
    }
}
 
function addStyleResource (rule) {
    rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
        patterns: [
            path.resolve(__dirname, './src/assets/stylus/common.styl')
        ]
    })
}