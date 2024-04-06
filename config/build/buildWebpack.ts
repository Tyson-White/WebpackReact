import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/types';

export default (options: BuildOptions): webpack.Configuration => {

    const { mode, paths } = options

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        output: paths.output,
        plugins: buildPlugins(paths),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    }
}