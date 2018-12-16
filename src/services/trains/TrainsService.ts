import {Train} from "../../interfaces/types";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
import {Injectable} from "injection-js";

@Injectable()
export class TrainsService {

    constructor(private logger: AbstractLogger) {}

    public getTrains(name?: string): Array<Train> {
        this.logger.info('Returning all trains...');
        return [{
            _id: "1234",
            name: name || "sampleTrain",
        }];
    }
}