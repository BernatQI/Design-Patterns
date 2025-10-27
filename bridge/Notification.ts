// ./bridge/Notification.ts
import { INotificationSender } from './INotificationSender';

export abstract class Notification {
    protected sender: INotificationSender;

    constructor(sender: INotificationSender) {
        this.sender = sender;
    }

    // Allows changing implementation at runtime
    setSender(sender: INotificationSender): void {
        this.sender = sender;
    }

    // Abstract method that subclasses must implement
    abstract send(recipient: string): void;
}