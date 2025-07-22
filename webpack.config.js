const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.pack.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080
  }
};