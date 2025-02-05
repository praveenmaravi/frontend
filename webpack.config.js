const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  // Entry point for the app
  entry: './src/index.js', // Entry point for React (or Vue) app

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Cache busting with content hash
    publicPath: '/',
  },

  // Resolve extensions and alias
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/views/'),
    },
  },

  // Module rules for processing different files
  module: {
    rules: [
      {
        test: /\.jsx?$/, // JavaScript and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/, // Vue.js support (if using Vue.js)
        loader: 'vue-loader',
      },
      {
        test: /\.css$/, // CSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // Optional: for CSS optimization
        ],
      },
      {
        test: /\.scss$/, // SCSS support
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Font files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  // Plugins to handle various tasks like HTML generation, CSS extraction, etc.
  plugins: [
    new CleanWebpackPlugin(), // Clean the dist folder before every build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the provided HTML template
      inject: 'body', // Inject the JS script tag at the end of the body
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Separate CSS file with cache busting
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR for development
  ],

  // Development Server Configuration (For local development)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // For single-page applications (SPA)
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to backend during dev
    },
  },

  // Source maps for debugging in development
  devtool: 'source-map',

  // Optimization for production builds
  optimization: {
    splitChunks: {
      chunks: 'all', // Split vendor code from app code
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },

  // Mode for build (development or production)
  mode: 'development', // Change to 'production' for production build
};
