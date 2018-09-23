import {AbstractLogger} from "./AbstractLogger";
import {Injectable} from "injection-js";

@Injectable()
export class Logger extends AbstractLogger{

    constructor() {
        super();
    }

    log(level: string, message: string) {
        console.log(level + ":" + " " + message);
    }
}