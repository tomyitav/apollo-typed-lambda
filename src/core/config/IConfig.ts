export interface IConfig {
    server: ServerConfig,
    log: LoggerConfig
}

interface ServerConfig {
    port: string,
}

interface LoggerConfig {
    filename: string,
    filedir: string
}