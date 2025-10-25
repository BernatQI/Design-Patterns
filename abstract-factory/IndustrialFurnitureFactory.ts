// ./abstract-factory/IndustrialFurnitureFactory.ts
import { FurnitureFactory } from './FurnitureFactory';
import { Chair, Sofa, Table } from './Furniture';
import { IndustrialChair, IndustrialSofa, IndustrialTable } from './IndustrialFurniture';

export class IndustrialFurnitureFactory extends FurnitureFactory {
    createChair(): Chair {
        return new IndustrialChair();
    }

    createSofa(): Sofa {
        return new IndustrialSofa();
    }

    createTable(): Table {
        return new IndustrialTable();
    }
}