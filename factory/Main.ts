// ./factory/Main.ts
import { CarFactory } from './CarFactory';
import { MotorcycleFactory } from './MotorcycleFactory';
import { TruckFactory } from './TruckFactory';
import { SimpleVehicleFactory } from './SimpleVehicleFactory';

function main(): void {
  console.log("=== 🏭 FACTORY METHOD Pattern - Vehicle System ===\n");

  // Using Factory Method
  console.log("1️⃣ Using Factory Method pattern:");

  const carFactory = new CarFactory();
  carFactory.operateVehicle();

  const motorcycleFactory = new MotorcycleFactory();
  motorcycleFactory.operateVehicle();

  const truckFactory = new TruckFactory();
  truckFactory.operateVehicle();

  // Using Simple Factory
  console.log("\n2️⃣ Using Simple Factory pattern:");

  const vehicleTypes = ['car', 'motorcycle', 'truck'];

  vehicleTypes.forEach(type => {
    try {
      const vehicle = SimpleVehicleFactory.createVehicle(type);
      console.log(`\n--- Creating ${vehicle.getVehicleType()} with Simple Factory ---`);
      vehicle.start();
      vehicle.stop();
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  });

  // Error handling example
  console.log("\n3️⃣ Error handling example:");
  try {
    SimpleVehicleFactory.createVehicle('airplane');
  } catch (error) {
    console.error(`❌ ${error}`);
  }
}

// Execute the example
main();