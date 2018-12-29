/**
 * 生产环境打包脚本
 *
 * @author Ouyang
*/

const url = require('url');
const config = require('../config/config');
const prodConfig = require('../config/webpack.prod');
const chalk = require('chalk');
const ora = require('ora');
const rimraf = require('rimraf');
const webpack = require('webpack');

const Spinner = ora('building for project...');
Spinner.start();

function createCompiler(webpack, config) {
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

rimraf(config.dist, err => {
    if (err) throw err;
    webpack(prodConfig, (err, status) => {
        Spinner.stop();
        if (err) throw err;
        process.stdout.write(status.toString({
            colors: true,
            modules: true,
            children: true,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (status.hasErrors()) {
            console.log(chalk.red(`Build project failed with errors. \n`));
            process.exit(1);
        }

        console.log(chalk.cyan('Build project complete \n'));
    })
})
