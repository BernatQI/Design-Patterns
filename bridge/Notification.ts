// ./bridge/Notification.ts
import { INotificationSender } from './INotificationSender';

export abstract class Notification {
    protected sender: INotificationSender;

    constructor(sender: INotificationSender) {
        this.sender = sender;
    }

    // Permite cambiar la implementación en tiempo de ejecución
    setSender(sender: INotificationSender): void {
        this.sender = sender;
    }

    // Método abstracto que las subclases deben implementar
    abstract send(recipient: string): void;
}