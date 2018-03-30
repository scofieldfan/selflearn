const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

// const autoprefixer = require('autoprefixer');

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

console.log('============================start===============================');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
const baseFileName = require('../package.json').name;

// const cssLoader = {
//     loader: 'css-loader',
//     options: {
//         minimize: false,
//         sourceMap: true
//     }
// };

// function generateLoaders(loader, loaderOptions) {
//     const loaders = [cssLoader];
//     if (loader) {
//         loaders.push({
//             loader: loader + '-loader',
//             options: Object.assign({}, loaderOptions, {
//                 sourceMap: true
//             })
//         });
//     }
//     return ['vue-style-loader'].concat(loaders);
// }

// Create multiple instances
const extractCSS = new ExtractTextPlugin({
    filename: 'static/' + baseFileName + '/css/[name]-css-[chunkHash:5].css',
    allChunks: true
});
const extractLESS = new ExtractTextPlugin({
    filename: 'static/' + baseFileName + '/css/[name]-less-[chunkHash:5].css',
    allChunks: true
});
const extractVUE = new ExtractTextPlugin({
    filename: 'static/' + baseFileName + '/css/[name]-[chunkHash:5].css',
    allChunks: true
});

module.exports = {
    entry: {
        app: './client/index.js',
        vendor: ['vue', 'vue-router', 'vuex']
    },

    context: path.resolve(__dirname, '../'),

    output: {
        filename: 'static/' + baseFileName + '/js/[name]-[chunkHash:5].js',
        path: resolve('dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: resolve('dist'),
        openPage: 'view/index.html',
        open: true,
        proxy: {
            '/v1': {
                target: 'http://dev-ksp.qyvideo.net/',
                changeOrigin: true
            },
            '/lookalike': {
                target: 'http://120.92.122.50/',
                changeOrigin: true
            }
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('uds_fe_common')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: [
                    new RegExp(`node_modules\\${path.sep}(?!uds-common.*)`)
                ],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // loaders: {
                    //     css: generateLoaders(),
                    //     less: generateLoaders('less')
                    // },
                    extractCSS: extractVUE,
                    transformToRequire: {
                        video: 'src',
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    new RegExp(`node_modules\\${path.sep}(?!uds_fe_common.*)`)
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
                // use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
                // use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'static/' + baseFileName + '/assets/'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: true,
                            gifsicle: {
                                interlaced: false
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: false,
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    outputPath: 'static/' + baseFileName + '/assets/'
                }
            },
            {
                // 使所有以 .json5 结尾的文件使用 `json5-loader`
                test: /\.json5$/,
                loader: 'json5-loader'
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'markdown-loader'
                    }
                ]
            },
            {
                test: /\.code$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href']
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../')
        }),

        extractCSS,
        extractLESS,
        extractVUE,

        // new HtmlWebpackPlugin({
        //     filename: 'view/index.html',
        //     template: './view/index.html',
        //     title: '系统',
        //     inject: true,
        //     chunks: ['manifest', 'vendor', 'app']
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('vue') !== -1;
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            SERVER_HOST: ''
        }),
        new HtmlWebpackPlugin({
            filename: './view/index.html',
            template: './view/index.html',
            title: '系统',
            inject: true,
            chunks: ['manifest', 'vendor', 'app']
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),

        new FriendlyErrorsPlugin()
    ]
};
