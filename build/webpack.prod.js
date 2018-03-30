const webpack = require('webpack');

const merge = require('webpack-merge');

const BaseConfig = require('./webpack.base.js');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const baseFileName = require('../package.json').name;

module.exports = merge(BaseConfig, {
    devtool: '#source-map',

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../')
        }),

        new HtmlWebpackPlugin({
            filename: './view/index.html',
            template: './view/index.html',
            title: '系统',
            inject: true,
            chunks: ['manifest', 'vendor', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: './view/error/404.html',
            template: './view/error/404.html',
            title: '错误',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './view/error.html',
            template: './view/error.html',
            title: '错误',
            inject: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
            SERVER_HOST: JSON.stringify('')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            sourceMap: true
        }),
        new OptimizeCssAssetsPlugin()
    ]
});
