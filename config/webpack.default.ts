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

const BabelLoader: Loader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        'presets': ['env'],
        'env': {
            'test': {
                'presets': ['env']
            }
        }
    }
};

const TsLoader: Loader = {
    loader: 'ts-loader',
    options: {}
}

const defaultConfig: Configuration = {
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /(node_modules|lib)/,
            use: [TsLoader]
        }, {
            test: /\.s?([c|a])ss$/,
            exclude: [
                Path.join(Config.root, 'public'),
                Path.join(Config.root, 'node_modules'),
                Path.join(Config.root, 'lib')
            ],
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
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
            title: 'ts-starter'
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
