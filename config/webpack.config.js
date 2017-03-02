'use strict';
let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
    entry: {
        bootstrap: [path.join(__dirname, '../src/bootstrap.js')]
    },
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: ''
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true
                    }
                }],
            },
            {
                test: /\.js$/,
                use: ['ng-annotate-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif|docx)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html')
        }),
        new ExtractTextPlugin('[name].[contenthash].css')
    ],
    resolve: {
        modules: [
            path.join(__dirname, '../src'), path.join(__dirname, '../node_modules')
        ]
    }
};

module.exports = config;