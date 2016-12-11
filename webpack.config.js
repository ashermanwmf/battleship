const webpack   = require('webpack');
const path      = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR   = path.resolve(__dirname, 'src/client/app');

const config = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    APP_DIR + '/Routes.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['babel']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = config;
