// ./bridge/EmailSender.ts
import { INotificationSender } from './INotificationSender';

export class EmailSender implements INotificationSender {
    private smtpServer: string;
    
    constructor(smtpServer: string = "smtp.gmail.com") {
        this.smtpServer = smtpServer;
        console.log(`📧 EmailSender initialized with ${smtpServer}`);
    }

    send(message: string, recipient: string): void {
        console.log(`📧 Sending email to ${recipient}`);
        console.log(`📨 SMTP Server: ${this.smtpServer}`);
        console.log(`✉️ Content: ${message}`);
        console.log("✅ Email sent successfully");
    }

    isAvailable(): boolean {
        // Simulate SMTP connectivity check
        return true;
    }
}