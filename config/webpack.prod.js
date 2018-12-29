/**
 * React typescript 生产环境配置
 *
 * @author Ouyang
*/

const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const localIdentName = '[name]_[local]_[hash:base64:3]';

const cssloader = {
    loader: 'typings-for-css-modules-loader',
    options: {
        modules: true,
        localIdentName,
        importLoaders: 2,
        sourceMap: false,
        minimize: {
            safe: true,
            sourceMap: false,
            autoprefixer: {
                add: true,
                remove: true
            },
        }
    }
}

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: false
    }
}

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: false
    }
}

module.exports = {
    bail: true,
    mode: 'production',
    // devtool: 'source-map',
    entry: {
        app: [
            config.polyfill,
            config.appBoot
        ]
    },
    output: {
        pathinfo: true,
        publicPath: '/',
        path: config.dist,
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[id].[chunkhash].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']  
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: 'source-map-loader',
                enforce: 'pre',
                include: config.src
            },
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|mjs)$/,
                        loader: 'babel-loader',
                        include: config.src,
                        options: {
                            babelrc: false,
                            compact: true,
                            presets: [
                                ['env'],
                                'react',
                                'stage-0'
                            ],
                            plugins: [
                                'syntax-dynamic-import'
                            ]
                        }
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        loader: 'awesome-typescript-loader',
                        include: config.src,
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: params => ({
                                before: [
                                    tsImportPluginFactory({
                                        libraryDirectory: 'es',
                                        libraryName: 'antd',
                                        style: 'css'
                                    })
                                ]
                            }),
                            useBabel: true,
                            babelOptions: {
                                babelrc: false,
                                plugins: [
                                    'lodash'
                                ]
                            }
                        }
                    },
                    {
                        test: /\.(scss|sass)$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            cssloader,
                            postcssLoader,
                            sassLoader
                        ]
                    },
                    {
                        test: /\.(css)$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'application/font-woff'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'application/vnd.ms-fontobject'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    minetype: 'image/svg+xml'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url-loader',
                options: { limit: 10000 }
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: config.root,
            manifest: require(path.join(config.lib, 'vendor-manifest.json'))
        }),
        new HtmlWebpackPlugin({
            template: config.appHtml,
            title: config.title
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new CaseSensitivePathsPlugin(),
        new LodashModuleReplacementPlugin(),
        new webpack.NamedChunksPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            watch: config.src,
            tsconfig: config.appTsConfig,
            checkSyntacticErrors: true
        }) 
    ]
};
