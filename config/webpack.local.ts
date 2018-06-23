/**
 * Created by Ouyang on 2018/3/29.
 * Webpack 开发环境配置
 * @author Ouyang
 */
import Webpack, { Configuration } from 'webpack';
import Server from 'webpack-dev-server';
import WebpackMerge from 'webpack-merge';
import DefaultConfig from './webpack.default';
import Config from './config';
import Opn from 'opn';
import Url from 'url';
import Path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const serverConfig = WebpackMerge(DefaultConfig, {
    mode: 'development',
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?' + Url.format({protocol: Config.protocol, host: Config.host + ':' + Config.port}),
            'webpack/hot/dev-server',
            Path.join(Config.src, 'index.tsx')
        ]
    },
    // output: {
    //     publicPath: '/',
    //     filename: '[name].ts'
    // },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true,
            watch: ['./src']
        })
    ]
});

// const entry: any = serverConfig.entry;
// entry.app.unshift(
//     'react-hot-loader/patch',
//     'webpack-dev-server/client?' + Url.format({protocol: Config.protocol, host: Config.host + ':' + Config.port}),
//     'webpack/hot/dev-server'
// )

const server = new Server(Webpack(serverConfig), {
    historyApiFallback: true,
    inline: true,
    compress: true,
    hot: true,
    publicPath: '/',
    stats: {
        colors: true,
        cached: true
    }
});

server.listen(Config.port, Config.host, () => {
    const url = Url.format({
        protocol: Config.protocol,
        host: Config.host + ':' + Config.port
    })
    console.log(`ts-starter is running`);
    console.log(`Please open url:`, url);
    Opn(url);
});
