
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'production',
    entry: {
        'index': './src/tool/index.ts',
        'getUrlParam': './src/tool/getUrlParam.ts',
        'loadJs': './src/tool/loadJs.ts',
        'myLocalStorage': './src/tool/myLocalStorage.ts',
    },
    output: {
        path: path.join(__dirname,"/lib/tool"),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]',
    },
})