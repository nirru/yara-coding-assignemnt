'use strict';
const {merge} = require('webpack-merge');

module.exports = merge(require('./webpack.config'), {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [

    ],
  },

  plugins: [

  ],

  devServer: {
    contentBase: './dist',
  },
});