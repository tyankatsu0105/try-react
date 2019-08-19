const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dotenv = require('../env');

const root = path.resolve(__dirname, '../..');
const env = dotenv();

module.exports = {
  context: path.resolve(root, 'src'),
  entry: {
    app: './index.tsx',
  },
  output: {
    path: path.resolve(root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        use: [{ loader: 'html-loader', options: { minimize: true } }],
        test: /\.html$/,
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024,
              name: path.resolve(root, 'src', 'assets', '[name].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(graphql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.html', 'graphql'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env),
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(root, 'src', 'assets'),
        to: 'assets',
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 200000,
    },
    runtimeChunk: true,
  },
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
