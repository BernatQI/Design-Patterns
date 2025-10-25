// ./abstract-factory/IndustrialFurniture.ts
import { Chair, Sofa, Table } from './Furniture';

export class IndustrialChair implements Chair {
    sitOn(): void {
        console.log("🪑 Sitting on a rugged industrial chair");
    }

    getStyle(): string {
        return "Industrial";
    }
}

export class IndustrialSofa implements Sofa {
    lieOn(): void {
        console.log("🛋️ Lying on a leather industrial sofa");
    }

    getStyle(): string {
        return "Industrial";
    }
}

export class IndustrialTable implements Table {
    putOn(item: string): void {
        console.log(`📦 Putting ${item} on a metal industrial table`);
    }

    getStyle(): string {
        return "Industrial";
    }
}