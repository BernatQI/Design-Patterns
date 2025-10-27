// ./factory/Main.ts
import { CarFactory } from './CarFactory';
import { MotorcycleFactory } from './MotorcycleFactory';
import { TruckFactory } from './TruckFactory';
import { SimpleVehicleFactory } from './SimpleVehicleFactory';

function main(): void {
  console.log("=== 🏭 Patrón FACTORY METHOD - Sistema de Vehículos ===\n");

  // Usando Factory Method
  console.log("1️⃣ Usando patrón Factory Method:");

  const carFactory = new CarFactory();
  carFactory.operateVehicle();

  const motorcycleFactory = new MotorcycleFactory();
  motorcycleFactory.operateVehicle();

  const truckFactory = new TruckFactory();
  truckFactory.operateVehicle();

  // Usando Simple Factory
  console.log("\n2️⃣ Usando patrón Simple Factory:");

  const vehicleTypes = ['car', 'motorcycle', 'truck'];

  vehicleTypes.forEach(type => {
    try {
      const vehicle = SimpleVehicleFactory.createVehicle(type);
      console.log(`\n--- Creando ${vehicle.getVehicleType()} con Simple Factory ---`);
      vehicle.start();
      vehicle.stop();
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  });

  // Ejemplo de manejo de errores
  console.log("\n3️⃣ Ejemplo de manejo de errores:");
  try {
    SimpleVehicleFactory.createVehicle('airplane');
  } catch (error) {
    console.error(`❌ ${error}`);
  }
}

// Ejecutar el ejemplo
main();