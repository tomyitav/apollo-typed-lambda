import {CarQueryArgs, Car, UpdateCarNameMutationArgs} from "../../interfaces/types";
import {CarsService} from "../../services/cars/CarsService";
import {IAppContext} from "../../interfaces/IAppContext";

const resolveFunctions = {
    Query: {
        car (_, args: CarQueryArgs, context: IAppContext) : Promise<Array<Car>>{
            const carsService: CarsService = context.carsService;
            return carsService.getCars(args.name);
        }
    },

    Mutation: {
        updateCarName(_, args: UpdateCarNameMutationArgs, context: IAppContext): Promise<Car> {
            const carsService: CarsService= context.carsService;
            return carsService.updateCarName(args._id, args.newName);
        }
    },
}

export default resolveFunctions;