// ./builder/Computer.ts
export class Computer {
    private cpu?: string;
    private ram?: string;
    private storage?: string;
    private gpu?: string;
    private motherboard?: string;
    private powerSupply?: string;
    private coolingSystem?: string;
    private caseType?: string;

    constructor() {}

    // Setters
    setCpu(cpu: string): void { this.cpu = cpu; }
    setRam(ram: string): void { this.ram = ram; }
    setStorage(storage: string): void { this.storage = storage; }
    setGpu(gpu: string): void { this.gpu = gpu; }
    setMotherboard(motherboard: string): void { this.motherboard = motherboard; }
    setPowerSupply(powerSupply: string): void { this.powerSupply = powerSupply; }
    setCoolingSystem(coolingSystem: string): void { this.coolingSystem = coolingSystem; }
    setCaseType(caseType: string): void { this.caseType = caseType; }

    // Getters
    getCpu(): string | undefined { return this.cpu; }
    getRam(): string | undefined { return this.ram; }
    getStorage(): string | undefined { return this.storage; }
    getGpu(): string | undefined { return this.gpu; }
    getMotherboard(): string | undefined { return this.motherboard; }
    getPowerSupply(): string | undefined { return this.powerSupply; }
    getCoolingSystem(): string | undefined { return this.coolingSystem; }
    getCaseType(): string | undefined { return this.caseType; }

    getSpecs(): string {
        return `
          🖥️  Computer Specifications:
          ├── CPU: ${this.cpu || 'Not specified'}
          ├── RAM: ${this.ram || 'Not specified'}
          ├── Storage: ${this.storage || 'Not specified'}
          ├── GPU: ${this.gpu || 'Not specified'}
          ├── Motherboard: ${this.motherboard || 'Not specified'}
          ├── Power Supply: ${this.powerSupply || 'Not specified'}
          ├── Cooling: ${this.coolingSystem || 'Not specified'}
          └── Case: ${this.caseType || 'Not specified'}
        `;
    }

    boot(): void {
        console.log("💻 Computer is booting up...");
        console.log("✅ System ready!");
    }
}