import { Component } from './Component';
import { File } from './File';

/**
 * Directory represents a composite in the file system tree structure.
 * Directories can contain files and other directories.
 */
export class Directory implements Component {
    private name: string;
    private children: Component[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: Component): void {
        this.children.push(component);
    }

    remove(component: Component): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getChild(index: number): Component | null {
        if (index >= 0 && index < this.children.length) {
            return this.children[index];
        }
        return null;
    }

    operation(): string {
        const results: string[] = [];
        results.push(`Directory: ${this.name}/`);
        
        for (const child of this.children) {
            const childResult = child.operation();
            // Add indentation for nested structure
            const indentedResult = childResult.split('\n')
                .map(line => `  ${line}`)
                .join('\n');
            results.push(indentedResult);
        }

        return results.join('\n');
    }

    getName(): string {
        return this.name;
    }

    /**
     * Gets the total size of all files in this directory and subdirectories
     */
    getTotalSize(): number {
        let totalSize = 0;
        
        for (const child of this.children) {
            if (child instanceof File) {
                totalSize += child.getSize();
            } else if (child instanceof Directory) {
                totalSize += child.getTotalSize();
            }
        }
        
        return totalSize;
    }

    /**
     * Gets the number of direct children in this directory
     */
    getChildrenCount(): number {
        return this.children.length;
    }

    /**
     * Lists all files in this directory (not recursive)
     */
    listFiles(): File[] {
        return this.children.filter(child => child instanceof File) as File[];
    }

    /**
     * Lists all subdirectories in this directory (not recursive)
     */
    listDirectories(): Directory[] {
        return this.children.filter(child => child instanceof Directory) as Directory[];
    }

    /**
     * Finds a component by name (direct children only)
     */
    findByName(name: string): Component | null {
        return this.children.find(child => child.getName() === name) || null;
    }

    /**
     * Checks if this directory is empty
     */
    isEmpty(): boolean {
        return this.children.length === 0;
    }
}