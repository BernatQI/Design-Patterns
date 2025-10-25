// ./abstract-factory/Main.ts
import { ModernFurnitureFactory } from './ModernFurnitureFactory';
import { VictorianFurnitureFactory } from './VictorianFurnitureFactory';
import { IndustrialFurnitureFactory } from './IndustrialFurnitureFactory';
import { FurnitureStore } from './FurnitureStore';

function main(): void {
    console.log("=== ABSTRACT FACTORY PATTERN DEMO ===");

    // Crear las factories
    const modernFactory = new ModernFurnitureFactory();
    const victorianFactory = new VictorianFurnitureFactory();
    const industrialFactory = new IndustrialFurnitureFactory();

    // Usar la tienda con diferentes factories
    const store = new FurnitureStore(modernFactory);

    // Orden Modern
    store.orderFurnitureSet();

    // Cambiar a Victorian
    store.setFactory(victorianFactory);
    store.orderFurnitureSet();

    // Cambiar a Industrial
    store.setFactory(industrialFactory);
    store.orderFurnitureSet();

    // Ejemplo: Cliente escoge estilo
    console.log("\n=== DYNAMIC FACTORY SELECTION ===");
    
    const styles = ['modern', 'victorian', 'industrial', 'gothic'];
    
    styles.forEach(style => {
        try {
            console.log(`\nCustomer selects: ${style.toUpperCase()} style`);
            const factory = getFactoryByStyle(style);
            const customerStore = new FurnitureStore(factory);
            customerStore.orderFurnitureSet();
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    });
}

function getFactoryByStyle(style: string) {
    switch (style.toLowerCase()) {
        case 'modern':
            return new ModernFurnitureFactory();
        case 'victorian':
            return new VictorianFurnitureFactory();
        case 'industrial':
            return new IndustrialFurnitureFactory();
        default:
            throw new Error(`Style ${style} not available`);
    }
}

// Ejecutar el demo
main();