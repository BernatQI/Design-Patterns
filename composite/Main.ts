import { Component } from './Component';
import { Leaf } from './Leaf';
import { Composite } from './Composite';
import { File } from './File';
import { Directory } from './Directory';

/**
 * Client code demonstrating the Composite pattern.
 * The client code works with all components via the base interface.
 */
function clientCode(component: Component): void {
    console.log(`Result: ${component.operation()}`);
}

/**
 * Helper function to create a sample file system structure
 */
function createFileSystemExample(): Directory {
    // Create root directory
    const root = new Directory("root");
    
    // Create files
    const readme = new File("README.md", 1024);
    const license = new File("LICENSE", 2048);
    
    // Create src directory with files
    const srcDir = new Directory("src");
    const mainFile = new File("Main.ts", 5120);
    const utilsFile = new File("Utils.ts", 3072);
    
    // Create tests directory with files
    const testsDir = new Directory("tests");
    const testFile1 = new File("Main.test.ts", 2560);
    const testFile2 = new File("Utils.test.ts", 1536);
    
    // Create docs directory with subdirectories
    const docsDir = new Directory("docs");
    const apiDir = new Directory("api");
    const apiDoc = new File("api.md", 4096);
    
    // Build the tree structure
    root.add(readme);
    root.add(license);
    root.add(srcDir);
    root.add(testsDir);
    root.add(docsDir);
    
    srcDir.add(mainFile);
    srcDir.add(utilsFile);
    
    testsDir.add(testFile1);
    testsDir.add(testFile2);
    
    docsDir.add(apiDir);
    apiDir.add(apiDoc);
    
    return root;
}

/**
 * Helper function to create a simple organizational structure
 */
function createOrganizationExample(): Composite {
    // Create company structure
    const company = new Composite("TechCorp");
    
    // Create departments
    const engineering = new Composite("Engineering");
    const marketing = new Composite("Marketing");
    const sales = new Composite("Sales");
    
    // Create teams within engineering
    const frontend = new Composite("Frontend Team");
    const backend = new Composite("Backend Team");
    const devops = new Composite("DevOps Team");
    
    // Create individual employees (leaves)
    const johnDoe = new Leaf("John Doe - Senior Developer");
    const janeSmith = new Leaf("Jane Smith - Frontend Developer");
    const bobJohnson = new Leaf("Bob Johnson - Backend Developer");
    const aliceWilson = new Leaf("Alice Wilson - DevOps Engineer");
    const mikeBrown = new Leaf("Mike Brown - Marketing Manager");
    const sarahDavis = new Leaf("Sarah Davis - Sales Representative");
    
    // Build organizational structure
    company.add(engineering);
    company.add(marketing);
    company.add(sales);
    
    engineering.add(frontend);
    engineering.add(backend);
    engineering.add(devops);
    
    frontend.add(janeSmith);
    backend.add(johnDoe);
    backend.add(bobJohnson);
    devops.add(aliceWilson);
    
    marketing.add(mikeBrown);
    sales.add(sarahDavis);
    
    return company;
}

// Main execution
console.log("=== Composite Pattern Demo ===\n");

// Example 1: Simple leaf and composite demonstration
console.log("1. Basic Composite Pattern Example:");
console.log("-----------------------------------");

const leaf1 = new Leaf("A");
const leaf2 = new Leaf("B");
const leaf3 = new Leaf("C");

console.log("Working with individual leaf:");
clientCode(leaf1);

console.log("\nWorking with composite containing leaves:");
const composite1 = new Composite("Group1");
composite1.add(leaf1);
composite1.add(leaf2);
clientCode(composite1);

console.log("\nWorking with nested composites:");
const composite2 = new Composite("Group2");
composite2.add(leaf3);
composite2.add(composite1);
clientCode(composite2);

// Example 2: File system structure
console.log("\n\n2. File System Example:");
console.log("------------------------");

const fileSystem = createFileSystemExample();
console.log("Complete file system structure:");
clientCode(fileSystem);

console.log(`\nTotal size of file system: ${fileSystem.getTotalSize()} bytes`);
console.log(`Number of items in root: ${fileSystem.getChildrenCount()}`);

// Navigate through the structure
const srcDirectory = fileSystem.findByName("src") as Directory;
if (srcDirectory) {
    console.log("\nFiles in src directory:");
    srcDirectory.listFiles().forEach(file => {
        console.log(`  ${file.operation()}`);
    });
}

// Example 3: Organizational structure
console.log("\n\n3. Organizational Structure Example:");
console.log("------------------------------------");

const organization = createOrganizationExample();
console.log("Company organizational structure:");
clientCode(organization);

// Example 4: Dynamic manipulation
console.log("\n\n4. Dynamic Structure Manipulation:");
console.log("----------------------------------");

const dynamicComposite = new Composite("Dynamic Group");
const tempLeaf1 = new Leaf("Temporary Item 1");
const tempLeaf2 = new Leaf("Temporary Item 2");

console.log("Adding items dynamically:");
dynamicComposite.add(tempLeaf1);
dynamicComposite.add(tempLeaf2);
clientCode(dynamicComposite);

console.log("\nRemoving an item:");
dynamicComposite.remove(tempLeaf1);
clientCode(dynamicComposite);

console.log("\nChecking if composite is empty:");
dynamicComposite.clear();
console.log(`Is empty: ${dynamicComposite.isEmpty()}`);

// Example 5: Error handling
console.log("\n\n5. Error Handling Example:");
console.log("--------------------------");

const errorLeaf = new Leaf("Error Test");
try {
    console.log("Attempting to add to a leaf (should throw error):");
    errorLeaf.add(new Leaf("Cannot add this"));
} catch (error) {
    console.log(`Caught expected error: ${(error as Error).message}`);
}

try {
    console.log("Attempting to get child from a leaf (should throw error):");
    errorLeaf.getChild(0);
} catch (error) {
    console.log(`Caught expected error: ${(error as Error).message}`);
}

console.log("\n=== Pattern demonstration completed ===");