// ./abstract-factory/VictorianFurniture.ts
import { Chair, Sofa, Table } from './Furniture';

export class VictorianChair implements Chair {
    sitOn(): void {
        console.log("🪑 Sitting on an elegant Victorian chair");
    }

    getStyle(): string {
        return "Victorian";
    }
}

export class VictorianSofa implements Sofa {
    lieOn(): void {
        console.log("🛋️ Lying on a luxurious Victorian sofa");
    }

    getStyle(): string {
        return "Victorian";
    }
}

export class VictorianTable implements Table {
    putOn(item: string): void {
        console.log(`📦 Putting ${item} on an ornate Victorian table`);
    }

    getStyle(): string {
        return "Victorian";
    }
}