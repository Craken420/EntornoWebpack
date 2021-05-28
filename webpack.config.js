var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hola Mundo'
      })
    ]
};