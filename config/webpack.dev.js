const webpack = require('webpack');
const path = require('path');

// const BUILD_DIR = path.resolve(__dirname, '../client/public');
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
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  target: 'web',
};

module.exports = config;