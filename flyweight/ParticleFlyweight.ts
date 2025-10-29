import { Flyweight } from './Flyweight';

// ParticleFlyweight: concrete flyweight that stores intrinsic state (shared data)
export class ParticleFlyweight implements Flyweight {
    private color: string;
    private sprite: string;

    constructor(color: string, sprite: string) {
        this.color = color;
        this.sprite = sprite;
        console.log(`Created flyweight: ${color} ${sprite}`);
    }

    // Operates using intrinsic state (color, sprite) and extrinsic state (position, velocity)
    operation(extrinsicState: { x: number; y: number; velocity: { x: number; y: number } }): void {
        console.log(`Rendering ${this.color} ${this.sprite} at (${extrinsicState.x}, ${extrinsicState.y}) with velocity (${extrinsicState.velocity.x}, ${extrinsicState.velocity.y})`);
    }

    getColor(): string {
        return this.color;
    }

    getSprite(): string {
        return this.sprite;
    }
}