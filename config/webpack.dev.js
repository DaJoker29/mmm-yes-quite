const webpack = require('webpack');
const path = require('path');

// const BUILD_DIR = path.resolve(__dirname, '../client/public');
const APP_DIR = path.resolve(__dirname, '../client/app');

const config = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    `${APP_DIR}/index.jsx`,
  ],
  output: {
    path: '/',
    publicPath: 'http://localhost:5679/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: [
          'react-hot',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  target: 'web',
};

module.exports = config;