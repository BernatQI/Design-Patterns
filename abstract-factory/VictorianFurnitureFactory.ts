// ./abstract-factory/VictorianFurnitureFactory.ts
import { FurnitureFactory } from './FurnitureFactory';
import { Chair, Sofa, Table } from './Furniture';
import { VictorianChair, VictorianSofa, VictorianTable } from './VictorianFurniture';

export class VictorianFurnitureFactory extends FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createSofa(): Sofa {
        return new VictorianSofa();
    }

    createTable(): Table {
        return new VictorianTable();
    }
}