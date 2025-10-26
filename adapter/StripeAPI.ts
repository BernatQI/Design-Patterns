// ./adapter/StripeAPI.ts
// Simulamos una API externa de Stripe con interfaz diferente
export class StripeAPI {
    charge(amount_cents: number, currency_code: string): StripeChargeResult {
        console.log(`⚡ Stripe: Cobrando ${amount_cents/100} ${currency_code}`);
        
        return {
            id: `ch_${Math.random().toString(36).substr(2, 9)}`,
            amount: amount_cents,
            currency: currency_code,
            status: "succeeded",
            description: "Charge completed"
        };
    }

    validateCardDetails(cardNumber: string): ValidationResponse {
        console.log(`🔍 Stripe: Validando tarjeta ${cardNumber.slice(-4).padStart(cardNumber.length, '*')}`);
        
        return {
            valid: cardNumber.length >= 13 && cardNumber.length <= 19,
            card_type: "visa"
        };
    }

    createRefund(chargeId: string, refundAmount: number): StripeRefundResult {
        console.log(`🔄 Stripe: Creando reembolso para ${chargeId} por ${refundAmount/100}`);
        
        return {
            id: `re_${Math.random().toString(36).substr(2, 9)}`,
            charge: chargeId,
            amount: refundAmount,
            status: "succeeded",
            reason: "requested_by_customer"
        };
    }
}

export interface StripeChargeResult {
    id: string;
    amount: number;
    currency: string;
    status: string;
    description: string;
}

export interface ValidationResponse {
    valid: boolean;
    card_type: string;
}

export interface StripeRefundResult {
    id: string;
    charge: string;
    amount: number;
    status: string;
    reason: string;
}