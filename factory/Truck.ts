// ./factory/Truck.ts
import { Vehicle } from './Vehicle';

export class Truck implements Vehicle {
    start(): void {
        console.log("🚛 Truck started");
    }

    stop(): void {
        console.log("🚛 Truck stopped");
    }

    getVehicleType(): string {
        return "Truck";
    }
}