// ./factory/Motorcycle.ts
import { Vehicle } from './Vehicle';

export class Motorcycle implements Vehicle {
    start(): void {
        console.log("🏍️ Motorcycle started");
    }

    stop(): void {
        console.log("🏍️ Motorcycle stopped");
    }

    getVehicleType(): string {
        return "Motorcycle";
    }
}