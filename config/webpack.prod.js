const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../client/public');
const APP_DIR = path.resolve(__dirname, '../client/app');

const config = {
  devtools: 'source-map',
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  target: 'web',
};

module.exports = config;