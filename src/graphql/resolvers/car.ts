import {QueryCarArgs, Car, MutationUpdateCarNameArgs} from '../../interfaces/types'
import {CarsService} from '../../services/cars/CarsService'
import {IAppContext} from '../../interfaces/IAppContext'

const resolveFunctions = {
  Query: {
    car(_, args: QueryCarArgs, context: IAppContext): Promise<Car[]> {
      const carsService: CarsService = context.carsService

      return carsService.getCars(args.name)
    }
  },

  Mutation: {
    updateCarName(_, args: MutationUpdateCarNameArgs, context: IAppContext): Promise<Car> {
      const carsService: CarsService = context.carsService

      return carsService.updateCarName(args._id, args.newName)
    }
  }
}

export default resolveFunctions
