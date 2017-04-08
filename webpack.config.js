module.exports = {
  context: __dirname,
  entry: './public/js/app.js',
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  watch: true
}