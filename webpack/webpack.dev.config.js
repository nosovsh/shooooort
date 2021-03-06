var path = require('path');
var webpack = require('webpack');

var baseDir = path.join(__dirname, '..');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/Components/index'
  ],
  output: {
    path: path.join(baseDir, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVTOOLS__: false,
      __DEBUG__: true
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
