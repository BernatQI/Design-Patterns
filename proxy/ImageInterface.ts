// ImageInterface: common interface for images
export interface ImageInterface {
    display(): void;
    getSize(): number;
    getFilename(): string;
}