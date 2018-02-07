import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'public/javascripts/main')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'public/javascripts/bundle.js'   
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: 'app.js', to: './' },
      { from: 'views', to: './views' },
      { from: 'routes', to: './routes' },
      { from: 'public/images', to: './public/images' },
      { from: 'public/stylesheets/style.css', to: './public/stylesheets/style.css' },
      { from: 'public/stylesheets/style.css.map', to: './public/stylesheets/style.css.map' },
      { from: 'bin', to: './bin' }
  ])
  ],
  module: {
    // TODO: configure loaders for css, images, etc.
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
    ]
  }
}