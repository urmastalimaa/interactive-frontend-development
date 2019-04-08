const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    'app.js': './src/index.js'
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
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "last 5 Chrome versions, last 5 Firefox versions"
              }],
              "@babel/react"
            ],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
