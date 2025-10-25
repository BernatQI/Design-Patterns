// ./factory/MotorcycleFactory.ts
import { VehicleFactory } from './VehicleFactory';
import { Vehicle } from './Vehicle';
import { Motorcycle } from './Motorcycle';

export class MotorcycleFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Motorcycle();
    }
}