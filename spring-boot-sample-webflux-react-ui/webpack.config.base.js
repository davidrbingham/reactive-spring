'use strict';

/* eslint-env node */
/* eslint-disable prefer-template  */

const path = require('path');

const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: path.join(__dirname, 'src'),
    entry: [
        './Webflux.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss-loader!sass-loader?sourceMap!toolbox-loader')
            },
            {
                test: /\.(svg|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    postcss: [autoprefixer, precss],
    resolve: {
        root: [
            path.join(__dirname, 'src')
        ],
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    toolbox: {
        theme: 'src/style/theme/theme.scss'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ]
};

module.exports = overrides => merge.smart(config, overrides);