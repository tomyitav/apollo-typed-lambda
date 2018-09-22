import {AbstractLogger} from "./AbstractLogger";
import {AbstractSetting} from "../config/AbstractSetting";
import {Injectable} from "injection-js";

@Injectable()
export class Logger extends AbstractLogger{

    constructor(private settings: AbstractSetting) {
        super();
        // this.checkForLogFileDir();
        // this.initializeLogger();
    }

    log(level: string, message: string) {
        console.log(level + ":" + " " + message);
    }

    // private checkForLogFileDir() {
    //     const dir = this.settings.config.log.filedir;
    //
    //     if (!fs.existsSync(dir)) {
    //         fs.mkdirSync(dir);
    //     }
    // }
    //
    // private initializeLogger() {
    //     this._logger = new winston.Logger({
    //         level: 'info',
    //         transports: [
    //             new (winston.transports.Console)({
    //                 colorize: true,
    //             }),
    //             new DailyRotate({
    //                 filename: this.settings.config.log.filename,
    //                 dirname: this.settings.config.log.filedir,
    //                 maxsize: 20971520, //20MB
    //                 maxFiles: 25,
    //                 datePattern: '.dd-MM-yyyy'
    //             })
    //         ]
    //     });
    // }
}