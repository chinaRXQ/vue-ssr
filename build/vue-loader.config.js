/**
 * Created by hp on 2018/5/3.
 */
module.exports = (isDev) => {
    return {
        preserveWhitespace: true,
        extractCSS: !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        }
        // hotReload: false, //根据环境变量生成
        // loaders: {
        //     'docs': docsLoader
        // },
        // preLoader: {
        // },
        // postLoader: {
        // }
    }
}