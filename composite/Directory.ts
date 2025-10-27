import { Component } from './Component';
import { File } from './File';

// Directory: composite in file system tree
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

    // Calculate total size recursively
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

    getChildrenCount(): number {
        return this.children.length;
    }

    listFiles(): File[] {
        return this.children.filter(child => child instanceof File) as File[];
    }

    listDirectories(): Directory[] {
        return this.children.filter(child => child instanceof Directory) as Directory[];
    }

    findByName(name: string): Component | null {
        return this.children.find(child => child.getName() === name) || null;
    }

    isEmpty(): boolean {
        return this.children.length === 0;
    }
}