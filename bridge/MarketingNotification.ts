// ./bridge/MarketingNotification.ts
import { Notification } from './Notification';

export class MarketingNotification extends Notification {
    private campaign: string;
    private offer: string;

    constructor(sender: any, campaign: string, offer: string) {
        super(sender);
        this.campaign = campaign;
        this.offer = offer;
    }

    send(recipient: string): void {
        console.log(`\n🎯 Enviando notificación de marketing:`);
        const marketingMessage = `🎯 ${this.campaign}\n💰 Oferta especial: ${this.offer}\n🔗 Términos y condiciones aplican`;
        
        if (this.sender.isAvailable()) {
            this.sender.send(marketingMessage, recipient);
        } else {
            console.log("❌ El servicio de notificación no está disponible");
        }
    }
}