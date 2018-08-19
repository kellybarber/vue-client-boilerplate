const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        use: [ 'babel-loader' ], 
        test: /\.js$/, 
        exclude: /node_modules/ 
      },
      { 
        use: [ 
          devMode ? MiniCssExtractPlugin.loader : 'style-loader', 
          'css-loader', 
          'sass-loader' 
        ], 
        test: /\.scss$/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  resolve: { extensions: [ '*', '.js', '.css', '.scss' ] },
  devServer: {
    contentBase: './dist',
    port: 3001
  }
};