import {QueryTrainArgs, Train} from '../../interfaces/types'
import {TrainsService} from '../../services/trains/TrainsService'
import {IAppContext} from '../../interfaces/IAppContext'

const resolveFunctions = {
  Query: {
    train(_, args: QueryTrainArgs, context: IAppContext): Train[] {
      const trainsModel: TrainsService = context.trainsService

      return trainsModel.getTrains(args.name)
    }
  }
}

export default resolveFunctions
