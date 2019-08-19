const path = require('path');
const merge = require('webpack-merge');
const Fiber = require('fibers');

const common = require('./webpack.config.common');
const root = path.resolve(__dirname, '../..');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts[x]?$/,
        options: {
          compilerOptions: {
            sourceMap: true,
          },
          configFile: 'tsconfig.json',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              fiber: Fiber,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(root, 'dist'),
    port: 3000,
    historyApiFallback: true,
  }
});
