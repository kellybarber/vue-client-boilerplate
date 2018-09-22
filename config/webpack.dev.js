const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const Dotenv = require('dotenv-webpack')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      { 
        use: [ 
          { loader: 'style-loader' }, 
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          } 
        ], 
        test: /\.css$/ 
      }
    ]
  },
  plugins: [ new Dotenv() ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 3000,
  }
})