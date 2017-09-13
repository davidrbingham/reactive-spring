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
        `webpack-dev-server/client?http://localhost:8080`,
        'webpack/hot/only-dev-server',
        './Webflux.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: [
                    'react-hot', 'babel-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/'
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
            title: `${pkg.name} ${pkg.version}-dev-hot`,
            environment: 'development'
        })
    ]
});
