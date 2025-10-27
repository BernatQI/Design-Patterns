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
        console.log(`\n🎯 Sending marketing notification:`);
        const marketingMessage = `🎯 ${this.campaign}\n💰 Special offer: ${this.offer}\n🔗 Terms and conditions apply`;
        
        if (this.sender.isAvailable()) {
            this.sender.send(marketingMessage, recipient);
        } else {
            console.log("❌ Notification service is not available");
        }
    }
}