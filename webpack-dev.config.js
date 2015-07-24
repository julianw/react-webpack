var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  debug: true,
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './react/js/app.js',
  ],
  output: {
    path: path.join(__dirname, 'react/build/'),
    filename: 'app.dev.js',
    publicPath: 'http://localhost:5000/',
  },
  resolve: {
    root: path.join(__dirname, "react/js/"),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'react-hot!babel-loader?stage=0&optional=runtime', include: path.join(__dirname, 'react/js/') },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: 'style!css' },
      { extensions: [ 'png', 'ttf', 'eot', 'svg', 'woff', 'woff2' ], test: /\.(png|ttf|eot|svg|woff|woff2)(\?.*)?$/, loader: 'file-loader' },
    ]
  }
};
