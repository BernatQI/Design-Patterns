// ./adapter/PayPalAPI.ts
// Simulamos una API externa de PayPal con su propia interfaz
export class PayPalAPI {
    makePayment(sum: number, currency: string): PayPalResponse {
        console.log(`💰 PayPal: Procesando pago de ${sum} ${currency}`);
        
        // Simulamos respuesta de PayPal
        return {
            status: "SUCCESS",
            paypal_transaction_id: `PP_${Date.now()}`,
            response_message: "Payment completed successfully"
        };
    }

    verifyCardNumber(card: string): boolean {
        console.log(`🔍 PayPal: Validando tarjeta ${card.slice(-4).padStart(card.length, '*')}`);
        return card.length === 16;
    }

    reverseTransaction(txnId: string, amount: number): PayPalRefundResponse {
        console.log(`🔄 PayPal: Reversando transacción ${txnId} por ${amount}`);
        
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