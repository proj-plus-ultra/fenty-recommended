var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
