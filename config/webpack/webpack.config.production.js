const path = require('path');
const merge = require('webpack-merge');
const Fiber = require('fibers');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.config.common');
const root = path.resolve(__dirname, '../..');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: './[name].css' })],
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts[x]?$/,
        options: {
          configFile: 'tsconfig.json',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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
});
