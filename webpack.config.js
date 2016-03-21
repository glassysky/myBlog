var webpack = require('webpack');

module.exports = {
	entry: {
		homepage: './public/src/js/entry/homepage.js',
		application: './public/src/js/entry/application.js'
	},
	output: {
		filename: './public/asset/js/[name].js'
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
	}
}