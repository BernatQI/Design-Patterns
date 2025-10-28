import { BaseDecorator } from './BaseDecorator';
import { Component } from './Component';

// MilkDecorator: adds milk to the beverage
export class MilkDecorator extends BaseDecorator {
    constructor(component: Component) {
        super(component);
    }

    operation(): string {
        return `${this.component.operation()} + Milk`;
    }

    getCost(): number {
        return this.component.getCost() + 0.5;
    }
}