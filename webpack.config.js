const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //   target: 'node',
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.(tsx)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, 'tsconfig.json'),
      }),
    ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: './index.html',
    }),
  ],
};
