import { ImageInterface } from './ImageInterface';

// RealImage: expensive object that loads and processes images
export class RealImage implements ImageInterface {
    private filename: string;
    private size: number = 0;
    private imageData: string = "";

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    // Simulates expensive loading operation
    private loadFromDisk(): void {
        console.log(`Loading image from disk: ${this.filename}`);
        
        // Simulate loading time
        const start = Date.now();
        while (Date.now() - start < 100) {} // 100ms delay
        
        this.imageData = `[Image data for ${this.filename}]`;
        this.size = Math.floor(Math.random() * 1000) + 500; // Random size
        
        console.log(`✅ Image loaded: ${this.filename} (${this.size}KB)`);
    }

    display(): void {
        console.log(`Displaying image: ${this.filename}`);
    }

    getSize(): number {
        return this.size;
    }

    getFilename(): string {
        return this.filename;
    }
}