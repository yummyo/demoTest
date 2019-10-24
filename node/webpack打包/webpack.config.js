var HtmlWebpackPlugin = require('html-webpack-plugin') //打包html的插件
const path = require('path')
module.exports = {
  entry: {
    app: path.resolve(__dirname, './app/js/index.js')

    //我们的是多页面项目，多页面入口配置就是这样，
    //app/src/page下可能还会有很多页面，照着这样配置就行
  },
  output: {
    //__dirname 当前webpack.config.js的路径
    path: path.resolve(__dirname, './dist'),
    filename: '[name]_bundle.js'
    // 这个[name]的意思是,配置入口entry键值对里的key值,app/dist/js/index,最后的index，
    //这里无论你src/js/index.js这个脚本如何命名，打包后都将是index.js
    //   path: path.resolve(__dirname)
  },

  //插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack打包',
      chunks: ['./app/src/dist/js/index'],
      filename: 'index.html',
      showErrors: true,
      template: './app/index.html',
      inject: 'head',
      hash: true
    })
  ]
}
