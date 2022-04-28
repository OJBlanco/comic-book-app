/* eslint-disable import/order */
/* eslint-disable node/no-unpublished-require */
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv')
const webpack = require('webpack')

const alias = require('./modules.aliases.ts')

const libraryName = 'app.min'

/**
 * @param {any} state State
 * @returns {any} config
 */
module.exports = state => {
  const outputFile = libraryName + '.js'
  let pathEnv = './.env.prod'

  switch (state.NODE_ENV) {
    case 'dev':
      pathEnv = './.env.dev'
      break
    case 'st':
      pathEnv = './.env.st'
      break
    case 'prod':
      pathEnv = './.env.prod'
      break
    default:
      pathEnv = './.env.dev'
      break
  }

  const env = dotenv.config({
    path: pathEnv,
  }).parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    output: {
      publicPath: '/',
      path: __dirname + '/dist',
      filename: outputFile,
      umdNamedDefine: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: __dirname + '/dist/index.html',
        inject: false,
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/style.css',
        chunkFilename: '[name].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'awesome-typescript-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-runtime',
              ],
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            },
          },
        },
        {
          test: /\.(scss|css|sass)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve(__dirname, 'src')],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias,
    },
  }
}
