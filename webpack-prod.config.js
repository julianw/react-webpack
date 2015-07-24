var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: { myapp: './react/js/app.js' },
  output: {
    path: path.join(__dirname, 'react/build/'),
    publicPath: '/public/javascripts',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    root: path.join(__dirname, "react/js/"),
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader?stage=0&optional=runtime', include: path.join(__dirname, 'react/js/') },
      { extensions: [ 'png', 'ttf', 'eot', 'svg', 'woff', 'woff2' ], test: /\.(png|ttf|eot|svg|woff|woff2)(\?.*)?$/, loader: 'file-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
    ]
  }
};
