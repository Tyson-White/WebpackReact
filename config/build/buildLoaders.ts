import { ModuleOptions } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(): ModuleOptions['rules'] {

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        styleLoader,
        tsLoader
    ]
}