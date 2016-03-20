var webpack = require('webpack');

module.exports = {
	entry: {
		bundle1: './homepage.js',
		bundle2: './main2.js'
	},
	output: {
		filename: './public/asset/js/[name].js'
	},
	module: {
		loaders:[
			{ 
				test: /\.jsx]?$/, 
				exclude: [/node_modules/],
				loader: 'babel',
				query: ['react', 'es2015']
			},
			{ test: /\.scss$/, loader: 'style!css!sass'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.scss', '.jsx']
	}
}