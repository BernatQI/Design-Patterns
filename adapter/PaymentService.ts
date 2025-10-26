// ./adapter/PaymentService.ts
import { IPaymentProcessor } from './IPaymentProcessor';

export class PaymentService {
    private processor: IPaymentProcessor;

    constructor(processor: IPaymentProcessor) {
        this.processor = processor;
    }

    // Cambia el procesador de pagos dinámicamente
    setPaymentProcessor(processor: IPaymentProcessor): void {
        this.processor = processor;
        console.log("🔄 Procesador de pagos cambiado");
    }

    // Método unificado que funciona con cualquier adapter
    executePayment(amount: number, currency: string, cardNumber: string): void {
        console.log(`\n💳 Iniciando pago de ${amount} ${currency}`);
        
        // Validar tarjeta
        if (!this.processor.validateCard(cardNumber)) {
            console.log("❌ Tarjeta inválida");
            return;
        }

        // Procesar pago
        const result = this.processor.processPayment(amount, currency);
        
        if (result.success) {
            console.log(`✅ ${result.message}`);
            console.log(`🧾 ID de transacción: ${result.transactionId}`);
        } else {
            console.log(`❌ Error: ${result.message}`);
        }
    }

    executeRefund(transactionId: string, amount: number): void {
        console.log(`\n🔄 Iniciando reembolso de ${amount} para ${transactionId}`);
        
        const result = this.processor.refund(transactionId, amount);
        
        if (result.success) {
            console.log(`✅ ${result.message}`);
            console.log(`🧾 ID de reembolso: ${result.refundId}`);
        } else {
            console.log(`❌ Error: ${result.message}`);
        }
    }
}