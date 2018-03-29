/**
 * Created by Ouyang on 2018/3/29.
 * 开发环境配置
 * @author Ouyang
 */
import Webpack from 'webpack';
import Server from 'webpack-dev-server';
import WebpackMerge from 'webpack-merge';
import DefaultConfig from './webpack.default';
import Config from './config';
import Opn from 'opn';
import Url from 'url';

const serverConfig = WebpackMerge(DefaultConfig, {
    mode: 'development',
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NamedModulesPlugin()
    ]
});

const server = new Server(Webpack(serverConfig), {
    historyApiFallback: true,
    compress: true,
    hot: true,
    publicPath: '/',
    stats: {
        colors: true,
        cached: true
    }
});

server.listen(Config.port, Config.host, () => {
    console.log(`ts-starter is running`);
    Opn(Url.format({
        protocol: Config.protocol,
        port: Config.port,
        host: Config.host
    }));
});
