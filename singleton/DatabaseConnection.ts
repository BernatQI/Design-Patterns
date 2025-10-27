// ./singleton/DatabaseConnection.ts
export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connectionId: string;
    private isConnected: boolean = false;

    private constructor() {
        this.connectionId = `db-${Date.now()}`;
        console.log("🗄️ Initializing database connection...");
        this.connect();
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            console.log("🆕 Creating new database connection");
            DatabaseConnection.instance = new DatabaseConnection();
        } else {
            console.log("🔗 Reusing existing connection");
        }
        return DatabaseConnection.instance;
    }

    private connect(): void {
        console.log("🔌 Establishing database connection...");
        // Simulate expensive connection
        setTimeout(() => {
            this.isConnected = true;
            console.log(`✅ Connected to DB with ID: ${this.connectionId}`);
        }, 1000);
    }

    public query(sql: string): string {
        if (!this.isConnected) {
            return "❌ Error: No database connection";
        }
        return `📊 Executing query: ${sql} | Connection: ${this.connectionId}`;
    }

    public getConnectionId(): string {
        return this.connectionId;
    }
}