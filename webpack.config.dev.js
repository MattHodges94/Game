import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'public/javascripts/main')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    publicPath: '/public/javascripts',
    filename: 'bundle.js'   
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
    ]
  }
}