import { Component } from './Component';

// Composite: can contain other components
export class Composite implements Component {
    private children: Component[] = [];
    private name: string;

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

    // Recursively call operation on all children
    operation(): string {
        const results: string[] = [];
        
        results.push(`Composite ${this.name} contains:`);
        
        for (const child of this.children) {
            const childResult = child.operation();
            const indentedResult = childResult.split('\n').map(line => `  ${line}`).join('\n');
            results.push(indentedResult);
        }

        return results.join('\n');
    }

    getName(): string {
        return this.name;
    }

    getChildrenCount(): number {
        return this.children.length;
    }

    // Return copy to prevent external modification
    getChildren(): Component[] {
        return [...this.children];
    }

    isEmpty(): boolean {
        return this.children.length === 0;
    }

    clear(): void {
        this.children = [];
    }
}