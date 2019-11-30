// webpack.config.js
const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    alias: {
      Redux: path.resolve(__dirname, 'src/redux/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Helpers: path.resolve(__dirname, 'src/helpers/'),
      Constants: path.resolve(__dirname, 'src/constants/'),
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            ignore: ['node_modules'],
          },
        },
      },
    ],
  },
};
