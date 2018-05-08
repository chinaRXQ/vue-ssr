/**
 * Created by hp on 2018/5/4.
 */
/**
 * Created by hp on 2018/5/3.
 */
/**
 * Created by hp on 2018/4/28.
 */
const path = require('path');
const HTTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const { VueLoaderPlugin } = require('vue-loader');

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTTMLPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new VueLoaderPlugin()
]

const devServer = {
  port: 8888,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
};

let config;

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          // {
          //     loader: 'css-loader',
          //     options: {
          //         module: true,
          //         localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
          //     }
          // },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NodeEnvironmentPlugin()
  ])
});
module.exports = config;

