import { Component } from './Component';

// Leaf: terminal objects with no children
export class Leaf implements Component {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    operation(): string {
        return `Leaf ${this.name}`;
    }

    getName(): string {
        return this.name;
    }

    // Throw errors for child operations - leaves can't have children
    add(component: Component): void {
        throw new Error("Cannot add to a leaf");
    }

    remove(component: Component): void {
        throw new Error("Cannot remove from a leaf");
    }

    getChild(index: number): Component | null {
        throw new Error("Cannot get child from a leaf");
    }
}