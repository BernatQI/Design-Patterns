// ./bridge/SimpleNotification.ts
import { Notification } from './Notification';

export class SimpleNotification extends Notification {
    private message: string;

    constructor(sender: any, message: string) {
        super(sender);
        this.message = message;
    }

    send(recipient: string): void {
        console.log(`\n📢 Enviando notificación simple:`);
        if (this.sender.isAvailable()) {
            this.sender.send(this.message, recipient);
        } else {
            console.log("❌ El servicio de notificación no está disponible");
        }
    }
}