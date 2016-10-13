const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = __dirname;
const OUTPUT_PATH = path.resolve(ROOT, 'dist');
const PUBLIC_PATH = '/';
const TEMPLATE_FILE_PATH = 'tpl.ejs';
const TEMPLATE_OUTPUT_PATH = path.resolve(OUTPUT_PATH, 'index.html');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: ROOT,
  devtool: isProd ? '#source-map' : '#cheap-module-eval-source-map',

  entry: {
    app: './src/main.js'
  },

  output: {
    filename: '[name].js',
    path: OUTPUT_PATH,
    publicPath: PUBLIC_PATH
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(ROOT, 'src')
        ],
        loader: 'babel'
      },
      {
        test: /\.vue$/,
        include: [
          path.resolve(ROOT, 'src')
        ],
        loader: 'vue'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),

    new HtmlWebpackPlugin({
        template: TEMPLATE_FILE_PATH,
        filename: TEMPLATE_OUTPUT_PATH,
        inject: 'body',
        hash: true,
        title: 'Code Spliting'
    }),

    new webpack.optimize.DedupePlugin(),

    // optimize module ids by occurence count
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
