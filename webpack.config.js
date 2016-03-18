var webpack = require('webpack');

module.exports = {
	entry: {
		bundle1: './main1.js',
		bundle2: './main2.js'
	},
	output: {
		filename: './public/javascripts/[name].js'
	}
}