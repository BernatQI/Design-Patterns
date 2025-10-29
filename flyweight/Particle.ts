import { Flyweight } from './Flyweight';

// Particle: context that stores extrinsic state and references flyweight
export class Particle {
    private x: number;
    private y: number;
    private velocity: { x: number; y: number };
    private flyweight: Flyweight;

    constructor(x: number, y: number, velocityX: number, velocityY: number, flyweight: Flyweight) {
        this.x = x;
        this.y = y;
        this.velocity = { x: velocityX, y: velocityY };
        this.flyweight = flyweight;
    }

    update(): void {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    render(): void {
        this.flyweight.operation({
            x: this.x,
            y: this.y,
            velocity: this.velocity
        });
    }

    getPosition(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    getVelocity(): { x: number; y: number } {
        return this.velocity;
    }
}