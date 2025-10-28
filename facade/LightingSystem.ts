// LightingSystem: complex subsystem for lighting control
export class LightingSystem {
    private brightness: number = 100;
    private isOn: boolean = true;

    turnOn(): void {
        this.isOn = true;
        console.log("Lights turned on");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Lights turned off");
    }

    setBrightness(brightness: number): void {
        if (this.isOn) {
            this.brightness = Math.max(0, Math.min(100, brightness));
            console.log(`Lights dimmed to ${this.brightness}%`);
        }
    }

    setMovieMode(): void {
        if (this.isOn) {
            this.brightness = 20;
            console.log("Movie lighting mode activated (20% brightness)");
        }
    }

    setColorTemperature(temp: string): void {
        if (this.isOn) {
            console.log(`Light color temperature set to ${temp}`);
        }
    }
}