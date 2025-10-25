// ./abstract-factory/Furniture.ts
export interface Chair {
    sitOn(): void;
    getStyle(): string;
}

export interface Sofa {
    lieOn(): void;
    getStyle(): string;
}

export interface Table {
    putOn(item: string): void;
    getStyle(): string;
}