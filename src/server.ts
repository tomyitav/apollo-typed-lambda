import {ApolloServer} from 'apollo-server-lambda';
import schema from "./graphql/schema/schema";
import {AbstractLogger} from "./core/logger/AbstractLogger";
import {AbstractSetting} from "./core/config/AbstractSetting";
import {AbstractCarsModel} from "./model/cars/AbstractCarsModel";
import {AbstractTrainsModel} from "./model/trains/AbstractTrainsModel";
import {AppContext} from "./interfaces/AppContext";
import {Injectable, Injector} from "injection-js";

@Injectable()
export class Server {

    private apolloServer: ApolloServer;
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
        this.graphqlPort = parseInt(this.setting.config.server.port);
        this.createApolloServer();
    }

    public getApolloInstance(): ApolloServer {
        return this.apolloServer;
    }

    private getAppContext(injector: Injector): AppContext {
        return {
            carsModel: injector.get(AbstractCarsModel),
            trainsModel: injector.get(AbstractTrainsModel),
        }
    }

    private createApolloServer() {
        this.apolloServer = new ApolloServer({
            schema,
            context: this.context
        });
    }
}