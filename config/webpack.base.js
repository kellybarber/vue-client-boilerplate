const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        use: [ 'babel-loader' ], 
        test: /\.js$/, 
        exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      filename: './index.html',
      inject: false
    }),
    new CleanWebpackPlugin(
      ['dist'], 
      { root: path.resolve(__dirname, '..') }
    ),
    new Dotenv()
  ],
  resolve: { extensions: [ '*', '.js', '.css', '.scss' ] },
}