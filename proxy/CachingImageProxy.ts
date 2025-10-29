import { ImageInterface } from './ImageInterface';
import { RealImage } from './RealImage';

// CachingImageProxy: caches results to improve performance
export class CachingImageProxy implements ImageInterface {
    private filename: string;
    private realImage: RealImage | null = null;
    private cachedSize: number | null = null;
    private displayCount: number = 0;

    constructor(filename: string) {
        this.filename = filename;
        console.log(`🗄️ CachingProxy created for: ${filename}`);
    }

    private getRealImage(): RealImage {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        return this.realImage;
    }

    display(): void {
        this.displayCount++;
        
        if (this.displayCount === 1) {
            console.log(`📸 First display - loading image`);
            this.getRealImage().display();
        } else {
            console.log(`♻️ Cached display #${this.displayCount} - much faster!`);
            console.log(`Displaying image: ${this.filename}`);
        }
    }

    getSize(): number {
        // Cache the size after first calculation
        if (this.cachedSize === null) {
            console.log(`📊 Calculating size (first time)`);
            this.cachedSize = this.getRealImage().getSize();
        } else {
            console.log(`⚡ Returning cached size`);
        }
        
        return this.cachedSize;
    }

    getFilename(): string {
        return this.filename;
    }

    getCacheStats(): { displays: number; sizeCached: boolean } {
        return {
            displays: this.displayCount,
            sizeCached: this.cachedSize !== null
        };
    }
}