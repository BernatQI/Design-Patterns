// ./adapter/Main.ts
import { PaymentService } from './PaymentService';
import { PayPalAdapter } from './PayPalAdapter';
import { StripeAdapter } from './StripeAdapter';

function main(): void {
    console.log("=== 🔌 ADAPTER Pattern - Payment System ===\n");

    // Create adapters for different payment APIs
    const paypalAdapter = new PayPalAdapter();
    const stripeAdapter = new StripeAdapter();

    // Create payment service
    const paymentService = new PaymentService(paypalAdapter);

    console.log("\n1️⃣ Using PayPal (through adapter):");
    console.log("=".repeat(50));
    
    paymentService.executePayment(99.99, "USD", "4532123456789012");
    paymentService.executeRefund("PP_1234567890", 99.99);

    console.log("\n" + "-".repeat(60) + "\n");

    console.log("2️⃣ Switching to Stripe (same client code):");
    console.log("=".repeat(50));
    
    // Change processor without modifying client code
    paymentService.setPaymentProcessor(stripeAdapter);
    
    paymentService.executePayment(149.50, "EUR", "5555444433221111");
    paymentService.executeRefund("ch_abc123def", 149.50);

    console.log("\n" + "-".repeat(60) + "\n");

    console.log("3️⃣ Testing card validation:");
    console.log("=".repeat(50));
    
    // Test with invalid card
    paymentService.executePayment(25.00, "USD", "123"); // Invalid card

    console.log("\n4️⃣ Adapter pattern advantages:");
    console.log("=".repeat(50));
    console.log("✅ Incompatible APIs work together");
    console.log("✅ Client code doesn't change when switching providers");
    console.log("✅ Reuse of existing code");
    console.log("✅ Separation of responsibilities");
    console.log("✅ Easy to add new providers");
}

// Execute the example
main();