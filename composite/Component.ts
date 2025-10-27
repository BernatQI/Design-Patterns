// Component interface for tree structures
export interface Component {
    operation(): string;

    // Optional methods for composites only
    add?(component: Component): void;
    remove?(component: Component): void;
    getChild?(index: number): Component | null;

    getName(): string;
}