/**
 * 常用依赖打包
 *
 * @author Ouyang
*/

const config = require('../config/config');
const dllConfig = require('../config/webpack.dll');
const rimraf = require('rimraf');
const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');

const Spinner = ora('building for dll file...');
Spinner.start();

rimraf(config.lib, err => {
    if (err) throw err;
    webpack(dllConfig, (err, status) => {
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
            console.log(chalk.red(`Build dll file failed with errors. \n`));
            process.exit(1);
        }

        console.log(chalk.cyan('Build dll file complete \n'));
    })
})
