// ./singleton/ConfigurationManager.ts
export class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: Map<string, string>;
    private isLoaded: boolean = false;

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.config = new Map();
        console.log("🔧 Initializing ConfigurationManager...");
        this.loadConfiguration();
    }

    // Static method to get the single instance
    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            console.log("✨ Creating new ConfigurationManager instance");
            ConfigurationManager.instance = new ConfigurationManager();
        } else {
            console.log("♻️ Reusing existing instance");
        }
        return ConfigurationManager.instance;
    }

    private loadConfiguration(): void {
        console.log("📁 Loading configuration from file...");
        
        // Simulate expensive configuration loading
        this.config.set("database_url", "postgresql://localhost:5432/myapp");
        this.config.set("api_key", "sk-1234567890abcdef");
        this.config.set("max_connections", "100");
        this.config.set("timeout", "30000");
        this.config.set("environment", "production");
        
        this.isLoaded = true;
        console.log("✅ Configuration loaded successfully");
    }

    public get(key: string): string | undefined {
        if (!this.isLoaded) {
            throw new Error("❌ Configuration not loaded");
        }
        return this.config.get(key);
    }

    public set(key: string, value: string): void {
        this.config.set(key, value);
        console.log(`🔄 Configuration updated: ${key} = ${value}`);
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