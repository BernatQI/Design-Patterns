# Patrón Factory Method - Diagrama UML

```mermaid
classDiagram
    %% Abstract Creator
    class VehicleFactory {
        <<abstract>>
        +createVehicle(): Vehicle*
        +processOrder(): void
    }

    %% Concrete Creators
    class CarFactory {
        +createVehicle(): Vehicle
    }

    class MotorcycleFactory {
        +createVehicle(): Vehicle
    }

    class TruckFactory {
        +createVehicle(): Vehicle
    }

    %% Abstract Product
    class Vehicle {
        <<abstract>>
        #brand: string
        #model: string
        +constructor(brand: string, model: string)
        +start(): void*
        +stop(): void*
        +getInfo(): string
    }

    %% Concrete Products
    class Car {
        -doors: number
        +constructor(brand: string, model: string, doors: number)
        +start(): void
        +stop(): void
        +openTrunk(): void
    }

    class Motorcycle {
        -engineSize: number
        +constructor(brand: string, model: string, engineSize: number)
        +start(): void
        +stop(): void
        +wheelie(): void
    }

    class Truck {
        -loadCapacity: number
        +constructor(brand: string, model: string, capacity: number)
        +start(): void
        +stop(): void
        +loadCargo(): void
    }

    %% Simple Factory (Alternative)
    class SimpleVehicleFactory {
        <<utility>>
        +static createVehicle(type: string): Vehicle
    }

    %% Relationships
    CarFactory --|> VehicleFactory : extends
    MotorcycleFactory --|> VehicleFactory : extends
    TruckFactory --|> VehicleFactory : extends

    Car --|> Vehicle : extends
    Motorcycle --|> Vehicle : extends
    Truck --|> Vehicle : extends

    CarFactory ..> Car : creates
    MotorcycleFactory ..> Motorcycle : creates
    TruckFactory ..> Truck : creates

    SimpleVehicleFactory ..> Vehicle : creates
    SimpleVehicleFactory ..> Car : can create
    SimpleVehicleFactory ..> Motorcycle : can create
    SimpleVehicleFactory ..> Truck : can create

    note for VehicleFactory "Factory Method: Define interfaz\npara crear productos"
    note for SimpleVehicleFactory "Simple Factory: Alternativa\ncon método estático"
```

## Estructura del Patrón Factory Method

**Propósito:**
Define una interfaz para crear objetos, pero permite a las subclases decidir qué clase instanciar.

**Dos variantes implementadas:**

### 1. Factory Method Clásico
- `VehicleFactory` - Creator abstracto con factory method
- `CarFactory`, `MotorcycleFactory`, `TruckFactory` - Creators concretos
- Cada factory se especializa en crear un tipo específico de vehículo

### 2. Simple Factory (Variante)
- `SimpleVehicleFactory` - Clase utilitaria con método estático
- Centraliza la lógica de creación en un solo lugar
- Más simple pero menos extensible

**Productos:**
- `Vehicle` - Producto abstracto
- `Car`, `Motorcycle`, `Truck` - Productos concretos

**Ventajas:**
- 🏭 Elimina acoplamiento entre creator y productos concretos
- ➕ Fácil agregar nuevos tipos de productos
- 🎯 Principio de Responsabilidad Única
- 🔓 Principio Abierto/Cerrado