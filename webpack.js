// webpack.config.js
const path = require('path');

module.exports = {
  entry: './index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
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
