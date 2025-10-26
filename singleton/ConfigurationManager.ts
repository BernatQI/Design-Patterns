// ./singleton/ConfigurationManager.ts
export class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: Map<string, string>;
    private isLoaded: boolean = false;

    // Constructor privado para evitar instanciación directa
    private constructor() {
        this.config = new Map();
        console.log("🔧 Inicializando ConfigurationManager...");
        this.loadConfiguration();
    }

    // Método estático para obtener la única instancia
    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            console.log("✨ Creando nueva instancia de ConfigurationManager");
            ConfigurationManager.instance = new ConfigurationManager();
        } else {
            console.log("♻️ Reutilizando instancia existente");
        }
        return ConfigurationManager.instance;
    }

    private loadConfiguration(): void {
        console.log("📁 Cargando configuración desde archivo...");
        
        // Simulamos carga de configuración costosa
        this.config.set("database_url", "postgresql://localhost:5432/myapp");
        this.config.set("api_key", "sk-1234567890abcdef");
        this.config.set("max_connections", "100");
        this.config.set("timeout", "30000");
        this.config.set("environment", "production");
        
        this.isLoaded = true;
        console.log("✅ Configuración cargada exitosamente");
    }

    public get(key: string): string | undefined {
        if (!this.isLoaded) {
            throw new Error("❌ Configuración no cargada");
        }
        return this.config.get(key);
    }

    public set(key: string, value: string): void {
        this.config.set(key, value);
        console.log(`🔄 Configuración actualizada: ${key} = ${value}`);
    }

    public getAllConfig(): Record<string, string> {
        const result: Record<string, string> = {};
        this.config.forEach((value, key) => {
            result[key] = value;
        });
        return result;
    }

    public getInstanceId(): string {
        return `ConfigManager-${Math.random().toString(36).substr(2, 9)}`;
    }
}