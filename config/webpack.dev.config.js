'use strict';
let path = require('path');
let config = require('./webpack.config.js');

const port = 3000;

config.devtool = 'inline-source-map';
config.devServer = {
    historyApiFallback: true,
    contentBase: './src',
    host: 'localhost',
    port: port,
    inline: true,
    proxy: [{
        path: [`/api/**`],
        target: {
            host: 'api.test.com'
        }
    }]
};

module.exports = config;