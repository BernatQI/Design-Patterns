// ./singleton/Main.ts
import { ConfigurationManager } from './ConfigurationManager';
import { DatabaseConnection } from './DatabaseConnection';

function main(): void {
    console.log("=== 🏛️ Patrón SINGLETON - Sistema de Configuración ===\n");

    console.log("1️⃣ Probando ConfigurationManager:");
    console.log("=" .repeat(50));
    
    // Primera solicitud - crea la instancia
    const config1 = ConfigurationManager.getInstance();
    console.log(`🔑 API Key: ${config1.get('api_key')}`);
    console.log(`🌍 Environment: ${config1.get('environment')}`);
    
    console.log("\n" + "-".repeat(30) + "\n");
    
    // Segunda solicitud - reutiliza la misma instancia
    const config2 = ConfigurationManager.getInstance();
    config2.set("new_feature", "enabled");
    
    console.log("\n" + "-".repeat(30) + "\n");
    
    // Tercera solicitud - demuestra que es la misma instancia
    const config3 = ConfigurationManager.getInstance();
    console.log(`🆕 Nueva característica: ${config3.get('new_feature')}`);
    
    // Verificamos que todas son la misma instancia
    console.log(`\n🔍 Verificación de identidad:`);
    console.log(`config1 === config2: ${config1 === config2}`);
    console.log(`config2 === config3: ${config2 === config3}`);
    console.log(`config1 === config3: ${config1 === config3}`);

    console.log("\n\n2️⃣ Probando DatabaseConnection:");
    console.log("=" .repeat(50));
    
    // Primera conexión
    const db1 = DatabaseConnection.getInstance();
    setTimeout(() => {
        console.log(db1.query("SELECT * FROM users"));
        
        // Segunda "conexión" - reutiliza la misma
        const db2 = DatabaseConnection.getInstance();
        console.log(db2.query("SELECT * FROM products"));
        
        // Verificamos que es la misma conexión
        console.log(`\n🔍 Misma conexión: ${db1.getConnectionId() === db2.getConnectionId()}`);
        console.log(`db1 === db2: ${db1 === db2}`);
        
        console.log("\n3️⃣ Ventajas del patrón:");
        console.log("=" .repeat(50));
        console.log("✅ Una sola instancia garantizada");
        console.log("✅ Acceso global controlado");
        console.log("✅ Inicialización perezosa (lazy loading)");
        console.log("✅ Ahorro de recursos (memoria, conexiones)");
        console.log("✅ Estado consistente en toda la aplicación");
        
        console.log("\n4️⃣ Configuración actual:");
        console.log("=" .repeat(50));
        const allConfig = config1.getAllConfig();
        Object.entries(allConfig).forEach(([key, value]) => {
            console.log(`📋 ${key}: ${value}`);
        });
        
    }, 1500);
}

// Ejecutar el ejemplo
main();