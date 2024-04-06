import webpack from 'webpack';
import path from 'path';
import 'webpack-dev-server';

import buildWebpack from './config/build/buildWebpack';
import { BuildPaths, EnvVariables } from './config/build/types/types';



export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'script/[name].[contenthash:8].js',
        },
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port,
        mode: env.mode,
        paths
    })

    return config
}