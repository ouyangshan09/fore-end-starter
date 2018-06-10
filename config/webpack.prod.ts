/**
 * Webpack 生产环境配置
 * @author Ouyang
*/
import Webpack, { Configuration } from 'webpack';
import WebpackMerge from 'webpack-merge';
import Config from './config';
import DefaultConfig from './webpack.default';
import Path from 'path';
import Rm from 'rimraf';
import Ora from 'ora';
import Chalk from 'chalk';

const Spinner = Ora(`building for project code to: ${Config.dist}`);
Spinner.start();

const prodConfig: Configuration = WebpackMerge(DefaultConfig, {
    mode: 'production',
    entry: {
        app: [Path.join(Config.src, 'index.ts')]
    },
    output: {
        publicPath: '/',
        path: Config.dist,
        filename: '[name].[hash].ts',
        chunkFilename: '[id].[chunkhash].chunk.ts'
    }
});

Rm(Config.dist, err => {
    if (err) throw err;
    Webpack(prodConfig, (err, status) => {
        Spinner.stop();
        if (err) throw err;
        process.stdout.write(status.toString({
            colors: true,
            modules: true,
            children: true,
            chunkModules: true,
            env: true,
            version: true,
            performance: true,
            entrypoints: true
        }) + '\n\n');

        if (status.hasErrors()) {
            console.log(Chalk.red(`Build Project failed with errors. \n`));
            process.exit(1);
        }

        console.log(Chalk.cyan(`Build Project file complute \n`));
    })
})
