// ./adapter/PayPalAdapter.ts
import { IPaymentProcessor, PaymentResult, RefundResult } from './IPaymentProcessor';
import { PayPalAPI } from './PayPalAPI';

export class PayPalAdapter implements IPaymentProcessor {
    private paypalAPI: PayPalAPI;

    constructor() {
        this.paypalAPI = new PayPalAPI();
        console.log("🔌 PayPal Adapter initialized");
    }

    processPayment(amount: number, currency: string): PaymentResult {
        // Adapt our interface to PayPal's
        const paypalResponse = this.paypalAPI.makePayment(amount, currency);
        
        // Convert PayPal response to our format
        return {
            success: paypalResponse.status === "SUCCESS",
            transactionId: paypalResponse.paypal_transaction_id,
            message: paypalResponse.response_message
        };
    }

    validateCard(cardNumber: string): boolean {
        return this.paypalAPI.verifyCardNumber(cardNumber);
    }

    refund(transactionId: string, amount: number): RefundResult {
        const refundResponse = this.paypalAPI.reverseTransaction(transactionId, amount);
        
        return {
            success: refundResponse.status === "REFUNDED",
            refundId: refundResponse.paypal_refund_id,
            message: refundResponse.response_message
        };
    }
}