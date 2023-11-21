# 关于packjson
scripts脚本
<!-- 
  npm run build即可执行该脚本 webpack: 自行去node-modules目录下找webpack，--config: 需要添加一个配置文件，
 ./config/webpack.config.js 配置文件的名字叫做 ./config/webpack.config.js

 为何要这么进行修改？
 因为因为正常 webapck.config.js 文件是在 webpack-demo 下的，此时执行脚本为" build": "webpack"，
 脚本即可自行去找 webpack.config.js 去执行，具体详见 webpack 源码，
 但是在此项目中 webpack.config.js 文件被放置在了 webapck-demo/config 文件中，在执行脚本时找不到webpack的配置文件，所以需要进行此脚本配置

 如果 webpack.config.js 文件仍在 webpack-demo/config 文件夹中，但是 webpack.config.js 文件名称不一定会叫什么
 则需要在 scripts 脚本中写入 "build": "webpack", 执行时命令为 npm run build -- --config ./config/webpack.config.js
 
 如果执行命令为 npm run build --config ./config/webpack.config.js 则 webpack 不会认为 --config ./config/webpack.config.js 时一个参数，执行结果为 webpack "./config/webpack.config.js" 缺少了 --config，
 正常的执行为webpack "--config" "./config/webpack.config.js"
 -->
"build": "webpack --config ./config/webpack.config.js",

<!-- 处理打包的css文件没有加上前缀 -->
"browserslist": [
  "last 2 versions",
  "> 1%",
  "iOS 7",
  "last 3 iOS versions"
]

# 关于webpack的一些优化插件

## mini-css-extract-plugin 提取css文件
未配置前打包生成的css文件是在js文件中，如果需要单独将css文件提取出来需要使用该插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

plugins: [
  new MiniCssExtractPlugin()
]

## optimize-css-assets-webpack-plugin 压缩css文件
未配置前，生成的css进行了换行和空格等，配置该插件将css压缩成一行
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

plugins: [
  new OptimizeCssAssetsPlugin(),
]

## @babel/plugin-proposal-class-properties @babel/runtime
需安装 npm install --save-dev @babel/plugin-transform-runtime npm install --save @babel/runtime
并@babel/runtime作为生产依赖项（因为它用于“运行时”）。

提取打包后的公共方法 可以重用 Babel 的注入帮助代码以节省代码大小。

注意：虽然配置了babel进行es6 => es5，但是实例下的方法等高级语法都不会进行转化，如'aaa'.includes('a')

## 

​```
<div>111</div>
​```