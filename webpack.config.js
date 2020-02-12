const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');


module.exports = {
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { 
        test: /\.html$/, 
        use: [
                {
                    loader: "html-loader", 
                    options: {minimize: true}
                }
             ] 
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env']}
        }
      },

      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader?name=[name].[ext]']
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }

     ]
  },

  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html"}),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"})
      ]
};