// 引入path模块
const path = require('path');
// 引入html-webpack-plugin插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 暴露配置
module.exports = {
  // 模式
  mode: 'development',
  // 入口文件
  entry: './src/index.ts',
  // 打包输出文件
  output: {
    // 输出文件路径
    path: path.resolve(__dirname, 'dist'),
    // 打包后输出文件名
    filename: 'bundle.js'
  },
  // 打包所需模块
  module: {
    // 规则
    rules: [
      // 匹配规则
      {
        // 匹配文件
        test: /\.ts$/,
        // 使用的 loader
        use: 'ts-loader',
        // 排除文件
        exclude: /node_modules/,
      },
    ],
  },
  // 插件
  plugins: [
    // 清除dist文件夹
    new CleanWebpackPlugin(),
    // 创建插件
    new HTMLWebpackPlugin({
      // 模板文件
      template: './src/index.html',
    }),
  ],
  // 配置解析器
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
