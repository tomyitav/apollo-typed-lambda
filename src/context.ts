import {Injector} from 'injection-js';
import {IAppContext} from '@src/interfaces/IAppContext';
import {CarsService} from '@src/services/cars/CarsService';
import {TrainsService} from '@src/services/trains/TrainsService';

export function getContext(injector: Injector): IAppContext {
	return {
		carsService: injector.get(CarsService),
		trainsService: injector.get(TrainsService)
	};
}
