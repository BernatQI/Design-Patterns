// ProjectorSystem: complex subsystem for projector management
export class ProjectorSystem {
    private isOn: boolean = false;
    private isWarmedUp: boolean = false;

    turnOn(): void {
        this.isOn = true;
        console.log("Projector powered on");
        this.warmUp();
    }

    turnOff(): void {
        this.isOn = false;
        this.isWarmedUp = false;
        console.log("Projector powered off and cooling down");
    }

    private warmUp(): void {
        setTimeout(() => {
            if (this.isOn) {
                this.isWarmedUp = true;
                console.log("Projector warmed up and ready");
            }
        }, 100);
    }

    setWideScreenMode(): void {
        if (this.isOn && this.isWarmedUp) {
            console.log("Projector set to widescreen mode");
        }
    }

    adjustFocus(): void {
        if (this.isOn && this.isWarmedUp) {
            console.log("Projector focus adjusted");
        }
    }
}