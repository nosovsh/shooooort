var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/Components/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVTOOLS__: false
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname + "/src"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" +
        "?includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "./src")) +
        "&includePaths[]=" + path.resolve(__dirname, "./node_modules/breakpoint-sass/stylesheets")},
      { test: /\.(ttf|eot|svg|woff|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  }
};
