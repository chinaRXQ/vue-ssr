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
const ExtractPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const { VueLoaderPlugin } = require('vue-loader');

const isDev = process.env.NODE_ENV === 'development';

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTTMLPlugin(),
    new VueLoaderPlugin()
]

const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    hot: true
};

let config;

if (isDev) {
    config = merge(baseConfig, {
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
       plugins: defaultPlugins.concat([
           new webpack.HotModuleReplacementPlugin(),
           new webpack.NodeEnvironmentPlugin()
       ])
    });
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: ExtractPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('styles.[hash:8].css')
        ]),
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true
        }
    });
}

module.exports = config;

