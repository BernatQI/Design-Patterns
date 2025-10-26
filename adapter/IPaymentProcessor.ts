// ./adapter/IPaymentProcessor.ts
export interface IPaymentProcessor {
    processPayment(amount: number, currency: string): PaymentResult;
    validateCard(cardNumber: string): boolean;
    refund(transactionId: string, amount: number): RefundResult;
}

export interface PaymentResult {
    success: boolean;
    transactionId: string;
    message: string;
}

export interface RefundResult {
    success: boolean;
    refundId: string;
    message: string;
}