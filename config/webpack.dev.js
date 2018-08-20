const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        use: [ 
          'style-loader', 
          'css-loader', 
          'sass-loader' 
        ], 
        test: /\.scss$/ 
      }
    ]
  },
  devServer: {
    contentBase: '../dist',
    port: 3002
  }
})