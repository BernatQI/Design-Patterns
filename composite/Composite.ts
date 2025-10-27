import { Component } from './Component';

/**
 * Composite class represents complex components that may have children.
 * Composite objects delegate the actual work to their children and
 * then "sum up" the result.
 */
export class Composite implements Component {
    private children: Component[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * Adds a child component to this composite
     */
    add(component: Component): void {
        this.children.push(component);
    }

    /**
     * Removes a child component from this composite
     */
    remove(component: Component): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    /**
     * Gets a child component at the specified index
     */
    getChild(index: number): Component | null {
        if (index >= 0 && index < this.children.length) {
            return this.children[index];
        }
        return null;
    }

    /**
     * Executes the operation by delegating to all children
     */
    operation(): string {
        const results: string[] = [];
        
        results.push(`Composite ${this.name} contains:`);
        
        for (const child of this.children) {
            // Recursively call operation on each child
            const childResult = child.operation();
            // Add indentation for nested structure visualization
            const indentedResult = childResult.split('\n').map(line => `  ${line}`).join('\n');
            results.push(indentedResult);
        }

        return results.join('\n');
    }

    /**
     * Gets the name of this composite
     */
    getName(): string {
        return this.name;
    }

    /**
     * Gets the number of children in this composite
     */
    getChildrenCount(): number {
        return this.children.length;
    }

    /**
     * Gets all children of this composite
     */
    getChildren(): Component[] {
        return [...this.children]; // Return a copy to prevent external modification
    }

    /**
     * Checks if this composite is empty (has no children)
     */
    isEmpty(): boolean {
        return this.children.length === 0;
    }

    /**
     * Clears all children from this composite
     */
    clear(): void {
        this.children = [];
    }
}