/**
 * Created by Ouyang on 2018/3/29.
 * Webpack 开发环境配置
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
    const url = Url.format({
        protocol: Config.protocol,
        host: Config.host + ':' + Config.port
    })
    console.log(`ts-starter is running`);
    console.log(`Please open url:`, url);
    Opn(url);
});
