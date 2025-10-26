// ./prototype/DocumentRegistry.ts
import { Document } from './Document';

export class DocumentRegistry {
    private prototypes: Map<string, Document> = new Map();

    // Registrar prototipos predefinidos
    registerPrototype(key: string, prototype: Document): void {
        this.prototypes.set(key, prototype);
        console.log(`✅ Prototipo '${key}' registrado`);
    }

    // Crear nuevo documento basado en un prototipo
    createDocument(prototypeKey: string): Document | null {
        const prototype = this.prototypes.get(prototypeKey);
        
        if (!prototype) {
            console.log(`❌ Prototipo '${prototypeKey}' no encontrado`);
            return null;
        }

        return prototype.clone();
    }

    listPrototypes(): string[] {
        return Array.from(this.prototypes.keys());
    }
}