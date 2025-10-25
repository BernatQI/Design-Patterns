// ./builder/FluentComputerBuilder.ts
import { Computer } from './Computer';

export class FluentComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    static create(): FluentComputerBuilder {
        return new FluentComputerBuilder();
    }

    withCpu(cpu: string): FluentComputerBuilder {
        this.computer.setCpu(cpu);
        return this;
    }

    withRam(ram: string): FluentComputerBuilder {
        this.computer.setRam(ram);
        return this;
    }

    withStorage(storage: string): FluentComputerBuilder {
        this.computer.setStorage(storage);
        return this;
    }

    withGpu(gpu: string): FluentComputerBuilder {
        this.computer.setGpu(gpu);
        return this;
    }

    withMotherboard(motherboard: string): FluentComputerBuilder {
        this.computer.setMotherboard(motherboard);
        return this;
    }

    withPowerSupply(powerSupply: string): FluentComputerBuilder {
        this.computer.setPowerSupply(powerSupply);
        return this;
    }

    withCooling(coolingSystem: string): FluentComputerBuilder {
        this.computer.setCoolingSystem(coolingSystem);
        return this;
    }

    withCase(caseType: string): FluentComputerBuilder {
        this.computer.setCaseType(caseType);
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}