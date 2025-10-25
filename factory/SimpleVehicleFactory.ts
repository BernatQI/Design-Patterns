// ./factory/SimpleVehicleFactory.ts
import { Vehicle } from './Vehicle';
import { Car } from './Car';
import { Motorcycle } from './Motorcycle';
import { Truck } from './Truck';

export class SimpleVehicleFactory {
    static createVehicle(type: string): Vehicle {
        switch (type.toLowerCase()) {
            case 'car':
                return new Car();
            case 'motorcycle':
                return new Motorcycle();
            case 'truck':
                return new Truck();
            default:
                throw new Error(`Vehicle type "${type}" not supported`);
        }
    }
}