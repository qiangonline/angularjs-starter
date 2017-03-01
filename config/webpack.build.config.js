'use strict';
let path = require('path');
let config = require('./webpack.config.js');

let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');

config.devtool = 'nosources-source-map';

config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    options: {
        htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true
        }
    }
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    output: {
        comments: false
    },
    compress: {
        warnings: false
    }
}));

config.plugins.push(new CopyWebpackPlugin([{
    from: path.join(__dirname, '../accounts/.super/')
}]))

module.exports = config;