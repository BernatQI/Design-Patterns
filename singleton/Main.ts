// ./singleton/Main.ts
import { ConfigurationManager } from './ConfigurationManager';
import { DatabaseConnection } from './DatabaseConnection';

function main(): void {
    console.log("=== 🏛️ SINGLETON Pattern - Configuration System ===\n");

    console.log("1️⃣ Testing ConfigurationManager:");
    console.log("=" .repeat(50));
    
    // First request - creates the instance
    const config1 = ConfigurationManager.getInstance();
    console.log(`🔑 API Key: ${config1.get('api_key')}`);
    console.log(`🌍 Environment: ${config1.get('environment')}`);
    
    console.log("\n" + "-".repeat(30) + "\n");
    
    // Second request - reuses the same instance
    const config2 = ConfigurationManager.getInstance();
    config2.set("new_feature", "enabled");
    
    console.log("\n" + "-".repeat(30) + "\n");
    
    // Third request - demonstrates it's the same instance
    const config3 = ConfigurationManager.getInstance();
    console.log(`🆕 New feature: ${config3.get('new_feature')}`);
    
    // We verify that all are the same instance
    console.log(`\n🔍 Identity verification:`);
    console.log(`config1 === config2: ${config1 === config2}`);
    console.log(`config2 === config3: ${config2 === config3}`);
    console.log(`config1 === config3: ${config1 === config3}`);

    console.log("\n\n2️⃣ Testing DatabaseConnection:");
    console.log("=" .repeat(50));
    
    // First connection
    const db1 = DatabaseConnection.getInstance();
    setTimeout(() => {
        console.log(db1.query("SELECT * FROM users"));
        
        // Second "connection" - reuses the same one
        const db2 = DatabaseConnection.getInstance();
        console.log(db2.query("SELECT * FROM products"));
        
        // We verify it's the same connection
        console.log(`\n🔍 Same connection: ${db1.getConnectionId() === db2.getConnectionId()}`);
        console.log(`db1 === db2: ${db1 === db2}`);
        
        console.log("\n3️⃣ Pattern advantages:");
        console.log("=" .repeat(50));
        console.log("✅ Single instance guaranteed");
        console.log("✅ Controlled global access");
        console.log("✅ Lazy initialization");
        console.log("✅ Resource savings (memory, connections)");
        console.log("✅ Consistent state throughout the application");
        
        console.log("\n4️⃣ Current configuration:");
        console.log("=" .repeat(50));
        const allConfig = config1.getAllConfig();
        Object.entries(allConfig).forEach(([key, value]) => {
            console.log(`📋 ${key}: ${value}`);
        });
        
    }, 1500);
}

// Execute the example
main();