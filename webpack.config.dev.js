var path = require('path');
var webpack = require('webpack');
var GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '/client'),
  target: 'web',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    // new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }, {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              compact: false,
              plugins: ['transform-object-assign'],
            },
          }
        ],
        // path.join(__dirname,'/marketplace/test'), path.join(__dirname,'/marketplace/src/services/mock-api.js'),
        exclude: ['/node_modules/', '/server/', '/.spec.js/'],
      }, {
        test: /\.(ttf|eot|woff2?)(\?v=[a-z0-9=\.]+)?$/i,
        use: 'url-loader?limit=5000&name=fonts/[name]-[hash].[ext]'
      }, {
        test: /\.(jpe|jpg|png|svg)(\?.*$|$)/,
        use: 'url-loader?limit=1&name=images/[name].[ext]'
      }, {
        test: /\.(pdf|word)(\?.*$|$)/,
        use: 'url-loader?limit=1&name=documents/[name].[ext]'
      }
    ]
  }
};
