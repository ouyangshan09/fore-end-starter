/**
 * React typescript 开发环境配置
 *
 * @author Ouyang
*/

const url = require('url');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const config = require('./config');

const localIdentName = '[name]_[local]_[hash:base64:3]';
const devMode = process.env.NODE_ENV === 'development';

const cssloader = {
    loader: 'typings-for-css-modules-loader',
    options: {
        modules: true,
        localIdentName,
        importLoaders: 2,
        sourceMap: devMode,
        // namedExport: true,
        // camelCase: true,
        minimize: devMode ? false : {
            safe: true,
            sourceMap: false,
            autoprefixer: {
                add: true,
                remove: true
            },
        },
    }
};

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: 'inline'
    }
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: devMode
    }
};

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            config.polyfill,
            'react-hot-loader/patch',
            'webpack-dev-server/client?' + url.format({protocol: config.protocol, host: config.host, port: config.port}),
            'webpack/hot/dev-server',
            config.appBoot
        ]
    },
    output: {
        pathinfo: true,
        filename: 'sttaic/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)/,
                loader: 'source-map-loader',
                enforce: 'pre',
                include: config.src
            },
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|mjs)/,
                        include: config.src,
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            compact: true,
                            presets: [
                                ['env'],
                                'react',
                                'stage-0'
                            ],
                            plugins: [
                                'syntax-dynamic-import',
                                'lodash'
                            ]
                        }
                    },
                    {
                        test: /\.(ts|tsx)/,
                        include: config.src,
                        loader: 'awesome-typescript-loader',
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
                            })
                        }
                    },
                    {
                        test: /\.(scss|sass)$/,
                        use: [
                            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                            cssloader,
                            postcssLoader,
                            sassLoader
                        ],
                    },
                    {
                        test: /\.css$/,
                        use: [
                            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
            },
            {
                test: /\.html?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: config.appHtml,
            title: config.title
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].csss' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CaseSensitivePathsPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            watch: config.src,
            checkSyntacticErrors: true,
            tsconfig: config.appTsConfig
        }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
