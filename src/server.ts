import * as express from "express";
import {graphiqlExpress, graphqlExpress} from "graphql-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import {printSchema} from "graphql/utilities/schemaPrinter";
import schema from "./graphql/schema/schema";
import {AbstractLogger} from "./core/logger/AbstractLogger";
import {Express} from "express-serve-static-core";
import {AbstractSetting} from "./core/config/AbstractSetting";
import {AbstractCarsModel} from "./model/cars/AbstractCarsModel";
import {AbstractTrainsModel} from "./model/trains/AbstractTrainsModel";
import {AppContext} from "./interfaces/AppContext";
import {Injectable, Injector} from "injection-js";

@Injectable()
export class Server {

    private express: Express;
    private graphqlPort: number;
    private context: AppContext;
    constructor(private logger: AbstractLogger, private setting: AbstractSetting) {

    }

    public initContext(injector: Injector) {
        this.context = this.getAppContext(injector);
    }

    public initServer(injector: Injector) {
        this.initContext(injector);
        this.logger.info('Starting graphql server...');
        this.graphqlPort = this.setting.config.server.port;
        this.express = express();
        this.initRoutes();
    }

    public getExpressInstance(): Express {
        return this.express
    }

    private getAppContext(injector: Injector): AppContext {
        return {
            carsModel: injector.get(AbstractCarsModel),
            trainsModel: injector.get(AbstractTrainsModel),
        }
    }

    private initRoutes() {
        this.express.use(cors());
        this.express.use('/graphql', bodyParser.json(), graphqlExpress({
            schema,
            context: this.context
        }));

        this.express.use('/graphiql', graphiqlExpress({
            endpointURL: '/graphql'
        }));

        this.express.use('/schema', (req, res) => {
            res.set('Content-Type', 'text/plain');
            res.send(printSchema(schema));
        });
    }

    public start() {
        this.express.listen(this.graphqlPort);
    }
}