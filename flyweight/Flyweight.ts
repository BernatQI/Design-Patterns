// Flyweight: interface for objects that can be shared efficiently
export interface Flyweight {
    operation(extrinsicState: any): void;
}