/**
 * 开发环境启动脚本
 *
 * @author Ouyang
*/

const url = require('url');
const config = require('../config/config');
const devConfig = require('../config/webpack.dev');
const opn = require('opn');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(devConfig, (err, stats) => {
    if (err || stats.hasErrors() || stats.hasWarnings()) {
        process.exit(1);
    } else {
        process.exit(0);
    }
})

const webpackDevServer = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    inline: true,
    compress: true,
    hot: true,
    publicPath: '/',
    stats: {
        colors: true,
        cached: true
    },
    disableHostCheck: true,
});

webpackDevServer.listen(config.port, config.host, (err) => {
    if (err) {
        return console.log('dev server err:', err);
    }
    const path = url.format({
        protocol: config.protocol,
        host: config.host + ':' + config.port
    });
    console.log(`ts-starter is running`);
    console.log(`Please open url:`, path);
    opn(path);
})
