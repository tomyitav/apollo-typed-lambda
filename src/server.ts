import {ApolloServer} from 'apollo-server-lambda'
import schema from './graphql/schema/schema'
import {AbstractLogger} from './core/logger/AbstractLogger'
import {AbstractSetting} from './core/config/AbstractSetting'
import {IAppContext} from './interfaces/IAppContext'
import {Injectable, Injector} from 'injection-js'
import {getContext} from './context'

@Injectable()
export class Server {
  private apolloServer: ApolloServer
  private graphqlPort: number
  private context: IAppContext
  constructor(private logger: AbstractLogger, private setting: AbstractSetting) {}

  public initContext(injector: Injector) {
    this.context = getContext(injector)
  }

  public initServer(injector: Injector) {
    this.initContext(injector)
    this.logger.info('Starting graphql server...')
    this.graphqlPort = parseInt(this.setting.config.server.port, 10)
    this.createApolloServer()
  }

  public getApolloInstance(): ApolloServer {
    return this.apolloServer
  }

  private createApolloServer() {
    const graphqlRoutePrefix = process.env.IS_OFFLINE ? '' : '/dev'
    this.apolloServer = new ApolloServer({
      schema,
      context: this.context,
      playground: {
        endpoint: graphqlRoutePrefix + '/graphql'
      }
    })
  }
}
