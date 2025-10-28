import { HomeTheaterFacade } from './HomeTheaterFacade';
import { AudioSystem } from './AudioSystem';
import { VideoSystem } from './VideoSystem';
import { LightingSystem } from './LightingSystem';

// Demonstrates complex subsystem usage without facade
function withoutFacade(): void {
    console.log("🔧 WITHOUT FACADE - Manual Setup");
    console.log("=".repeat(50));
    
    const audio = new AudioSystem();
    const video = new VideoSystem();
    const lighting = new LightingSystem();
    
    // Complex manual setup for watching a movie
    console.log("\nManual movie setup:");
    lighting.setMovieMode();
    video.turnOn();
    video.setInput("Blu-ray");
    video.setResolution("4K");
    video.enableHDR();
    audio.turnOn();
    audio.setVolume(75);
    audio.setSurroundSound();
    audio.selectAudioInput("Blu-ray");
    
    console.log("😰 That was a lot of steps!");
}

// Demonstrates simplified usage with facade
function withFacade(): void {
    console.log("\n\n✨ WITH FACADE - Simplified Interface");
    console.log("=".repeat(50));
    
    const homeTheater = new HomeTheaterFacade();
    
    // Simple one-method call
    homeTheater.watchMovie("The Matrix");
    
    // Wait for async operations to complete
    setTimeout(() => {
        console.log("\n" + "=".repeat(50));
        
        // Other simple operations
        homeTheater.endMovie();
        
        setTimeout(() => {
            homeTheater.listenToMusic();
            
            setTimeout(() => {
                homeTheater.gamingMode();
            }, 1000);
        }, 1000);
    }, 200);
}

// Demonstrates advanced usage - facade + direct access
function advancedUsage(): void {
    setTimeout(() => {
        console.log("\n\n🔧 ADVANCED USAGE - Facade + Direct Access");
        console.log("=".repeat(50));
        
        const homeTheater = new HomeTheaterFacade();
        
        // Use facade for basic setup
        homeTheater.listenToMusic();
        
        // Direct access for fine-tuning
        setTimeout(() => {
            console.log("\nFine-tuning with direct access:");
            homeTheater.getAudioSystem().setVolume(90);
            homeTheater.getLightingSystem().setColorTemperature("blue");
            console.log("🎛️ Custom adjustments complete!");
        }, 500);
    }, 3500);
}

function demonstrateComplexity(): void {
    setTimeout(() => {
        console.log("\n\n📊 COMPLEXITY COMPARISON");
        console.log("=".repeat(50));
        
        console.log("Without Facade:");
        console.log("- 8+ method calls for basic movie setup");
        console.log("- Must remember subsystem details");
        console.log("- Easy to forget steps");
        console.log("- Complex error handling");
        
        console.log("\nWith Facade:");
        console.log("- 1 method call for movie setup");
        console.log("- Hide subsystem complexity");
        console.log("- Consistent workflows");
        console.log("- Simplified error handling");
        
        console.log("\n💡 Facade reduces complexity by 90%!");
    }, 5000);
}

// Run all demonstrations
withoutFacade();
withFacade();
advancedUsage();
demonstrateComplexity();