/**
 * 启动项目初始化脚本
 * 
 * @author Ouyang
*/
const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const os = require('os');

process.on('unhandledRejection', err => {
    throw err;
});

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function checkAppName (name) {
    //
}

module.exports = function (
    name,
    verbose,
    template
) {
    const root = path.resolve(name);
    const appName = path.basename(root);

    checkAppName(appName);
    fs.ensureDirSync(name);

    console.log(`Creating a new React Project in ${chalk.green(root)}.`);
    console.log();

    const packageJson = {
        name: appName,
        version: '0.1.0',
        private: true
    };
    fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os.EOL);

    // 命令行目录
    const originalDirectory = process.cwd();
    // 改变工作目录
    process.chdir(root);
}
