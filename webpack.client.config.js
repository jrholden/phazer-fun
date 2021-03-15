const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const entry = path.join(__dirname, 'src/client/index');
const deployPath = path.resolve(__dirname, 'dist/public')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: entry,
    output: {
        filename: '[name].bundle.js',
        path: deployPath,
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'PhaserFunBB',
        }),
      ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};
