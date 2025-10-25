// ./abstract-factory/ModernFurnitureFactory.ts
import { FurnitureFactory } from './FurnitureFactory';
import { Chair, Sofa, Table } from './Furniture';
import { ModernChair, ModernSofa, ModernTable } from './ModernFurniture';

export class ModernFurnitureFactory extends FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }

    createTable(): Table {
        return new ModernTable();
    }
}