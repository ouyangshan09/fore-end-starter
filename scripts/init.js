/**
 * 启动项目初始化脚本
 * 
 * @author Ouyang
*/

process.on('unhandledRejection', err => {
    throw err;
});

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function (
    appPath,
    appName
) {
    
}
