// ./singleton/DatabaseConnection.ts
export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connectionId: string;
    private isConnected: boolean = false;

    private constructor() {
        this.connectionId = `db-${Date.now()}`;
        console.log("🗄️ Inicializando conexión a base de datos...");
        this.connect();
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            console.log("🆕 Creando nueva conexión a BD");
            DatabaseConnection.instance = new DatabaseConnection();
        } else {
            console.log("🔗 Reutilizando conexión existente");
        }
        return DatabaseConnection.instance;
    }

    private connect(): void {
        console.log("🔌 Estableciendo conexión con la base de datos...");
        // Simulamos conexión costosa
        setTimeout(() => {
            this.isConnected = true;
            console.log(`✅ Conectado a BD con ID: ${this.connectionId}`);
        }, 1000);
    }

    public query(sql: string): string {
        if (!this.isConnected) {
            return "❌ Error: No hay conexión a la base de datos";
        }
        return `📊 Ejecutando query: ${sql} | Conexión: ${this.connectionId}`;
    }

    public getConnectionId(): string {
        return this.connectionId;
    }
}