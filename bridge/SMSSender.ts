// ./bridge/SMSSender.ts
import { INotificationSender } from './INotificationSender';

export class SMSSender implements INotificationSender {
    private provider: string;
    
    constructor(provider: string = "Twilio") {
        this.provider = provider;
        console.log(`📱 SMSSender initialized with ${provider}`);
    }

    send(message: string, recipient: string): void {
        console.log(`📱 Sending SMS to ${recipient}`);
        console.log(`📡 Provider: ${this.provider}`);
        console.log(`💬 Message: ${message}`);
        console.log("✅ SMS sent successfully");
    }

    isAvailable(): boolean {
        // Simulate SMS credits verification
        return true;
    }
}