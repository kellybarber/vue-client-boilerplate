const merge = require('webpack-merge')
const { EnvironmentPlugin } = require('webpack')
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
          MiniCssExtractPlugin.loader,
          'vue-style-loader',
          'css-loader'
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
    new EnvironmentPlugin(['GITHUB_TOKEN'])
  ]
})