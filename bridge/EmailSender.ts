// ./bridge/EmailSender.ts
import { INotificationSender } from './INotificationSender';

export class EmailSender implements INotificationSender {
    private smtpServer: string;
    
    constructor(smtpServer: string = "smtp.gmail.com") {
        this.smtpServer = smtpServer;
        console.log(`📧 EmailSender inicializado con ${smtpServer}`);
    }

    send(message: string, recipient: string): void {
        console.log(`📧 Enviando email a ${recipient}`);
        console.log(`📨 Servidor SMTP: ${this.smtpServer}`);
        console.log(`✉️ Contenido: ${message}`);
        console.log("✅ Email enviado exitosamente");
    }

    isAvailable(): boolean {
        // Simulamos verificación de conectividad SMTP
        return true;
    }
}