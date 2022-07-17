const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimezeCssPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new OptimezeCssPlugin(),
  ]
});
