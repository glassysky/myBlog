var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/asset/js/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr';

module.exports = {
	entry: {
		homepage: ['./public/src/js/entry/homepage.js', hotMiddlewareScript],
		application: ['./public/src/js/entry/application.js', hotMiddlewareScript],
		article: ['./public/src/js/entry/article.js', hotMiddlewareScript]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "public", "asset", "js"),
		publicPath: publicPath
	},
	devtool: '#source-map',
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
	plugins: [
		// Webpack 1.0
		new webpack.optimize.OccurenceOrderPlugin(),
		// Webpack 2.0 fixed this mispelling
		// new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.json', '.scss', '.jsx']
	}
}