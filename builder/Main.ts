// ./builder/Main.ts
import { ConcreteComputerBuilder } from './ConcreteComputerBuilder';
import { ComputerDirector } from './ComputerDirector';
import { FluentComputerBuilder } from './FluentComputerBuilder';

function main(): void {
  console.log("=== BUILDER PATTERN DEMO ===\n");

  // 1. Using Director with Builder
  console.log("1. Using Director with predefined configurations:");

  const builder = new ConcreteComputerBuilder();
  const director = new ComputerDirector(builder);

  // Gaming Computer
  console.log("\n🎮 Building Gaming Computer:");
  const gamingPC = director.buildGamingComputer();
  console.log(gamingPC.getSpecs());
  gamingPC.boot();

  // Office Computer
  console.log("\n🏢 Building Office Computer:");
  const officePC = director.buildOfficeComputer();
  console.log(officePC.getSpecs());
  officePC.boot();

  // Workstation Computer
  console.log("\n🛠️ Building Workstation Computer:");
  const workstationPC = director.buildWorkstationComputer();
  console.log(workstationPC.getSpecs());
  workstationPC.boot();

  // 2. Using Builder directly (custom configuration)
  console.log("\n2. Using Builder directly for custom configuration:");

  const customBuilder = new ConcreteComputerBuilder();
  const customPC = customBuilder
    .setCpu("Intel Core i7-13700K")
    .setRam("32GB DDR5")
    .setStorage("1TB NVMe SSD")
    .setGpu("NVIDIA RTX 4070")
    .setPowerSupply("750W 80+ Gold")
    .build();

  console.log("\n🔧 Custom Computer:");
  console.log(customPC.getSpecs());
  customPC.boot();

  // 3. Using Fluent Interface
  console.log("\n3. Using Fluent Interface Builder:");

  const fluentPC = FluentComputerBuilder
    .create()
    .withCpu("AMD Ryzen 7 7700X")
    .withRam("16GB DDR5-5200")
    .withStorage("500GB NVMe SSD")
    .withGpu("AMD RX 7600")
    .withMotherboard("MSI B650 Gaming Plus")
    .withPowerSupply("650W 80+ Bronze")
    .withCooling("Tower Air Cooler")
    .withCase("Mid Tower")
    .build();

  console.log("\n🌊 Fluent Builder Computer:");
  console.log(fluentPC.getSpecs());
  fluentPC.boot();

  // 4. Minimal configuration
  console.log("\n4. Minimal configuration example:");

  const minimalPC = new ConcreteComputerBuilder()
    .setCpu("Intel Pentium Gold")
    .setRam("4GB DDR4")
    .setStorage("120GB SSD")
    .build();

  console.log("\n💡 Minimal Computer:");
  console.log(minimalPC.getSpecs());
  minimalPC.boot();
}

// Execute the demo
main();