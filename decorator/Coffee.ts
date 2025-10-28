import { Component } from './Component';

// Coffee: concrete component that can be decorated
export class Coffee implements Component {
    private name: string;
    private baseCost: number;

    constructor(name: string = "Simple Coffee", baseCost: number = 2.0) {
        this.name = name;
        this.baseCost = baseCost;
    }

    operation(): string {
        return this.name;
    }

    getCost(): number {
        return this.baseCost;
    }
}