const webpack = require('webpack');

const merge = require('webpack-merge');

const BaseConfig = require('./webpack.base.js');

const ManifestPlugin = require('webpack-manifest-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;

const baseFileName = require('../package.json').name;
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = merge(BaseConfig, {
    devtool: '#cheap-module-eval-source-map', // http://www.cnblogs.com/hhhyaaon/p/5657469.html  cheap-module-source-map

    plugins: [
        // new ManifestPlugin(),
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            SERVER_HOST: JSON.stringify('/api/proxy')
        })
    ]
});
