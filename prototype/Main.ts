// ./prototype/Main.ts
import { Document } from './Document';
import { DocumentRegistry } from './DocumentRegistry';

function main(): void {
    console.log("=== 🧬 Patrón PROTOTYPE - Sistema de Documentos ===\n");

    // Crear registro de prototipos
    const registry = new DocumentRegistry();

    console.log("1️⃣ Creando documentos prototipo (operación costosa):");
    console.log("=" .repeat(50));
    
    // Crear prototipos base (operaciones costosas)
    const reportPrototype = new Document(
        "Plantilla de Reporte", 
        "Estructura base para reportes corporativos"
    );
    reportPrototype.addMetadata("type", "report");
    reportPrototype.addMetadata("department", "general");

    const contractPrototype = new Document(
        "Plantilla de Contrato", 
        "Términos y condiciones estándar"
    );
    contractPrototype.addMetadata("type", "contract");
    contractPrototype.addMetadata("legal", "reviewed");

    // Registrar prototipos
    registry.registerPrototype("report", reportPrototype);
    registry.registerPrototype("contract", contractPrototype);

    console.log("\n2️⃣ Clonando documentos (operación rápida):");
    console.log("=" .repeat(50));

    // Crear documentos clonando prototipos (rápido)
    const monthlyReport = registry.createDocument("report");
    if (monthlyReport) {
        monthlyReport.setTitle("Reporte Mensual - Octubre");
        monthlyReport.setContent("Resumen de actividades del mes");
        monthlyReport.addMetadata("period", "octubre-2025");
        
        console.log(monthlyReport.getInfo());
    }

    console.log("\n" + "-".repeat(60) + "\n");

    const employeeContract = registry.createDocument("contract");
    if (employeeContract) {
        employeeContract.setTitle("Contrato de Trabajo - Juan Pérez");
        employeeContract.setContent("Términos específicos del empleado");
        employeeContract.addMetadata("employee", "Juan Pérez");
        
        console.log(employeeContract.getInfo());
    }

    console.log("\n3️⃣ Ventajas del patrón:");
    console.log("=" .repeat(50));
    console.log("✅ Evitamos la inicialización costosa");
    console.log("✅ Reutilizamos configuraciones complejas");
    console.log("✅ Creación rápida de objetos similares");
    console.log("✅ Desacoplamos el código cliente de las clases concretas");

    console.log("\n4️⃣ Prototipos disponibles:");
    console.log("=" .repeat(50));
    registry.listPrototypes().forEach(key => {
        console.log(`📋 ${key}`);
    });
}

// Ejecutar el ejemplo
main();