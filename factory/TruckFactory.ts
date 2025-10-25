// ./factory/TruckFactory.ts
import { VehicleFactory } from './VehicleFactory';
import { Vehicle } from './Vehicle';
import { Truck } from './Truck';

export class TruckFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Truck();
    }
}