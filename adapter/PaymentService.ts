// ./adapter/PaymentService.ts
import { IPaymentProcessor } from './IPaymentProcessor';

export class PaymentService {
    private processor: IPaymentProcessor;

    constructor(processor: IPaymentProcessor) {
        this.processor = processor;
    }

    // Changes payment processor dynamically
    setPaymentProcessor(processor: IPaymentProcessor): void {
        this.processor = processor;
        console.log("🔄 Payment processor changed");
    }

    // Unified method that works with any adapter
    executePayment(amount: number, currency: string, cardNumber: string): void {
        console.log(`\n💳 Starting payment of ${amount} ${currency}`);
        
        // Validate card
        if (!this.processor.validateCard(cardNumber)) {
            console.log("❌ Invalid card");
            return;
        }

        // Process payment
        const result = this.processor.processPayment(amount, currency);
        
        if (result.success) {
            console.log(`✅ ${result.message}`);
            console.log(`🧾 Transaction ID: ${result.transactionId}`);
        } else {
            console.log(`❌ Error: ${result.message}`);
        }
    }

    executeRefund(transactionId: string, amount: number): void {
        console.log(`\n🔄 Starting refund of ${amount} for ${transactionId}`);
        
        const result = this.processor.refund(transactionId, amount);
        
        if (result.success) {
            console.log(`✅ ${result.message}`);
            console.log(`🧾 Refund ID: ${result.refundId}`);
        } else {
            console.log(`❌ Error: ${result.message}`);
        }
    }
}