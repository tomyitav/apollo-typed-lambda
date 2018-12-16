import {Car} from "../../interfaces/types";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
import {Injectable} from "injection-js";

@Injectable()
export class CarsService {

    private carList: Car[] = [{_id: "1234", name: "sampleCar1"},
                              {_id: "1244", name: "sampleCar2"}];
    constructor(private logger: AbstractLogger) {}

    public getCars(carName?: string): Promise<Array<Car>> {
        this.logger.info('Returning all cars...');
        return new Promise(resolve => {
            let filteredCarsList;
            if(carName) {
                filteredCarsList = this.carList.filter(car => car.name === carName);
                resolve(filteredCarsList);
            }
            else {
                resolve(this.carList);
            }
        });
    }

    public updateCarName(_id: string, newName: string): Promise<Car> {
        return new Promise(resolve => {
            for(let car of this.carList) {
                if(car._id === _id) {
                    car.name = newName;
                    resolve(car);
                    return;
                }
            }
            resolve({});
        })
    }
}