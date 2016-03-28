var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr';

module.exports = {
	entry: {
		homepage: ['./public/src/js/entry/homepage.js', hotMiddlewareScript],
		application: ['./public/src/js/entry/application.js', hotMiddlewareScript],
		article: ['./public/src/js/entry/article.js', hotMiddlewareScript]
	},
	output: {
		filename: './public/asset/js/[name].js',
		path: __dirname,
		publicPath: publicPath
	},
	module: {
		loaders:[
			{ 
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.scss', '.jsx']
	},
	devtool: '#source-map',
	plugins: [
		// Webpack 1.0
		new webpack.optimize.OccurenceOrderPlugin(),
		// Webpack 2.0 fixed this mispelling
		// new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}