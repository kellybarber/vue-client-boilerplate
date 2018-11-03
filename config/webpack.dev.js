const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader'
        ],
        test: /\.css$/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 3000,
  }
})