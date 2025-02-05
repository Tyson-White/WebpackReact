import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3333,
        open: true
    }
}