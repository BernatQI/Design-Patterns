// ./bridge/SMSSender.ts
import { INotificationSender } from './INotificationSender';

export class SMSSender implements INotificationSender {
    private provider: string;
    
    constructor(provider: string = "Twilio") {
        this.provider = provider;
        console.log(`📱 SMSSender inicializado con ${provider}`);
    }

    send(message: string, recipient: string): void {
        console.log(`📱 Enviando SMS a ${recipient}`);
        console.log(`📡 Proveedor: ${this.provider}`);
        console.log(`💬 Mensaje: ${message}`);
        console.log("✅ SMS enviado exitosamente");
    }

    isAvailable(): boolean {
        // Simulamos verificación de créditos SMS
        return true;
    }
}