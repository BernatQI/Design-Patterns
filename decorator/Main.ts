import { Coffee } from './Coffee';
import { MilkDecorator } from './MilkDecorator';
import { SugarDecorator } from './SugarDecorator';
import { WhipDecorator } from './WhipDecorator';
import { Component } from './Component';

// Demonstrates how decorators can be combined dynamically
function clientCode(component: Component): void {
    console.log(`Order: ${component.operation()}`);
    console.log(`Cost: $${component.getCost().toFixed(2)}`);
}

function demonstrateDecorator(): void {
    console.log("Decorator Pattern Demo");
    console.log("====================");

    // Simple coffee
    console.log("\n1. Basic Coffee:");
    const simpleCoffee = new Coffee();
    clientCode(simpleCoffee);

    // Coffee with milk
    console.log("\n2. Coffee + Milk:");
    const coffeeWithMilk = new MilkDecorator(simpleCoffee);
    clientCode(coffeeWithMilk);

    // Coffee with milk and sugar
    console.log("\n3. Coffee + Milk + Sugar:");
    const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
    clientCode(coffeeWithMilkAndSugar);

    // Fully loaded coffee
    console.log("\n4. Deluxe Coffee (All Add-ons):");
    const deluxeCoffee = new WhipDecorator(
        new SugarDecorator(
            new MilkDecorator(
                new Coffee("Premium Coffee", 3.0)
            )
        )
    );
    clientCode(deluxeCoffee);

    // Different combinations
    console.log("\n5. Sweet Coffee (Double Sugar):");
    const sweetCoffee = new SugarDecorator(
        new SugarDecorator(
            new Coffee("Espresso", 2.5)
        )
    );
    clientCode(sweetCoffee);
}

function demonstrateFlexibility(): void {
    console.log("\n\nDynamic Decoration Demo");
    console.log("=======================");

    let beverage: Component = new Coffee("House Blend", 1.5);
    console.log(`\nStarting with: ${beverage.operation()} - $${beverage.getCost().toFixed(2)}`);

    const addOns = [
        { name: "Milk", decorator: MilkDecorator },
        { name: "Sugar", decorator: SugarDecorator },
        { name: "Whipped Cream", decorator: WhipDecorator }
    ];

    // Randomly add decorators
    const selectedAddOns = addOns.filter(() => Math.random() > 0.3);
    
    for (const addOn of selectedAddOns) {
        beverage = new addOn.decorator(beverage);
        console.log(`Added ${addOn.name}: ${beverage.operation()} - $${beverage.getCost().toFixed(2)}`);
    }

    console.log(`\nFinal order: ${beverage.operation()}`);
    console.log(`Total cost: $${beverage.getCost().toFixed(2)}`);
}

// Run demonstrations
demonstrateDecorator();
demonstrateFlexibility();