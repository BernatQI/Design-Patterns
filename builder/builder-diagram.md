# Patrón Builder - Diagrama UML

```mermaid
classDiagram
    %% Product
    class Computer {
        -cpu: string
        -ram: string
        -storage: string
        -gpu: string
        -motherboard: string
        -powerSupply: string
        -case: string
        +constructor()
        +setCPU(cpu: string): void
        +setRAM(ram: string): void
        +setStorage(storage: string): void
        +setGPU(gpu: string): void
        +setMotherboard(motherboard: string): void
        +setPowerSupply(powerSupply: string): void
        +setCase(caseModel: string): void
        +getSpecs(): string
    }

    %% Abstract Builder
    class ComputerBuilder {
        <<abstract>>
        #computer: Computer
        +constructor()
        +getResult(): Computer
        +buildCPU(): ComputerBuilder*
        +buildRAM(): ComputerBuilder*
        +buildStorage(): ComputerBuilder*
        +buildGPU(): ComputerBuilder*
        +buildMotherboard(): ComputerBuilder*
        +buildPowerSupply(): ComputerBuilder*
        +buildCase(): ComputerBuilder*
    }

    %% Concrete Builder
    class ConcreteComputerBuilder {
        +buildCPU(): ComputerBuilder
        +buildRAM(): ComputerBuilder
        +buildStorage(): ComputerBuilder
        +buildGPU(): ComputerBuilder
        +buildMotherboard(): ComputerBuilder
        +buildPowerSupply(): ComputerBuilder
        +buildCase(): ComputerBuilder
    }

    %% Fluent Builder (Alternative)
    class FluentComputerBuilder {
        -computer: Computer
        +constructor()
        +withCPU(cpu: string): FluentComputerBuilder
        +withRAM(ram: string): FluentComputerBuilder
        +withStorage(storage: string): FluentComputerBuilder
        +withGPU(gpu: string): FluentComputerBuilder
        +withMotherboard(motherboard: string): FluentComputerBuilder
        +withPowerSupply(powerSupply: string): FluentComputerBuilder
        +withCase(caseModel: string): FluentComputerBuilder
        +build(): Computer
    }

    %% Director
    class ComputerDirector {
        -builder: ComputerBuilder
        +constructor(builder: ComputerBuilder)
        +setBuilder(builder: ComputerBuilder): void
        +buildGamingComputer(): Computer
        +buildOfficeComputer(): Computer
        +buildServerComputer(): Computer
    }

    %% Relationships
    ConcreteComputerBuilder --|> ComputerBuilder : extends
    ComputerBuilder --> Computer : builds
    FluentComputerBuilder --> Computer : builds
    ComputerDirector --> ComputerBuilder : uses
    ComputerDirector ..> Computer : creates

    note for ComputerBuilder "Builder: Define pasos para\nconstruir el producto"
    note for ComputerDirector "Director: Conoce la secuencia\nde construcción"
    note for FluentComputerBuilder "Fluent Builder: Interfaz fluida\ncon method chaining"
```

## Estructura del Patrón Builder

**Propósito:**
Construye objetos complejos paso a paso, permitiendo crear diferentes representaciones del mismo objeto.

**Dos variantes implementadas:**

### 1. Builder Clásico con Director
- `ComputerBuilder` - Builder abstracto que define pasos
- `ConcreteComputerBuilder` - Builder concreto que implementa construcción
- `ComputerDirector` - Conoce las secuencias de construcción específicas
- Separación clara entre construcción y representación

### 2. Fluent Builder
- `FluentComputerBuilder` - Builder con interfaz fluida
- Method chaining para construcción intuitiva
- Más simple, sin necesidad de Director

**Producto:**
- `Computer` - Objeto complejo con múltiples componentes opcionales

**Ventajas:**
- 🔧 Construcción paso a paso de objetos complejos
- 🎛️ Control fino sobre el proceso de construcción
- 🔄 Diferentes representaciones del mismo objeto
- 📝 Código más legible (especialmente con Fluent Interface)
- ✅ Objetos inmutables una vez construidos