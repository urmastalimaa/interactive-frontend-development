const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app.js': './src/index.js',
    'app.css': './css/index.css'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'public')
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader') }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    })
  ]
};
