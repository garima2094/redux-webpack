const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  mode: 'development',
  output: {
    path:path.resolve(__dirname, "dist"),
    publicPath:''
  } ,

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
         use: ['style-loader', 'css-loader']
      }
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'use plugin',
      filename: 'index.html',
      template: path.join(__dirname, "src", "index.html"),
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,  
        output: { path :  './' }, //This has to be './' and not your output folder.
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        }
      }
    }),
  ],
}