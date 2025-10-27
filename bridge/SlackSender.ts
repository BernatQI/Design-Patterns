// ./bridge/SlackSender.ts
import { INotificationSender } from './INotificationSender';

export class SlackSender implements INotificationSender {
    private webhook: string;
    
    constructor(webhook: string = "https://hooks.slack.com/webhook") {
        this.webhook = webhook;
        console.log(`💬 SlackSender inicializado con webhook`);
    }

    send(message: string, recipient: string): void {
        console.log(`💬 Enviando mensaje Slack al canal ${recipient}`);
        console.log(`🔗 Webhook: ${this.webhook}`);
        console.log(`📝 Mensaje: ${message}`);
        console.log("✅ Mensaje Slack enviado exitosamente");
    }

    isAvailable(): boolean {
        // Simulamos verificación de webhook
        return true;
    }
}