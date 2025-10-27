// ./adapter/PayPalAPI.ts
// Simulate external PayPal API with its own interface
export class PayPalAPI {
    makePayment(sum: number, currency: string): PayPalResponse {
        console.log(`💰 PayPal: Processing payment of ${sum} ${currency}`);
        
        // Simulate PayPal response
        return {
            status: "SUCCESS",
            paypal_transaction_id: `PP_${Date.now()}`,
            response_message: "Payment completed successfully"
        };
    }

    verifyCardNumber(card: string): boolean {
        console.log(`🔍 PayPal: Validating card ${card.slice(-4).padStart(card.length, '*')}`);
        return card.length === 16;
    }

    reverseTransaction(txnId: string, amount: number): PayPalRefundResponse {
        console.log(`🔄 PayPal: Reversing transaction ${txnId} for ${amount}`);
        
        return {
            status: "REFUNDED",
            paypal_refund_id: `RF_${Date.now()}`,
            response_message: "Refund processed successfully"
        };
    }
}

export interface PayPalResponse {
    status: string;
    paypal_transaction_id: string;
    response_message: string;
}

export interface PayPalRefundResponse {
    status: string;
    paypal_refund_id: string;
    response_message: string;
}