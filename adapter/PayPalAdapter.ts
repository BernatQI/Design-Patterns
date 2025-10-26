// ./adapter/PayPalAdapter.ts
import { IPaymentProcessor, PaymentResult, RefundResult } from './IPaymentProcessor';
import { PayPalAPI } from './PayPalAPI';

export class PayPalAdapter implements IPaymentProcessor {
    private paypalAPI: PayPalAPI;

    constructor() {
        this.paypalAPI = new PayPalAPI();
        console.log("🔌 PayPal Adapter inicializado");
    }

    processPayment(amount: number, currency: string): PaymentResult {
        // Adaptamos nuestra interfaz a la de PayPal
        const paypalResponse = this.paypalAPI.makePayment(amount, currency);
        
        // Convertimos la respuesta de PayPal a nuestro formato
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