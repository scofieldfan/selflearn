const webpack = require('webpack');

const merge = require('webpack-merge');

const BaseConfig = require('./webpack.base.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const baseFileName = require('../package.json').name;

module.exports = merge(BaseConfig, {
    devtool: '#cheap-module-eval-source-map',

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            filename: './view/index.html',
            template: './view/index.html',
            title: '系统',
            // favicon: path.resolve('./client/assets/image/nio_urm.png'),
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
        })
    ]
});
