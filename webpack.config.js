const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'lib');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'index.js',
        library: "adjustable-react-ui-button"
      },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [nodeModulesPath],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['react', 'es2015', 'stage-2'] },
          }]
        },
        { test: /\.css$/,
          use: ["style-loader", 'css-loader']
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    watch: true,
  };
