const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: path.join(__dirname, 'src', 'pages', 'index.jsx'),
    css: path.join(__dirname, 'src', 'js', 'styles.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    charset: true,
  },
  devServer: {
    hot: true,
    liveReload: true,
    host: '0.0.0.0',
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'css'],
      template: path.join(__dirname, 'src', 'html', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/marked'),
        ],
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ya?ml)$/i,
        use: {
          loader: 'js-yaml-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
          esModule: false,
        },
      },
    ],
  },
};
