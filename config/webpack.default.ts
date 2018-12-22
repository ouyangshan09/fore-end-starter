/**
 * Created by Ouyang on 2018/3/29.
 * webpack基础配置
 * @author Ouyang
 */
import Webpack, { Configuration, Loader } from 'webpack';
import Path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import Config from './config';

const localIdentName = '[name]_[local]_[hash:base64:3]';

const BabelLoader: Loader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            ['env', {
                module: false
                // debug: true
            }
            ], 'react', 'stage-0'],
        plugins: [
            'transform-runtime',
            'syntax-dynamic-import',
            ['react-css-modules', {
                'filetypes': {
                    '.scss': {
                        'syntax': 'postcss-scss'
                    }
                },
                'generateScopedName': localIdentName
            }]
        ]
    }
};

const TsLoader: Loader = {
    loader: 'ts-loader',
    options: {
        // 加快编译速度，取消静态类型检查
        // transpileOnly: true,
        // 启动热更新
        happyPackMode: true
    },
}

const cssLoader: Loader = {
    loader: 'typings-for-css-modules-loader',
    options: {
        module: true,
        localIdentName,
        sourceMap: true,
        // namedExport: true,
        // camelCase: true,
        minimize: false,
    }
}

const postcssLoader: Loader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: 'inline'
    }
}

const sassLoader: Loader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
}

const defaultConfig: Configuration = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /(node_modules|lib)/,
            use: [TsLoader]
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            test: /\.s?([c|a])ss$/,
            include: [
                Path.join(Config.src, 'resources/')
            ],
            exclude: [
                Path.join(Config.root, 'public'),
                Path.join(Config.root, 'node_modules'),
                Path.join(Config.root, 'lib')
            ],
            use: ExtractTextPlugin.extract({
                use: [
                    cssLoader,
                    postcssLoader,
                    sassLoader
                ],
                fallback: 'style-loader'
            })
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                minetype: 'application/font-woff'
            }
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                minetype: 'application/font-woff'
            }
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                minetype: 'application/vnd.ms-fontobject'
            }
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                minetype: 'image/svg+xml'
            }
        }, {
            test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
            loader: 'url-loader',
            options: { limit: 10000 }
        }, {
            test: '/\.html?$/',
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }]
    },
    plugins: [
        new Webpack.DllReferencePlugin({
            context: Config.root,
            manifest: require(Path.join(Config.root, 'lib/vendor-manifest.json'))
        }),
        new HtmlWebpackPlugin({
            template: Path.join(Config.src, 'index.html'),
            title: Config.title
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new CaseSensitivePathsPlugin()
    ]
};

export default defaultConfig;
