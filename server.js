const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./webpack.config');

const compiler = webpack(config);
// apply Dashboard plugin
compiler.apply(new DashboardPlugin());

const server = new WebpackDevServer(compiler, {
    contentBase: './dist',
    hot: true,
    quiet: true,
    noInfo: false,
    lazy: false,
    // filename: ['app.js', 'app.css'],
    // publicPath: '/assets',
    stats: {
        colors: true
    },
    headers: {
        'X-webpack-dev-server': 'yes'
    }
});

server.listen(5000, 'localhost', () => {
    console.log('READY:', 'http://localhost:5000/');
});
