var webpack = require('webpack');

module.exports = {
	entry: {
		bundle1: './main1.js',
		bundle2: './main2.js'
	},
	output: {
		filename: './public/asset/js/[name].js'
	},
	module: {
		loaders:[
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'jsx-loader'},
			{ test: /\.scss$/, loader: 'style!css!sass'}
		]
	}
}