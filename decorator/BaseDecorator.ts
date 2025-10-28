import { Component } from './Component';

// BaseDecorator: maintains reference to component and delegates all work to it
export abstract class BaseDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    operation(): string {
        return this.component.operation();
    }

    getCost(): number {
        return this.component.getCost();
    }
}