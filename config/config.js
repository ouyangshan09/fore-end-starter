/**
 * 项目配置
 * 
 * @author Ouyang
*/

const path = require('path');

const root = path.resolve(__dirname, '../');

module.exports = {
    root: root,
    src: path.join(root, 'src'),
    lib: path.join(root, 'lib'),
    dist: path.join(root, 'dest'),
    appBoot: path.join(root, 'src', 'index.tsx'),
    appHtml: path.join(root, 'src', 'index.html'),
    polyfill: path.join(root, 'config', 'prolyfill.js'),
    appTsConfig: path.join(root, 'tsconfig.json'),
    title: 'reactts-starter',
    port: 80,
    protocol: 'http',
    host: 'starter.oy.ecaicn.com'
}
