const path = require('path');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

module.exports = {

  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },

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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
};
