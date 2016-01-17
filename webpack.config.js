module.exports = {
  entry: './src/client/index.es6',
  output: {
    path: './public/bundle',
    filename: 'app.js',
    pathinfo: true
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.es6']
  },
  module: {
    preLoaders: [
      {test: /\.es6$/, loader: 'eslint-loader'}
    ],
    loaders: [
      {test: /\.es6$/, loader: 'babel?cacheDirectory'},
      {test: /\.css$/, loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'}
    ]
  },
  postcss: [
    require('postcss-import'),
    require('postcss-mixins')(),
    require('postcss-font-magician')(),
    require('postcss-cssnext')()
  ]
};
