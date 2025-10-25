// ./factory/VehicleFactory.ts
import { Vehicle } from './Vehicle';

export abstract class VehicleFactory {
    abstract createVehicle(): Vehicle;

    public operateVehicle(): void {
        const vehicle = this.createVehicle();
        console.log(`\n--- Operating ${vehicle.getVehicleType()} ---`);
        vehicle.start();
        console.log(`${vehicle.getVehicleType()} is running...`);
        vehicle.stop();
    }
}