const webpack = require('webpack');

const baseConfig = {
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};

const config = [
    {
        ...baseConfig,
        output: {
            libraryTarget: 'commonjs2',
            path: __dirname,
            filename: '[name].js'
        },
        entry: {
            demo: './index.js',
        },
    },
];

module.exports = config;
