export interface OutputOptions {
    path: string,
    filename: string,
    clean?: boolean
}

export interface BuildPaths {
    entry: string,
    html: string,
    output: OutputOptions
}

export interface EnvVariables {
    mode: BuildMode,
    port: number
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode: BuildMode
}