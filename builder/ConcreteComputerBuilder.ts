// ./builder/ConcreteComputerBuilder.ts
import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class ConcreteComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    reset(): ComputerBuilder {
        this.computer = new Computer();
        return this;
    }

    setCpu(cpu: string): ComputerBuilder {
        this.computer.setCpu(cpu);
        return this;
    }

    setRam(ram: string): ComputerBuilder {
        this.computer.setRam(ram);
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.setStorage(storage);
        return this;
    }

    setGpu(gpu: string): ComputerBuilder {
        this.computer.setGpu(gpu);
        return this;
    }

    setMotherboard(motherboard: string): ComputerBuilder {
        this.computer.setMotherboard(motherboard);
        return this;
    }

    setPowerSupply(powerSupply: string): ComputerBuilder {
        this.computer.setPowerSupply(powerSupply);
        return this;
    }

    setCoolingSystem(coolingSystem: string): ComputerBuilder {
        this.computer.setCoolingSystem(coolingSystem);
        return this;
    }

    setCaseType(caseType: string): ComputerBuilder {
        this.computer.setCaseType(caseType);
        return this;
    }

    build(): Computer {
        const result = this.computer;
        this.reset(); // Preparar para la próxima construcción
        return result;
    }
}