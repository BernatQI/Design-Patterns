# Patrón Singleton - Diagrama UML

```mermaid
classDiagram
    %% Singleton Classes
    class ConfigurationManager {
        -static instance: ConfigurationManager
        -config: Map~string, string~
        -isLoaded: boolean
        -constructor()
        +static getInstance(): ConfigurationManager
        -loadConfiguration(): void
        +get(key: string): string | undefined
        +set(key: string, value: string): void
        +getAllConfig(): Record~string, string~
        +getInstanceId(): string
    }

    class DatabaseConnection {
        -static instance: DatabaseConnection
        -connectionId: string
        -isConnected: boolean
        -constructor()
        +static getInstance(): DatabaseConnection
        -connect(): void
        +query(sql: string): string
        +getConnectionId(): string
    }

    %% Client
    class Client {
        +main(): void
    }

    %% Relationships
    Client ..> ConfigurationManager : uses getInstance()
    Client ..> DatabaseConnection : uses getInstance()

    note for ConfigurationManager "Singleton: Constructor privado\nUna sola instancia global"
    note for DatabaseConnection "Singleton: Conexión única\nRecurso compartido"
```

## Estructura del Patrón Singleton

**Componentes principales:**
- Constructor privado que previene instanciación directa
- Variable estática `instance` que almacena la única instancia
- Método estático `getInstance()` que controla el acceso
- Inicialización perezosa (lazy initialization)

**Características clave:**
- ✅ Una sola instancia garantizada
- ✅ Acceso global controlado
- ✅ Inicialización bajo demanda
- ✅ Compartición de recursos (configuración, conexiones)

**Casos de uso típicos:**
- Configuraciones de aplicación
- Conexiones a base de datos
- Loggers centralizados
- Pools de recursos