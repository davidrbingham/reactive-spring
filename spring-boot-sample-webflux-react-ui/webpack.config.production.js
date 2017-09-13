'use strict';

/* eslint-env node */
/* eslint-disable prefer-template  */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const extendConfig = require('./webpack.config.base');
const pkg = require('./package.json');

module.exports = extendConfig({
    bail: true,
    output: {
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: `"${pkg.version}"`,
            DEVELOPMENT_MODE: false,
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: '../index.html',
            title: `${pkg.name} ${pkg.version}`,
            environment: 'production'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});