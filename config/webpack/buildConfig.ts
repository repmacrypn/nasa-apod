import { Configuration } from 'webpack'

import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { BuildOptions } from './types'

export function buildConfig(options: BuildOptions): Configuration {
  const { mode, isDev, paths } = options

  return {
    mode,
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: {
      main: paths.entry,
    },
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
