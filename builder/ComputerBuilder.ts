// ./builder/ComputerBuilder.ts
import { Computer } from './Computer';

export interface ComputerBuilder {
    reset(): ComputerBuilder;
    setCpu(cpu: string): ComputerBuilder;
    setRam(ram: string): ComputerBuilder;
    setStorage(storage: string): ComputerBuilder;
    setGpu(gpu: string): ComputerBuilder;
    setMotherboard(motherboard: string): ComputerBuilder;
    setPowerSupply(powerSupply: string): ComputerBuilder;
    setCoolingSystem(coolingSystem: string): ComputerBuilder;
    setCaseType(caseType: string): ComputerBuilder;
    build(): Computer;
}