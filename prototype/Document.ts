// ./prototype/Document.ts
import { IPrototype } from './IPrototype';

export class Document implements IPrototype<Document> {
    private title: string;
    private content: string;
    private metadata: Map<string, string>;
    private createdAt: Date;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.metadata = new Map();
        this.createdAt = new Date();
        
        // Simulate an expensive operation
        this.performExpensiveInitialization();
    }

    private performExpensiveInitialization(): void {
        // Simulate loading templates, validations, etc.
        console.log("🔄 Performing expensive initialization...");
        
        // Add default metadata
        this.metadata.set("author", "System");
        this.metadata.set("version", "1.0");
        this.metadata.set("format", "standard");
    }

    // Implementation of Prototype pattern
    clone(): Document {
        console.log("📋 Cloning existing document...");
        
        const cloned = Object.create(Object.getPrototypeOf(this));
        cloned.title = this.title + " (Copy)";
        cloned.content = this.content;
        cloned.createdAt = new Date();
        
        // Deep cloning of Map
        cloned.metadata = new Map(this.metadata);
        
        return cloned;
    }

    // Methods to modify the cloned document
    setTitle(title: string): void {
        this.title = title;
    }

    setContent(content: string): void {
        this.content = content;
    }

    addMetadata(key: string, value: string): void {
        this.metadata.set(key, value);
    }

    getInfo(): string {
        const metadataStr = Array.from(this.metadata.entries())
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
            
        return `📄 Document: "${this.title}"
📝 Content: ${this.content}
📅 Created: ${this.createdAt.toLocaleString()}
🏷️  Metadata: {${metadataStr}}`;
    }
}