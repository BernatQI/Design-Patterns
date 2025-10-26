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
        
        // Simulamos una operación costosa
        this.performExpensiveInitialization();
    }

    private performExpensiveInitialization(): void {
        // Simulamos carga de plantillas, validaciones, etc.
        console.log("🔄 Realizando inicialización costosa...");
        
        // Agregamos metadata por defecto
        this.metadata.set("author", "Sistema");
        this.metadata.set("version", "1.0");
        this.metadata.set("format", "standard");
    }

    // Implementación del patrón Prototype
    clone(): Document {
        console.log("📋 Clonando documento existente...");
        
        const cloned = Object.create(Object.getPrototypeOf(this));
        cloned.title = this.title + " (Copia)";
        cloned.content = this.content;
        cloned.createdAt = new Date();
        
        // Clonación profunda del Map
        cloned.metadata = new Map(this.metadata);
        
        return cloned;
    }

    // Métodos para modificar el documento clonado
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
            
        return `📄 Documento: "${this.title}"
📝 Contenido: ${this.content}
📅 Creado: ${this.createdAt.toLocaleString()}
🏷️  Metadata: {${metadataStr}}`;
    }
}