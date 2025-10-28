import { AudioSystem } from './AudioSystem';
import { VideoSystem } from './VideoSystem';
import { LightingSystem } from './LightingSystem';
import { ProjectorSystem } from './ProjectorSystem';

// HomeTheaterFacade: provides simple interface to complex home theater subsystems
export class HomeTheaterFacade {
    private audio: AudioSystem;
    private video: VideoSystem;
    private lighting: LightingSystem;
    private projector: ProjectorSystem;

    constructor() {
        this.audio = new AudioSystem();
        this.video = new VideoSystem();
        this.lighting = new LightingSystem();
        this.projector = new ProjectorSystem();
    }

    // Single method replaces multiple subsystem calls
    watchMovie(movieTitle: string): void {
        console.log(`\n🎬 Starting movie: "${movieTitle}"`);
        console.log("=".repeat(40));
        
        this.lighting.setMovieMode();
        this.projector.turnOn();
        this.video.turnOn();
        this.video.setInput("Blu-ray");
        this.video.setResolution("4K");
        this.video.enableHDR();
        this.audio.turnOn();
        this.audio.setVolume(75);
        this.audio.setSurroundSound();
        this.audio.selectAudioInput("Blu-ray");
        
        // Wait for projector to warm up
        setTimeout(() => {
            this.projector.setWideScreenMode();
            this.projector.adjustFocus();
            console.log("🍿 Movie ready! Enjoy the show!");
        }, 150);
    }

    endMovie(): void {
        console.log("\n🛑 Ending movie session");
        console.log("=".repeat(40));
        
        this.audio.turnOff();
        this.video.turnOff();
        this.projector.turnOff();
        this.lighting.setBrightness(100);
        
        console.log("✅ Home theater shutdown complete");
    }

    listenToMusic(): void {
        console.log("\n🎵 Setting up music mode");
        console.log("=".repeat(40));
        
        this.audio.turnOn();
        this.audio.setVolume(60);
        this.audio.selectAudioInput("Spotify");
        this.lighting.setColorTemperature("warm");
        this.lighting.setBrightness(70);
        
        console.log("🎶 Music mode ready!");
    }

    gamingMode(): void {
        console.log("\n🎮 Setting up gaming mode");
        console.log("=".repeat(40));
        
        this.video.turnOn();
        this.video.setInput("Gaming Console");
        this.video.setResolution("4K");
        this.audio.turnOn();
        this.audio.setVolume(80);
        this.audio.selectAudioInput("Gaming Console");
        this.lighting.setBrightness(50);
        this.lighting.setColorTemperature("cool");
        
        console.log("🕹️ Gaming mode activated!");
    }

    // Manual control for advanced users
    getAudioSystem(): AudioSystem {
        return this.audio;
    }

    getVideoSystem(): VideoSystem {
        return this.video;
    }

    getLightingSystem(): LightingSystem {
        return this.lighting;
    }

    getProjectorSystem(): ProjectorSystem {
        return this.projector;
    }
}