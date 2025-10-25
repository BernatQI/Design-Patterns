import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  start(): void {
    console.log("🚗 Car started");
  }

  stop(): void {
    console.log("🚗 Car stopped");
  }

  getVehicleType(): string {
    return "Car";
  }
}
