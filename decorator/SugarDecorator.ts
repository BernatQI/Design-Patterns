import { BaseDecorator } from './BaseDecorator';
import { Component } from './Component';

// SugarDecorator: adds sugar to the beverage
export class SugarDecorator extends BaseDecorator {
    constructor(component: Component) {
        super(component);
    }

    operation(): string {
        return `${this.component.operation()} + Sugar`;
    }

    getCost(): number {
        return this.component.getCost() + 0.2;
    }
}