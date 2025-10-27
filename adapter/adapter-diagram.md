# Patrón Adapter - Diagrama UML

```mermaid
classDiagram
    %% Target Interface
    class IPaymentProcessor {
        <<interface>>
        +processPayment(amount: number, currency: string): PaymentResult
        +validateCard(cardNumber: string): boolean
        +refund(transactionId: string, amount: number): RefundResult
    }

    %% Adapters
    class PayPalAdapter {
        -paypalAPI: PayPalAPI
        +constructor()
        +processPayment(amount: number, currency: string): PaymentResult
        +validateCard(cardNumber: string): boolean
        +refund(transactionId: string, amount: number): RefundResult
    }

    class StripeAdapter {
        -stripeAPI: StripeAPI
        +constructor()
        +processPayment(amount: number, currency: string): PaymentResult
        +validateCard(cardNumber: string): boolean
        +refund(transactionId: string, amount: number): RefundResult
    }

    %% Adaptees (External APIs)
    class PayPalAPI {
        +makePayment(sum: number, currency: string): PayPalResponse
        +verifyCardNumber(card: string): boolean
        +reverseTransaction(txnId: string, amount: number): PayPalRefundResponse
    }

    class StripeAPI {
        +charge(amount_cents: number, currency_code: string): StripeChargeResult
        +validateCardDetails(cardNumber: string): ValidationResponse
        +createRefund(chargeId: string, refundAmount: number): StripeRefundResult
    }

    %% Client
    class PaymentService {
        -processor: IPaymentProcessor
        +constructor(processor: IPaymentProcessor)
        +setPaymentProcessor(processor: IPaymentProcessor): void
        +executePayment(amount: number, currency: string, cardNumber: string): void
        +executeRefund(transactionId: string, amount: number): void
    }

    %% Relationships
    PayPalAdapter ..|> IPaymentProcessor : implements
    StripeAdapter ..|> IPaymentProcessor : implements
    PayPalAdapter --> PayPalAPI : adapts
    StripeAdapter --> StripeAPI : adapts
    PaymentService --> IPaymentProcessor : uses
    PaymentService ..> PayPalAdapter : can use
    PaymentService ..> StripeAdapter : can use

    note for PayPalAdapter "Adapter: Traduce interface\nde PayPal a IPaymentProcessor"
    note for StripeAdapter "Adapter: Traduce interface\nde Stripe a IPaymentProcessor"
    note for PaymentService "Client: Usa interface uniforme\nsin conocer implementaciones"
```

## Estructura del Patrón Adapter

**Componentes principales:**
- `IPaymentProcessor` (Target) - Interface que espera el cliente
- `PayPalAdapter`, `StripeAdapter` (Adapters) - Traducen entre Target y Adaptee
- `PayPalAPI`, `StripeAPI` (Adaptees) - APIs externas incompatibles
- `PaymentService` (Client) - Usa la interface uniforme

**Problema resuelto:**
Integrar APIs de terceros con interfaces diferentes sin modificar el código cliente existente.

**Ventajas:**
- 🔌 Reutilización de código existente
- 🔄 Intercambio fácil de proveedores
- 🎯 Interface uniforme para el cliente
- 🧩 Integración sin modificar APIs existentes