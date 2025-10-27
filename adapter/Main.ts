// ./adapter/Main.ts
import { PaymentService } from './PaymentService';
import { PayPalAdapter } from './PayPalAdapter';
import { StripeAdapter } from './StripeAdapter';

function main(): void {
    console.log("=== 🔌 Patrón ADAPTER - Sistema de Pagos ===\n");

    // Crear adapters para diferentes APIs de pago
    const paypalAdapter = new PayPalAdapter();
    const stripeAdapter = new StripeAdapter();

    // Crear servicio de pagos
    const paymentService = new PaymentService(paypalAdapter);

    console.log("\n1️⃣ Usando PayPal (a través del adapter):");
    console.log("=".repeat(50));
    
    paymentService.executePayment(99.99, "USD", "4532123456789012");
    paymentService.executeRefund("PP_1234567890", 99.99);

    console.log("\n" + "-".repeat(60) + "\n");

    console.log("2️⃣ Cambiando a Stripe (mismo código cliente):");
    console.log("=".repeat(50));
    
    // Cambiar procesador sin modificar código cliente
    paymentService.setPaymentProcessor(stripeAdapter);
    
    paymentService.executePayment(149.50, "EUR", "5555444433221111");
    paymentService.executeRefund("ch_abc123def", 149.50);

    console.log("\n" + "-".repeat(60) + "\n");

    console.log("3️⃣ Probando validación de tarjetas:");
    console.log("=".repeat(50));
    
    // Probar con tarjeta inválida
    paymentService.executePayment(25.00, "USD", "123"); // Tarjeta inválida

    console.log("\n4️⃣ Ventajas del patrón Adapter:");
    console.log("=".repeat(50));
    console.log("✅ APIs incompatibles trabajan juntas");
    console.log("✅ Código cliente no cambia al cambiar proveedores");
    console.log("✅ Reutilización de código existente");
    console.log("✅ Separación de responsabilidades");
    console.log("✅ Fácil agregar nuevos proveedores");
}

// Ejecutar el ejemplo
main();