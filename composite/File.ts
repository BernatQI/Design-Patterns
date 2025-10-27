import { Component } from './Component';

/**
 * File represents a leaf in the file system tree structure.
 * Files cannot contain other files or directories.
 */
export class File implements Component {
    private name: string;
    private size: number;

    constructor(name: string, size: number = 0) {
        this.name = name;
        this.size = size;
    }

    operation(): string {
        return `File: ${this.name} (${this.size} bytes)`;
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }

    // Files cannot have children
    add(component: Component): void {
        throw new Error("Cannot add components to a file");
    }

    remove(component: Component): void {
        throw new Error("Cannot remove components from a file");
    }

    getChild(index: number): Component | null {
        throw new Error("Files do not have children");
    }
}