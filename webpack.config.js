const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const jsRules = {
    test: /\.js$/,
    exclude : /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
    }
}

const tsRules = {
    test:  /\.tsx$/,
    exclude : /node_modules/,
    use: {
        loader: 'ts-loader',
    }
}

module.exports = {
    output: {
        filename: 'app.[contenthash].js',
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
        rules: [
            tsRules
        ]
    },
    entry: './src/index.tsx',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack 101',
            template: './src/index.html'
        }),
    ]
}