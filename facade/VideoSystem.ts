// VideoSystem: complex subsystem for video management
export class VideoSystem {
    private isOn: boolean = false;
    private currentInput: string = "HDMI1";

    turnOn(): void {
        this.isOn = true;
        console.log("Video system powered on");
    }

    turnOff(): void {
        this.isOn = false;
        console.log("Video system powered off");
    }

    setInput(input: string): void {
        if (this.isOn) {
            this.currentInput = input;
            console.log(`Video input set to ${input}`);
        }
    }

    setResolution(resolution: string): void {
        if (this.isOn) {
            console.log(`Video resolution set to ${resolution}`);
        }
    }

    enableHDR(): void {
        if (this.isOn) {
            console.log("HDR enabled for enhanced video quality");
        }
    }
}