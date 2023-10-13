const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');



module.exports = {
    mode:'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
    },
    plugins: [
        new ESLintPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{targets: 'defaults'}]]
                    }
                }
            }
        ]
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        // clean: true,
    }
}