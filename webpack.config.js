// webpack.config.js
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", '@babel/preset-env'],
            plugins: [
                [
                  "@babel/plugin-proposal-class-properties",
                  {
                    "loose": true
                  }
                ]
              ]
          }
        }
      }, {
        test: /\.*css$/,
        use: ['style-loader', 'css-loader'],
       },
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};