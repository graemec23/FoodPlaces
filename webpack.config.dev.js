const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '/client/public'),
  target: 'web',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/App.tsx'
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
    extensions: [".ts", ".tsx", ".js", ".json"],
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
      },

      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              compact: false,
              // plugins: ['transform-object-assign'],
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
      },
      {
        // make all files ending in .json5 use the `json5-loader`
        test: /\.json$/,
        use: 'json5-loader',
        type: 'javascript/auto'
      },
    ]
  }
};
