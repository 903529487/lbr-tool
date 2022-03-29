const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'Testfile', // 库名
            type: 'umd', // 允许导出的库可以在CommonJS/AMD的规范下使用，也可以作为全局变量使用
            export: 'default' // 默认是undefined，不能是空字符串[打包会报错]
        }
    },
};