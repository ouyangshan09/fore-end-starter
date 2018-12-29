/**
 * 常用依赖打包，加快编译速度
 *
 * @author Ouyang
*/

const config = require('./config');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-css-modules',
            'react-redux',
            'react-router',
            'react-router-dom',
            'redux',
            'redux-actions',
        ]
    },
    output: {
        path: config.lib,
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            context: config.root,
            path: path.join(config.lib, '[name]-manifest.json'),
            name: '[name]_library'
        })
    ],
    mode: 'development'
};
