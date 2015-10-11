'use strict'

  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');

  module.exports = {
    entry: [
      'webpack/hot/dev-server', // 'only' prevents reload on syntax errors
      __dirname + '/app/app.js'
    ],
    output:{
      path: __dirname + '/build/',
      filename: 'bundle.js',
      publicPath: '/build/'
    },
    resolve:{
      root: __dirname + '/',
      extensions:['', '.js', '.scss']
    },
    module:{
      loaders: [
        {test: /\.js?$/, loaders: ['react-hot-loader', 'babel'], exclude: /node_modules|bower_components/},
        {test: /\.scss$/, loader: ExtractTextPlugin.extract('style','css!sass')},
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
        {test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000"},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
      ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          React: 'react'
        }),
        new ExtractTextPlugin('style.css')
    ],
    devtool: 'source-map'
  };
