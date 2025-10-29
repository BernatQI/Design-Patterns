import { Particle } from './Particle';
import { FlyweightFactory } from './FlyweightFactory';

// ParticleSystem: manages many particles using flyweight pattern for optimization
export class ParticleSystem {
    private particles: Particle[] = [];
    private factory: FlyweightFactory;

    constructor() {
        this.factory = new FlyweightFactory();
    }

    addParticle(x: number, y: number, velocityX: number, velocityY: number, color: string, sprite: string): void {
        const flyweight = this.factory.getFlyweight(color, sprite);
        const particle = new Particle(x, y, velocityX, velocityY, flyweight);
        this.particles.push(particle);
    }

    update(): void {
        for (const particle of this.particles) {
            particle.update();
        }
    }

    render(): void {
        for (const particle of this.particles) {
            particle.render();
        }
    }

    getParticleCount(): number {
        return this.particles.length;
    }

    getFlyweightCount(): number {
        return this.factory.getFlyweightCount();
    }

    getMemoryUsage(): { particles: number; flyweights: number; efficiency: string } {
        const particleCount = this.particles.length;
        const flyweightCount = this.factory.getFlyweightCount();
        const efficiency = `${((1 - flyweightCount / particleCount) * 100).toFixed(1)}%`;
        
        return {
            particles: particleCount,
            flyweights: flyweightCount,
            efficiency
        };
    }

    listFlyweights(): void {
        this.factory.listFlyweights();
    }

    clear(): void {
        this.particles = [];
    }
}