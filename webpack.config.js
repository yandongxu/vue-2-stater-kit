const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = __dirname;
const OUTPUT_PATH = path.resolve(ROOT, 'dist');
const PUBLIC_PATH = '/';
const TEMPLATE_FILE_PATH = 'tpl.ejs';
const TEMPLATE_OUTPUT_PATH = path.resolve(OUTPUT_PATH, 'index.html');

module.exports = {
  context: ROOT,
  devtool: '#cheap-module-eval-source-map',
  
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
        test: /\.js$/,
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

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}