const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/js/bundle.js'
    },
    devtool: 'source-map',
    module: {
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    devServer: {
        index: 'dist/index.html',
        openPage: 'dist/index.html',
        open: true
    }
};

module.exports = config;
