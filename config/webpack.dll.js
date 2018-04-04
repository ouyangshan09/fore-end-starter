/**
 * 第三方移依赖库打包
 * */
const webpack = require('webpack');
const path = require('path');
const config = require('./config');

module.exports = {
    entry: {
        vendor: [
            'classnames',
            'immutable',
            'lodash',
            'moment',
            'redux',
            'react',
            'react-redux',
            'react-router',
            'react-router-dom',
            'react-router-redux'
        ]
    },
    output: {
        path: path.join(config.root, 'lib'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            context: config.root,
            path: path.join(config.lib, '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
};
