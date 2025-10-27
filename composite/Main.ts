import { Component } from './Component';
import { Leaf } from './Leaf';
import { Composite } from './Composite';
import { File } from './File';
import { Directory } from './Directory';

function clientCode(component: Component): void {
    console.log(`Result: ${component.operation()}`);
}

function createFileSystemExample(): Directory {
    const root = new Directory("root");
    
    const readme = new File("README.md", 1024);
    const license = new File("LICENSE", 2048);
    
    const srcDir = new Directory("src");
    const mainFile = new File("Main.ts", 5120);
    const utilsFile = new File("Utils.ts", 3072);
    
    const testsDir = new Directory("tests");
    const testFile1 = new File("Main.test.ts", 2560);
    const testFile2 = new File("Utils.test.ts", 1536);
    
    const docsDir = new Directory("docs");
    const apiDir = new Directory("api");
    const apiDoc = new File("api.md", 4096);
    
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

function createOrganizationExample(): Composite {
    const company = new Composite("TechCorp");
    
    const engineering = new Composite("Engineering");
    const marketing = new Composite("Marketing");
    const sales = new Composite("Sales");
    
    const frontend = new Composite("Frontend Team");
    const backend = new Composite("Backend Team");
    const devops = new Composite("DevOps Team");
    
    const johnDoe = new Leaf("John Doe - Senior Developer");
    const janeSmith = new Leaf("Jane Smith - Frontend Developer");
    const bobJohnson = new Leaf("Bob Johnson - Backend Developer");
    const aliceWilson = new Leaf("Alice Wilson - DevOps Engineer");
    const mikeBrown = new Leaf("Mike Brown - Marketing Manager");
    const sarahDavis = new Leaf("Sarah Davis - Sales Representative");
    
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

console.log("=== Composite Pattern Demo ===\n");

console.log("1. Basic Composite Pattern Example:");
console.log("-----------------------------------");

const leaf1 = new Leaf("A");
const leaf2 = new Leaf("B");
const leaf3 = new Leaf("C");

clientCode(leaf1);

console.log("\nComposite containing leaves:");
const composite1 = new Composite("Group1");
composite1.add(leaf1);
composite1.add(leaf2);
clientCode(composite1);

console.log("\nNested composites:");
const composite2 = new Composite("Group2");
composite2.add(leaf3);
composite2.add(composite1);
clientCode(composite2);

// Example 2: File system
console.log("\n\n2. File System Example:");
console.log("------------------------");

const fileSystem = createFileSystemExample();
clientCode(fileSystem);

console.log(`\nTotal size: ${fileSystem.getTotalSize()} bytes`);

const srcDirectory = fileSystem.findByName("src") as Directory;
if (srcDirectory) {
    console.log("\nFiles in src directory:");
    srcDirectory.listFiles().forEach(file => {
        console.log(`  ${file.operation()}`);
    });
}

// Example 3: Organization
console.log("\n\n3. Organizational Structure Example:");
console.log("------------------------------------");

const organization = createOrganizationExample();
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