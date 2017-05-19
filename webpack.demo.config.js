const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './demo'),
  entry: {
    app: './app.jsx',
  },
  output: {
    path: path.resolve(__dirname, './demo/dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './demo'),
  }
};
