// ./prototype/DocumentRegistry.ts
import { Document } from './Document';

export class DocumentRegistry {
    private prototypes: Map<string, Document> = new Map();

    // Register predefined prototypes
    registerPrototype(key: string, prototype: Document): void {
        this.prototypes.set(key, prototype);
        console.log(`✅ Prototype '${key}' registered`);
    }

    // Create new document based on a prototype
    createDocument(prototypeKey: string): Document | null {
        const prototype = this.prototypes.get(prototypeKey);
        
        if (!prototype) {
            console.log(`❌ Prototype '${prototypeKey}' not found`);
            return null;
        }

        return prototype.clone();
    }

    listPrototypes(): string[] {
        return Array.from(this.prototypes.keys());
    }
}