import { ParticleSystem } from './ParticleSystem';

// Demonstrates memory optimization with flyweight pattern
function demonstrateBasicFlyweight(): void {
    console.log("🎯 FLYWEIGHT PATTERN DEMO");
    console.log("=".repeat(50));
    
    const particleSystem = new ParticleSystem();
    
    // Add particles with limited color/sprite combinations
    console.log("\n1. Adding particles with shared properties:");
    
    // Red fire particles
    particleSystem.addParticle(10, 10, 1, 2, "red", "fire");
    particleSystem.addParticle(15, 12, 1.5, 2.2, "red", "fire");
    particleSystem.addParticle(20, 8, 0.8, 1.9, "red", "fire");
    
    // Blue water particles
    particleSystem.addParticle(30, 30, -1, 1, "blue", "water");
    particleSystem.addParticle(35, 32, -1.2, 1.1, "blue", "water");
    
    // Green leaf particles
    particleSystem.addParticle(50, 20, 0, -1, "green", "leaf");
    particleSystem.addParticle(52, 22, 0.1, -0.9, "green", "leaf");
    particleSystem.addParticle(48, 18, -0.1, -1.1, "green", "leaf");
    
    console.log(`\nParticles created: ${particleSystem.getParticleCount()}`);
    console.log(`Flyweights created: ${particleSystem.getFlyweightCount()}`);
    
    const usage = particleSystem.getMemoryUsage();
    console.log(`Memory efficiency: ${usage.efficiency} reduction`);
    
    particleSystem.listFlyweights();
}

function demonstrateScaling(): void {
    console.log("\n\n📊 SCALING DEMONSTRATION");
    console.log("=".repeat(50));
    
    const particleSystem = new ParticleSystem();
    
    const colors = ["red", "blue", "green", "yellow", "purple"];
    const sprites = ["fire", "water", "leaf", "star", "diamond"];
    
    console.log("\n2. Creating 1000 particles with limited flyweight types:");
    
    // Create many particles but with limited flyweight combinations
    for (let i = 0; i < 1000; i++) {
        const color = colors[i % colors.length];
        const sprite = sprites[Math.floor(i / colors.length) % sprites.length];
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const vx = (Math.random() - 0.5) * 4;
        const vy = (Math.random() - 0.5) * 4;
        
        particleSystem.addParticle(x, y, vx, vy, color, sprite);
    }
    
    const usage = particleSystem.getMemoryUsage();
    console.log(`\nScaling Results:`);
    console.log(`Particles: ${usage.particles}`);
    console.log(`Flyweights: ${usage.flyweights}`);
    console.log(`Memory saved: ${usage.efficiency}`);
    console.log(`Reduction ratio: ${usage.particles}:${usage.flyweights}`);
}

function demonstrateWithoutFlyweight(): void {
    console.log("\n\n⚠️  WITHOUT FLYWEIGHT COMPARISON");
    console.log("=".repeat(50));
    
    // Simulate memory usage without flyweight pattern
    class HeavyParticle {
        constructor(
            public x: number,
            public y: number,
            public velocityX: number,
            public velocityY: number,
            public color: string,
            public sprite: string,
            public texture: string = "heavy_texture_data",
            public mesh: string = "complex_mesh_data",
            public material: string = "material_properties"
        ) {}
    }
    
    console.log("\n3. Memory comparison:");
    console.log("Without Flyweight:");
    console.log("  - Each particle stores: color, sprite, texture, mesh, material");
    console.log("  - 1000 particles = 1000 copies of heavy data");
    console.log("  - Memory usage: HIGH");
    
    console.log("\nWith Flyweight:");
    console.log("  - Shared flyweights store: color, sprite, texture, mesh, material");
    console.log("  - Particles store only: position, velocity");
    console.log("  - 1000 particles = 25 shared flyweights + 1000 lightweight contexts");
    console.log("  - Memory usage: LOW (97.5% reduction)");
}

function demonstrateRuntimeOperations(): void {
    console.log("\n\n🎮 RUNTIME OPERATIONS");
    console.log("=".repeat(50));
    
    const particleSystem = new ParticleSystem();
    
    // Add some particles
    particleSystem.addParticle(0, 0, 2, 1, "red", "fire");
    particleSystem.addParticle(10, 10, -1, 2, "blue", "water");
    particleSystem.addParticle(20, 20, 1, -1, "red", "fire"); // Reuses flyweight
    
    console.log("\n4. Runtime particle operations:");
    console.log("\nInitial render:");
    particleSystem.render();
    
    console.log("\nAfter update:");
    particleSystem.update();
    particleSystem.render();
    
    console.log(`\nFlyweight sharing: ${particleSystem.getFlyweightCount()} flyweights for ${particleSystem.getParticleCount()} particles`);
}

// Run all demonstrations
demonstrateBasicFlyweight();
demonstrateScaling();
demonstrateWithoutFlyweight();
demonstrateRuntimeOperations();