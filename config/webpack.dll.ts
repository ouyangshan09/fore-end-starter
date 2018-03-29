/**
 * Created by Ouyang on 2018/3/29.
 * webpack打包dll模块配置
 * @author Ouyang
 */
import Config from './config';
import Webpack, { Configuration } from 'webpack';
import Path from 'path';
import Rm from 'rimraf';
import Ora from 'ora';
import Chalk from 'chalk';

const Spinner = Ora('building for dll file...');
Spinner.start();

const dllConfig: Configuration = {
    entry: {
        vendor: ['lodash', 'moment']
    },
    output: {
        path: Path.join(Config.root, 'lib'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new Webpack.DllPlugin({
            context: Config.root,
            path: Path.join(Config.lib, '[name]-manifest.json'),
            name: '[name]_library'
        })
    ],
    mode: 'production'
};

Rm(Config.lib, err => {
    if (err) throw err;
    Webpack(dllConfig, (err, status) => {
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
            console.log(Chalk.red(`Build dll file failed with errors. \n`));
            process.exit(1);
        }

        console.log(Chalk.cyan('Build dll file complete \n'));
        // console.log(Chalk.yellow(''))
    });
});
