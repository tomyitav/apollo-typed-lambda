import {Injector} from 'injection-js';
import {IAppContext} from './interfaces/IAppContext';
import {CarsService} from './services/cars/CarsService';
import {TrainsService} from './services/trains/TrainsService';

export function getContext(injector: Injector): IAppContext {
	return {
		carsService: injector.get(CarsService),
		trainsService: injector.get(TrainsService)
	};
}
