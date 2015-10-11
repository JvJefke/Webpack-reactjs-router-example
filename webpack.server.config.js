'use strict'

  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');

  webpackConfig.entry = [
    'webpack/hot/dev-server', // "only" prevents reload on syntax errors
    'webpack-hot-middleware/client',
    __dirname + "/app/app.js"
  ];

  webpackConfig.output = {
    path: "/",
    filename: "bundle.js",
    publicPath: "http://localhost:8001/build/"
  }

  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ]);

  module.exports = webpackConfig;
