# Patrón Prototype - Diagrama UML

```mermaid
classDiagram
    %% Interface
    class IPrototype {
        <<interface>>
        +clone(): T
    }

    %% Concrete Prototype
    class Document {
        -title: string
        -content: string
        -metadata: Map~string, string~
        -createdAt: Date
        +constructor(title: string, content: string)
        -performExpensiveInitialization(): void
        +clone(): Document
        +setTitle(title: string): void
        +setContent(content: string): void
        +addMetadata(key: string, value: string): void
        +getInfo(): string
    }

    %% Registry
    class DocumentRegistry {
        -prototypes: Map~string, Document~
        +registerPrototype(key: string, prototype: Document): void
        +createDocument(prototypeKey: string): Document | null
        +listPrototypes(): string[]
    }

    %% Relationships
    Document ..|> IPrototype : implements
    DocumentRegistry --> Document : manages prototypes
    DocumentRegistry ..> Document : creates clones

    note for Document "Prototype: Implementa clonación\nEvita inicialización costosa"
    note for DocumentRegistry "Registry: Almacena prototipos\nreutilizables"
```

## Estructura del Patrón Prototype

**Componentes principales:**
- `IPrototype<T>` - Interface que define el método de clonación
- `Document` - Clase concreta que implementa la clonación
- `DocumentRegistry` - Registro que mantiene prototipos reutilizables

**Flujo:**
1. Se crean prototipos costosos una sola vez
2. Se registran en el DocumentRegistry
3. Se clonan rápidamente según necesidad
4. Se personalizan los clones sin afectar el prototipo original

**Ventaja clave:** Evita la inicialización costosa al reutilizar objetos pre-configurados.