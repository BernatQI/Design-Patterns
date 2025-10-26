// ./adapter/StripeAdapter.ts
import { IPaymentProcessor, PaymentResult, RefundResult } from './IPaymentProcessor';
import { StripeAPI } from './StripeAPI';

export class StripeAdapter implements IPaymentProcessor {
    private stripeAPI: StripeAPI;

    constructor() {
        this.stripeAPI = new StripeAPI();
        console.log("🔌 Stripe Adapter inicializado");
    }

    processPayment(amount: number, currency: string): PaymentResult {
        // Stripe maneja centavos, convertimos
        const amountInCents = Math.round(amount * 100);
        
        const stripeResponse = this.stripeAPI.charge(amountInCents, currency);
        
        return {
            success: stripeResponse.status === "succeeded",
            transactionId: stripeResponse.id,
            message: stripeResponse.description
        };
    }

    validateCard(cardNumber: string): boolean {
        const validation = this.stripeAPI.validateCardDetails(cardNumber);
        return validation.valid;
    }

    refund(transactionId: string, amount: number): RefundResult {
        const amountInCents = Math.round(amount * 100);
        const refundResponse = this.stripeAPI.createRefund(transactionId, amountInCents);
        
        return {
            success: refundResponse.status === "succeeded",
            refundId: refundResponse.id,
            message: `Refund ${refundResponse.reason}`
        };
    }
}