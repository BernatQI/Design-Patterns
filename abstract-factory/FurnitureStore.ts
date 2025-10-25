// ./abstract-factory/FurnitureStore.ts
import { FurnitureFactory } from './FurnitureFactory';

export class FurnitureStore {
    private factory: FurnitureFactory;

    constructor(factory: FurnitureFactory) {
        this.factory = factory;
    }

    public orderFurnitureSet(): void {
        console.log(`\n--- Creating furniture set ---`);
        
        const chair = this.factory.createChair();
        const sofa = this.factory.createSofa();
        const table = this.factory.createTable();

        console.log(`\nTesting ${chair.getStyle()} furniture set:`);
        chair.sitOn();
        sofa.lieOn();
        table.putOn("coffee cup");
    }

    public setFactory(factory: FurnitureFactory): void {
        this.factory = factory;
    }
}