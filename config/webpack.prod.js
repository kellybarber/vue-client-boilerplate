 const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      { 
        use: [ 
          { loader: MiniCssExtractPlugin.loader }, 
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
  plugins: [ 
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ]
})