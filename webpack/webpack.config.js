var path = require('path');
var webpack = require('webpack');

var baseDir = path.join(__dirname, '..');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/Components/index.js',
  ],
  output: {
    path: path.join(baseDir, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    chunkFilename: "[id].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.DefinePlugin({
      __DEVTOOLS__: false,
      __DEBUG__: false
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(baseDir, "src")
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(baseDir, 'src')
      },
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/, loader: "style!css!sass" +
        "?includePaths[]=" + encodeURIComponent(path.resolve(baseDir, "src")) +
        "&includePaths[]=" + encodeURIComponent(path.resolve(baseDir, "node_modules/breakpoint-sass/stylesheets"))
      },
      { test: /\.(ttf|eot|svg|woff|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  }
};
