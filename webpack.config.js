/*jshint esversion: 6*/
const webpack = require('webpack');
const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageWebpackLoader = require('')
// const CopyWebpackPlugin = require('copy-webpack-plugin');
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,

				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			},

			{
				test: /\.(gif|png|jpe?g|svg)$/,
			// 	loader: ['file-loader?name=./images/[name].[hash][ext]',
			// 						'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
			// },

			loader: 'file-loader',
			options: {
				name: './images/[name].[hash][ext]'
			}
		},

		{
				test:/\.html$/,
				loader: 'html-loader',
					options: {
						minimize: true
					}

		}
		]
	},

	plugins: [new UglifyJSPlugin(),
		        new ExtractTextPlugin('style.css'),
						new HtmlWebpackPlugin({
							title: 'Darkcaster',
							filename: 'index.html',
							template: './src/index.html'
						})]
						// new CopyWebpackPlugin([{
						// 	from: './src/images',
						// 	to: './images'
						// }])]
};
