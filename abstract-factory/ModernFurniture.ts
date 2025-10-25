// ./abstract-factory/ModernFurniture.ts
import { Chair, Sofa, Table } from './Furniture';

export class ModernChair implements Chair {
    sitOn(): void {
        console.log("🪑 Sitting on a sleek modern chair");
    }

    getStyle(): string {
        return "Modern";
    }
}

export class ModernSofa implements Sofa {
    lieOn(): void {
        console.log("🛋️ Lying on a minimalist modern sofa");
    }

    getStyle(): string {
        return "Modern";
    }
}

export class ModernTable implements Table {
    putOn(item: string): void {
        console.log(`📦 Putting ${item} on a glass modern table`);
    }

    getStyle(): string {
        return "Modern";
    }
}