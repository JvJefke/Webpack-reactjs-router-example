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

    app.all('/*', function(req, res, next) {
      // Just send the index.html for other files to support HTML5Mode
      res.sendFile('index.html', { root: __dirname });
    });

    app.listen(process.env.PORT || 8001 );
