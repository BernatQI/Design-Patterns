// ./bridge/UrgentNotification.ts
import { Notification } from './Notification';

export class UrgentNotification extends Notification {
    private title: string;
    private message: string;

    constructor(sender: any, title: string, message: string) {
        super(sender);
        this.title = title;
        this.message = message;
    }

    send(recipient: string): void {
        console.log(`\n🚨 Enviando notificación URGENTE:`);
        const urgentMessage = `🚨 URGENTE: ${this.title}\n${this.message}`;
        
        if (this.sender.isAvailable()) {
            this.sender.send(urgentMessage, recipient);
        } else {
            console.log("❌ El servicio de notificación no está disponible");
        }
    }
}