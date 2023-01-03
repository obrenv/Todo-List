const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  devtool: 'inline-source-map',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9000
  },


  
};