// AudioSystem: complex subsystem for audio management
export class AudioSystem {
    private volume: number = 50;
    private isOn: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("Audio system powered on");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Audio system powered off");
    }

    setVolume(volume: number): void {
        this.volume = Math.max(0, Math.min(100, volume));
        console.log(`Audio volume set to ${this.volume}`);
    }

    setSurroundSound(): void {
        if (this.isOn) {
            console.log("Surround sound activated");
        }
    }

    selectAudioInput(input: string): void {
        if (this.isOn) {
            console.log(`Audio input switched to ${input}`);
        }
    }
}