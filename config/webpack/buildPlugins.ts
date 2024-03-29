import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

import { BuildOptions } from './types'

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths } = options
  const env = dotenv.config().parsed

  const envKeys = env
    ? Object.keys(env).reduce(
        (prev, next) => {
          // eslint-disable-next-line no-param-reassign
          prev[`process.env.${next}`] = JSON.stringify(env[next])

          return prev
        },
        {} as Record<string, string>,
      )
    : {}

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new webpack.DefinePlugin(envKeys),
  ]
}
