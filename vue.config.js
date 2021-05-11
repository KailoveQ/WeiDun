// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  baseUrl: baseUrl, // 根据你的实际情况更改这里
  lintOnSave: true,
  productionSourceMap: false,
  // configureWebpack: config => {
  //     if (process.env.NODE_ENV === 'production') {
  //         return {
  //             plugins: [
  //                 new BundleAnalyzerPlugin()
  //             ]
  //         }
  //     }
  // },
  devServer:{
    //以上的ip和端口是我们本机的;下面为需要跨域的
    // proxy:{ //配置跨域
    //   '/cms':{
    //     target:'http://www.huwanglun.com/cms',
    //     ws:true,
    //     changeOrigin:true,//允许跨域
    //     // pathRewrie:{
    //     //   '^/':''   //请求的时候使用这个api就可以
    //     // }
    //   }
    // }
  },
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      'vue-i18n': 'VueI18n',
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
    // entry
    //   .add('@/mock')
    //   .end()
  }
}
