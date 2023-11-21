const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取css文件
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css文件
// 每次打包都将当前的目录删除掉进行重新打包
// 例如在输出时给输出的文件添加 hash 戳，每次打包都会在原来的基础上添加一个新的文件，原来的文件其实是没有用的，
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 将js文件中未引用到的静态资源打包到dist目录下
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 多线程打包，适用于大项目，在小项目中使用 happypack 打包，执行多线程也会占用打包时间
const Happypack = require('happypack');

/**
 * Babel 处理es语法，将es6语法转换成es5，处理react的jsx语法，主要是为了兼容
 * 1.babel-loader
 * 2.@babel/core
 * 3.@babel/preset-env
 * 
 */

/**
 * React
 * 1.react
 * 2.react-dom
 * 3.@babel/preset-react 
 */

module.exports = {
  // 入口
  entry: './src/main.js',
  // 将one.js two.js 打包成两个文件
  // entry: {
  //   one: './src/pages/RSA1',
  //   two: './src/pages/RSA2'
  // },
  // entry: ['./src/one', './src/two'], // 将one.js two.js 打包成一个文件


  // 输出
  output: {
    publicPath: "/",
    path: path.resolve('dist'),
    filename: 'js/[name].boundle.js',
  },


  // 插件，每个插件都是一个实例，需要new 一下进行使用
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'hhhhhhh',
      template: path.resolve('index.html'), // 生成的html模版
      // filename: 'one.html',
      inject: 'body', // js引入的位置 为true 或者 “body”时script标签在页面底部，值为head在head标签里
      // chunks: ['one', 'two'], // 决定页面引入哪个js文件，如果不写则全部引入

      minify: { // 压缩页面
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 去除页面注释
        removeAttributeQuotes: true, // 去除双引号
      }
    }),
    // new HtmlWebpackPlugin({
    //   // title: 'hhhhhhh',
    //   template: './src/templete.html', // 生成的html模版
    //   filename: 'two.html',
    //   inject: 'body', // js引入的位置 为true 或者 “body”时script标签在页面底部，值为head在head标签里
    //   chunks: ['one', 'two'], // 决定页面引入哪个js文件，如果不写则全部引入
    //   minify: { // 压缩页面
    //     collapseWhitespace: true, // 移除空格
    //     removeComments: true, // 去除页面注释
    //     removeAttributeQuotes: true,
    //   }
    // }),
    // new webpack.HotModuleReplacementPlugin(), // 热更新 已移入webpack.dev.js
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }), //提取css文件
    // new OptimizeCssAssetsPlugin(), // 压缩css文件，已移入webpack.prod.js
    new webpack.ProvidePlugin({
      
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({  // 已移入webpack.dev.js
    //   patterns: [
    //   { from: './public', to: '' }
    // ]}),
    // 在每个生成的块的顶部添加一个横幅。
    new webpack.BannerPlugin({
      banner: 'make with hss',
    }),
    // 定义全局变量 在组件中直接使用 PUBLIC_CDN_URL 即可拿到 http://localhost:7000
    new webpack.DefinePlugin({
      PUBLIC_CDN_URL: JSON.stringify('http://localhost:7000'),
      // "process.env": {
      //   NODE_ENV: JSON.stringify("production")
      // }
    }),

    // new Happypack({
    //   id: 'js',
    //   loaders:  [{
    //     loader: "babel-loader",
    //     options: {
    //       presets: ['@babel/preset-env', '@babel/preset-react'],
    //       plugins: [
    //         "@babel/plugin-proposal-class-properties",
    //         "@babel/plugin-transform-runtime"
    //       ]
    //     }
    //   }],
    // })
  ],

  // 已经移入到 webpack.dev.js 因为 deveServe 到生产环境不需要，
  // devServer: {
  //   host: 'localhost',
  //   port: 7000,
  //   compress: true,
  //   // open: true, // 是否直接打开页面
  //   hot: true, // 热更新
  //   // client: {
  //   //   progress: true, // 设置进度条 会在浏览器的控制台看到
  //   // },

  //   // 配置代理，解决请求跨域
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       // pathRewrite: {
  //       //   '^/api': ''
  //       // }
  //     },
  //   },
    
  //   // 前端自己mock数据 不常用
  //   // onBeforeSetupMiddleware: (devServer) => {
  //   //   devServer.app.get('/api/user', (req, res) => {
  //   //     res.json({
  //   //       code: 200,
  //   //       data: {
  //   //         name: 'hss1'
  //   //       },
  //   //       msg: '成功'
  //   //     });
  //   //   });
  //   // }
  // },

  // 解析
  resolve: {
    // 设置别名
    alias: {
      '@/components': './components',
      '@components': '../../components'
    },
    // 引入文件时省略后缀名，省略后缀名时先找 xxx.js 如果没找到则找 xxx.jsx 以此类推，知道找到文件为止
    extensions: [ '.css', '.js', '.jsx', '.ts', '.tsx', '.less']
  },


  module: { // 模块，webpack默认只认识js模块，对于css，less，等模块webpack都不认识，所以需要使用相应的loader进行解析，文件夹里的js，css都是模块
    rules: [
      // loader 的特点：功能单一，可以将多个 loader 进行组合使用，默认是从右向左执行，从下到上执行
      // 处理css文件，先用css-loader解析css文件，在使用MiniCssExtractPlugin.loader对css进行提取，
      // style-loader 负责将解析后的 css 文件插入到模版 html 文件的<header></header> 标签中
      // MiniCssExtractPlugin.loader中自带style-loader，所以无需使用style-loader

      // autoprefixer 用来给css加前缀，但是在使用前需要使用 postcss-loader 进行处理
      // postcss-loader 需要在处理css文件之前进行添加前缀，
      // 使用postcss-loader 需要新建post.config.js进行配置
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
      },
      // 处理less文件，需要less-loader先解析less文件，css-loader将less文件转换成css，MiniCssExtractPlugin.loader再将css文件提取出来
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader' ]
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/, // 解析时不解析node_modules文件
      //   use: 'Happypack/loader?id=js',
      // },
      {
        test: /\.m?js|tsx|ts$/,
        exclude: /node_modules/, // 解析时不解析node_modules文件
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime"
            ]
          }
        },
      },
      // webpack5新写法
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },


  // 环境配置 production：生产环境 development：测试环境
  // mode: 'development',


  // 增加文件映射，报错了会告诉你是哪行，哪列出错，用于调试
  // source-map 报错时会提示行跟列，在打包时也会出现一个 ***.map 的映射文件，这个文件会很大，
  // eval-source-map 报错时会提示行跟列，打包时不会出现 ***.map 文件
  // cheap-module-source-map 报错时不会产生列，但是会生成一个单独的文件，使用这个时一直未生效没有进行映射文件不知道为什么，但是这个也不怎么用，
  // eval-cheap-module-source-map 报错时不会产生列，也不会生成一个单独的文件，常用
  // devtool: 'eval-cheap-module-source-map', // 已移入webpack.dev.js


  // 文件超过250kb时报错
  performance: {
    hints: false
  },


  // 实时打包文件，目前位置今本用不到，了解即可
  // 弊端，每次实时打包都会输出一个新的文件
  // watch: true,
  // watch监控的选项
  // watchOptions: {
  //   poll: 1000, // 每秒问我多少次（每秒看我是否对文件进行了修改）
  //   aggregateTimeout: 500, // 防抖，实时保存的会用到，像我每次修改完成都需要command + s进行保存的就不需要了
  //   ignored: '/node_modules/', // 不需要进行监控的文件
  // }
}