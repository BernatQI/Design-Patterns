// ./abstract-factory/FurnitureFactory.ts
import { Chair, Sofa, Table } from './Furniture';

export abstract class FurnitureFactory {
    abstract createChair(): Chair;
    abstract createSofa(): Sofa;
    abstract createTable(): Table;

    // Método template que usa el factory
    public createFurnitureSet(): { chair: Chair; sofa: Sofa; table: Table } {
        return {
            chair: this.createChair(),
            sofa: this.createSofa(),
            table: this.createTable()
        };
    }
}