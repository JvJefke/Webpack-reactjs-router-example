var express = require('express'),
    path = require('path'),
    app= express(),

    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    webpackConfig = require('./webpack.server.config'),
    webpackCompiler = webpack(webpackConfig);
    webpackHotMiddleware = require('webpack-hot-middleware');

    app.use(express.static(__dirname + '/'));

    app.use(
      webpackMiddleware(webpackCompiler,
        {publicPath: webpackConfig.output.publicPath, lazy: false}
      )
    );

    app.use(webpackHotMiddleware(webpackCompiler));

    app.use(function(req, res, next){
      if(path.extname(req.path).length > 0){
        next();
      }
      else {
        req.url = '/index.html';
        next();
      }
    });

    app.listen(process.env.PORT || 8001 );
