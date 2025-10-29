import { ImageInterface } from './ImageInterface';
import { RealImage } from './RealImage';

// VirtualImageProxy: delays expensive image creation until actually needed
export class VirtualImageProxy implements ImageInterface {
    private filename: string;
    private realImage: RealImage | null = null;

    constructor(filename: string) {
        this.filename = filename;
        console.log(`📄 VirtualProxy created for: ${filename} (not loaded yet)`);
    }

    // Lazy loading - create RealImage only when needed
    private getRealImage(): RealImage {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        return this.realImage;
    }

    display(): void {
        this.getRealImage().display();
    }

    getSize(): number {
        // If not loaded yet, return estimated size
        if (this.realImage === null) {
            console.log(`📐 Estimating size for ${this.filename} (not loaded yet)`);
            return 750; // Default estimated size
        }
        return this.realImage.getSize();
    }

    getFilename(): string {
        return this.filename;
    }
}