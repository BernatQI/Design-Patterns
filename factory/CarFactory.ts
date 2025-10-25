// ./factory/CarFactory.ts
import { VehicleFactory } from './VehicleFactory';
import { Vehicle } from './Vehicle';
import { Car } from './Car';

export class CarFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}