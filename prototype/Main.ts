// ./prototype/Main.ts
import { Document } from './Document';
import { DocumentRegistry } from './DocumentRegistry';

function main(): void {
    console.log("=== 🧬 PROTOTYPE Pattern - Document System ===\n");

    // Create prototype registry
    const registry = new DocumentRegistry();

    console.log("1️⃣ Creating prototype documents (expensive operation):");
    console.log("=" .repeat(50));
    
    // Create base prototypes (expensive operations)
    const reportPrototype = new Document(
        "Report Template", 
        "Base structure for corporate reports"
    );
    reportPrototype.addMetadata("type", "report");
    reportPrototype.addMetadata("department", "general");

    const contractPrototype = new Document(
        "Contract Template", 
        "Standard terms and conditions"
    );
    contractPrototype.addMetadata("type", "contract");
    contractPrototype.addMetadata("legal", "reviewed");

    // Register prototypes
    registry.registerPrototype("report", reportPrototype);
    registry.registerPrototype("contract", contractPrototype);

    console.log("\n2️⃣ Cloning documents (fast operation):");
    console.log("=" .repeat(50));

    // Create documents by cloning prototypes (fast)
    const monthlyReport = registry.createDocument("report");
    if (monthlyReport) {
        monthlyReport.setTitle("Monthly Report - October");
        monthlyReport.setContent("Summary of monthly activities");
        monthlyReport.addMetadata("period", "october-2025");
        
        console.log(monthlyReport.getInfo());
    }

    console.log("\n" + "-".repeat(60) + "\n");

    const employeeContract = registry.createDocument("contract");
    if (employeeContract) {
        employeeContract.setTitle("Employment Contract - John Doe");
        employeeContract.setContent("Employee-specific terms");
        employeeContract.addMetadata("employee", "John Doe");
        
        console.log(employeeContract.getInfo());
    }

    console.log("\n3️⃣ Pattern advantages:");
    console.log("=" .repeat(50));
    console.log("✅ We avoid expensive initialization");
    console.log("✅ We reuse complex configurations");
    console.log("✅ Fast creation of similar objects");
    console.log("✅ We decouple client code from concrete classes");

    console.log("\n4️⃣ Available prototypes:");
    console.log("=" .repeat(50));
    registry.listPrototypes().forEach(key => {
        console.log(`📋 ${key}`);
    });
}

// Execute the example
main();