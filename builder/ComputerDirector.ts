// ./builder/ComputerDirector.ts
import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class ComputerDirector {
    private builder: ComputerBuilder;

    constructor(builder: ComputerBuilder) {
        this.builder = builder;
    }

    setBuilder(builder: ComputerBuilder): void {
        this.builder = builder;
    }

    buildGamingComputer(): Computer {
        return this.builder
            .reset()
            .setCpu("Intel Core i9-13900K")
            .setRam("32GB DDR5-5600")
            .setStorage("2TB NVMe SSD")
            .setGpu("NVIDIA RTX 4080")
            .setMotherboard("ASUS ROG Strix Z790-E")
            .setPowerSupply("850W 80+ Gold")
            .setCoolingSystem("Liquid Cooling AIO 280mm")
            .setCaseType("Full Tower RGB")
            .build();
    }

    buildOfficeComputer(): Computer {
        return this.builder
            .reset()
            .setCpu("Intel Core i5-13400")
            .setRam("16GB DDR4-3200")
            .setStorage("512GB NVMe SSD")
            .setGpu("Integrated Graphics")
            .setMotherboard("MSI B760M Pro")
            .setPowerSupply("500W 80+ Bronze")
            .setCoolingSystem("Stock Air Cooler")
            .setCaseType("Micro ATX")
            .build();
    }

    buildWorkstationComputer(): Computer {
        return this.builder
            .reset()
            .setCpu("AMD Ryzen 9 7950X")
            .setRam("64GB DDR5-5200")
            .setStorage("4TB NVMe SSD + 8TB HDD")
            .setGpu("NVIDIA RTX 4090")
            .setMotherboard("ASUS TRX50-SAGE WIFI")
            .setPowerSupply("1200W 80+ Platinum")
            .setCoolingSystem("Custom Water Cooling")
            .setCaseType("Full Tower Workstation")
            .build();
    }

    buildBudgetComputer(): Computer {
        return this.builder
            .reset()
            .setCpu("AMD Ryzen 5 5600G")
            .setRam("8GB DDR4-3200")
            .setStorage("256GB SATA SSD")
            .setGpu("Integrated Radeon Graphics")
            .setMotherboard("ASRock B450M Pro4")
            .setPowerSupply("400W 80+ White")
            .setCoolingSystem("Stock AMD Cooler")
            .setCaseType("Mini ITX")
            .build();
    }
}