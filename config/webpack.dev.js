const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // static: path.join(__dirname, "src"),
    host: 'localhost',
    port: 3001,
    compress: true,
    // open: true, // 是否直接打开页面
    hot: true, // 热更新
    client: {
      progress: true, // 设置进度条 会在浏览器的控制台看到
    },

    // 配置代理，解决请求跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8100',
        // target: 'http://172.16.1.206:8100',
        // ws: true,
        xfwd: false,
        changeOrigin: true,
        // secure: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all'
    //   }
    // },
    // 前端自己mock数据 不常用
    // onBeforeSetupMiddleware: (devServer) => {
    //   devServer.app.get('/api/user', (req, res) => {
    //     res.json({
    //       code: 200,
    //       data: {
    //         name: 'hss1'
    //       },
    //       msg: '成功'
    //     });
    //   });
    // }
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: './public', to: '' }
    //   ]
    // }),
  ],

  // 增加文件映射，报错了会告诉你是哪行，哪列出错，用于调试
  // source-map 报错时会提示行跟列，在打包时也会出现一个 ***.map 的映射文件，这个文件会很大，
  // eval-source-map 报错时会提示行跟列，打包时不会出现 ***.map 文件
  // cheap-module-source-map 报错时不会产生列，但是会生成一个单独的文件，使用这个时一直未生效没有进行映射文件不知道为什么，但是这个也不怎么用，
  // eval-cheap-module-source-map 报错时不会产生列，也不会生成一个单独的文件，常用
  devtool: 'eval-cheap-module-source-map',
});
