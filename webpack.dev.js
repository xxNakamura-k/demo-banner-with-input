/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
  entry: {
    'bundle': [
      './src/js/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
    openPage: 'index.html'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/page'
    }, {
      from: 'src/js',
      to: 'js/'
    }], {
      copyUnmodified: true
    })
  ]
}];
