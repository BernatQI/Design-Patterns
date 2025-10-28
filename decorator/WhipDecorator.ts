import { BaseDecorator } from './BaseDecorator';
import { Component } from './Component';

// WhipDecorator: adds whipped cream to the beverage
export class WhipDecorator extends BaseDecorator {
    constructor(component: Component) {
        super(component);
    }

    operation(): string {
        return `${this.component.operation()} + Whipped Cream`;
    }

    getCost(): number {
        return this.component.getCost() + 0.7;
    }
}