const path = require('path');

module.exports = {

  mode: 'production',
  entry: path.resolve(__dirname, './src/index.jsx'),

  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },

  resolve: { extensions: ['.js', '.jsx'] },

  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules)/,
        use:
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
