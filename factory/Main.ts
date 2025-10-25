// ./factory/Main.ts
import { CarFactory } from './CarFactory';
import { MotorcycleFactory } from './MotorcycleFactory';
import { TruckFactory } from './TruckFactory';
import { SimpleVehicleFactory } from './SimpleVehicleFactory';

function main(): void {
  console.log("=== FACTORY METHOD PATTERN DEMO ===\n");

  // Usando Factory Method
  console.log("1. Using Factory Method Pattern:");

  const carFactory = new CarFactory();
  carFactory.operateVehicle();

  const motorcycleFactory = new MotorcycleFactory();
  motorcycleFactory.operateVehicle();

  const truckFactory = new TruckFactory();
  truckFactory.operateVehicle();

  // Usando Simple Factory
  console.log("\n2. Using Simple Factory Pattern:");

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

  // Ejemplo de error handling
  console.log("\n3. Error handling example:");
  try {
    SimpleVehicleFactory.createVehicle('airplane');
  } catch (error) {
    console.error(`❌ ${error}`);
  }
}

// Ejecutar el demo
main();