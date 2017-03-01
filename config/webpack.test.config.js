'use strict';
let path = require('path');
let config = require('./webpack.config.js');

config.entry = null;
config.output = null;
config.module.rules.push({
    test: /\.js$/,
    use: ['istanbul-instrumenter-loader'],
    include: path.join(__dirname, '../src'),
    exclude: [/\.spec\.js$/, /\.e2e\.js$/]
});
config.plugins = [];

module.exports = config;