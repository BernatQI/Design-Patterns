// ./bridge/SlackSender.ts
import { INotificationSender } from './INotificationSender';

export class SlackSender implements INotificationSender {
    private webhook: string;
    
    constructor(webhook: string = "https://hooks.slack.com/webhook") {
        this.webhook = webhook;
        console.log(`💬 SlackSender initialized with webhook`);
    }

    send(message: string, recipient: string): void {
        console.log(`💬 Sending Slack message to channel ${recipient}`);
        console.log(`🔗 Webhook: ${this.webhook}`);
        console.log(`📝 Message: ${message}`);
        console.log("✅ Slack message sent successfully");
    }

    isAvailable(): boolean {
        // Simulate webhook verification
        return true;
    }
}