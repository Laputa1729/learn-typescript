// 引入 path 模块
const path = require('path');
// 引入 html-webpack-plugin 插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 自动清除 dist 文件夹
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
    filename: 'bundle.js',
    environment: {
      // 不使用箭头函数
      arrowFunction: false,
    },
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
        use: [
          {
            loader: 'babel-loader',
            // 配置 babel
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 指定环境
                    targets: {
                      // 浏览器环境
                      browsers: ['> 1%', 'last 2 versions'],
                    },
                  },
               ],
              ]
            }
          },
          'ts-loader'
        ],
        // 排除文件
        exclude: /node_modules/,
      },
      // 设置 less 文件
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入 postcss，处理样式的兼容问题
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                    },
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      }
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
