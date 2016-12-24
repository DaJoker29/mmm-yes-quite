const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../client/app');
const BASE_DIR = path.resolve(__dirname, '../client');

const config = {
  devtool: '#source-map',
  entry: [
    `${APP_DIR}/index.jsx`,
  ],
  output: {
    path: BASE_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: [
          'babel',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  target: 'web',
};

module.exports = config;