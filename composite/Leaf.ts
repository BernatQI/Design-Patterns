import { Component } from './Component';

/**
 * Leaf class represents the end objects of a composition.
 * A leaf can't have any children and defines behavior for primitive objects.
 */
export class Leaf implements Component {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * Performs the operation for this leaf
     */
    operation(): string {
        return `Leaf ${this.name}`;
    }

    /**
     * Gets the name of this leaf
     */
    getName(): string {
        return this.name;
    }

    /**
     * Leaves cannot have children, so add operation throws an error
     */
    add(component: Component): void {
        throw new Error("Cannot add to a leaf");
    }

    /**
     * Leaves cannot have children, so remove operation throws an error
     */
    remove(component: Component): void {
        throw new Error("Cannot remove from a leaf");
    }

    /**
     * Leaves cannot have children, so getChild operation throws an error
     */
    getChild(index: number): Component | null {
        throw new Error("Cannot get child from a leaf");
    }
}