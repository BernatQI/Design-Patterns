/**
 * Component interface that defines common operations
 * for both simple and complex elements of the tree
 */
export interface Component {
    /**
     * Executes the operation for this component
     */
    operation(): string;

    /**
     * Adds a child component (only applicable to composites)
     * @param component The component to add
     */
    add?(component: Component): void;

    /**
     * Removes a child component (only applicable to composites)
     * @param component The component to remove
     */
    remove?(component: Component): void;

    /**
     * Gets a child component at specified index (only applicable to composites)
     * @param index The index of the child
     */
    getChild?(index: number): Component | null;

    /**
     * Gets the name of this component
     */
    getName(): string;
}