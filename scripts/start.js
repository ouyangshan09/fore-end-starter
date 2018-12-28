/**
 * 开发环境启动脚本
 *
 * @author Ouyang
*/

const url = require('url');
const config = require('../config/config');
const devConfig = require('../config/webpack.dev');
const chalk = require('chalk');
const opn = require('opn');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

function createCompiler (webpack, config) {
    let compiler;
    try {
        compiler = webpack(config);
    } catch (err) {
        console.log(chalk.red('Failed to compile.'));
        console.log();
        console.log(err.message || err);
        console.log();
        process.exit(1);
    }

    return compiler;
}

const compiler = createCompiler(webpack, devConfig);

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
