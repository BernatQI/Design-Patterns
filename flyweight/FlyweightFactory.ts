import { Flyweight } from './Flyweight';
import { ParticleFlyweight } from './ParticleFlyweight';

// FlyweightFactory: manages and reuses flyweight instances
export class FlyweightFactory {
    private flyweights: Map<string, Flyweight> = new Map();

    // Returns existing flyweight or creates new one if needed
    getFlyweight(color: string, sprite: string): Flyweight {
        const key = `${color}-${sprite}`;
        
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, new ParticleFlyweight(color, sprite));
        }
        
        return this.flyweights.get(key)!;
    }

    getFlyweightCount(): number {
        return this.flyweights.size;
    }

    listFlyweights(): void {
        console.log(`\nFlyweights created: ${this.flyweights.size}`);
        for (const [key, flyweight] of this.flyweights) {
            console.log(`  - ${key}`);
        }
    }
}