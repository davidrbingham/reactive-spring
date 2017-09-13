'use strict';

/* eslint-env node */
/* eslint-disable prefer-template  */

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extendConfig = require('./webpack.config.base');
const pkg = require('./package.json');

module.exports = extendConfig({
    debug: true,
    devtool: '#source-map',
    pathinfo: true,
    entry: [
        './Webflux.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build')
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            VERSION: `"${pkg.version}-dev"`,
            DEVELOPMENT_MODE: true,
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            template: '../index.html',
            title: `${pkg.name} ${pkg.version}-dev`,
            environment: 'development'
        }),
        new webpack.IgnorePlugin(/ReactContext|react\/addons/)
    ]
});