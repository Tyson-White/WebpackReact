import webpack from 'webpack'
import {Configuration} from 'webpack'
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildPaths } from './types/types';

export function buildPlugins(paths: BuildPaths): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({ template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}