import {CarsService} from '../services/cars/CarsService'
import {TrainsService} from '../services/trains/TrainsService'

export interface IAppContext {
  carsService: CarsService
  trainsService: TrainsService
}
