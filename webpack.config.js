const path = require('path');
const webpack = require('webpack');

module.exports = [{
  name: 'js',
  entry: './js/main.jsx',
  output: { path: './js/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
   }
}];
//   },
//   {
//   name: 'css',
//   entry: {
//     styles: [
//      './styles/main.scss'
//    ]
//  },
//  output: { path: './styles/', filename: 'main.css' },
//  module: {
//      loaders: [
//         {
//          test: /\.scss$/,
//          loader:
//        }
//      ]
//     }
// }
